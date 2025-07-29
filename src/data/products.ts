import { Product } from '../types';
import { getMainImage, getAdditionalImages } from './productImages';

// Sample product data for new arrivals
export const newArrivals: Product[] = [
  {
    id: 'na-001',
    name: 'Vitamin C Brightening Serum',
    brand: 'GlowLux',
    price: '$45.99',
    image: getMainImage('na-001'),
    images: getAdditionalImages('na-001'),
    category: 'serum',
    badge: 'new',
    description: 'Powerful vitamin C serum that brightens skin and reduces dark spots'
  },
  {
    id: 'na-002',
    name: 'Hydrating Night Cream',
    brand: 'PureSkin',
    price: '$32.50',
    image: getMainImage('na-002'),
    images: getAdditionalImages('na-002'),
    category: 'cream',
    badge: 'new',
    description: 'Rich moisturizing cream for overnight skin repair and hydration'
  },
  {
    id: 'na-003',
    name: 'Gentle Exfoliating Scrub',
    brand: 'NaturalGlow',
    price: '$28.75',
    image: getMainImage('na-003'),
    images: getAdditionalImages('na-003'),
    category: 'scrub',
    badge: 'new',
    description: 'Natural exfoliating scrub with botanical extracts for smooth skin'
  },
  {
    id: 'na-004',
    name: 'Anti-Aging Eye Treatment',
    brand: 'YouthRevive',
    price: '$55.00',
    image: getMainImage('na-004'),
    images: getAdditionalImages('na-004'),
    category: 'treatment',
    badge: 'new',
    description: 'Advanced eye treatment to reduce fine lines and puffiness'
  }
];

// Sample product data for trending products
export const trendingProducts: Product[] = [
  {
    id: 'tr-001',
    name: 'Hyaluronic Acid Moisturizer',
    brand: 'AquaLux',
    price: '$38.99',
    image: getMainImage('tr-001'),
    images: getAdditionalImages('tr-001'),
    category: 'cream',
    badge: 'trending',
    description: 'Intense hydration with hyaluronic acid for plump, youthful skin'
  },
  {
    id: 'tr-002',
    name: 'Retinol Renewal Serum',
    brand: 'SkinScience',
    price: '$49.99',
    image: getMainImage('tr-002'),
    images: getAdditionalImages('tr-002'),
    category: 'serum',
    badge: 'trending',
    description: 'Gentle retinol formula for skin renewal and anti-aging benefits'
  },
  {
    id: 'tr-003',
    name: 'Collagen Boost Treatment',
    brand: 'EliteBeauty',
    price: '$65.00',
    image: getMainImage('tr-003'),
    images: getAdditionalImages('tr-003'),
    category: 'treatment',
    badge: 'trending',
    description: 'Professional-grade collagen treatment for firmer, younger-looking skin'
  },
  {
    id: 'tr-004',
    name: 'Brightening Face Scrub',
    brand: 'RadiantSkin',
    price: '$24.99',
    image: getMainImage('tr-004'),
    images: getAdditionalImages('tr-004'),
    category: 'scrub',
    badge: 'trending',
    description: 'Illuminating scrub with natural brightening agents'
  }
];

// Combined product data
export const allProducts: Product[] = [...newArrivals, ...trendingProducts];