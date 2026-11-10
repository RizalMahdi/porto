import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyek",
  description:
    "Tiga proyek pilihan Muhammad Rizal Mahdi, lengkap dengan proses dan pembelajarannya.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:px-12">
      <div className="flex flex-col justify-between gap-6 border-b pb-10 sm:flex-row sm:items-end sm:pb-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            02 / Karya
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Proyek pilihan<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Tiga ruang untuk mendokumentasikan ide, proses, dan hasil dari
            proyek pilihan.
          </p>
        </div>
        <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          01 - 02 / Studi kasus
        </p>
      </div>
      <div className="grid gap-5 pt-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
