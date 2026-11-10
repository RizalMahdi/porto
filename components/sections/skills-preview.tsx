import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillGroups } from "@/content/skills";

export function SkillsPreview() {
  return (
    <section aria-labelledby="skills-heading" className="grid gap-10 border-t py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">03 / Keahlian</p>
        <h2 id="skills-heading" className="mt-5 max-w-sm text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">
          Ruang untuk terus belajar.
        </h2>
        <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
          Contoh pengisian: sesuaikan daftar keterampilan dan tools dengan kemampuan Anda.
        </p>
        <Button asChild variant="outline" className="mt-7 h-11 px-4">
          <Link href="/tentang">Lihat profil <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>

      <div className="grid gap-x-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="min-h-32 border-t py-5">
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.length > 0 ? (
                group.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)
              ) : (
                <Badge variant="outline">TODO: Tambahkan keahlian</Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
