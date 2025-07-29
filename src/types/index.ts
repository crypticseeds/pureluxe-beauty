// Core data models for the Pureluxe Beauty application
import React from 'react';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: 'serum' | 'cream' | 'scrub' | 'treatment';
  badge?: 'new' | 'trending';
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  duration?: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  service?: string;
  date?: string;
}

export interface RequestFormData {
  fullName: string;
  email: string;
  phone?: string;
  productRequested: string;
  additionalDetails?: string;
}

// UI Component Props
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  badge?: 'new' | 'trending';
  onHover?: () => void;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

// Form Component Props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}