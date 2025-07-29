import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, disabled = false, className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-pink-500 text-white hover:bg-pink-600 focus-visible:ring-pink-500',
      secondary: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus-visible:ring-yellow-400',
      outline: 'border border-pink-500 text-pink-500 hover:bg-pink-50 focus-visible:ring-pink-500'
    }
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg'
    }
    
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }