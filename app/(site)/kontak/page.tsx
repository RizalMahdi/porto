import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, Camera, Code2, Mail } from "lucide-react";
import { CvButton } from "@/components/cv-button";
import { ContactForm } from "@/components/sections/contact-form";
import { contactLinks } from "@/content/contact";
import { isValidContactLink } from "@/lib/contact-links";
import { isCvAvailable } from "@/lib/cv";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Muhammad Rizal Mahdi untuk berdiskusi dan menjajaki peluang kolaborasi.",
};

const icons = { LinkedIn: BriefcaseBusiness, GitHub: Code2, Instagram: Camera, Email: Mail };

export default function ContactPage() {
  const cvAvailable = isCvAvailable();
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:px-12">
      <header className="border-b pb-10 sm:pb-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">03 / Kontak</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Mari terhubung<span className="text-primary">.</span></h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Punya pertanyaan, ide, atau peluang yang ingin didiskusikan? Kirim pesan melalui formulir berikut.</p>
      </header>
      <div className="grid gap-14 pt-12 sm:pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <section aria-labelledby="social-heading">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Temukan saya</p>
            <h2 id="social-heading" className="mt-4 text-2xl font-semibold tracking-tight">Tautan lainnya.</h2>
            <div className="mt-6 border-t">
              {contactLinks.map((item) => {
                const Icon = icons[item.label as keyof typeof icons];
                const valid = isValidContactLink(item.label, item.href);
                const content = <><Icon className="size-5 shrink-0" aria-hidden="true" /><span className="min-w-0 flex-1"><span className="block font-semibold">{item.label}</span><span className="mt-1 block text-sm text-muted-foreground">{valid ? item.description : "TODO: Tautan belum tersedia"}</span></span>{valid && <ArrowUpRight className="size-4" aria-hidden="true" />}</>;
                return valid ? (
                  <a key={item.label} href={item.href!} {...(item.label === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" })} className="flex min-h-20 items-center gap-4 border-b py-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">{content}{item.label !== "Email" && <span className="sr-only"> (buka di tab baru)</span>}</a>
                ) : <div key={item.label} className="flex min-h-20 items-center gap-4 border-b py-4">{content}</div>;
              })}
            </div>
          </section>
          <section aria-labelledby="cv-heading" className="mt-10 rounded-md bg-secondary p-6 text-secondary-foreground">
            <h2 id="cv-heading" className="text-lg font-semibold">Curriculum vitae</h2>
            <p className="mt-2 text-sm leading-6">{cvAvailable ? "Unduh CV untuk melihat profil dan pengalaman saya." : "CV belum tersedia. TODO: Tambahkan file CV PDF."}</p>
            <CvButton available={cvAvailable} className="mt-5 h-11 px-4" />
          </section>
        </div>
        <section aria-labelledby="form-heading" className="rounded-md border bg-card p-6 sm:p-9">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Kirim pesan</p>
          <h2 id="form-heading" className="mt-4 text-2xl font-semibold tracking-tight">Mulai percakapan.</h2>
          <p className="mt-3 mb-8 text-sm leading-6 text-muted-foreground">Isi nama, email, dan pesan Anda. Saya akan membalas melalui email yang Anda cantumkan.</p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
