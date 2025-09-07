"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { trackPhoneCall, trackWhatsAppMessage } from "@/lib/analytics"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="lg"
        className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        asChild
      >
        <a 
          href="https://wa.me/919000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={trackWhatsAppMessage}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </a>
      </Button>

      <Button
        size="lg"
        className="bg-call hover:bg-call/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        asChild
      >
        <a href="tel:08631234567" onClick={trackPhoneCall}>
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
      </Button>
    </div>
  )
}
