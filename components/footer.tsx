import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#syllabus" className="text-sm text-gray-400 hover:text-white">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ebook" className="text-sm text-gray-400 hover:text-white">
                  E-book
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-gray-400 hover:text-white">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:alex@productpro.com" className="text-sm text-gray-400 hover:text-white">
                  alex@productpro.com
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-gray-400">© {currentYear} ProductPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

