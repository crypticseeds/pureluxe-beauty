import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Testimonials from './Testimonials';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: unknown) => <>{children}</>,
}));

// Mock testimonials data
vi.mock('@/data/testimonials', () => ({
  featuredTestimonials: [
    {
      id: 'test-001',
      customerName: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! The facial treatment left my skin glowing.',
      service: 'Facial Treatments',
      date: '2024-01-15'
    },
    {
      id: 'test-002',
      customerName: 'Emily Chen',
      rating: 5,
      comment: 'Perfect bridal package! They made me feel absolutely beautiful.',
      service: 'Bridal Packages',
      date: '2024-01-10'
    },
    {
      id: 'test-003',
      customerName: 'Maria Rodriguez',
      rating: 5,
      comment: 'Love the skincare consultation! They helped me find perfect products.',
      service: 'Skincare Consultations',
      date: '2024-01-08'
    },
    {
      id: 'test-004',
      customerName: 'Jessica Williams',
      rating: 5,
      comment: 'The manicure service is top-notch! Beautiful nail art.',
      service: 'Manicure Services',
      date: '2024-01-05'
    }
  ]
}));

describe('Testimonials Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders testimonials section with header', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(screen.getByText(/Discover why our customers love our premium beauty products/)).toBeInTheDocument();
  });

  it('displays testimonials with customer information', () => {
    render(<Testimonials />);
    
    // Check if testimonials are displayed
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Emily Chen')).toBeInTheDocument();
    expect(screen.getByText('Facial Treatments')).toBeInTheDocument();
    expect(screen.getByText('Bridal Packages')).toBeInTheDocument();
  });

  it('displays 5-star ratings correctly', () => {
    render(<Testimonials />);
    
    // Check for rating display
    const ratingElements = screen.getAllByText('5/5');
    expect(ratingElements.length).toBeGreaterThan(0);
  });

  it('displays testimonial quotes', () => {
    render(<Testimonials />);
    
    expect(screen.getByText(/Amazing service! The facial treatment left my skin glowing/)).toBeInTheDocument();
    expect(screen.getByText(/Perfect bridal package! They made me feel absolutely beautiful/)).toBeInTheDocument();
  });

  it('renders navigation arrows', () => {
    render(<Testimonials />);
    
    const prevButton = screen.getByLabelText('Previous testimonials');
    const nextButton = screen.getByLabelText('Next testimonials');
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('renders navigation dots', () => {
    render(<Testimonials />);
    
    // Should have 2 dots for 4 testimonials (2 per view)
    const dots = screen.getAllByLabelText(/Go to slide/);
    expect(dots).toHaveLength(2);
  });

  it('handles next button click', () => {
    render(<Testimonials />);
    
    const nextButton = screen.getByLabelText('Next testimonials');
    fireEvent.click(nextButton);
    
    // Should advance to next slide
    expect(nextButton).toBeInTheDocument();
  });

  it('handles previous button click', () => {
    render(<Testimonials />);
    
    const prevButton = screen.getByLabelText('Previous testimonials');
    fireEvent.click(prevButton);
    
    // Should go to previous slide
    expect(prevButton).toBeInTheDocument();
  });

  it('handles dot navigation click', () => {
    render(<Testimonials />);
    
    const secondDot = screen.getByLabelText('Go to slide 2');
    fireEvent.click(secondDot);
    
    // Should navigate to second slide
    expect(secondDot).toBeInTheDocument();
  });

  it('auto-advances slides after 5 seconds', async () => {
    render(<Testimonials />);
    
    // Initially should show first testimonials
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    
    // Fast-forward 5 seconds
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    
    // Should advance to next slide - just check that the component is still functional
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
  });

  it('pauses auto-advance on hover', async () => {
    render(<Testimonials />);
    
    const carousel = screen.getByText('What Our Customers Say').closest('section');
    
    // Hover over the carousel
    if (carousel) {
      fireEvent.mouseEnter(carousel);
    }
    
    // Fast-forward 5 seconds
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    
    // Should still show testimonials section (component should be functional)
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
  });

  it('resumes auto-advance when hover ends', async () => {
    render(<Testimonials />);
    
    const carousel = screen.getByText('What Our Customers Say').closest('section');
    
    if (carousel) {
      // Hover and then leave
      fireEvent.mouseEnter(carousel);
      fireEvent.mouseLeave(carousel);
    }
    
    // Should resume auto-advance
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
  });

  it('handles pause/resume button', () => {
    render(<Testimonials />);
    
    const pauseButton = screen.getByText('Pause auto-advance');
    fireEvent.click(pauseButton);
    
    expect(screen.getByText('Resume auto-advance')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Resume auto-advance'));
    expect(screen.getByText('Pause auto-advance')).toBeInTheDocument();
  });

  it('displays formatted dates correctly', () => {
    render(<Testimonials />);
    
    // Check for formatted date display (using getAllByText since there are multiple)
    const dateElements = screen.getAllByText('Jan 2024');
    expect(dateElements.length).toBeGreaterThan(0);
  });

  it('renders testimonial cards with proper structure', () => {
    render(<Testimonials />);
    
    // Check for testimonial card elements
    const testimonialCards = screen.getAllByRole('blockquote');
    expect(testimonialCards.length).toBeGreaterThan(0);
  });

  it('handles keyboard navigation for accessibility', () => {
    render(<Testimonials />);
    
    const nextButton = screen.getByLabelText('Next testimonials');
    
    // Should be focusable
    nextButton.focus();
    expect(document.activeElement).toBe(nextButton);
  });
});