import { RequestFormData } from '@/types';

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validate request form data
 */
export function validateRequestForm(data: Partial<RequestFormData>): ValidationError[] {
  const errors: ValidationError[] = [];

  // Full name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push({
      field: 'fullName',
      message: 'Full name must be at least 2 characters long'
    });
  }

  // Email validation
  if (!data.email || data.email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (!isValidEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  // Phone validation (optional but if provided, should be valid)
  if (data.phone && data.phone.trim() !== '') {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push({
        field: 'phone',
        message: 'Please enter a valid phone number'
      });
    }
  }

  // Product requested validation
  if (!data.productRequested || data.productRequested.trim().length < 3) {
    errors.push({
      field: 'productRequested',
      message: 'Please specify the product you are requesting'
    });
  }

  return errors;
}

/**
 * Email validation helper
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone number formatting helper
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as Nigerian number if it starts with 0
  if (cleaned.startsWith('0')) {
    return `234${cleaned.substring(1)}`;
  }
  
  // If it already starts with 234, return as is
  if (cleaned.startsWith('234')) {
    return cleaned;
  }
  
  // Otherwise, assume it's a local number and add 234
  return `234${cleaned}`;
}