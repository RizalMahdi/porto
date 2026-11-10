import { ArrowDownRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePhoto from "@/Assets/Rizal-profile.jpg";
import { HeroAccent } from "@/components/sections/hero-accent";
import { Button } from "@/components/ui/button";
import TextType from "@/components/reactbits/TextType";

export function Hero() {
  return (
    <section aria-labelledby="home-title">
      <div className="flex items-center justify-between gap-4 border-b py-5 text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase sm:text-xs">
        <span>Portofolio</span>
        <span className="text-right">Universitas Gunadarma</span>
      </div>

      <div className="grid grid-cols-1 gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:py-24">
        <div className="min-w-0">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Halo, saya Rizal
          </p>
          <h1
            id="home-title"
            className="max-w-3xl text-[clamp(2.7rem,7vw,6.3rem)] leading-[0.98] font-semibold tracking-[-0.06em]"
          >
            Muhammad Rizal Mahdi<span className="text-primary">.</span>
          </h1>
          <TextType
            text={[
              "Mahasiswa Sistem Informasi semester 5 di Universitas Gunadarma, dengan minat pada Web Development, UI/UX, dan Data.",
            ]}
            typingSpeed={90}
            pauseDuration={1500}
            deletingSpeed={50}
            deleteMode="select"
            typeEffect="none"
            mistakes={0}
            cursorStyle="underscore"
            cursorGlide
            showCursor
            cursorColor="currentColor"
            prefixColor="currentColor"
            cursorBlinkDuration={0.5}
            cursorCharacter="_"
            prefix=""
            loop={false}
          />
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"></p>
          <TextType
            text={[
              "Belajar",
              "Merancang",
              "Membangun solusi digital yang bermanfaat.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            deleteMode="backspace"
            typeEffect="none"
            mistakes={0}
            cursorStyle="underscore"
            cursorGlide
            showCursor
            cursorColor="currentColor"
            prefixColor="currentColor"
            cursorBlinkDuration={0.5}
            cursorCharacter="_"
            prefix=""
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-5">
              <Link href="/proyek">
                Lihat Proyek <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-5">
              <Link href="/kontak">
                Hubungi Saya <ArrowDownRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-md lg:mr-0">
          <div
            className="absolute -top-3 -right-3 h-2/3 w-2/3 border border-primary/30 sm:-top-4 sm:-right-4"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden bg-muted">
            <Image
              src={profilePhoto}
              alt="Foto profil Muhammad Rizal Mahdi"
              className="aspect-square w-full object-cover"
              sizes="(max-width: 1023px) min(100vw, 448px), 38vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="relative flex flex-wrap justify-between gap-x-4 gap-y-2 border-b py-4 text-xs font-medium">
            <HeroAccent />
            <span className="text-muted-foreground">
              Sistem Informasi / Semester 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
