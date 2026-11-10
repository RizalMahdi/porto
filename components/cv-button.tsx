import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CvButton({ available, className }: { available: boolean; className?: string }) {
  return available ? (
    <Button asChild variant="outline" className={className}>
      <a href={site.cvPath} download><Download aria-hidden="true" /> Unduh CV</a>
    </Button>
  ) : (
    <Button variant="outline" className={className} aria-label="Unduh CV belum tersedia" disabled>
      <Download aria-hidden="true" /> Unduh CV
    </Button>
  );
}
