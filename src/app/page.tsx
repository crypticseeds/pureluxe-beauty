"use client";

import {
  Hero,
  ProductSection,
  Services,
  Testimonials,
  RequestForm,
} from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingLogo } from "@/components/ui/FloatingLogo";
import { newArrivals, trendingProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header - Fixed navigation */}
      <Header />

      {/* Main content with proper semantic structure */}
      <main role="main">
        {/* Hero Section - Landing area with main messaging */}
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>

        {/* Products Section - Product showcase */}
        <section id="products" aria-labelledby="products-heading">
          <div className="bg-white">
            <ProductSection
              title="New Arrivals"
              subtitle="Discover our latest premium beauty products from trusted brands"
              products={newArrivals}
              className="py-16"
            />
          </div>

          <div className="bg-gradient-to-br from-pink-50/30 to-rose-50/30">
            <ProductSection
              title="Trending Products"
              subtitle="Popular beauty essentials loved by our customers"
              products={trendingProducts}
              className="py-16"
            />
          </div>
        </section>

        {/* Services Section - Service offerings */}
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>

        {/* Testimonials Section - Customer reviews */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>

        {/* Contact/Request Section - Customer interaction */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-gradient-to-br from-pink-50 to-rose-50"
        >
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <RequestForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Site information and links */}
      <Footer />

      {/* Floating Logo - Brand presence and scroll-to-top */}
      <FloatingLogo />
    </div>
  );
}
