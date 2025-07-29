import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  helperText?: string;
  variant?: 'default' | 'error' | 'success' | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helperText, variant = 'default', ...props }, ref) => {
    const hasError = error || variant === 'error';
    const hasSuccess = variant === 'success';

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(
              // Base styles
              "flex h-10 w-full rounded-md border px-3 py-2 text-sm",
              "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-colors duration-200",
              // Default state
              "border-gray-300 bg-white text-gray-900",
              "focus:border-pink-500 focus:ring-pink-500",
              // Error state
              hasError && [
                "border-red-300 bg-red-50 text-red-900",
                "placeholder:text-red-400",
                "focus:border-red-500 focus:ring-red-500"
              ],
              // Success state
              hasSuccess && [
                "border-green-300 bg-green-50 text-green-900",
                "focus:border-green-500 focus:ring-green-500"
              ],
              className
            )}
            ref={ref}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={
              error ? `${props.id}-error` : 
              helperText ? `${props.id}-helper` : undefined
            }
            {...props}
          />
          {/* Success icon */}
          {hasSuccess && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {/* Error icon */}
          {hasError && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {/* Error message */}
        {error && (
          <p 
            id={`${props.id}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
        {/* Helper text */}
        {helperText && !error && (
          <p 
            id={`${props.id}-helper`}
            className="mt-1 text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }