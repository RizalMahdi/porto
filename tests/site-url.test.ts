import assert from "node:assert/strict";
import { after, test } from "node:test";
import { getSiteUrl } from "../lib/site-url";

const original = {
  SITE_URL: process.env.SITE_URL,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL: process.env.VERCEL,
};

after(() => {
  for (const [key, value] of Object.entries(original)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

test("uses localhost by default outside Vercel", () => {
  delete process.env.SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  delete process.env.VERCEL;
  assert.equal(getSiteUrl().origin, "http://localhost:3000");
});

test("uses an explicit canonical production URL", () => {
  process.env.SITE_URL = "https://portfolio.example.com/path";
  process.env.VERCEL = "1";
  assert.equal(getSiteUrl().origin, "https://portfolio.example.com");
});

test("uses the Vercel production URL when no explicit URL is set", () => {
  delete process.env.SITE_URL;
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "portfolio.vercel.app";
  process.env.VERCEL = "1";
  assert.equal(getSiteUrl().origin, "https://portfolio.vercel.app");
});

test("fails clearly rather than publishing localhost metadata on Vercel", () => {
  delete process.env.SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  process.env.VERCEL = "1";
  assert.throws(getSiteUrl, /Set SITE_URL/);
});

test("rejects insecure public origins", () => {
  process.env.SITE_URL = "http://portfolio.example.com";
  assert.throws(getSiteUrl, /Invalid SITE_URL/);
});

test("rejects a localhost canonical URL in Vercel deployments", () => {
  process.env.SITE_URL = "http://localhost:3000";
  process.env.VERCEL = "1";
  assert.throws(getSiteUrl, /Invalid SITE_URL/);
});
