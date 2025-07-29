import { Service } from '../types';

// Sample services data for all 5 service offerings
export const services: Service[] = [
  {
    id: 'service-001',
    title: 'Bridal Packages',
    description: 'Complete bridal beauty packages for your special day',
    icon: 'crown',
    features: [
      'Pre-wedding skincare consultation',
      'Trial makeup session',
      'Wedding day makeup and hair',
      'Touch-up kit included',
      'Photography-ready finish'
    ],
    duration: '4-6 hours'
  },
  {
    id: 'service-002',
    title: 'Facial Treatments',
    description: 'Professional facial treatments for all skin types',
    icon: 'sparkles',
    features: [
      'Deep cleansing facial',
      'Anti-aging treatments',
      'Hydrating facials',
      'Acne treatment facials',
      'Customized skincare routine'
    ],
    duration: '60-90 minutes'
  },
  {
    id: 'service-003',
    title: 'Manicure Services',
    description: 'Professional nail care and beautiful manicures',
    icon: 'hand',
    features: [
      'Classic manicure',
      'Gel polish application',
      'Nail art and designs',
      'Cuticle care',
      'Hand massage and moisturizing'
    ],
    duration: '45-75 minutes'
  },
  {
    id: 'service-004',
    title: 'Skincare Consultations',
    description: 'Personalized skincare analysis and recommendations',
    icon: 'user-check',
    features: [
      'Skin type analysis',
      'Product recommendations',
      'Skincare routine planning',
      'Follow-up consultations',
      'Professional product guidance'
    ],
    duration: '30-45 minutes'
  },
  {
    id: 'service-005',
    title: 'Trichology Services',
    description: 'Specialized hair and scalp health treatments',
    icon: 'scissors',
    features: [
      'Scalp analysis',
      'Hair loss treatments',
      'Dandruff and scalp conditions',
      'Hair growth therapies',
      'Personalized hair care plans'
    ],
    duration: '60-90 minutes'
  }
];

// Featured services (subset for highlighting)
export const featuredServices = services.slice(0, 3);