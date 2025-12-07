import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Ilham Faturrahman",
  description: "Learn more about Ilham Faturrahman, a Full Stack Developer",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
