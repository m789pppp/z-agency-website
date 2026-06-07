import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Industries />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
