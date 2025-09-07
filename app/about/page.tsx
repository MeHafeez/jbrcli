import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Award, Clock, Shield, Heart, Users, GraduationCap, Stethoscope } from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { hospitalImages, imageDescriptions, bannerImages, bannerDescriptions } from "@/lib/dummy-images"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.about}
          alt={bannerDescriptions.about}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About JBR Clinic</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Your trusted healthcare partner in Guntur, committed to providing exceptional medical care with modern
            technology and compassionate service.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision & Mission</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and accessible healthcare provider in Guntur, delivering world-class medical
                    services that prioritize patient comfort, convenience, and care quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize healthcare delivery through digital innovation, eliminating waiting times while
                    maintaining the highest standards of medical excellence and patient satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage 
                src="/modern-medical-clinic-interior-with-patients-and-s.jpg" 
                alt="JBR Clinic Interior - Modern medical facility with patients" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Meet Our Chief Physician</h2>
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <OptimizedImage
                      src="/professional-doctor-portrait-dr-sajid-jameel-in-wh.jpg"
                      alt="Dr. Md. Sajid Jameel - Chief Physician at JBR Clinic"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-lg mx-auto mb-4"
                      priority
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 text-primary">Dr. Md. Sajid Jameel</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                        <span>MBBS, MD - General Medicine</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Award className="w-5 h-5 mr-2 text-primary" />
                        <span>Assistant Professor</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                        <span>Physician & Diabetologist</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      With over 15 years of experience in general medicine and diabetes care, Dr. Sajid Jameel is
                      committed to providing comprehensive healthcare solutions. His expertise in modern diagnostic
                      techniques and patient-centered approach has made him a trusted name in Guntur's medical
                      community.
                    </p>
                    <Button className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
                      <Link href="/appointments">Book Consultation</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose JBR Clinic?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Waiting Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our innovative token system ensures you get immediate attention without the hassle of long queues.
                  Your time is valuable to us.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Health Card</h3>
                <p className="text-gray-600 leading-relaxed">
                  All your medical records, prescriptions, and health history stored securely in digital format for easy
                  access anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality healthcare shouldn't be expensive. We provide world-class medical services at affordable
                  prices for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hospital Images Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Modern Facility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Main Featured Image */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
                <OptimizedImage
                  src={hospitalImages.consultationRoom}
                  alt={imageDescriptions.consultationRoom}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">Patient Consultation Area</h3>
                  <p className="text-sm opacity-90">Comfortable and private consultation rooms</p>
                </div>
              </div>
            </div>

            {/* Reception Area */}
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
              <OptimizedImage
                src={hospitalImages.receptionArea}
                alt={imageDescriptions.receptionArea}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold mb-1">Reception Area</h3>
                <p className="text-sm opacity-90">Welcoming and efficient front desk</p>
              </div>
            </div>

            {/* Diagnostic Equipment */}
            <div className="relative h-[250px] rounded-xl overflow-hidden group">
              <OptimizedImage
                src={hospitalImages.diagnosticLab}
                alt={imageDescriptions.diagnosticLab}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold mb-1">Diagnostic Lab</h3>
                <p className="text-sm opacity-90">State-of-the-art equipment</p>
              </div>
            </div>

            {/* Treatment Room */}
            <div className="relative h-[250px] rounded-xl overflow-hidden group">
              <OptimizedImage
                src={hospitalImages.treatmentRoom}
                alt={imageDescriptions.treatmentRoom}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold mb-1">Treatment Rooms</h3>
                <p className="text-sm opacity-90">Fully equipped for all procedures</p>
              </div>
            </div>

            {/* Pharmacy Section */}
            <div className="relative h-[250px] rounded-xl overflow-hidden group">
              <OptimizedImage
                src={hospitalImages.pharmacy}
                alt={imageDescriptions.pharmacy}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold mb-1">In-House Pharmacy</h3>
                <p className="text-sm opacity-90">Quality medications available</p>
              </div>
            </div>
          </div>

          {/* Facility Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Design</h3>
              <p className="text-gray-600">Every space designed with patient comfort and privacy in mind</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety Standards</h3>
              <p className="text-gray-600">Highest safety and hygiene standards maintained throughout</p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Latest medical equipment for accurate diagnosis and treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-foreground/80">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80">Medical Services</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
