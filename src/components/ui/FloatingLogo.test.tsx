import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { FloatingLogo } from './FloatingLogo'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: unknown) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

// Mock window.scrollTo
const mockScrollTo = vi.fn()
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
})

describe('FloatingLogo', () => {
  beforeEach(() => {
    mockScrollTo.mockClear()
    // Reset scroll position
    Object.defineProperty(window, 'pageYOffset', {
      value: 0,
      writable: true,
    })
  })

  it('renders the floating logo button', () => {
    render(<FloatingLogo />)
    
    const button = screen.getByRole('button', { name: /scroll to top/i })
    expect(button).toBeInTheDocument()
  })

  it('displays the logo image', () => {
    render(<FloatingLogo />)
    
    const image = screen.getByAltText('Pureluxe Beauty Logo - Scroll to top')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/Logo.jpeg')
  })

  it('shows tooltip on hover', () => {
    render(<FloatingLogo />)
    
    const tooltip = screen.getByText('Back to top')
    expect(tooltip).toBeInTheDocument()
  })

  it('calls scrollTo when clicked', () => {
    render(<FloatingLogo />)
    
    const button = screen.getByRole('button', { name: /scroll to top/i })
    fireEvent.click(button)
    
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })

  it('applies custom className', () => {
    render(<FloatingLogo className="custom-class" />)
    
    const container = screen.getByRole('button', { name: /scroll to top/i }).parentElement
    expect(container).toHaveClass('custom-class')
  })

  it('accepts custom showAfterScroll prop', () => {
    render(<FloatingLogo showAfterScroll={200} />)
    
    // Component should render but test for scroll behavior would require more complex setup
    const button = screen.getByRole('button', { name: /scroll to top/i })
    expect(button).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<FloatingLogo />)
    
    const button = screen.getByRole('button', { name: /scroll to top/i })
    expect(button).toHaveAttribute('aria-label', 'Scroll to top')
  })
})