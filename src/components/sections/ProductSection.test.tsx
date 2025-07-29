import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { ProductSection } from './ProductSection'
import { Product } from '@/types'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: unknown) => <img src={src} alt={alt} {...props} />,
}))

const mockProducts: Product[] = [
  {
    id: 'test-1',
    name: 'Test Product 1',
    brand: 'Test Brand',
    price: '$29.99',
    image: '/test-image-1.jpg',
    category: 'serum',
    badge: 'new',
    description: 'Test description'
  },
  {
    id: 'test-2',
    name: 'Test Product 2',
    brand: 'Another Brand',
    price: '$39.99',
    image: '/test-image-2.jpg',
    category: 'cream',
    badge: 'trending',
    description: 'Another test description'
  }
]

describe('ProductSection', () => {
  it('renders section with title', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByTestId('product-section')).toBeInTheDocument()
  })

  it('renders section with title and subtitle', () => {
    render(
      <ProductSection
        title="New Arrivals"
        subtitle="Discover our latest beauty products"
        products={mockProducts}
      />
    )

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Discover our latest beauty products')).toBeInTheDocument()
  })

  it('renders all products in grid layout', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    expect(screen.getByTestId('product-card-test-1')).toBeInTheDocument()
    expect(screen.getByTestId('product-card-test-2')).toBeInTheDocument()
    expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    expect(screen.getByText('Test Product 2')).toBeInTheDocument()
  })

  it('displays product details correctly', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    // Check first product
    expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    expect(screen.getByText('Test Brand')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()

    // Check second product
    expect(screen.getByText('Test Product 2')).toBeInTheDocument()
    expect(screen.getByText('Another Brand')).toBeInTheDocument()
    expect(screen.getByText('$39.99')).toBeInTheDocument()
  })

  it('displays badges correctly', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Trending')).toBeInTheDocument()
  })

  it('renders empty state when no products', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={[]}
      />
    )

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('No products available at the moment.')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
        className="custom-class"
      />
    )

    const section = screen.getByTestId('product-section')
    expect(section).toHaveClass('custom-class')
  })

  it('has proper responsive grid classes', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    const gridContainer = screen.getByTestId('product-section').querySelector('.grid')
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'sm:grid-cols-2',
      'lg:grid-cols-3',
      'xl:grid-cols-4',
      'gap-6'
    )
  })

  it('has proper container max-width', () => {
    render(
      <ProductSection
        title="New Arrivals"
        products={mockProducts}
      />
    )

    const container = screen.getByTestId('product-section').querySelector('.max-w-7xl')
    expect(container).toHaveClass('max-w-7xl', 'mx-auto')
  })
})