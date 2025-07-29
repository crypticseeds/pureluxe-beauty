import { RequestFormData } from '@/types'
import { formatPhoneNumber } from './validations'

/**
 * WhatsApp business configuration
 */
export const WHATSAPP_CONFIG = {
  businessNumber: '+2349066130009', // Replace with actual business WhatsApp number
  businessName: 'Pureluxe Beauty'
}

/**
 * Generate WhatsApp message for product request
 */
export function generateProductRequestMessage(formData: Partial<RequestFormData>): string {
  let message = `Hello! I would like to request a product from ${WHATSAPP_CONFIG.businessName}.`
  
  if (formData.fullName) {
    message += `\n\nMy name: ${formData.fullName}`
  }
  
  if (formData.productRequested) {
    message += `\nProduct requested: ${formData.productRequested}`
  }
  
  if (formData.additionalDetails) {
    message += `\nAdditional details: ${formData.additionalDetails}`
  }
  
  if (formData.email) {
    message += `\nEmail: ${formData.email}`
  }
  
  if (formData.phone) {
    message += `\nPhone: ${formData.phone}`
  }
  
  message += `\n\nPlease let me know about availability and pricing. Thank you!`
  
  return message
}

/**
 * Generate WhatsApp URL for click-to-chat
 */
export function generateWhatsAppUrl(message: string, phoneNumber?: string): string {
  const number = phoneNumber || WHATSAPP_CONFIG.businessNumber
  const formattedNumber = formatPhoneNumber(number)
  return `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(formData: Partial<RequestFormData>, phoneNumber?: string): void {
  const message = generateProductRequestMessage(formData)
  const whatsappUrl = generateWhatsAppUrl(message, phoneNumber)
  
  // Try to open in new window/tab
  const newWindow = window.open(whatsappUrl, '_blank')
  
  // Fallback for popup blockers
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // If popup is blocked, try to navigate in current window
    window.location.href = whatsappUrl
  }
}

/**
 * Check if WhatsApp is available on the device
 */
export function isWhatsAppAvailable(): boolean {
  // WhatsApp web works on desktop, mobile app on mobile
  return true // WhatsApp web is available on all platforms
}

/**
 * Generate fallback contact options
 */
export function getFallbackContactOptions() {
  return {
    phone: {
      number: WHATSAPP_CONFIG.businessNumber,
      formatted: WHATSAPP_CONFIG.businessNumber,
      url: `tel:${WHATSAPP_CONFIG.businessNumber}`
    },
    sms: {
      number: WHATSAPP_CONFIG.businessNumber,
      url: `sms:${formatPhoneNumber(WHATSAPP_CONFIG.businessNumber)}`
    },
    email: {
      address: 'help@pureluxebeauti.com', // Replace with actual email
      url: 'mailto:help@pureluxebeauti.com?subject=Product Request'
    }
  }
}