'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { featuredTestimonials } from '@/data/testimonials';
import { Testimonial } from '@/types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate how many testimonials to show at once (2 on desktop, 1 on mobile)
  const testimonialsPerView = 2;
  const totalSlides = Math.ceil(featuredTestimonials.length / testimonialsPerView);

  // Auto-advance functionality
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!isPaused && !isHovered) {
      const interval = setInterval(nextSlide, 10000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [nextSlide, isPaused, isHovered]);

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerView;
    return featuredTestimonials.slice(startIndex, startIndex + testimonialsPerView);
  };



  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our customers love our premium beauty products and professional services
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? 'bg-pink-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Pause/Play Control */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {isPaused ? 'Resume' : 'Pause'} auto-advance
          </button>
        </div>
      </div>
    </section>
  );
};

// Individual Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {testimonial.rating}/5
        </span>
      </div>

      {/* Testimonial Quote */}
      <blockquote className="text-gray-700 mb-4 leading-relaxed">
        &ldquo;{testimonial.comment}&rdquo;
      </blockquote>

      {/* Customer Info */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">
              {testimonial.customerName}
            </p>
            {testimonial.service && (
              <p className="text-sm text-gray-500">
                {testimonial.service}
              </p>
            )}
          </div>
          {testimonial.date && (
            <p className="text-xs text-gray-400">
              {new Date(testimonial.date).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              })}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;