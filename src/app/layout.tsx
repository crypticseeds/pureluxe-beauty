import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pureluxe Beauty - Glow, Healthy Skin | Premium Beauty & Body Care",
    template: "%s | Pureluxe Beauty"
  },
  description: "Discover premium beauty and body care products from trusted brands. Transform your skincare routine with our curated collection. Specializing in bridal packages, facial treatments, manicure services, skincare consultations, and trichology services in Lagos, Nigeria.",
  keywords: [
    "beauty products",
    "skincare",
    "facial treatments", 
    "bridal packages",
    "manicure services",
    "trichology",
    "premium cosmetics",
    "healthy skin",
    "glow",
    "Lagos beauty",
    "Nigeria skincare",
    "beauty salon",
    "cosmetic treatments",
    "anti-aging",
    "skin consultation"
  ],
  authors: [{ name: "Pureluxe Beauty", url: "https://pureluxebeauty.com" }],
  creator: "Pureluxe Beauty",
  publisher: "Pureluxe Beauty",
  category: "Beauty & Personal Care",
  classification: "Beauty Salon & Skincare Services",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo.jpeg', sizes: '48x48', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/Logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Pureluxe Beauty - Glow, Healthy Skin | Premium Beauty & Body Care",
    description: "Discover premium beauty and body care products from trusted brands. Transform your skincare routine with our curated collection. Professional beauty services in Lagos, Nigeria.",
    type: "website",
    locale: "en_US",
    url: "https://pureluxebeauty.com",
    siteName: "Pureluxe Beauty",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pureluxe Beauty - Premium Beauty Products and Services',
        type: 'image/jpeg',
      },
      {
        url: '/Logo.jpeg',
        width: 400,
        height: 400,
        alt: 'Pureluxe Beauty Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pureluxebeauty",
    creator: "@pureluxebeauty",
    title: "Pureluxe Beauty - Glow, Healthy Skin | Premium Beauty & Body Care",
    description: "Discover premium beauty and body care products from trusted brands. Transform your skincare routine with our curated collection.",
    images: [
      {
        url: '/og-image.jpg',
        alt: 'Pureluxe Beauty - Premium Beauty Products and Services',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: "https://pureluxebeauty.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and Browser Configuration */}
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pureluxe Beauty" />
        
        {/* Geo Location */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.4281;3.4219" />
        <meta name="ICBM" content="6.4281, 3.4219" />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
