import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Phone, MessageCircle, CheckCircle, Info } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { bannerImages, bannerDescriptions } from "@/lib/dummy-images"

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.appointments}
          alt={bannerDescriptions.appointments}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Schedule your consultation in just 30 seconds. No waiting, no hassle - just quality healthcare when you need
            it.
          </p>
        </div>
      </section>

      {/* Appointment Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Same Day Slots</h3>
                <p className="text-sm text-gray-600">Book appointments for today or future dates</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">15-Minute Slots</h3>
                <p className="text-sm text-gray-600">Dedicated time for your consultation</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Zero Waiting</h3>
                <p className="text-sm text-gray-600">Walk in at your scheduled time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Select Your Appointment Time</CardTitle>
                <p className="text-gray-600">Choose a convenient slot from our available timings</p>
              </CardHeader>
              <CardContent>
                {/* Calendly Embed Widget */}
                <div className="mb-6">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/jbrclinic/consultation"
                    style={{ minWidth: '320px', height: '600px' }}
                  />
                  <script 
                    type="text/javascript" 
                    src="https://assets.calendly.com/assets/external/widget.js" 
                    async
                  />
                </div>

                {/* Fallback for when Calendly is not available */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
                  <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Online Booking Available</h3>
                  <p className="text-blue-700 mb-4">
                    Book your 15-minute consultation slot online. If the widget doesn't load, please use the alternative booking methods below.
                  </p>
                  <div className="text-sm text-blue-600 bg-white p-3 rounded border">
                    <p><strong>Available Slots:</strong></p>
                    <p>Morning: 9:00 AM - 12:00 PM</p>
                    <p>Evening: 5:00 PM - 8:00 PM</p>
                    <p>Duration: 15 minutes each</p>
                  </div>
                </div>

                {/* Alternative Booking Methods */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-4 border-primary/20">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-primary" />
                        Call to Book
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Prefer to speak with someone? Call us directly to schedule your appointment.
                      </p>
                      <Button className="w-full" asChild>
                        <a href="tel:08631234567">Call 0863-1234567</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="p-4 border-primary/20">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                        WhatsApp Booking
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Quick and easy booking through WhatsApp. Send us a message to get started.
                      </p>
                      <Button className="w-full bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                        <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
                          WhatsApp Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                  <Info className="w-6 h-6 mr-2" />
                  Important Information
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Consultation Fee:</strong> ₹200 to be paid at the clinic counter. No online payment
                      required for booking.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Arrival Time:</strong> Please arrive 5 minutes before your scheduled appointment time.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Documents:</strong> Bring any previous medical reports, prescriptions, or test results.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Cancellation:</strong> Please inform us at least 2 hours in advance if you need to cancel
                      or reschedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinic Timings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-primary">Clinic Timings</h2>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
