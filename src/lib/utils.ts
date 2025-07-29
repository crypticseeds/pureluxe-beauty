import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price string with currency symbol
 */
export function formatPrice(price: string): string {
  // Remove any existing currency symbols and format consistently
  const numericPrice = price.replace(/[^\d.]/g, '');
  return `₦${numericPrice}`;
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Filter products by category
 */
export function filterProductsByCategory(products: unknown[], category: string) {
  return products.filter(product => 
    typeof product === 'object' && 
    product !== null && 
    'category' in product && 
    (product as { category: string }).category === category
  );
}

/**
 * Filter products by badge type
 */
export function filterProductsByBadge(products: unknown[], badge: 'new' | 'trending') {
  return products.filter(product => 
    typeof product === 'object' && 
    product !== null && 
    'badge' in product && 
    (product as { badge: string }).badge === badge
  );
}

/**
 * Sort testimonials by date (newest first)
 */
export function sortTestimonialsByDate(testimonials: unknown[]) {
  return testimonials.sort((a, b) => {
    const aDate = typeof a === 'object' && a !== null && 'date' in a ? (a as { date: string }).date : '';
    const bDate = typeof b === 'object' && b !== null && 'date' in b ? (b as { date: string }).date : '';
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
}

/**
 * Format testimonial date for display
 */
export function formatTestimonialDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

/**
 * Generate star rating display
 */
export function generateStarRating(rating: number): string {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Format service duration for display
 */
export function formatServiceDuration(duration: string): string {
  return duration.replace(/(\d+)-(\d+)/, '$1-$2');
}

/**
 * Search products by name or brand
 */
export function searchProducts(products: unknown[], searchTerm: string) {
  const term = searchTerm.toLowerCase();
  return products.filter(product => {
    if (typeof product === 'object' && product !== null && 'name' in product && 'brand' in product) {
      const p = product as { name: string; brand: string };
      return p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term);
    }
    return false;
  });
}

/**
 * Generate optimized blur data URL for images
 */
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  // Check if we're in a test environment or SSR
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // Fallback blur data URL for SSR and tests
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
    }
    
    // Create a simple gradient blur
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    return canvas.toDataURL('image/jpeg', 0.1);
  } catch {
    // Fallback if canvas operations fail
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  }
}

/**
 * Get optimized image sizes for responsive images
 */
export function getImageSizes(type: 'product' | 'logo' | 'hero' | 'avatar'): string {
  switch (type) {
    case 'product':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
    case 'logo':
      return '(max-width: 768px) 150px, 180px';
    case 'hero':
      return '100vw';
    case 'avatar':
      return '(max-width: 768px) 40px, 48px';
    default:
      return '100vw';
  }
}

/**
 * Generate alt text for product images
 */
export function generateProductAltText(productName: string, brandName: string): string {
  return `${productName} by ${brandName} - Premium beauty product available at Pureluxe Beauty`;
}

/**
 * Check if image should be loaded with priority
 */
export function shouldLoadWithPriority(index: number, isAboveFold: boolean = false): boolean {
  // Load first 4 images with priority if above the fold
  return isAboveFold && index < 4;
}

/**
 * Get optimized image quality based on usage
 */
export function getImageQuality(type: 'product' | 'logo' | 'hero' | 'thumbnail'): number {
  switch (type) {
    case 'hero':
      return 90;
    case 'logo':
      return 90;
    case 'product':
      return 85;
    case 'thumbnail':
      return 75;
    default:
      return 80;
  }
}