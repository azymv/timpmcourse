import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container text-center space-y-8">
        <div className="flex items-center justify-center gap-2 text-xl">
          <span>Hey</span>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header-ZBvdWCUKXHMk0JRYpKi2T8ykF7UUVF.png"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <span>I'm Alex.</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight">
          I help aspiring PMs become product leaders
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          You've got the ambition to be a great product manager, but you're missing the structured guidance
          <span className="italic"> and practical experience</span> you need.
        </p>

        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          Enroll in PM Mastery Course <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-sm text-gray-500">
          A comprehensive program that'll give you real PM skills — or your money back.
        </p>
      </div>
    </section>
  )
}

