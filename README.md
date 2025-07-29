# Pureluxe Beauty - Premium Skincare & Beauty Services

A sophisticated, modern web application showcasing Pureluxe Beauty's premium skincare products and professional beauty services. Built with cutting-edge technology to deliver an exceptional digital experience that reflects our commitment to luxury and quality.

## 🌟 About Pureluxe Beauty

Pureluxe Beauty is your destination for premium skincare solutions and professional beauty services. Our digital platform showcases our carefully curated collection of skincare products including serums, creams, scrubs, and specialized treatments, alongside our comprehensive beauty service offerings.

### Key Features

- **Premium Product Catalog** - Browse our extensive collection of skincare products with detailed descriptions and pricing in Nigerian Naira (₦)
- **Professional Services** - Explore our beauty services with comprehensive details, duration, and transparent pricing
- **Customer Testimonials** - Real reviews and ratings from satisfied customers
- **Direct Communication** - Integrated WhatsApp contact for immediate customer support and product inquiries
- **Responsive Design** - Optimized mobile-first experience across all devices
- **Modern UI/UX** - Clean, elegant interface designed specifically for the beauty industry

## 🚀 Technology Stack

### Core Framework

- **Next.js 15.4.4 - LTS** with App Router and React 19
- **TypeScript 5** with strict mode for enhanced code quality
- **Tailwind CSS 4** with custom design system

### Key Libraries & Tools

- **Framer Motion 12.23.9** - Smooth animations and transitions
- **React Hook Form 7.61.1** - Advanced form handling and validation
- **Lucide React 0.525.0** - Professional icon system
- **clsx & tailwind-merge** - Optimized conditional styling

### Testing & Quality Assurance

- **Vitest 3.2.4** - Modern testing framework
- **@testing-library/react** - Component testing utilities
- **ESLint** with Next.js configuration
- **jsdom** - DOM testing environment

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone git@github.com:crypticseeds/pureluxe-beauty.git
cd pureluxe-beauty
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Available Scripts

### Development

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Create optimized production build
npm run start        # Start production server
npm run lint         # Run ESLint code quality checks
```

### Testing

```bash
npm run test         # Run tests in watch mode
npm run test:run     # Run all tests once
```

## 📁 Project Structure

```
pureluxe-beauty/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── returns/           # Returns policy page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   └── sections/          # Page sections (Hero, Products, Services)
│   ├── data/                  # Static data files
│   │   ├── products.ts        # Product catalog
│   │   ├── services.ts        # Service offerings
│   │   └── testimonials.ts    # Customer testimonials
│   ├── lib/                   # Utility functions
│   │   ├── utils.ts           # General utilities
│   │   └── validations.ts     # Form validation
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts           # Core interfaces
│   └── test/                  # Test configuration
│       └── setup.ts           # Vitest setup
├── public/                    # Static assets
├── coverage/                  # Test coverage reports
└── test-reports/             # Testing artifacts
```

## 🎨 Design System

The application features a custom design system built with Tailwind CSS, specifically crafted for the beauty industry:

- **Color Palette** - Elegant rose gold and neutral tones
- **Typography** - Modern, readable font hierarchy
- **Components** - Reusable UI components with consistent styling
- **Responsive Design** - Mobile-first approach with seamless desktop experience

## 🧪 Testing

Comprehensive testing suite ensuring code quality and reliability:

- **Unit Tests** - Component-level testing with React Testing Library
- **Integration Tests** - Feature testing across components
- **Coverage Reports** - Detailed coverage analysis available in `/coverage`

Run tests with:

```bash
npm run test        # Watch mode for development
npm run test:run    # Single run for CI/CD
```

## 📱 Features Overview

### Product Management

- Dynamic product catalog with filtering capabilities
- Product badges (New, Trending, Best Seller)
- Detailed product information with pricing
- Category-based organization

### Service Booking

- Comprehensive service listings
- Duration and pricing transparency
- Service feature highlights
- Direct booking integration

### Customer Engagement

- Customer testimonial system with star ratings
- Contact forms with validation
- WhatsApp integration for instant communication
- Newsletter subscription

### Business Pages

- Privacy Policy
- Terms of Service
- Returns & Refunds Policy
- Professional legal compliance

## 🚀 Deployment

The application is optimized for deployment on modern hosting platforms:

### Recommended Platforms

- **Vercel** (Recommended) - Seamless Next.js deployment
- **Netlify** - Static site hosting with serverless functions
- **AWS Amplify** - Full-stack deployment solution

### Build Process

```bash
npm run build       # Creates optimized production build
npm run start       # Starts production server locally
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://pureluxebeauty.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your-whatsapp-number
```

### Path Aliases

- `@/*` maps to `./src/*` for clean imports
- Configured in `tsconfig.json` and `next.config.ts`

## 📞 Support & Contact

For technical support or business inquiries:

- **WhatsApp**: Integrated contact system
- **Email**: Contact form on website
- **Business Hours**: Available through website contact

## 📄 License

This project is proprietary software developed specifically for Pureluxe Beauty. All rights reserved.

---

**Built with ❤️ for Pureluxe Beauty** - Delivering premium digital experiences for premium beauty products.
