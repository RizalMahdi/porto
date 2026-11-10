import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-heading" className="grid gap-8 border-t py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">01 / Tentang saya</p>
        <h2 id="about-heading" className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">
          Belajar dari ide, bertumbuh lewat proses.
        </h2>
      </div>
      <div className="lg:pt-9">
        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Saya mahasiswa Sistem Informasi Universitas Gunadarma yang sedang mengeksplorasi pengembangan web, desain UI/UX, dan data. Portofolio ini menjadi ruang untuk mendokumentasikan proses belajar dan proyek yang saya kerjakan.
        </p>
        <Button asChild variant="outline" className="mt-7 h-11 px-4">
          <Link href="/tentang">Lebih tentang saya <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}
