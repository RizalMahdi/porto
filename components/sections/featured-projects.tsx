import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="border-t py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            02 / Proyek unggulan
          </p>
          <h2
            id="projects-heading"
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Proyek pilihan.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Ruang untuk menceritakan ide, proses, dan hasil dari proyek pilihan.
          </p>
        </div>
        <Button asChild variant="outline" className="h-11 w-fit px-4">
          <Link href="/proyek">
            Semua proyek <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            headingLevel={3}
          />
        ))}
      </div>
    </section>
  );
}
