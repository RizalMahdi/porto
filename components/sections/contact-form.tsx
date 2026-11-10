"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact";

export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
    mode: "onBlur",
  });

  async function onSubmit(values: ContactValues) {
    form.clearErrors("root");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      const result: { message?: string } = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Pesan belum dapat dikirim. Silakan coba lagi.");
      form.reset();
      toast.success("Pesan berhasil dikirim.", { description: "Terima kasih sudah menghubungi saya." });
    } catch (error) {
      const message = error instanceof Error && error.name === "AbortError"
        ? "Waktu pengiriman habis. Pesan mungkin sudah terkirim; periksa sebelum mencoba lagi."
        : error instanceof Error && error.message !== "Failed to fetch"
          ? error.message
          : "Koneksi bermasalah. Periksa jaringan Anda dan coba lagi.";
      form.setError("root", { message });
      toast.error("Pesan belum dapat dikirim.", { description: message });
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-6">
        <p className="text-sm text-muted-foreground">Semua kolom wajib diisi.</p>
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Nama</FormLabel>
            <FormControl><Input {...field} autoComplete="name" maxLength={100} required placeholder="Nama Anda" className="h-12 px-4 text-base" /></FormControl>
            <FormDescription>Nama yang ingin Anda gunakan saat menghubungi saya.</FormDescription>
            <FormMessage role="alert" />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input {...field} type="email" autoComplete="email" maxLength={254} required placeholder="nama@email.com" className="h-12 px-4 text-base" /></FormControl>
            <FormDescription>Alamat ini digunakan untuk membalas pesan Anda.</FormDescription>
            <FormMessage role="alert" />
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Pesan</FormLabel>
            <FormControl><Textarea {...field} rows={6} maxLength={5000} required placeholder="Ceritakan ide atau keperluan Anda..." className="min-h-40 resize-y px-4 py-3 text-base" /></FormControl>
            <FormDescription>Tulis pesan antara 10 hingga 5000 karakter.</FormDescription>
            <FormMessage role="alert" />
          </FormItem>
        )} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Jangan isi kolom ini</label>
          <input id="contact-website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
        </div>
        {form.formState.errors.root && <p role="alert" className="text-sm text-destructive">{form.formState.errors.root.message}</p>}
        <Button type="submit" className="h-12 px-5" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <><LoaderCircle className="animate-spin" aria-hidden="true" /> Mengirim...</> : <>Kirim pesan <ArrowUpRight aria-hidden="true" /></>}
        </Button>
      </form>
    </Form>
  );
}
