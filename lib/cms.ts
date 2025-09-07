// Dynamic content management system for JBR Clinic
// This provides a simple CMS structure that can be easily updated

export interface HealthCamp {
  id: string
  title: string
  titleTelugu?: string
  date: string
  time: string
  location: string
  description: string
  services: string[]
  isUpcoming: boolean
  participants?: number
  image?: string
  registrationRequired: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  date: string
  review: string
  treatment: string
  verified: boolean
  image?: string
}

export interface ServiceInfo {
  id: string
  name: string
  nameTelugu?: string
  category: 'general' | 'specialty' | 'diagnostic'
  description: string
  icon: string
  available: boolean
  consultationFee?: number
}

// Health Camps Data
export const healthCamps: HealthCamp[] = [
  {
    id: "diabetes-camp-march-2025",
    title: "Free Diabetes Screening Camp",
    titleTelugu: "ఉచిత మధుమేహ పరీక్ష శిబిరం",
    date: "March 15, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "JBR Clinic, Kothapet Main Road",
    description: "Comprehensive diabetes screening with free blood sugar testing, HbA1c screening, and expert consultation on diabetes management.",
    services: ["Blood Sugar Test", "HbA1c Test", "Diet Consultation", "Free Medicines", "Blood Pressure Check"],
    isUpcoming: true,
    registrationRequired: true
  },
  {
    id: "heart-health-march-2025",
    title: "Heart Health Checkup Camp",
    titleTelugu: "గుండె ఆరోగ్య పరీక్ష శిబిరం",
    date: "March 22, 2025",
    time: "8:00 AM - 1:00 PM",
    location: "Community Center, Guntur",
    description: "Complete cardiac screening and awareness program for early detection of heart diseases.",
    services: ["ECG", "Blood Pressure Check", "Cholesterol Test", "Cardiac Consultation", "Health Education"],
    isUpcoming: true,
    registrationRequired: true
  },
  {
    id: "women-health-march-2025",
    title: "Women's Health Camp",
    titleTelugu: "మహిళా ఆరోగ్య శిబిరం",
    date: "March 29, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "JBR Clinic, Kothapet Main Road",
    description: "Comprehensive health screening specifically designed for women of all ages with focus on preventive care.",
    services: ["General Checkup", "Gynecological Consultation", "Bone Density Test", "Nutrition Counseling", "Health Awareness"],
    isUpcoming: true,
    registrationRequired: true
  },
  {
    id: "general-health-feb-2025",
    title: "General Health Checkup Camp",
    titleTelugu: "సాధారణ ఆరోగ్య పరీక్ష శిబిరం",
    date: "February 18, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "JBR Clinic, Kothapet Main Road",
    description: "Complete health screening for all age groups with basic medical tests and consultations.",
    services: ["Blood Tests", "Blood Pressure", "BMI Check", "General Consultation"],
    isUpcoming: false,
    participants: 150,
    image: "/health-camp-general-checkup-february-2025-with-do.jpg"
  }
]

// Patient Reviews Data
export const patientReviews: Review[] = [
  {
    id: "review-priya-sharma",
    name: "Priya Sharma",
    rating: 5,
    date: "2 days ago",
    review: "Excellent service! Dr. Sajid is very knowledgeable and explains everything clearly. The digital token system saved so much time. Highly recommended!",
    treatment: "Diabetes Consultation",
    verified: true
  },
  {
    id: "review-rajesh-kumar",
    name: "Rajesh Kumar",
    rating: 5,
    date: "1 week ago",
    review: "Very professional clinic with modern facilities. No waiting time as promised. The staff is courteous and the doctor is experienced.",
    treatment: "General Checkup",
    verified: true
  },
  {
    id: "review-lakshmi-devi",
    name: "Lakshmi Devi",
    rating: 5,
    date: "2 weeks ago",
    review: "Best clinic in Guntur! The online appointment system is so convenient. Dr. Sajid treated my thyroid problem very effectively.",
    treatment: "Thyroid Treatment",
    verified: true
  },
  {
    id: "review-venkat-rao",
    name: "Venkat Rao",
    rating: 5,
    date: "3 weeks ago",
    review: "Impressed with the paperless system and quick service. The consultation was thorough and the prescribed medicines worked well.",
    treatment: "Hypertension",
    verified: true
  },
  {
    id: "review-sunitha-reddy",
    name: "Sunitha Reddy",
    rating: 5,
    date: "1 month ago",
    review: "Wonderful experience! The clinic is clean, well-organized, and the doctor is very patient in explaining the condition and treatment.",
    treatment: "Allergy Treatment",
    verified: true
  },
  {
    id: "review-mahesh-babu",
    name: "Mahesh Babu",
    rating: 5,
    date: "1 month ago",
    review: "Great service and affordable consultation fee. The digital health card feature is very useful for keeping track of medical history.",
    treatment: "Fever Treatment",
    verified: true
  }
]

// Medical Services Data
export const medicalServices: ServiceInfo[] = [
  {
    id: "general-medicine",
    name: "General Medicine",
    nameTelugu: "సాధారణ వైద్యం",
    category: "general",
    description: "Comprehensive healthcare for all ages including management of chronic diseases, preventive care, and health screenings.",
    icon: "Stethoscope",
    available: true,
    consultationFee: 200
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    nameTelugu: "మధుమేహ చికిత్స",
    category: "specialty",
    description: "Specialized diabetes management including blood sugar monitoring, HbA1c testing, diet counseling, and medication management.",
    icon: "Droplets",
    available: true,
    consultationFee: 200
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    nameTelugu: "శిశు వైద్యం",
    category: "specialty",
    description: "Comprehensive healthcare for infants, children, and adolescents including vaccinations and growth monitoring.",
    icon: "Baby",
    available: true,
    consultationFee: 200
  },
  {
    id: "cardiology",
    name: "Cardiology",
    nameTelugu: "గుండె వైద్యం",
    category: "specialty",
    description: "Heart care including ECG, blood pressure management, and treatment of cardiovascular diseases.",
    icon: "Heart",
    available: true,
    consultationFee: 300
  }
]

// Utility functions for CMS
export function getUpcomingHealthCamps(): HealthCamp[] {
  return healthCamps.filter(camp => camp.isUpcoming)
}

export function getPastHealthCamps(): HealthCamp[] {
  return healthCamps.filter(camp => !camp.isUpcoming)
}

export function getLatestReviews(limit: number = 6): Review[] {
  return patientReviews.slice(0, limit)
}

export function getServicesByCategory(category: ServiceInfo['category']): ServiceInfo[] {
  return medicalServices.filter(service => service.category === category && service.available)
}

export function getHealthCampById(id: string): HealthCamp | undefined {
  return healthCamps.find(camp => camp.id === id)
}

export function getAverageRating(): number {
  const totalRating = patientReviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((totalRating / patientReviews.length) * 10) / 10
}

export function getTotalReviews(): number {
  return patientReviews.length
}
