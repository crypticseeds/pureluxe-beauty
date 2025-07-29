import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.ComponentProps<'section'>) => <section {...props}>{children}</section>,
  },
}));

describe('Services Component', () => {
  it('renders the services section with correct heading', () => {
    render(<Services />);
    
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText(/Discover our comprehensive range of beauty and wellness services/)).toBeInTheDocument();
  });

  it('displays all 5 services', () => {
    render(<Services />);
    
    // Check for all service titles
    expect(screen.getByText('Bridal Packages')).toBeInTheDocument();
    expect(screen.getByText('Facial Treatments')).toBeInTheDocument();
    expect(screen.getByText('Manicure Services')).toBeInTheDocument();
    expect(screen.getByText('Skincare Consultations')).toBeInTheDocument();
    expect(screen.getByText('Trichology Services')).toBeInTheDocument();
  });

  it('displays service descriptions', () => {
    render(<Services />);
    
    expect(screen.getByText('Complete bridal beauty packages for your special day')).toBeInTheDocument();
    expect(screen.getByText('Professional facial treatments for all skin types')).toBeInTheDocument();
    expect(screen.getByText('Professional nail care and beautiful manicures')).toBeInTheDocument();
    expect(screen.getByText('Personalized skincare analysis and recommendations')).toBeInTheDocument();
    expect(screen.getByText('Specialized hair and scalp health treatments')).toBeInTheDocument();
  });

  it('displays service pricing information', () => {
    render(<Services />);
    
    expect(screen.getByText('Starting from $299')).toBeInTheDocument();
    expect(screen.getByText('Starting from $85')).toBeInTheDocument();
    expect(screen.getByText('Starting from $35')).toBeInTheDocument();
    expect(screen.getByText('Starting from $50')).toBeInTheDocument();
    expect(screen.getByText('Starting from $120')).toBeInTheDocument();
  });

  it('displays service duration information', () => {
    render(<Services />);
    
    expect(screen.getByText('Duration: 4-6 hours')).toBeInTheDocument();
    expect(screen.getAllByText('Duration: 60-90 minutes')).toHaveLength(2); // Facial and Trichology both have 60-90 minutes
    expect(screen.getByText('Duration: 45-75 minutes')).toBeInTheDocument();
    expect(screen.getByText('Duration: 30-45 minutes')).toBeInTheDocument();
  });

  it('renders the contact CTA button', () => {
    render(<Services />);
    
    expect(screen.getByText('Contact Us Today')).toBeInTheDocument();
    expect(screen.getByText(/Ready to book your appointment or have questions/)).toBeInTheDocument();
  });

  it('applies correct CSS classes for responsive grid', () => {
    render(<Services />);
    
    const gridContainer = screen.getByText('Bridal Packages').closest('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5');
  });

  it('renders service cards with proper styling', () => {
    render(<Services />);
    
    const serviceCard = screen.getByText('Bridal Packages').closest('.bg-white');
    expect(serviceCard).toHaveClass('bg-white', 'rounded-lg', 'p-6', 'shadow-sm');
  });
});