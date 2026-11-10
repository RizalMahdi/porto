import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { SkillsPreview } from "@/components/sections/skills-preview";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCta />
    </div>
  );
}
