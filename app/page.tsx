import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SponsorsSection } from "@/components/sponsors-section"
import { FAQSection } from "@/components/faq-section"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <TeamSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
