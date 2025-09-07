"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/appointments", label: "Appointments" },
    { href: "/health-camps", label: "Health Camps" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:block">గుంటూరులోని నమ్మకమైన మల్టీ స్పెషాలిటీ క్లినిక్</div>
          <div className="md:hidden">Trusted Multi-Specialty Clinic in Guntur</div>
          <div className="hidden md:block">Trusted Multi-Specialty Clinic in Guntur</div>
          <Button size="sm" className="text-xs bg-saffron text-white hover:bg-saffron/90" asChild>
            <a href="tel:08631234567">
              <Phone className="w-3 h-3 mr-1" />
              0863-1234567
            </a>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-primary">
              JBR Clinic
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-saffron transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t" id="mobile-navigation" role="navigation" aria-label="Mobile navigation menu">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-saffron transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    onClick={() => setIsOpen(false)}
                    tabIndex={0}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
