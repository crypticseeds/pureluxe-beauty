import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { Footer } from './Footer'

// Mock scrollIntoView
const mockScrollIntoView = vi.fn()
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
})

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
})

describe('Footer', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear()
    mockWindowOpen.mockClear()
  })

  it('renders company information', () => {
    render(<Footer />)
    
    expect(screen.getByAltText('Pureluxe Beauty')).toBeInTheDocument()
    expect(screen.getByText(/Your trusted destination for premium beauty products/)).toBeInTheDocument()
    expect(screen.getByText(/123 Beauty Street, Victoria Island/)).toBeInTheDocument()
    expect(screen.getByText('+234 812 345 6789')).toBeInTheDocument()
    expect(screen.getByText('info@pureluxebeauty.com')).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Request Item')).toBeInTheDocument()
  })

  it('renders services list', () => {
    render(<Footer />)
    
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Bridal Packages')).toBeInTheDocument()
    expect(screen.getByText('Facial Treatments')).toBeInTheDocument()
    expect(screen.getByText('Manicure Services')).toBeInTheDocument()
    expect(screen.getByText('Skincare Consultations')).toBeInTheDocument()
    expect(screen.getByText('Trichology Services')).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<Footer />)
    
    expect(screen.getByText('Business Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM - 7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('10:00 AM - 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('12:00 PM - 5:00 PM')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on WhatsApp')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Twitter')).toBeInTheDocument()
  })

  it('renders copyright and legal links', () => {
    const currentYear = new Date().getFullYear()
    render(<Footer />)
    
    expect(screen.getByText(`© ${currentYear} Pureluxe Beauty. All rights reserved.`)).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Return Policy')).toBeInTheDocument()
  })

  it('handles internal navigation clicks', () => {
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any)
    
    render(<Footer />)
    
    const homeLink = screen.getByText('Home')
    fireEvent.click(homeLink)
    
    expect(document.getElementById).toHaveBeenCalledWith('home')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('handles external social media links', () => {
    render(<Footer />)
    
    const instagramLink = screen.getByLabelText('Follow us on Instagram')
    fireEvent.click(instagramLink)
    
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://instagram.com/pureluxebeauty',
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('handles phone and email links', () => {
    render(<Footer />)
    
    const phoneLink = screen.getByLabelText('Call Pureluxe Beauty')
    expect(phoneLink).toHaveAttribute('href', 'tel:+2348123456789')
    
    const emailLink = screen.getByLabelText('Email Pureluxe Beauty')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@pureluxebeauty.com')
  })

  it('has proper accessibility attributes', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    
    const quickLinksNav = screen.getByRole('navigation', { name: 'Footer quick links' })
    expect(quickLinksNav).toBeInTheDocument()
  })

  it('applies responsive grid layout classes', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    const gridContainer = footer.querySelector('.grid')
    
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4')
  })

  it('handles legal policy links', () => {
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any)
    
    render(<Footer />)
    
    const privacyLink = screen.getByText('Privacy Policy')
    fireEvent.click(privacyLink)
    
    expect(document.getElementById).toHaveBeenCalledWith('privacy')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})