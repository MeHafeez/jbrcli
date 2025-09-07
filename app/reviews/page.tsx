import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Star, Quote, Calendar, ThumbsUp, MessageSquare } from "lucide-react"
import { getLatestReviews, getAverageRating, getTotalReviews } from "@/lib/cms"
import { OptimizedImage } from "@/components/optimized-image"
import { bannerImages, bannerDescriptions } from "@/lib/dummy-images"

export default function ReviewsPage() {
  const reviews = getLatestReviews()
  const averageRating = getAverageRating()
  const totalReviews = getTotalReviews()

  const stats = [
    { label: "Total Reviews", value: `${totalReviews}+`, icon: MessageSquare },
    { label: "Average Rating", value: averageRating.toString(), icon: Star },
    { label: "Happy Patients", value: "2000+", icon: ThumbsUp },
    { label: "Years of Service", value: "5+", icon: Calendar },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <OptimizedImage
          src={bannerImages.reviews}
          alt={bannerDescriptions.reviews}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Patient Reviews</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance opacity-90">
            Read what our patients say about their experience at JBR Clinic. Your health and satisfaction are our top
            priorities.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-gray-600">{review.treatment}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-gray-600 leading-relaxed pl-6 mb-4">{review.review}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {review.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Had a great experience at JBR Clinic? Help others by sharing your review on Google.
          </p>
          <Button size="lg" className="bg-saffron hover:bg-saffron/90 text-saffron-foreground" asChild>
            <a href="https://g.page/r/your-google-business-id/review" target="_blank" rel="noopener noreferrer">
              Write a Google Review
            </a>
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Why Patients Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Excellent Care</h3>
                <p className="text-sm text-gray-600">
                  Personalized treatment plans and compassionate care for every patient
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-gray-600">Successful treatment outcomes and improved patient health</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clear Communication</h3>
                <p className="text-sm text-gray-600">
                  Transparent explanations and ongoing support throughout treatment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
