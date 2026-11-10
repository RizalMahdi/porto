import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between sm:py-12">
          <div>
            <p className="text-base font-semibold tracking-tight">{site.name}<span className="text-primary">.</span></p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mahasiswa Sistem Informasi yang terus belajar dan berkarya.
            </p>
          </div>
          <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t py-5 text-xs text-muted-foreground">
          <p>Hak cipta &copy; {new Date().getFullYear()} {site.shortName}.</p>
          <p>Dibuat untuk terus berkembang.</p>
        </div>
      </div>
    </footer>
  );
}
