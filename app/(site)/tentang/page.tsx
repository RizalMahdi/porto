import type { Metadata } from "next";
import Image from "next/image";
import profilePhoto from "@/Assets/Rizal-profile.jpg";
import { Badge } from "@/components/ui/badge";
import { about } from "@/content/about";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kenali Muhammad Rizal Mahdi, mahasiswa Sistem Informasi Universitas Gunadarma, dan bidang yang sedang dipelajarinya.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:px-12">
      <header className="border-b pb-10 sm:pb-14">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          01 / Profil
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          Tentang saya<span className="text-primary">.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Mengenal latar belakang, bidang yang saya pelajari, dan perjalanan
          saya.
        </p>
      </header>

      <section
        aria-labelledby="bio-heading"
        className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div className="max-w-md">
          <Image
            src={profilePhoto}
            alt="Foto profil Muhammad Rizal Mahdi"
            className="aspect-square w-full rounded-md object-cover"
            sizes="(max-width: 1023px) min(100vw, 448px), 35vw"
            loading="eager"
          />
          <p className="mt-4 border-b pb-4 text-xs font-medium tracking-wide text-muted-foreground">
            Muhammad Rizal Mahdi / Sistem Informasi
          </p>
        </div>
        <div className="lg:pt-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Tentang saya
          </p>
          <h2
            id="bio-heading"
            className="mt-4 max-w-xl text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Belajar dengan rasa ingin tahu.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-primary"></p>
        </div>
      </section>

      <section
        aria-labelledby="skills-heading"
        className="grid gap-8 border-t py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Keahlian
          </p>
          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Bekal untuk berkembang.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
            Daftar berikut merupakan contoh pengisian, bukan klaim keahlian.
            Sesuaikan dengan kemampuan Anda.
          </p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="min-h-32 border-t py-5">
              <h3 className="text-sm font-semibold">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.length ? (
                  group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="outline">TODO: Tambahkan keahlian</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="timeline-heading"
        className="grid gap-10 border-t pt-14 sm:pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            Perjalanan
          </p>
          <h2
            id="timeline-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Langkah demi langkah.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
            timeline pendidikan, pengalaman, organisasi, dan sertifikasi.
          </p>
        </div>
        <ol className="border-l border-border">
          {about.timeline.map((item, index) => (
            <li
              key={item.category}
              className="relative ml-6 border-b pb-8 not-first:pt-8"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[29px] size-2.5 rounded-full bg-primary ring-4 ring-background ${index === 0 ? "top-1" : "top-9"}`}
              />
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 text-xs font-semibold tracking-[0.12em] uppercase">
                <span className="text-primary">{item.category}</span>
                <span className="text-muted-foreground">{item.period}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
