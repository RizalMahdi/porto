import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  headingLevel?: 2 | 3;
};

export function ProjectCard({ project, index, headingLevel = 2 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const number = String(index + 1).padStart(2, "0");

  return (
    <Card className="group relative h-full gap-0 overflow-hidden rounded-md py-0 shadow-none transition-colors hover:ring-primary/40 focus-within:ring-2 focus-within:ring-ring">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={project.gambar.src}
          alt={project.gambar.alt}
          fill
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 33vw, 390px"
          className="object-cover"
        />
      </div>
      <CardHeader className="gap-3 px-6 pt-6">
        <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
          Proyek {number} <span aria-hidden="true">/</span> {project.jenis ?? "TODO: Jenis proyek"}
        </p>
        <CardTitle className="text-lg font-semibold leading-snug">
          <Heading>
            <Link
              href={`/proyek/${project.slug}`}
              className="rounded-sm outline-none after:absolute after:inset-0"
            >
              {project.judul}
            </Link>
          </Heading>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col px-6 pt-3 pb-6">
        <p className="text-sm leading-6 text-muted-foreground">{project.ringkasan}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`Teknologi proyek ${number}`}>
          {project.teknologi.length > 0 ? (
            project.teknologi.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)
          ) : (
            <Badge variant="secondary">TODO: Teknologi</Badge>
          )}
        </div>
        <p className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-primary">
          Lihat studi kasus <ArrowUpRight className="size-4" aria-hidden="true" />
        </p>
      </CardContent>
    </Card>
  );
}
