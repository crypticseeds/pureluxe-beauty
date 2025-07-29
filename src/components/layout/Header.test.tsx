import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { Header } from './Header'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

// Mock scrollIntoView
const mockScrollIntoView = vi.fn()
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
})

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
})

describe('Header', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear()
    window.scrollY = 0
  })

  it('renders the logo and navigation items', () => {
    render(<Header />)
    
    expect(screen.getByAltText('Pureluxe Beauty - Premium Beauty Products and Services')).toBeInTheDocument()
    expect(screen.getAllByText('Home')).toHaveLength(2) // Desktop and mobile
    expect(screen.getAllByText('Products')).toHaveLength(2) // Desktop and mobile
    expect(screen.getAllByText('Services')).toHaveLength(2) // Desktop and mobile
    expect(screen.getAllByText('Contact')).toHaveLength(2) // Desktop and mobile
  })

  it('renders the Request Item CTA button', () => {
    render(<Header />)
    
    const ctaButtons = screen.getAllByText('Request Item')
    expect(ctaButtons).toHaveLength(2) // Desktop and mobile versions
  })

  it('shows mobile menu button on mobile', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    expect(menuButton).toBeInTheDocument()
  })

  it('opens and closes mobile menu', async () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    
    // Open menu
    fireEvent.click(menuButton)
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
      expect(dialog).toHaveClass('translate-x-0')
      expect(screen.getByText('Menu')).toBeInTheDocument()
    })
    
    // Close menu using the close button inside the dialog
    const dialog = screen.getByRole('dialog')
    const closeButton = dialog.querySelector('button[aria-label="Close navigation menu"]')
    if (closeButton) {
      fireEvent.click(closeButton)
    }
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('translate-x-full')
    })
  })

  it('handles navigation clicks', () => {
    // Mock getElementById
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as HTMLElement)
    
    render(<Header />)
    
    // Get the desktop navigation Home link specifically
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' })
    const homeLink = navigation.querySelector('a[href="#home"]')
    
    if (homeLink) {
      fireEvent.click(homeLink)
    }
    
    expect(document.getElementById).toHaveBeenCalledWith('home')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('applies scroll styles when scrolled', () => {
    render(<Header />)
    
    // Simulate scroll
    window.scrollY = 100
    fireEvent.scroll(window)
    
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white/95', 'backdrop-blur-sm', 'shadow-md')
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(navigation).toBeInTheDocument()
    
    const logo = screen.getByLabelText('Pureluxe Beauty - Go to homepage')
    expect(logo).toBeInTheDocument()
  })

  it('prevents body scroll when mobile menu is open', async () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('hidden')
    })
    
    // Close menu using the close button inside the dialog
    const dialog = screen.getByRole('dialog')
    const closeButton = dialog.querySelector('button[aria-label="Close navigation menu"]')
    if (closeButton) {
      fireEvent.click(closeButton)
    }
    
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('unset')
    })
  })

  it('closes mobile menu when clicking navigation items', async () => {
    const mockElement = { scrollIntoView: mockScrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as HTMLElement)
    
    render(<Header />)
    
    // Open menu
    const menuButton = screen.getByLabelText('Open navigation menu')
    fireEvent.click(menuButton)
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('translate-x-0')
    })
    
    // Click a navigation item in mobile menu
    const dialog = screen.getByRole('dialog')
    const mobileNavigation = dialog.querySelector('nav[aria-label="Mobile navigation"]')
    const productsLink = mobileNavigation?.querySelector('a[href="#products"]')
    
    if (productsLink) {
      fireEvent.click(productsLink)
    }
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('translate-x-full')
    }, { timeout: 2000 })
  })
})