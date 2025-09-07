"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Navigation, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendContactEmail, type ContactFormData } from "@/lib/email"
import { bannerImages, bannerDescriptions } from "@/lib/dummy-images"
import { OptimizedImage } from "@/components/optimized-image"

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or call us directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.contact}
          alt={bannerDescriptions.contact}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Get in touch with JBR Clinic for appointments, inquiries, or any healthcare-related questions. We're here to
            help you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h2>
              <div className="space-y-6">
                <Card className="p-6 border-primary/20">
                  <CardContent className="pt-0">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Clinic Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          JBR Clinic
                          <br />
                          Kothapet Main Road
                          <br />
                          Near Bus Stand
                          <br />
                          Guntur, Andhra Pradesh 522001
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-primary/20">
                  <CardContent className="pt-0">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone Numbers</h3>
                        <div className="space-y-1">
                          <p className="text-gray-600">
                            <a href="tel:08631234567" className="hover:text-primary transition-colors">
                              0863-1234567
                            </a>
                          </p>
                          <p className="text-gray-600">
                            <a href="tel:919000000000" className="hover:text-primary transition-colors">
                              +91 90000 00000
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-primary/20">
                  <CardContent className="pt-0">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email Address</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@jbrclinic.com" className="hover:text-primary transition-colors">
                            info@jbrclinic.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-primary/20">
                  <CardContent className="pt-0">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Clinic Timings</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Saturday: 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM</p>
                          <p>Sunday: 9:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:08631234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" className="w-full bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                  <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus.type && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name" 
                          required 
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name" 
                          required 
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your inquiry or concern in detail..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Find Us on Map</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8623451234567!2d80.4343!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1b23456%3A0x789abcdef0123456!2sKothapet%20Main%20Rd%2C%20Guntur%2C%20Andhra%20Pradesh%20522001!5e0!3m2!1sen!2sin!4v1706368420000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JBR Clinic Location Map"
                />
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=Kothapet+Main+Rd+Guntur+Andhra+Pradesh+522001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-l-4 border-l-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Emergency Contact</h2>
            <p className="text-red-600 mb-4">
              For medical emergencies, please call immediately or visit the nearest emergency room.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <a href="tel:108">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: 108
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
