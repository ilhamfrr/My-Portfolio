import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsSection } from "@/components/skills-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills - Ilham Faturrahman",
  description: "Skills and technologies used by Ilham Faturrahman",
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  )
}
