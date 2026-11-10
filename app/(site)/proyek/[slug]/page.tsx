import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return {
    title: project.judul,
    description: project.ringkasan,
    openGraph: {
      title: `${project.judul} | Muhammad Rizal Mahdi`,
      description: project.ringkasan,
      images: [{
        url: new URL("/opengraph-image", getSiteUrl()).toString(),
        width: 1200,
        height: 630,
        alt: `Portofolio Muhammad Rizal Mahdi - ${project.judul}`,
      }],
    },
  };
}

function externalUrl(value: string | null) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const demoUrl = externalUrl(project.demoUrl);
  const repoUrl = externalUrl(project.repoUrl);

  return (
    <article className="mx-auto max-w-7xl px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-28 lg:px-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link
              href="/"
              className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Beranda
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/proyek"
              className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Proyek
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {project.judul}
          </li>
        </ol>
      </nav>

      <header className="grid gap-8 pt-12 pb-10 sm:pt-16 lg:grid-cols-[1fr_0.36fr] lg:items-end lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Studi kasus {String(index + 1).padStart(2, "0")} /{" "}
            {project.jenis ?? "TODO: Jenis proyek"}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] [overflow-wrap:anywhere] sm:text-6xl">
            {project.judul}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {project.ringkasan}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.13em] text-muted-foreground uppercase">
            Tautan proyek
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {demoUrl ? (
              <Button asChild className="h-11 px-4">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Lihat Demo <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (buka di tab baru)</span>
                </a>
              </Button>
            ) : (
              <Button className="h-11 px-4" disabled>
                Lihat Demo <ArrowUpRight aria-hidden="true" />
              </Button>
            )}
            {repoUrl ? (
              <Button asChild variant="outline" className="h-11 px-4">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  Lihat Repo <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only"> (buka di tab baru)</span>
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="h-11 px-4" disabled>
                Lihat Repo <ArrowUpRight aria-hidden="true" />
              </Button>
            )}
          </div>
          {(!demoUrl || !repoUrl) && (
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              URL demo dan/atau repo belum tersedia.
            </p>
          )}
        </div>
      </header>

      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary sm:aspect-video">
        <Image
          src={project.gambar.src}
          alt={project.gambar.alt}
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) calc(100vw - 96px), 1184px"
          className="object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="grid gap-12 pt-12 sm:pt-16 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
        <aside
          aria-label="Informasi proyek"
          className="space-y-8 border-b pb-10 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.13em] text-muted-foreground uppercase">
              Jenis proyek
            </p>
            <p className="mt-3 text-sm leading-6">
              {project.jenis ?? "TODO: Kuliah, Lomba, atau Pribadi"}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.13em] text-muted-foreground uppercase">
              Teknologi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.teknologi.length > 0 ? (
                project.teknologi.map((technology) => (
                  <Badge key={technology} variant="secondary">
                    {technology}
                  </Badge>
                ))
              ) : (
                <Badge variant="secondary">Isi Teknologi</Badge>
              )}
            </div>
          </div>
        </aside>

        <div className="space-y-10 sm:space-y-12">
          <section aria-labelledby="problem-heading" className="border-t pt-6">
            <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
              01 / Latar belakang
            </p>
            <h2
              id="problem-heading"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Masalah
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 whitespace-pre-line text-muted-foreground">
              {project.masalah}
            </p>
          </section>
          <section aria-labelledby="role-heading" className="border-t pt-6">
            <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
              02 / Kontribusi
            </p>
            <h2
              id="role-heading"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Peran saya
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 whitespace-pre-line text-muted-foreground">
              {project.peran}
            </p>
          </section>
          <section
            aria-labelledby="technology-heading"
            className="border-t pt-6"
          >
            <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
              03 / Teknologi
            </p>
            <h2
              id="technology-heading"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Teknologi dan alasan pemilihan
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 whitespace-pre-line text-muted-foreground">
              {project.alasanTeknologi}
            </p>
          </section>
          <section aria-labelledby="process-heading" className="border-t pt-6">
            <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
              04 / Proses
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Proses dan tantangan
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 whitespace-pre-line text-muted-foreground">
              {project.proses}
            </p>
          </section>
          <section aria-labelledby="results-heading" className="border-t pt-6">
            <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
              05 / Hasil
            </p>
            <h2
              id="results-heading"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Hasil dan pembelajaran
            </h2>
            <div className="mt-5 grid gap-7 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Hasil</h3>
                <p className="mt-3 text-base leading-8 whitespace-pre-line text-muted-foreground">
                  {project.hasil}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Pembelajaran</h3>
                <p className="mt-3 text-base leading-8 whitespace-pre-line text-muted-foreground">
                  {project.pembelajaran}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        aria-labelledby="gallery-heading"
        className="mt-16 border-t pt-8 sm:mt-20"
      >
        <p className="text-xs font-semibold tracking-[0.13em] text-primary uppercase">
          06 / Dokumentasi
        </p>
        <h2
          id="gallery-heading"
          className="mt-3 text-2xl font-semibold tracking-tight"
        >
          Gambar proyek
        </h2>
        {project.gambarTambahan.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.gambarTambahan.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1279px) 50vw, 580px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            TODO: Tambahkan gambar proses atau hasil proyek.
          </p>
        )}
      </section>

      <nav
        aria-label="Navigasi proyek"
        className="mt-16 grid border-t sm:mt-24 sm:grid-cols-2"
      >
        <Link
          href={`/proyek/${previous.slug}`}
          className="group flex min-w-0 items-start gap-4 border-b py-7 pr-4 outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring sm:border-r sm:border-b-0 sm:pr-8"
        >
          <ArrowLeft className="mt-1 size-5 shrink-0" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Proyek sebelumnya
            </span>
            <span className="mt-2 block text-base font-semibold break-words">
              {previous.judul}
            </span>
          </span>
        </Link>
        <Link
          href={`/proyek/${next.slug}`}
          className="group flex min-w-0 items-start justify-between gap-4 py-7 outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring sm:pl-8"
        >
          <span className="min-w-0">
            <span className="block text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Proyek berikutnya
            </span>
            <span className="mt-2 block text-base font-semibold break-words">
              {next.judul}
            </span>
          </span>
          <ArrowRight className="mt-1 size-5 shrink-0" aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
