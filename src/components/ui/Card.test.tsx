import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Heart } from 'lucide-react'
import { Card, ProductCard, ServiceCard } from './Card'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onHoverStart, ...props }: any) => (
      <div 
        {...props} 
        onMouseEnter={onHoverStart}
      >
        {children}
      </div>
    ),
  },
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('rounded-lg', 'border', 'bg-white', 'shadow-sm')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Card ref={ref}>Card content</Card>)
    expect(ref).toHaveBeenCalled()
  })
})

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Vitamin C Serum',
    brand: 'SkinCare Pro',
    price: '$29.99',
    image: '/test-image.jpg'
  }

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />)
    
    expect(screen.getByText('Vitamin C Serum')).toBeInTheDocument()
    expect(screen.getByText('SkinCare Pro')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByAltText('Vitamin C Serum by SkinCare Pro - Premium beauty product available at Pureluxe Beauty')).toBeInTheDocument()
  })

  it('displays "New" badge when badge prop is "new"', () => {
    render(<ProductCard {...mockProduct} badge="new" />)
    
    const badge = screen.getByText('New')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-pink-500', 'text-white')
  })

  it('displays "Trending" badge when badge prop is "trending"', () => {
    render(<ProductCard {...mockProduct} badge="trending" />)
    
    const badge = screen.getByText('Trending')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-yellow-400', 'text-gray-900')
  })

  it('does not display badge when badge prop is not provided', () => {
    render(<ProductCard {...mockProduct} />)
    
    expect(screen.queryByText('New')).not.toBeInTheDocument()
    expect(screen.queryByText('Trending')).not.toBeInTheDocument()
  })

  it('calls onHover when hovered', () => {
    const handleHover = vi.fn()
    render(<ProductCard {...mockProduct} onHover={handleHover} />)
    
    const card = screen.getByTestId('product-card-1')
    fireEvent.mouseEnter(card)
    
    expect(handleHover).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<ProductCard {...mockProduct} className="custom-product-class" />)
    
    const card = screen.getByTestId('product-card-1')
    expect(card).toHaveClass('custom-product-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<ProductCard {...mockProduct} ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('has proper image attributes for accessibility', () => {
    render(<ProductCard {...mockProduct} />)
    
    const image = screen.getByAltText('Vitamin C Serum by SkinCare Pro - Premium beauty product available at Pureluxe Beauty')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })
})

describe('ServiceCard', () => {
  const mockService = {
    title: 'Facial Treatment',
    description: 'Professional facial treatment for glowing skin',
    icon: Heart
  }

  it('renders service information correctly', () => {
    render(<ServiceCard {...mockService} />)
    
    expect(screen.getByText('Facial Treatment')).toBeInTheDocument()
    expect(screen.getByText('Professional facial treatment for glowing skin')).toBeInTheDocument()
  })

  it('renders icon correctly', () => {
    render(<ServiceCard {...mockService} />)
    
    // The icon should be rendered within the card
    const card = screen.getByTestId('service-card-facial-treatment')
    expect(card).toBeInTheDocument()
  })

  it('applies featured styling when featured prop is true', () => {
    render(<ServiceCard {...mockService} featured />)
    
    const card = screen.getByTestId('service-card-facial-treatment')
    const cardElement = card.querySelector('.border-pink-200')
    expect(cardElement).toBeInTheDocument()
  })

  it('applies default styling when featured prop is false', () => {
    render(<ServiceCard {...mockService} featured={false} />)
    
    const card = screen.getByTestId('service-card-facial-treatment')
    const cardElement = card.querySelector('.border-gray-200')
    expect(cardElement).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ServiceCard {...mockService} className="custom-service-class" />)
    
    const card = screen.getByTestId('service-card-facial-treatment')
    expect(card).toHaveClass('custom-service-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<ServiceCard {...mockService} ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('generates correct test id from title', () => {
    render(<ServiceCard {...mockService} title="Bridal Makeup Package" />)
    
    const card = screen.getByTestId('service-card-bridal-makeup-package')
    expect(card).toBeInTheDocument()
  })

  it('handles multi-word titles in test id generation', () => {
    render(<ServiceCard {...mockService} title="Advanced Skincare Consultation" />)
    
    const card = screen.getByTestId('service-card-advanced-skincare-consultation')
    expect(card).toBeInTheDocument()
  })
})