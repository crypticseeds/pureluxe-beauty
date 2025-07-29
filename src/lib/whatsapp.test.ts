import { describe, it, expect, vi, beforeEach } from 'vitest'
import { 
  generateProductRequestMessage, 
  generateWhatsAppUrl, 
  openWhatsApp,
  isWhatsAppAvailable,
  getFallbackContactOptions,
  WHATSAPP_CONFIG
} from './whatsapp'
import { RequestFormData } from '@/types'

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true,
})

// Mock window.location
const mockLocation = {
  href: ''
}
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
})

describe('WhatsApp utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocation.href = ''
  })

  describe('generateProductRequestMessage', () => {
    it('generates basic message with minimal data', () => {
      const formData: Partial<RequestFormData> = {}
      const message = generateProductRequestMessage(formData)
      
      expect(message).toContain('Hello! I would like to request a product from Pureluxe Beauty')
      expect(message).toContain('Please let me know about availability and pricing')
    })

    it('includes all form data when provided', () => {
      const formData: Partial<RequestFormData> = {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+234 801 234 5678',
        productRequested: 'Vitamin C Serum',
        additionalDetails: 'Looking for sensitive skin formula'
      }
      
      const message = generateProductRequestMessage(formData)
      
      expect(message).toContain('My name: John Doe')
      expect(message).toContain('Product requested: Vitamin C Serum')
      expect(message).toContain('Additional details: Looking for sensitive skin formula')
      expect(message).toContain('Email: john@example.com')
      expect(message).toContain('Phone: +234 801 234 5678')
    })

    it('handles partial form data gracefully', () => {
      const formData: Partial<RequestFormData> = {
        fullName: 'Jane Doe',
        productRequested: 'Face Cream'
      }
      
      const message = generateProductRequestMessage(formData)
      
      expect(message).toContain('My name: Jane Doe')
      expect(message).toContain('Product requested: Face Cream')
      expect(message).not.toContain('Email:')
      expect(message).not.toContain('Phone:')
      expect(message).not.toContain('Additional details:')
    })
  })

  describe('generateWhatsAppUrl', () => {
    it('generates correct WhatsApp URL with default number', () => {
      const message = 'Test message'
      const url = generateWhatsAppUrl(message)
      
      expect(url).toContain('https://wa.me/')
      expect(url).toContain('text=Test%20message')
    })

    it('generates correct WhatsApp URL with custom number', () => {
      const message = 'Test message'
      const customNumber = '+234 901 234 5678'
      const url = generateWhatsAppUrl(message, customNumber)
      
      expect(url).toContain('https://wa.me/234901234567')
      expect(url).toContain('text=Test%20message')
    })

    it('properly encodes message with special characters', () => {
      const message = 'Hello! This is a test message with special chars: @#$%'
      const url = generateWhatsAppUrl(message)
      
      expect(url).toContain('text=Hello!%20This%20is%20a%20test%20message%20with%20special%20chars%3A%20%40%23%24%25')
    })
  })

  describe('openWhatsApp', () => {
    it('opens WhatsApp in new window when popup is allowed', () => {
      const mockWindow = { closed: false }
      mockWindowOpen.mockReturnValue(mockWindow)
      
      const formData: Partial<RequestFormData> = {
        fullName: 'John Doe',
        productRequested: 'Test Product'
      }
      
      openWhatsApp(formData)
      
      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('https://wa.me/'),
        '_blank'
      )
      expect(mockLocation.href).toBe('')
    })

    it('falls back to current window when popup is blocked', () => {
      mockWindowOpen.mockReturnValue(null)
      
      const formData: Partial<RequestFormData> = {
        fullName: 'John Doe',
        productRequested: 'Test Product'
      }
      
      openWhatsApp(formData)
      
      expect(mockWindowOpen).toHaveBeenCalled()
      expect(mockLocation.href).toContain('https://wa.me/')
    })

    it('falls back to current window when popup is closed', () => {
      const mockWindow = { closed: true }
      mockWindowOpen.mockReturnValue(mockWindow)
      
      const formData: Partial<RequestFormData> = {
        fullName: 'John Doe',
        productRequested: 'Test Product'
      }
      
      openWhatsApp(formData)
      
      expect(mockWindowOpen).toHaveBeenCalled()
      expect(mockLocation.href).toContain('https://wa.me/')
    })
  })

  describe('isWhatsAppAvailable', () => {
    it('returns true for all platforms', () => {
      expect(isWhatsAppAvailable()).toBe(true)
    })
  })

  describe('getFallbackContactOptions', () => {
    it('returns correct fallback contact options', () => {
      const options = getFallbackContactOptions()
      
      expect(options.phone.number).toBe(WHATSAPP_CONFIG.businessNumber)
      expect(options.phone.url).toContain('tel:')
      expect(options.sms.url).toContain('sms:')
      expect(options.email.address).toContain('@')
      expect(options.email.url).toContain('mailto:')
    })

    it('provides properly formatted phone URLs', () => {
      const options = getFallbackContactOptions()
      
      expect(options.phone.url).toBe(`tel:${WHATSAPP_CONFIG.businessNumber}`)
      expect(options.sms.url).toContain('sms:234')
    })

    it('provides properly formatted email URL', () => {
      const options = getFallbackContactOptions()
      
      expect(options.email.url).toContain('mailto:')
      expect(options.email.url).toContain('subject=Product Request')
    })
  })

  describe('WHATSAPP_CONFIG', () => {
    it('has required configuration properties', () => {
      expect(WHATSAPP_CONFIG.businessNumber).toBeDefined()
      expect(WHATSAPP_CONFIG.businessName).toBeDefined()
      expect(WHATSAPP_CONFIG.businessName).toBe('Pureluxe Beauty')
    })
  })
})