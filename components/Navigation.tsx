"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "La Légende", path: "/la-legende" },
    { name: "Interprétations", path: "/interpretations" },
    { name: "Théories", path: "/theories" },
    { name: "Galerie", path: "/galerie" },
    { name: "À Propos", path: "/a-propos" },
  ]

  return (
    <header className="bg-deep-black/90 backdrop-blur-sm border-b border-antique-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-antique-gold font-cinzel text-xl md:text-2xl font-bold text-shadow-gold">
              Aïcha Kandicha
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-antique-gold hover:text-antique-gold/80 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-white hover:text-antique-gold transition-colors duration-200 font-raleway"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-night-gray border-b border-antique-gold/20">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block py-2 text-white hover:text-antique-gold transition-colors duration-200 font-raleway"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
