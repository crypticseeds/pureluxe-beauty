'use client'

import Script from 'next/script'

export function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Pureluxe Beauty",
    "description": "Premium beauty and body care products and services. Specializing in bridal packages, facial treatments, manicure services, skincare consultations, and trichology services.",
    "url": "https://pureluxebeauty.com",
    "logo": "https://pureluxebeauty.com/Logo.jpeg",
    "image": [
      "https://pureluxebeauty.com/Logo.jpeg",
      "https://pureluxebeauty.com/banner.jpeg"
    ],
    "telephone": "+234 812 345 6789",
    "email": "info@pureluxebeauty.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Beauty Street",
      "addressLocality": "Victoria Island",
      "addressRegion": "Lagos",
      "postalCode": "101241",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.4281",
      "longitude": "3.4219"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "₦₦-₦₦₦",
    "currenciesAccepted": "NGN",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bridal Packages",
            "description": "Complete bridal beauty packages for your special day"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facial Treatments",
            "description": "Professional facial treatments for all skin types"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manicure Services",
            "description": "Professional nail care and manicure services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skincare Consultations",
            "description": "Personalized skincare consultations and recommendations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trichology Services",
            "description": "Professional hair and scalp treatments"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/pureluxebeauty",
      "https://www.facebook.com/pureluxebeauty",
      "https://wa.me/2348123456789"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pureluxe Beauty",
    "url": "https://pureluxebeauty.com",
    "logo": "https://pureluxebeauty.com/Logo.jpeg",
    "description": "Premium beauty and body care products and services in Lagos, Nigeria",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234 812 345 6789",
      "contactType": "customer service",
      "availableLanguage": ["English"],
      "areaServed": "NG"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Beauty Street",
      "addressLocality": "Victoria Island",
      "addressRegion": "Lagos",
      "postalCode": "101241",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://www.instagram.com/pureluxebeauty",
      "https://www.facebook.com/pureluxebeauty"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pureluxe Beauty",
    "url": "https://pureluxebeauty.com",
    "description": "Premium beauty and body care products and services",
    "publisher": {
      "@type": "Organization",
      "name": "Pureluxe Beauty"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pureluxebeauty.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}