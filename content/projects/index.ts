import projectData from "./projects.json";

type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  judul: string;
  jenis: string | null;
  ringkasan: string;
  peran: string;
  teknologi: string[];
  alasanTeknologi: string;
  masalah: string;
  proses: string;
  hasil: string;
  pembelajaran: string;
  gambar: ProjectImage;
  gambarTambahan: ProjectImage[];
  demoUrl: string | null;
  repoUrl: string | null;
};

export const projects: Project[] = projectData;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
