import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-pink-500', 'h-10', 'px-4', 'py-2')
  })

  it('renders with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-pink-500', 'text-white', 'hover:bg-pink-600')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-yellow-400', 'text-gray-900', 'hover:bg-yellow-500')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border', 'border-pink-500', 'text-pink-500', 'hover:bg-pink-50')
  })

  it('renders with small size', () => {
    render(<Button size="sm">Small Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-9', 'px-3', 'text-sm')
  })

  it('renders with medium size (default)', () => {
    render(<Button size="md">Medium Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-10', 'px-4', 'py-2')
  })

  it('renders with large size', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-11', 'px-8', 'text-lg')
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not trigger click when disabled', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Ref Button</Button>)
    expect(ref).toHaveBeenCalled()
  })

  it('has proper focus styles', () => {
    render(<Button>Focus Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-offset-2')
  })

  it('has proper accessibility attributes', () => {
    render(<Button>Accessible Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('supports all HTML button attributes', () => {
    render(
      <Button 
        type="submit" 
        form="test-form" 
        aria-label="Submit form"
        data-testid="submit-button"
      >
        Submit
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveAttribute('form', 'test-form')
    expect(button).toHaveAttribute('aria-label', 'Submit form')
    expect(button).toHaveAttribute('data-testid', 'submit-button')
  })
})