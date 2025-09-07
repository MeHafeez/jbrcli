"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Clock, Shield, FileText, Heart, Stethoscope, Users, Star, MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { ParallaxLoader } from "@/components/parallax-loader"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrolled
        const elementHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Only apply parallax if element is in viewport
        if (elementTop < scrolled + windowHeight && elementTop + elementHeight > scrolled) {
          const yPos = -(scrolled - elementTop) * Number.parseFloat(speed)
          element.style.transform = `translate3d(0, ${yPos}px, 0)`
        }
      })
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

  // Show loader on first visit
  if (isLoading) {
    return <ParallaxLoader onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className={`min-h-screen parallax-container transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-center bg-gray-900 overflow-hidden"
        role="banner"
        aria-label="Hero section with appointment booking"
      >
        <OptimizedImage
          src="/smiling-doctor-in-white-coat-with-stethoscope-in-m.jpg"
          alt="Smiling doctor in white coat with stethoscope - Dr. Sajid Jameel at JBR Clinic"
          fill
          className="object-cover z-0 parallax-element"
          data-speed="0.5"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance text-white leading-tight">
            Same-day appointment. Zero waiting.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-balance text-white opacity-0 animate-fade-in-up animate-delay-200 max-w-4xl mx-auto">
            Book your token in 30 seconds – pay at counter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-fade-in-up animate-delay-400">
          <Button
            size="lg"
            className="bg-saffron hover:bg-saffron/90 text-white btn-enhanced text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
            asChild
          >
            <Link href="/appointments" aria-label="Book appointment online">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2" aria-hidden="true" />
              Take Token Now
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-call hover:bg-call/90 text-white btn-enhanced text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
            asChild
          >
            <a href="tel:08631234567" aria-label="Call clinic at 0863-1234567">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        aria-label="Clinic features and benefits"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary opacity-0 animate-fade-in-up">
            Why Choose JBR Clinic?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-in-left transform hover:scale-105">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">24×7 Online Token</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Book your appointment anytime, anywhere. No more waiting in long queues.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-scale-in animate-delay-200 transform hover:scale-105">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Digital Health Card</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  All your medical records in one place. Secure and easily accessible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-in-right animate-delay-400 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Zero Paperwork</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Completely digital process. Save time and go paperless with us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="py-0 relative overflow-hidden">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <OptimizedImage
            src="/modern-medical-clinic-interior-with-patients-and-s.jpg"
            alt="Modern medical clinic interior with patients and staff"
            fill
            className="object-cover parallax-element"
            data-speed="0.3"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">
                Modern Healthcare Facilities
              </h2>
              <p className="text-lg sm:text-xl mb-6 opacity-0 animate-fade-in-up animate-delay-200 max-w-2xl mx-auto">
                Experience world-class medical care in our state-of-the-art facility equipped with the latest
                technology.
              </p>
              <Button
                className="bg-success hover:bg-success/90 text-white btn-enhanced opacity-0 animate-fade-in-up animate-delay-400 shadow-lg"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">Our Services</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white btn-enhanced shadow-lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up transform hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2 text-base sm:text-lg">General Medicine</h3>
                <p className="text-sm text-gray-600">Complete healthcare for all ages</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-scale-in animate-delay-200 transform hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Cardiology</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Heart care and treatment</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-in-right animate-delay-400 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Pediatrics</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Specialized child healthcare</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up transform hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Diagnostics</h3>
                <p className="text-sm text-gray-600">Complete health checkups</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 opacity-0 animate-slide-in-left">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service and very professional staff. Dr. Sajid is very knowledgeable and caring. Highly
                  recommended!"
                </p>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-gray-500">Verified Patient</div>
              </CardContent>
            </Card>

            <Card className="p-6 opacity-0 animate-scale-in animate-delay-200">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The online token system is amazing. No more waiting in long queues. Very convenient and time-saving."
                </p>
                <div className="font-semibold">Priya Sharma</div>
                <div className="text-sm text-gray-500">Verified Patient</div>
              </CardContent>
            </Card>

            <Card className="p-6 opacity-0 animate-slide-in-right animate-delay-400">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great clinic with modern facilities. The digital health card feature is very helpful for tracking my
                  health records."
                </p>
                <div className="font-semibold">Mohammed Ali</div>
                <div className="text-sm text-gray-500">Verified Patient</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinic Timings & Location */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Clinic Timings */}
            <div className="opacity-0 animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
                <Clock className="w-8 h-8 mr-3" />
                Clinic Timings
              </h2>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Monday - Saturday</span>
                      <div className="text-right">
                        <div>9:00 AM - 1:00 PM</div>
                        <div>5:00 PM - 8:00 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Sunday</span>
                      <div>9:00 AM - 12:00 PM</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Emergency services available 24/7. Call us for urgent medical needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div className="opacity-0 animate-slide-in-right animate-delay-200">
              <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
                <MapPin className="w-8 h-8 mr-3" />
                Our Location
              </h2>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">JBR Clinic</h3>
                    <p className="text-gray-600 mb-4">
                      Door no 5-9-14, Kothapet Main Rd
                      <br />
                      Guntur - 522001, Andhra Pradesh
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>0863-1234567</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>8886295566</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8623451234567!2d80.4343!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1b23456%3A0x789abcdef0123456!2sKothapet%20Main%20Rd%2C%20Guntur%2C%20Andhra%20Pradesh%20522001!5e0!3m2!1sen!2sin!4v1706368420000"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="JBR Clinic Location - Kothapet Main Road, Guntur"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
