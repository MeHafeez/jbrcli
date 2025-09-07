import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import {
  Heart,
  Stethoscope,
  Baby,
  Users,
  Bone,
  Activity,
  Droplets,
  TestTube,
  Thermometer,
  Eye,
  Blinds as Lungs,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { bannerImages, bannerDescriptions } from "@/lib/dummy-images"

export default function ServicesPage() {
  const generalMedicineServices = [
    { name: "Blood Pressure Management", icon: Activity },
    { name: "Diabetes Care", icon: Droplets },
    { name: "Obesity Treatment", icon: Heart },
    { name: "Thyroid Problems", icon: Shield },
    { name: "Allergy Treatment", icon: Eye },
    { name: "TB & Respiratory Issues", icon: Lungs },
    { name: "Malaria & Dengue", icon: Thermometer },
    { name: "Fever Treatment", icon: Thermometer },
  ]

  const specialties = [
    {
      name: "Pediatrics",
      telugu: "శిశు వైద్యం",
      icon: Baby,
      description: "Comprehensive healthcare for infants, children, and adolescents",
    },
    {
      name: "Gynecology",
      telugu: "స్త్రీ రోగాలు",
      icon: Users,
      description: "Women's health and reproductive care services",
    },
    {
      name: "Orthopedics",
      telugu: "ఎముకల వైద్యం",
      icon: Bone,
      description: "Bone, joint, and musculoskeletal system treatment",
    },
    {
      name: "Cardiology",
      telugu: "",
      icon: Heart,
      description: "Heart Attack, Heart Failure, Valvular Diseases treatment",
    },
    {
      name: "Gastro & Liver Care",
      telugu: "",
      icon: Stethoscope,
      description: "Gas Problems, Jaundice, Gastro Diseases treatment",
    },
  ]

  const diagnostics = [
    "Sugar Test",
    "Blood Pressure Check",
    "BMI Assessment",
    "Pulse Rate (PR)",
    "SPO₂ Monitoring",
    "Urine Tests",
    "Blood Tests",
    "HbA1C Test",
    "Cholesterol Test",
    "Thyroid Test",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.services}
          alt={bannerDescriptions.services}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Comprehensive healthcare services under one roof with modern facilities and experienced medical
            professionals.
          </p>
        </div>
      </section>

      {/* General Medicine */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">General Medicine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalMedicineServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{service.name}</h3>
                  <Button size="sm" className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                    <Link href="/appointments">Book Appointment</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Medical Specialties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <specialty.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">
                    {specialty.name}
                    {specialty.telugu && (
                      <div className="text-lg text-gray-600 font-normal mt-1">{specialty.telugu}</div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
                  <Button className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                    <Link href="/appointments">Book Appointment</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Diagnostic Services</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <TestTube className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Complete Health Checkups</h3>
                  <p className="text-gray-600 leading-relaxed">
                    State-of-the-art diagnostic facilities for accurate and quick test results. All tests are performed
                    with modern equipment and experienced technicians.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {diagnostics.map((test, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="font-medium">{test}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                    <Link href="/appointments">Schedule Tests</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Book your appointment today and experience healthcare without waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
              <Link href="/appointments">Book Appointment Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <a href="tel:08631234567">Call Us: 0863-1234567</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
