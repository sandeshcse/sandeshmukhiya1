import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
