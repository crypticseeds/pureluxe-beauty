import { RequestFormData } from '@/types'

export interface EmailConfig {
  to: string
  subject: string
  body: string
}

/**
 * Generate email configuration for product request
 */
export function generateProductRequestEmail(formData: RequestFormData): EmailConfig {
  const subject = `Product Request: ${formData.productRequested || 'General Inquiry'}`
  
  const body = `Hello Pureluxe Beauty Team,

I would like to request information about a product from your collection.

Customer Details:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

Product Request:
• Product Name: ${formData.productRequested}
• Additional Details: ${formData.additionalDetails || 'No additional details provided'}

Please get back to me with availability, pricing, and any other relevant information.

Thank you for your time!

Best regards,
${formData.fullName}`

  return {
    to: 'info@pureluxebeauty.com', // Business email
    subject,
    body
  }
}

/**
 * Open default email client with pre-filled email
 */
export function openEmailClient(formData: RequestFormData): void {
  try {
    const emailConfig = generateProductRequestEmail(formData)
    
    // Create mailto URL with encoded parameters
    const mailtoUrl = `mailto:${emailConfig.to}?subject=${encodeURIComponent(emailConfig.subject)}&body=${encodeURIComponent(emailConfig.body)}`
    
    // Open email client
    window.open(mailtoUrl, '_self')
  } catch {
    // Fallback: copy email to clipboard or show error message
    alert('Unable to open email client. Please contact us directly at info@pureluxebeauty.com')
  }
}

/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}