import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { POST } from "../app/api/contact/route";

const originalFetch = globalThis.fetch;
const originalError = console.error;
const originalEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
};
const valid = {
  name: " Pengunjung Uji ",
  email: " test@example.com ",
  message: "  Pesan pengujian valid.  ",
  website: "",
};

function request(body: string) {
  return POST(new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  }));
}

before(() => { console.error = () => {}; });
after(() => {
  globalThis.fetch = originalFetch;
  console.error = originalError;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

test("rejects malformed, invalid, and oversized requests", async () => {
  assert.equal((await request("not-json")).status, 400);
  assert.equal((await request(JSON.stringify({ name: "x", email: "bad", message: "x" }))).status, 400);
  assert.equal((await request(JSON.stringify({ ...valid, name: "A\nB" }))).status, 400);
  assert.equal((await request(JSON.stringify({ ...valid, message: "x".repeat(33000) }))).status, 413);
});

test("honeypot does not send mail and missing configuration is reported", async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_EMAIL;
  delete process.env.RESEND_FROM_EMAIL;
  assert.equal((await request(JSON.stringify({ ...valid, website: "https://spam.example" }))).status, 200);
  assert.equal((await request(JSON.stringify(valid))).status, 503);
});

test("sends validated data with fixed recipient and handles provider errors", async () => {
  process.env.RESEND_API_KEY = "re_test_only";
  process.env.CONTACT_EMAIL = "owner@example.com";
  process.env.RESEND_FROM_EMAIL = "portfolio@example.com";
  let captured: Record<string, unknown> | undefined;
  globalThis.fetch = async (input, init) => {
    assert.match(String(input), /\/emails$/);
    captured = JSON.parse(String(init?.body));
    return Response.json({ id: "mock-id" });
  };
  assert.equal((await request(JSON.stringify(valid))).status, 200);
  assert.equal(captured?.from, "portfolio@example.com");
  assert.equal(captured?.to, "owner@example.com");
  assert.equal(captured?.reply_to, "test@example.com");
  assert.match(String(captured?.text), /Nama: Pengunjung Uji/);
  assert.match(String(captured?.text), /Pesan pengujian valid\./);

  globalThis.fetch = async () => Response.json({ name: "validation_error", message: "rejected" }, { status: 403 });
  assert.equal((await request(JSON.stringify(valid))).status, 502);
  globalThis.fetch = async () => { throw new Error("network failure"); };
  assert.equal((await request(JSON.stringify(valid))).status, 502);
  process.env.RESEND_FROM_EMAIL = "invalid";
  assert.equal((await request(JSON.stringify(valid))).status, 503);
});
