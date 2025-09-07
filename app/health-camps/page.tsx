import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Heart, Stethoscope, Activity, Clock, Phone } from "lucide-react"
import { getUpcomingHealthCamps, getPastHealthCamps } from "@/lib/cms"
import { OptimizedImage } from "@/components/optimized-image"
import { bannerImages, bannerDescriptions } from "@/lib/dummy-images"

export default function HealthCampsPage() {
  const upcomingCamps = getUpcomingHealthCamps()
  const pastCamps = getPastHealthCamps()

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.healthCamps}
          alt={bannerDescriptions.healthCamps}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Free Health Camps</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Regular community health camps providing free medical checkups, screenings, and health awareness programs
            for everyone.
          </p>
        </div>
      </section>

      {/* Upcoming Health Camps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Upcoming Health Camps</h2>
          <div className="space-y-8">
            {upcomingCamps.map((camp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-xl text-primary mb-2 md:mb-0">{camp.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {camp.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{camp.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>{camp.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          <span>{camp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Free Services Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {camp.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4 bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                        <a href="tel:08631234567">Register Now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">How to Register for Health Camps</h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Registration is free and easy. Contact us to secure your spot in our upcoming health camps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
              <a href="tel:08631234567">
                <Phone className="w-5 h-5 mr-2" />
                Call to Register
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Past Health Camps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Past Health Camps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastCamps.map((camp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <OptimizedImage 
                    src={camp.image || "/health-camp-general-checkup-february-2025-with-do.jpg"} 
                    alt={`${camp.title} - Community health camp by JBR Clinic`} 
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{camp.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {camp.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {camp.participants} participants
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Camp Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Why Attend Our Health Camps?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Completely Free</h3>
                <p className="text-sm text-gray-600">All services provided at no cost to participants</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Doctors</h3>
                <p className="text-sm text-gray-600">Experienced medical professionals and specialists</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Comprehensive Tests</h3>
                <p className="text-sm text-gray-600">Multiple health screenings and diagnostic tests</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community Focus</h3>
                <p className="text-sm text-gray-600">Serving the local community with accessible healthcare</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
