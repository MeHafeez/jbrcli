import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JBR Clinic - Trusted Multi-Specialty Clinic in Guntur",
  description:
    "Same-day appointment. Zero waiting. Book your token in 30 seconds at JBR Clinic, Guntur's trusted multi-specialty healthcare center.",
  generator: "v0.app",
  keywords: "JBR Clinic, Guntur clinic, multi-specialty clinic, doctor appointment, healthcare Guntur, Dr Sajid Jameel, diabetes care, general medicine, pediatrics, cardiology",
  authors: [{ name: "JBR Clinic" }],
  creator: "JBR Clinic",
  publisher: "JBR Clinic",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "JBR Clinic - Trusted Multi-Specialty Clinic in Guntur",
    description: "Same-day appointment. Zero waiting. Book your token in 30 seconds at JBR Clinic, Guntur's trusted multi-specialty healthcare center.",
    url: "https://jbrclinic.com",
    siteName: "JBR Clinic",
    images: [
      {
        url: "/smiling-doctor-in-white-coat-with-stethoscope-in-m.jpg",
        width: 1200,
        height: 630,
        alt: "JBR Clinic - Dr. Sajid Jameel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBR Clinic - Trusted Multi-Specialty Clinic in Guntur",
    description: "Same-day appointment. Zero waiting. Book your token in 30 seconds at JBR Clinic.",
    images: ["/smiling-doctor-in-white-coat-with-stethoscope-in-m.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "JBR Clinic",
              "description": "Trusted Multi-Specialty Clinic in Guntur providing same-day appointments with zero waiting time",
              "url": "https://jbrclinic.com",
              "logo": "https://jbrclinic.com/placeholder-logo.png",
              "image": "https://jbrclinic.com/smiling-doctor-in-white-coat-with-stethoscope-in-m.jpg",
              "telephone": "+91-863-1234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kothapet Main Road",
                "addressLocality": "Guntur",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "522001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "16.3067",
                "longitude": "80.4365"
              },
              "openingHours": [
                "Mo-Sa 09:00-13:00",
                "Mo-Sa 17:00-20:00",
                "Su 09:00-12:00"
              ],
              "medicalSpecialty": ["General Medicine", "Pediatrics", "Cardiology", "Gynecology", "Orthopedics"],
              "priceRange": "₹₹",
              "paymentAccepted": "Cash",
              "currenciesAccepted": "INR"
            })
          }}
        />
        <link rel="canonical" href="https://jbrclinic.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Calendly CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <FloatingCTA />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
