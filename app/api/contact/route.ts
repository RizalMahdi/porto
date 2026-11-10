import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "@/lib/contact";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 32 * 1024;
const json = (message: string, status: number) => Response.json({ message }, { status });

export async function POST(request: Request) {
  const length = request.headers.get("content-length");
  if (length && Number(length) > MAX_BODY_BYTES) {
    return json("Pesan terlalu besar. Silakan periksa kembali isian Anda.", 413);
  }

  let body = "";
  try {
    if (!request.body) return json("Data formulir tidak dapat dibaca.", 400);
    const reader = request.body.getReader();
    const decoder = new TextDecoder();
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        return json("Pesan terlalu besar. Silakan periksa kembali isian Anda.", 413);
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
  } catch {
    return json("Data formulir tidak dapat dibaca.", 400);
  }

  let input: unknown;
  try {
    input = JSON.parse(body);
  } catch {
    return json("Format formulir tidak valid.", 400);
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) return json("Periksa kembali nama, email, dan pesan Anda.", 400);
  if (parsed.data.website?.trim()) {
    return json("Pesan berhasil dikirim. Terima kasih sudah menghubungi saya.", 200);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient = process.env.CONTACT_EMAIL?.trim();
  const sender = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !recipient || !sender || !z.email().safeParse(recipient).success || !z.email().safeParse(sender).success) {
    console.error("Contact form configuration is missing or invalid.");
    return json("Layanan kontak belum dikonfigurasi. Silakan coba lagi nanti.", 503);
  }

  const { name, email, message } = parsed.data;
  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: "Pesan baru dari formulir portofolio",
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });
    if (error || !data?.id) {
      console.error("Resend rejected contact message.", error?.name ?? "missing email id");
      return json("Pesan belum dapat dikirim. Silakan coba lagi nanti.", 502);
    }
    return json("Pesan berhasil dikirim. Terima kasih sudah menghubungi saya.", 200);
  } catch {
    console.error("Contact email request failed.");
    return json("Pesan belum dapat dikirim. Silakan coba lagi nanti.", 502);
  }
}
