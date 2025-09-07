import Link from "next/link"
import { Phone, MessageCircle, Clock } from "lucide-react"

export function Footer() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/appointments", label: "Appointments" },
    { href: "/health-camps", label: "Health Camps" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Clinic Hours
            </h3>
            <div className="space-y-2 text-gray-600">
              <div>Mon - Sat: 9 AM - 1 PM, 5 PM - 8 PM</div>
              <div>Sunday: 9 AM - 12 PM</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919000000000"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a
                href="tel:08631234567"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0863-1234567
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-gray-600">
          <p>&copy; 2025 JBR Clinic. Built by HallowByte.</p>
        </div>
      </div>
    </footer>
  )
}
