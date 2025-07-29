import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './Hero';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: unknown) => 
      <div {...props}>{children}</div>,
    h1: ({ children, ...props }: unknown) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: unknown) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: unknown) => 
      <button {...props}>{children}</button>,
    section: ({ children, ...props }: unknown) => <section {...props}>{children}</section>,
  },
}));

describe('Hero Component', () => {
  it('renders the main headline correctly', () => {
    render(<Hero />);
    
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeInTheDocument();
    expect(headline).toHaveTextContent('Glow, Healthy Skin');
  });

  it('renders the subheading with premium beauty products message', () => {
    render(<Hero />);
    
    const subheading = screen.getByText(/Discover premium beauty products from trusted brands/);
    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent(/Transform your skincare routine/);
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    const shopButton = screen.getByRole('button', { name: /shop now/i });
    const servicesButton = screen.getByRole('button', { name: /our services/i });
    
    expect(shopButton).toBeInTheDocument();
    expect(servicesButton).toBeInTheDocument();
  });

  it('displays trust indicators', () => {
    render(<Hero />);
    
    expect(screen.getByText('Trusted by beauty enthusiasts worldwide')).toBeInTheDocument();
    expect(screen.getByText('Premium Brands')).toBeInTheDocument();
    expect(screen.getByText('Expert Care')).toBeInTheDocument();
    expect(screen.getByText('Proven Results')).toBeInTheDocument();
  });

  it('has proper responsive classes for mobile and desktop', () => {
    render(<Hero />);
    
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl');
  });

  it('applies gradient background classes', () => {
    const { container } = render(<Hero />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-br', 'from-pink-50', 'to-yellow-50');
  });
});