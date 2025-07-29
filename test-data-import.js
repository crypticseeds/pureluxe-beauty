// Simple test to verify data imports work correctly
const { newArrivals, trendingProducts } = require('./src/data/products.ts');
const { services } = require('./src/data/services.ts');
const { testimonials } = require('./src/data/testimonials.ts');

console.log('New arrivals count:', newArrivals?.length || 'undefined');
console.log('Trending products count:', trendingProducts?.length || 'undefined');
console.log('Services count:', services?.length || 'undefined');
console.log('Testimonials count:', testimonials?.length || 'undefined');