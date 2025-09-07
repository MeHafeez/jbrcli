// Google Analytics 4 integration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url.pathname,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, parameters?: {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Track specific events for healthcare website
export const trackAppointmentBooking = (method: 'calendly' | 'phone' | 'whatsapp') => {
  event('appointment_booking_initiated', {
    event_category: 'engagement',
    event_label: method,
    value: 1
  })
}

export const trackContactFormSubmission = () => {
  event('contact_form_submission', {
    event_category: 'engagement',
    event_label: 'contact_form',
    value: 1
  })
}

export const trackServiceView = (service: string) => {
  event('service_view', {
    event_category: 'content',
    event_label: service,
    value: 1
  })
}

export const trackPhoneCall = () => {
  event('phone_call_initiated', {
    event_category: 'engagement',
    event_label: 'phone_number_click',
    value: 1
  })
}

export const trackWhatsAppMessage = () => {
  event('whatsapp_message_initiated', {
    event_category: 'engagement',
    event_label: 'whatsapp_click',
    value: 1
  })
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_path?: string
        [key: string]: any
      }
    ) => void
  }
}
