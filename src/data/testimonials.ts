import { Testimonial } from '../types';

// Sample testimonial data with customer reviews
export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    customerName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing service! The facial treatment left my skin glowing and refreshed. The staff is incredibly knowledgeable and professional.',
    service: 'Facial Treatments',
    date: '2024-01-15'
  },
  {
    id: 'test-002',
    customerName: 'Emily Chen',
    rating: 5,
    comment: 'Perfect bridal package! They made me feel absolutely beautiful on my wedding day. The makeup lasted all day and looked flawless in photos.',
    service: 'Bridal Packages',
    date: '2024-01-10'
  },
  {
    id: 'test-003',
    customerName: 'Maria Rodriguez',
    rating: 5,
    comment: 'Love the skincare consultation! They helped me find the perfect products for my sensitive skin. My complexion has never looked better.',
    service: 'Skincare Consultations',
    date: '2024-01-08'
  },
  {
    id: 'test-004',
    customerName: 'Jessica Williams',
    rating: 5,
    comment: 'The manicure service is top-notch! Beautiful nail art and the gel polish lasts for weeks. Highly recommend!',
    service: 'Manicure Services',
    date: '2024-01-05'
  },
  {
    id: 'test-005',
    customerName: 'Amanda Davis',
    rating: 5,
    comment: 'Excellent trichology services! They helped solve my scalp issues and my hair is healthier than ever. Very professional and caring.',
    service: 'Trichology Services',
    date: '2024-01-03'
  },
  {
    id: 'test-006',
    customerName: 'Lisa Thompson',
    rating: 5,
    comment: 'Outstanding products and service! The vitamin C serum they recommended has transformed my skin. Will definitely be back!',
    service: 'Skincare Consultations',
    date: '2023-12-28'
  }
];

// Featured testimonials for carousel display
export const featuredTestimonials = testimonials.slice(0, 4);