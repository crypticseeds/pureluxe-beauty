import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" id="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('shows required indicator when required', () => {
    render(<Input label="Email" id="email" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<Input label="Email" id="email" error="Email is required" />)
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('displays helper text when no error', () => {
    render(<Input label="Email" id="email" helperText="Enter your email address" />)
    expect(screen.getByText('Enter your email address')).toBeInTheDocument()
  })

  it('hides helper text when error is present', () => {
    render(
      <Input 
        label="Email" 
        id="email" 
        error="Email is required" 
        helperText="Enter your email address" 
      />
    )
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.queryByText('Enter your email address')).not.toBeInTheDocument()
  })

  it('applies error styles when error prop is provided', () => {
    render(<Input label="Email" id="email" error="Email is required" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveClass('border-red-300', 'bg-red-50')
  })

  it('applies success styles when variant is success', () => {
    render(<Input label="Email" id="email" variant="success" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveClass('border-green-300', 'bg-green-50')
  })

  it('shows success icon when variant is success', () => {
    render(<Input label="Email" id="email" variant="success" />)
    const successIcon = screen.getByRole('textbox').parentElement?.querySelector('svg')
    expect(successIcon).toBeInTheDocument()
    expect(successIcon).toHaveClass('text-green-500')
  })

  it('shows error icon when error is present', () => {
    render(<Input label="Email" id="email" error="Email is required" />)
    const errorIcon = screen.getByRole('textbox').parentElement?.querySelector('svg')
    expect(errorIcon).toBeInTheDocument()
    expect(errorIcon).toHaveClass('text-red-500')
  })

  it('handles focus and blur events', () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    
    render(<Input label="Email" id="email" onFocus={onFocus} onBlur={onBlur} />)
    const input = screen.getByLabelText('Email')
    
    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalled()
    
    fireEvent.blur(input)
    expect(onBlur).toHaveBeenCalled()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Input ref={ref} label="Email" id="email" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('applies custom className', () => {
    render(<Input label="Email" id="email" className="custom-class" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveClass('custom-class')
  })

  it('handles disabled state', () => {
    render(<Input label="Email" id="email" disabled />)
    const input = screen.getByLabelText('Email')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })
})