import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperienceSection } from "@/components/experience-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience - Ilham Faturrahman",
  description: "Professional experience and education of Ilham Faturrahman",
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  )
}
