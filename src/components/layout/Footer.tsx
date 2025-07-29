'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Shop', href: '#shop' },
    { label: 'Contact', href: '#contact' },
    { label: 'Request Item', href: '#request' }
  ]

  const services = [
    'Bridal Packages',
    'Facial Treatments',
    'Manicure Services',
    'Skincare Consultations',
    'Trichology Services'
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/pureluxebeautyng',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/+2349066130009',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@pureluxe.beauti',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/')) {
      // Internal page navigation
      window.location.href = href
    } else if (href.startsWith('#')) {
      // Internal navigation
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // External link
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer
      className={cn(
        'bg-gray-900 text-white',
        className
      )}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/banner.jpeg"
                alt="Pureluxe Beauty"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted destination for premium beauty products and professional treatments. 
              We specialize in skincare, body care, and beauty services that help you glow with confidence.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-300">
                    No 23, MTN Office Samulus Plaza, Plot 5 A. I. T. Rd, Alagbado.<br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+2349066130009"
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label="Call Pureluxe Beauty"
                >
                  +234 906 613 0009
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:help@pureluxebeauti.com"
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label="Email Pureluxe Beauty"
                >
                  help@pureluxebeauti.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav role="navigation" aria-label="Footer quick links">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-gray-300 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded text-left"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Clock className="h-5 w-5 text-pink-400 mr-2" aria-hidden="true" />
                Business Hours
              </h4>
              <div className="space-y-2">
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="text-sm">
                    <div className="text-gray-300">{schedule.day}</div>
                    <div className="text-pink-400 font-medium">{schedule.hours}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleLinkClick(social.href)}
                    className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <span aria-hidden="true">
                      {social.icon}
                    </span>
                    <ExternalLink className="sr-only" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Pureluxe Beauty. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <button
                onClick={() => handleLinkClick('/privacy')}
                className="text-sm text-gray-400 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms')}
                className="text-sm text-gray-400 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="View Terms of Service"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('/returns')}
                className="text-sm text-gray-400 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="View Return Policy"
              >
                Return Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }