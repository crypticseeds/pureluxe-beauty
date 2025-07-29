'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Mail } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Button } from '@/components/ui/Button'
import { RequestFormData } from '@/types'
import { validateRequestForm } from '@/lib/validations'
import { openWhatsApp, getFallbackContactOptions } from '@/lib/whatsapp'
import { openEmailClient } from '@/lib/email'
import { cn } from '@/lib/utils'

interface RequestFormProps {
  className?: string
}

export function RequestForm({ className }: RequestFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
    clearErrors
  } = useForm<RequestFormData>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      productRequested: '',
      additionalDetails: ''
    }
  })

  // Watch form values for real-time validation
  const watchedValues = watch()

  const onSubmit = async (data: RequestFormData) => {
    setIsSubmitting(true)
    clearErrors()

    // Validate form data
    const validationErrors = validateRequestForm(data)
    
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => {
        setError(error.field as keyof RequestFormData, {
          type: 'validation',
          message: error.message
        })
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Open email client with form data
      openEmailClient(data)
      
      // Show success message
      setIsSubmitted(true)
      reset()
    } catch {
      setError('root', {
        type: 'submit',
        message: 'Failed to open email client. Please try WhatsApp or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const formData = watchedValues
    openWhatsApp(formData)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center',
          className
        )}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Request Submitted!
        </h3>
        
        <p className="text-gray-600 mb-6">
          Thank you for your request. We&apos;ll get back to you within 24 hours with product availability and pricing.
        </p>
        
        <Button
          variant="primary"
          onClick={() => setIsSubmitted(false)}
          className="w-full"
        >
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('bg-white rounded-lg shadow-lg p-6', className)}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Request a Product or Chat With Us
        </h2>
        <p className="text-gray-600 text-sm">
          Can&apos;t find what you&apos;re looking for? Submit a request or chat with us directly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name and Email in same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            required
            error={errors.fullName?.message}
            variant={errors.fullName ? 'error' : undefined}
            {...register('fullName', {
              required: 'Full name is required',
              minLength: {
                value: 2,
                message: 'Full name must be at least 2 characters long'
              }
            })}
          />

          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            required
            error={errors.email?.message}
            variant={errors.email ? 'error' : undefined}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
          />
        </div>

        {/* Phone and Product in same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number (optional)"
            error={errors.phone?.message}
            variant={errors.phone ? 'error' : undefined}
            helperText="Optional - for WhatsApp updates"
            {...register('phone', {
              pattern: {
                value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                message: 'Please enter a valid phone number'
              }
            })}
          />

          <Input
            id="productRequested"
            label="Product Requested"
            placeholder="What product are you looking for?"
            required
            error={errors.productRequested?.message}
            variant={errors.productRequested ? 'error' : undefined}
            helperText="Be specific (brand, product name, etc.)"
            {...register('productRequested', {
              required: 'Please specify the product you are requesting',
              minLength: {
                value: 3,
                message: 'Please provide more details about the product'
              }
            })}
          />
        </div>

        {/* Additional Details Field */}
        <TextArea
          id="additionalDetails"
          label="Additional Details"
          placeholder="Any additional information or special requirements..."
          rows={3}
          error={errors.additionalDetails?.message}
          variant={errors.additionalDetails ? 'error' : undefined}
          helperText="Optional - Include any specific requirements or questions"
          {...register('additionalDetails')}
        />

        {/* Root Error Display */}
        {errors.root && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{errors.root.message}</p>
          </div>
        )}

        {/* Submit Buttons */}
        <div className="space-y-3 pt-2">
          {/* Buttons on same line */}
          <div className="flex gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="flex-[2]"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Submitting Request...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="flex-[1] bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Helper text */}
          <p className="text-xs text-gray-500 text-center">
            Both options will include your form details for faster assistance
          </p>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500 mb-2">
          Need immediate assistance? Contact us directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a 
            href={getFallbackContactOptions().phone.url}
            className="text-pink-600 hover:text-pink-700 font-medium text-xs"
          >
            📞 {getFallbackContactOptions().phone.formatted}
          </a>
          <a 
            href={getFallbackContactOptions().email.url}
            className="text-pink-600 hover:text-pink-700 font-medium text-xs"
          >
            ✉️ {getFallbackContactOptions().email.address}
          </a>
        </div>
      </div>
    </motion.div>
  )
}