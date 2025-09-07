export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // For now, we'll simulate email sending
    // In production, you would integrate with services like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - EmailJS (client-side)
    
    console.log('Contact form submission:', data)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, always return success
    // In production, you would make an actual API call
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try calling us directly.'
    }
  }
}

// Example integration with Resend (commented out for now)
/*
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'noreply@jbrclinic.com',
      to: 'info@jbrclinic.com',
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (error) {
      throw error
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try calling us directly.'
    }
  }
}
*/
