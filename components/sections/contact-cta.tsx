import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section aria-labelledby="contact-heading" className="border-t py-6 sm:py-10">
      <div className="flex flex-col items-start justify-between gap-8 rounded-md bg-primary px-7 py-10 text-primary-foreground sm:px-10 sm:py-14 lg:flex-row lg:items-end lg:gap-12 lg:px-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">04 / Mari terhubung</p>
          <h2 id="contact-heading" className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Punya ide atau peluang untuk didiskusikan?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7">
            Mari bertukar cerita, belajar bersama, atau menjajaki kesempatan kolaborasi.
          </p>
        </div>
        <Button asChild className="h-12 shrink-0 bg-primary-foreground px-5 text-primary hover:bg-primary-foreground/90">
          <Link href="/kontak">Hubungi Saya <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}
