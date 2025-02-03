import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold">
          ProductPro
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#syllabus" className="text-sm text-gray-400 hover:text-white transition-colors">
            Syllabus
          </Link>
          <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
            Pricing
          </Link>
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            Chat with Alex
          </Button>
        </nav>
      </div>
    </header>
  )
}

