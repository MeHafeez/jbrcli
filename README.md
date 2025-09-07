# JBR Clinic Website

A modern, responsive healthcare website built with Next.js 14, featuring online appointment booking, digital health management, and comprehensive patient services.

## 🏥 About JBR Clinic

JBR Clinic is a trusted multi-specialty healthcare provider in Guntur, Andhra Pradesh, offering:
- Same-day appointments with zero waiting time
- Digital health card system
- 24/7 online token booking
- Comprehensive medical services
- Free community health camps

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Online Appointment Booking**: Integrated Calendly widget for seamless scheduling
- **Digital Health Records**: Paperless medical record management
- **Multi-language Support**: English and Telugu content
- **Contact Management**: Functional contact forms with email integration

### Technical Features
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance Optimized**: Image optimization, lazy loading, and Next.js optimizations
- **Analytics Integration**: Google Analytics for user behavior tracking
- **Accessibility**: ARIA labels, keyboard navigation, and WCAG compliance
- **Dynamic Content**: CMS-like structure for easy content management

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI with shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Maps**: Google Maps integration
- **Booking**: Calendly integration
- **Package Manager**: pnpm

## 📁 Project Structure

```
jbr/
├── app/                     # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── services/           # Medical services
│   ├── appointments/       # Appointment booking
│   ├── health-camps/       # Community health camps
│   ├── contact/            # Contact page
│   ├── reviews/            # Patient reviews
│   ├── layout.tsx          # Root layout with SEO
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── navigation.tsx      # Main navigation
│   ├── footer.tsx          # Footer component
│   ├── floating-cta.tsx    # Floating call-to-action
│   ├── optimized-image.tsx # Image optimization component
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
│   ├── analytics.ts        # Google Analytics integration
│   ├── cms.ts              # Content management system
│   ├── email.ts            # Email service integration
│   └── utils.ts            # General utilities
├── public/                 # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   └── images/             # Optimized images
└── styles/                 # Additional styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jbr
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
   RESEND_API_KEY=your_email_service_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Service Setup

The contact form supports multiple email services:

### Option 1: Resend (Recommended)
```env
RESEND_API_KEY=your_resend_api_key
```

### Option 2: SendGrid
```env
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@jbrclinic.com
```

### Option 3: SMTP (Gmail)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 🗺️ Google Maps Integration

To display the clinic location:

1. Get a Google Maps API key
2. Add to environment variables:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
   ```

## 📅 Calendly Integration

For appointment booking:

1. Create a Calendly account
2. Set up appointment types
3. Add your Calendly URL:
   ```env
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation
   ```

## 📊 Analytics Setup

Configure Google Analytics:

1. Create a GA4 property
2. Add the tracking ID:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🎨 Customization

### Colors and Branding
Update the color scheme in `app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.2 258.38);
  --saffron: oklch(0.65 0.18 65);
  /* Add your brand colors */
}
```

### Content Management
Update content in `lib/cms.ts`:
- Health camps information
- Patient reviews
- Medical services
- Clinic information

### Contact Information
Update clinic details in:
- Navigation component
- Contact page
- Footer component
- Environment variables

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 640px and below
- Tablet: 641px - 1024px
- Desktop: 1025px and above

## ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- XML sitemap
- Canonical URLs
- Google verification

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables
3. Deploy automatically on push

### Other Platforms
Compatible with:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📈 Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- Code splitting
- Bundle analysis
- Caching strategies

## 🧪 Testing

```bash
# Run linting
pnpm lint

# Type checking
pnpm type-check

# Build for production
pnpm build
```

## 📄 License

This project is proprietary software for JBR Clinic.

## 🤝 Support

For technical support or feature requests:
- Email: tech@jbrclinic.com
- Phone: +91-863-1234567

## 🔄 Updates

The website includes dynamic content management for:
- Health camp schedules
- Patient reviews
- Service information
- Doctor profiles

Update content by modifying the CMS files in the `lib/` directory.

---

**Built with ❤️ by HallowByte for JBR Clinic**
