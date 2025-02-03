import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Syllabus } from "@/components/syllabus"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Syllabus />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

