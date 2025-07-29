import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ImageGallery } from './ImageGallery'
import { ProductImage } from '@/types'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, onLoad, ...props }: unknown) => (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      {...props}
      data-testid="mock-image"
    />
  )
}))

// Mock createPortal
vi.mock('react-dom', () => ({
  ...vi.importActual('react-dom'),
  createPortal: (children: React.ReactNode) => children
}))

const mockImages: ProductImage[] = [
  {
    src: '/test-image-1.jpg',
    alt: 'Test image 1'
  },
  {
    src: '/test-image-2.jpg',
    alt: 'Test image 2'
  },
  {
    src: '/test-image-3.jpg',
    alt: 'Test image 3'
  }
]

const defaultProps = {
  isOpen: true,
  onClose: vi.fn(),
  images: mockImages,
  productName: 'Test Product',
  productBrand: 'Test Brand'
}

describe('ImageGallery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock document.body for portal
    document.body.innerHTML = ''
  })

  afterEach(() => {
    // Reset body overflow
    document.body.style.overflow = 'unset'
  })

  it('renders when open', () => {
    render(<ImageGallery {...defaultProps} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test Brand')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(<ImageGallery {...defaultProps} isOpen={false} />)
    
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument()
  })

  it('displays the first image by default', () => {
    render(<ImageGallery {...defaultProps} />)
    
    const images = screen.getAllByTestId('mock-image')
    const mainImage = images[0]
    expect(mainImage).toHaveAttribute('src', '/test-image-1.jpg')
  })

  it('shows image counter when multiple images', () => {
    render(<ImageGallery {...defaultProps} />)
    
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('navigates to next image when next button clicked', () => {
    render(<ImageGallery {...defaultProps} />)
    
    const nextButton = screen.getByLabelText('Next image')
    fireEvent.click(nextButton)
    
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('navigates to previous image when previous button clicked', () => {
    render(<ImageGallery {...defaultProps} initialImageIndex={1} />)
    
    const prevButton = screen.getByLabelText('Previous image')
    fireEvent.click(prevButton)
    
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('wraps around when navigating past last image', () => {
    render(<ImageGallery {...defaultProps} initialImageIndex={2} />)
    
    const nextButton = screen.getByLabelText('Next image')
    fireEvent.click(nextButton)
    
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('wraps around when navigating before first image', () => {
    render(<ImageGallery {...defaultProps} initialImageIndex={0} />)
    
    const prevButton = screen.getByLabelText('Previous image')
    fireEvent.click(prevButton)
    
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })

  it('closes when close button clicked', () => {
    const onClose = vi.fn()
    render(<ImageGallery {...defaultProps} onClose={onClose} />)
    
    const closeButton = screen.getByLabelText('Close gallery')
    fireEvent.click(closeButton)
    
    expect(onClose).toHaveBeenCalled()
  })

  it('closes when backdrop clicked', () => {
    const onClose = vi.fn()
    render(<ImageGallery {...defaultProps} onClose={onClose} />)
    
    const backdrop = screen.getByRole('dialog').parentElement
    fireEvent.click(backdrop!)
    
    expect(onClose).toHaveBeenCalled()
  })

  it('does not close when modal content clicked', () => {
    const onClose = vi.fn()
    render(<ImageGallery {...defaultProps} onClose={onClose} />)
    
    const modalContent = screen.getByRole('dialog')
    fireEvent.click(modalContent)
    
    expect(onClose).not.toHaveBeenCalled()
  })

  it('navigates with keyboard arrows', () => {
    render(<ImageGallery {...defaultProps} />)
    
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    
    fireEvent.keyDown(document, { key: 'ArrowLeft' })
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('closes with Escape key', () => {
    const onClose = vi.fn()
    render(<ImageGallery {...defaultProps} onClose={onClose} />)
    
    fireEvent.keyDown(document, { key: 'Escape' })
    
    expect(onClose).toHaveBeenCalled()
  })

  it('navigates to specific image when thumbnail clicked', () => {
    render(<ImageGallery {...defaultProps} />)
    
    const thumbnails = screen.getAllByRole('button')
    const thirdThumbnail = thumbnails.find(btn => 
      btn.querySelector('img')?.getAttribute('alt')?.includes('view 3')
    )
    
    if (thirdThumbnail) {
      fireEvent.click(thirdThumbnail)
      expect(screen.getByText('3 / 3')).toBeInTheDocument()
    }
  })

  it('prevents body scroll when open', () => {
    render(<ImageGallery {...defaultProps} />)
    
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body scroll when closed', () => {
    const { rerender } = render(<ImageGallery {...defaultProps} />)
    
    rerender(<ImageGallery {...defaultProps} isOpen={false} />)
    
    expect(document.body.style.overflow).toBe('unset')
  })

  it('handles single image without navigation controls', () => {
    const singleImage = [mockImages[0]]
    render(<ImageGallery {...defaultProps} images={singleImage} />)
    
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument()
    expect(screen.queryByText('1 / 1')).not.toBeInTheDocument()
  })
})