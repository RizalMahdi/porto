import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter.").max(100, "Nama maksimal 100 karakter.").refine((value) => !/[\r\n]/.test(value), "Nama tidak boleh mengandung baris baru."),
  email: z.string().trim().max(254, "Email terlalu panjang.").email("Masukkan alamat email yang valid."),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter.").max(5000, "Pesan maksimal 5000 karakter."),
  website: z.string().max(200).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
