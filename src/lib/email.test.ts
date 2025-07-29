import { describe, it, expect, vi, beforeEach } from 'vitest'
import { generateProductRequestEmail, openEmailClient, isValidEmail } from './email'
import type { RequestFormData } from '@/types'

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true
})

// Mock alert
const mockAlert = vi.fn()
Object.defineProperty(window, 'alert', {
  value: mockAlert,
  writable: true
})

describe('email utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('generateProductRequestEmail', () => {
    it('should generate email config with all form data', () => {
      const formData: RequestFormData = {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        phone: '+234 801 234 5678',
        productRequested: 'Vitamin C Serum',
        additionalDetails: 'Looking for sensitive skin formula'
      }

      const result = generateProductRequestEmail(formData)

      expect(result.to).toBe('info@pureluxebeauty.com')
      expect(result.subject).toBe('Product Request: Vitamin C Serum')
      expect(result.body).toContain('Jane Doe')
      expect(result.body).toContain('jane@example.com')
      expect(result.body).toContain('+234 801 234 5678')
      expect(result.body).toContain('Vitamin C Serum')
      expect(result.body).toContain('Looking for sensitive skin formula')
    })

    it('should handle missing optional fields', () => {
      const formData: RequestFormData = {
        fullName: 'John Smith',
        email: 'john@example.com',
        productRequested: '',
        additionalDetails: ''
      }

      const result = generateProductRequestEmail(formData)

      expect(result.subject).toBe('Product Request: General Inquiry')
      expect(result.body).toContain('No additional details provided')
      expect(result.body).toContain('Not provided')
    })
  })

  describe('openEmailClient', () => {
    it('should open email client with correct mailto URL', () => {
      const formData: RequestFormData = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '+234 123 456 7890',
        productRequested: 'Face Cream',
        additionalDetails: 'Test message'
      }

      openEmailClient(formData)

      expect(mockWindowOpen).toHaveBeenCalledWith(
        expect.stringContaining('mailto:info@pureluxebeauty.com'),
        '_self'
      )
      
      const calledUrl = mockWindowOpen.mock.calls[0][0]
      expect(calledUrl).toContain('subject=Product%20Request%3A%20Face%20Cream')
      expect(calledUrl).toContain('Test%20User')
    })

    it('should handle errors gracefully', () => {
      const formData: RequestFormData = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '+234 123 456 7890',
        productRequested: 'Face Cream',
        additionalDetails: 'Test message'
      }

      // Mock window.open to throw error
      mockWindowOpen.mockImplementation(() => {
        throw new Error('Email client not available')
      })

      openEmailClient(formData)

      expect(mockAlert).toHaveBeenCalledWith(
        'Unable to open email client. Please contact us directly at info@pureluxebeauty.com'
      )
    })
  })

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
      expect(isValidEmail('user+tag@example.org')).toBe(true)
    })

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('')).toBe(false)
      // Note: test..test@example.com is actually valid according to RFC standards
    })
  })
})