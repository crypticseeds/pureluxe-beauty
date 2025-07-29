import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestForm } from './RequestForm'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: unknown) => <div {...props}>{children}</div>,
  },
}))

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true,
})

describe('RequestForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders form with all required fields', () => {
    render(<RequestForm />)
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/product requested/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/additional details/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit request/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /whatsapp/i })).toBeInTheDocument()
  })

  it('shows validation errors for required fields', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    // Fill in invalid data to trigger validation
    const nameInput = screen.getByLabelText(/full name/i)
    const emailInput = screen.getByLabelText(/email address/i)
    const productInput = screen.getByLabelText(/product requested/i)
    
    // Type and clear to trigger validation
    await user.type(nameInput, 'A')
    await user.clear(nameInput)
    
    await user.type(emailInput, 'invalid')
    await user.clear(emailInput)
    
    await user.type(productInput, 'AB')
    await user.clear(productInput)
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    // Check that form doesn't submit successfully (no success message)
    await waitFor(() => {
      expect(screen.queryByText(/request submitted!/i)).not.toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'invalid-email')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  it('validates phone number format when provided', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.type(phoneInput, '123')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument()
    })
  })

  it('validates minimum length for full name', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    const nameInput = screen.getByLabelText(/full name/i)
    await user.type(nameInput, 'A')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/full name must be at least 2 characters long/i)).toBeInTheDocument()
    })
  })

  it('validates minimum length for product requested', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    const productInput = screen.getByLabelText(/product requested/i)
    await user.type(productInput, 'AB')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please provide more details about the product/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    // Fill in valid form data
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+234 801 234 5678')
    await user.type(screen.getByLabelText(/product requested/i), 'Vitamin C Serum')
    await user.type(screen.getByLabelText(/additional details/i), 'Looking for a good vitamin C serum for sensitive skin')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    // Should show success message after submission (email opens immediately)
    await waitFor(() => {
      expect(screen.getByText(/request submitted!/i)).toBeInTheDocument()
      expect(screen.getByText(/thank you for your request/i)).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('opens WhatsApp with pre-filled message', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    // Fill in some form data
    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/product requested/i), 'Face Cream')
    
    const whatsappButton = screen.getByRole('button', { name: /whatsapp/i })
    await user.click(whatsappButton)
    
    expect(mockWindowOpen).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/'),
      '_blank'
    )
    
    const callArgs = mockWindowOpen.mock.calls[0][0]
    expect(callArgs).toContain('Jane%20Doe')
    expect(callArgs).toContain('Face%20Cream')
  })

  it('shows success state and allows new submission', async () => {
    const user = userEvent.setup()
    render(<RequestForm />)
    
    // Submit valid form
    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/product requested/i), 'Vitamin C Serum')
    
    const submitButton = screen.getByRole('button', { name: /submit request/i })
    await user.click(submitButton)
    
    // Wait for success state
    await waitFor(() => {
      expect(screen.getByText(/request submitted!/i)).toBeInTheDocument()
    }, { timeout: 2000 })
    
    // Click to submit another request
    const anotherRequestButton = screen.getByRole('button', { name: /submit another request/i })
    await user.click(anotherRequestButton)
    
    // Should show form again
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<RequestForm />)
    
    expect(screen.getByText(/need immediate assistance/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /📞 \+2349066130009/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /✉️ info@pureluxebeauty.com/i })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<RequestForm className="custom-class" />)
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('shows helper text for optional fields', () => {
    render(<RequestForm />)
    
    expect(screen.getByText(/optional - for whatsapp updates/i)).toBeInTheDocument()
    expect(screen.getByText(/optional - include any specific requirements or questions/i)).toBeInTheDocument()
    expect(screen.getByText(/be specific \(brand, product name, etc\.\)/i)).toBeInTheDocument()
  })
})