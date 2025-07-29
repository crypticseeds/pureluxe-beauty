import { Product } from '../types';

// Sample product data for new arrivals
export const newArrivals: Product[] = [
  {
    id: 'na-001',
    name: 'Vitamin C Brightening Serum',
    brand: 'GlowLux',
    price: '$45.99',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
    category: 'serum',
    badge: 'new',
    description: 'Powerful vitamin C serum that brightens skin and reduces dark spots'
  },
  {
    id: 'na-002',
    name: 'Hydrating Night Cream',
    brand: 'PureSkin',
    price: '$32.50',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center',
    category: 'cream',
    badge: 'new',
    description: 'Rich moisturizing cream for overnight skin repair and hydration'
  },
  {
    id: 'na-003',
    name: 'Gentle Exfoliating Scrub',
    brand: 'NaturalGlow',
    price: '$28.75',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&crop=center',
    category: 'scrub',
    badge: 'new',
    description: 'Natural exfoliating scrub with botanical extracts for smooth skin'
  },
  {
    id: 'na-004',
    name: 'Anti-Aging Eye Treatment',
    brand: 'YouthRevive',
    price: '$55.00',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center',
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
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center',
    category: 'cream',
    badge: 'trending',
    description: 'Intense hydration with hyaluronic acid for plump, youthful skin'
  },
  {
    id: 'tr-002',
    name: 'Retinol Renewal Serum',
    brand: 'SkinScience',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
    category: 'serum',
    badge: 'trending',
    description: 'Gentle retinol formula for skin renewal and anti-aging benefits'
  },
  {
    id: 'tr-003',
    name: 'Collagen Boost Treatment',
    brand: 'EliteBeauty',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&crop=center',
    category: 'treatment',
    badge: 'trending',
    description: 'Professional-grade collagen treatment for firmer, younger-looking skin'
  },
  {
    id: 'tr-004',
    name: 'Brightening Face Scrub',
    brand: 'RadiantSkin',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center',
    category: 'scrub',
    badge: 'trending',
    description: 'Illuminating scrub with natural brightening agents'
  }
];

// Combined product data
export const allProducts: Product[] = [...newArrivals, ...trendingProducts];