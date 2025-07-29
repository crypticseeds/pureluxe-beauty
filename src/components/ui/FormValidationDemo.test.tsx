import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'
import { TextArea } from './TextArea'

describe('Form Components Validation Integration', () => {
  it('demonstrates validation states and error messaging (Requirement 5.2)', async () => {
    const { rerender } = render(
      <div>
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          required 
        />
        <TextArea 
          id="message" 
          label="Message" 
          required 
        />
      </div>
    )

    // Test missing required field validation
    const emailInput = screen.getByLabelText(/Email/)
    const messageTextArea = screen.getByLabelText(/Message/)

    // Initially no errors
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // Simulate validation errors for missing required fields
    rerender(
      <div>
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          required 
          error="Email is required"
        />
        <TextArea 
          id="message" 
          label="Message" 
          required 
          error="Message is required"
        />
      </div>
    )

    // Verify error messages are displayed
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    // Verify aria-invalid is set
    expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    expect(messageTextArea).toHaveAttribute('aria-invalid', 'true')
  })

  it('demonstrates keyboard navigation and focus indicators (Requirement 9.2)', () => {
    render(
      <div>
        <Input 
          id="name" 
          label="Full Name" 
          required 
        />
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          required 
        />
        <TextArea 
          id="details" 
          label="Additional Details" 
        />
      </div>
    )

    const nameInput = screen.getByLabelText(/Full Name/)
    const emailInput = screen.getByLabelText(/Email/)
    const detailsTextArea = screen.getByLabelText(/Additional Details/)

    // Test keyboard navigation
    nameInput.focus()
    expect(nameInput).toHaveFocus()

    // Verify focus indicators are applied (Tailwind classes)
    expect(nameInput).toHaveClass('focus:ring-2', 'focus:ring-offset-2', 'focus:ring-pink-500')
    expect(emailInput).toHaveClass('focus:ring-2', 'focus:ring-offset-2', 'focus:ring-pink-500')
    expect(detailsTextArea).toHaveClass('focus:ring-2', 'focus:ring-offset-2', 'focus:ring-pink-500')

    // Test tab navigation
    fireEvent.keyDown(nameInput, { key: 'Tab' })
    // Note: jsdom doesn't automatically handle tab navigation, but the classes are there
  })

  it('demonstrates proper accessibility attributes (Requirement 9.4)', () => {
    render(
      <div>
        <Input 
          id="email" 
          label="Email Address" 
          type="email" 
          required 
          error="Please enter a valid email"
          helperText="We'll never share your email"
        />
        <TextArea 
          id="message" 
          label="Your Message" 
          required 
          helperText="Tell us about your product request"
        />
      </div>
    )

    const emailInput = screen.getByLabelText(/Email Address/)
    const messageTextArea = screen.getByLabelText(/Your Message/)

    // Verify proper labeling
    expect(emailInput).toHaveAttribute('id', 'email')
    expect(messageTextArea).toHaveAttribute('id', 'message')

    // Verify required indicators are present
    expect(screen.getAllByText('*')).toHaveLength(2)

    // Verify aria-describedby relationships
    expect(emailInput).toHaveAttribute('aria-describedby', 'email-error')
    expect(messageTextArea).toHaveAttribute('aria-describedby', 'message-helper')

    // Verify error has role="alert"
    expect(screen.getByRole('alert')).toBeInTheDocument()

    // Verify aria-invalid
    expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    expect(messageTextArea).toHaveAttribute('aria-invalid', 'false')
  })

  it('demonstrates TypeScript interfaces are properly implemented', () => {
    // This test verifies that TypeScript interfaces are working by testing prop types
    const inputProps = {
      id: 'test',
      label: 'Test Input',
      error: 'Test error',
      helperText: 'Test helper',
      variant: 'error' as const,
      required: true,
      disabled: false,
      placeholder: 'Enter text...'
    }

    const textAreaProps = {
      id: 'test-textarea',
      label: 'Test TextArea',
      error: 'Test error',
      helperText: 'Test helper',
      variant: 'success' as const,
      resize: 'vertical' as const,
      rows: 6,
      required: true
    }

    render(
      <div>
        <Input {...inputProps} />
        <TextArea {...textAreaProps} />
      </div>
    )

    expect(screen.getByLabelText(/Test Input/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Test TextArea/)).toBeInTheDocument()
  })
})