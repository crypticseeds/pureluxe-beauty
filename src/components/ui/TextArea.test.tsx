import { render, screen, fireEvent } from '@testing-library/react'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('renders with label', () => {
    render(<TextArea label="Message" id="message" />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows required indicator when required', () => {
    render(<TextArea label="Message" id="message" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<TextArea label="Message" id="message" error="Message is required" />)
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('displays helper text when no error', () => {
    render(<TextArea label="Message" id="message" helperText="Enter your message" />)
    expect(screen.getByText('Enter your message')).toBeInTheDocument()
  })

  it('hides helper text when error is present', () => {
    render(
      <TextArea 
        label="Message" 
        id="message" 
        error="Message is required" 
        helperText="Enter your message" 
      />
    )
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.queryByText('Enter your message')).not.toBeInTheDocument()
  })

  it('applies error styles when error prop is provided', () => {
    render(<TextArea label="Message" id="message" error="Message is required" />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveClass('border-red-300', 'bg-red-50')
  })

  it('applies success styles when variant is success', () => {
    render(<TextArea label="Message" id="message" variant="success" />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('border-green-300', 'bg-green-50')
  })

  it('sets default rows to 4', () => {
    render(<TextArea label="Message" id="message" />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveAttribute('rows', '4')
  })

  it('accepts custom rows', () => {
    render(<TextArea label="Message" id="message" rows={6} />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveAttribute('rows', '6')
  })

  it('applies resize classes correctly', () => {
    const { rerender } = render(<TextArea label="Message" id="message" resize="none" />)
    let textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('resize-none')

    rerender(<TextArea label="Message" id="message" resize="vertical" />)
    textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('resize-y')

    rerender(<TextArea label="Message" id="message" resize="horizontal" />)
    textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('resize-x')

    rerender(<TextArea label="Message" id="message" resize="both" />)
    textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('resize')
  })

  it('handles focus and blur events', () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    
    render(<TextArea label="Message" id="message" onFocus={onFocus} onBlur={onBlur} />)
    const textarea = screen.getByLabelText('Message')
    
    fireEvent.focus(textarea)
    expect(onFocus).toHaveBeenCalled()
    
    fireEvent.blur(textarea)
    expect(onBlur).toHaveBeenCalled()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<TextArea ref={ref} label="Message" id="message" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('applies custom className', () => {
    render(<TextArea label="Message" id="message" className="custom-class" />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveClass('custom-class')
  })

  it('handles disabled state', () => {
    render(<TextArea label="Message" id="message" disabled />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toBeDisabled()
    expect(textarea).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })
})