import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Ilham Faturrahman",
  description: "Get in touch with Ilham Faturrahman",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
