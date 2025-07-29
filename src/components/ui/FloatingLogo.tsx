'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { cn, getImageSizes, getImageQuality, generateBlurDataURL } from '@/lib/utils'

interface FloatingLogoProps {
  className?: string
  showAfterScroll?: number
}

export function FloatingLogo({ className, showAfterScroll = 100 }: FloatingLogoProps) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    // Show floating logo when user scrolls down the specified amount
    if (window.pageYOffset > showAfterScroll) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [showAfterScroll])

  useEffect(() => {
    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(toggleVisibility, 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [toggleVisibility])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 transition-all duration-300 transform',
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none',
        className
      )}
    >
      <button
        onClick={scrollToTop}
        className="group relative bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
        aria-label="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src="/Logo.jpeg"
            alt="Pureluxe Beauty Logo - Scroll to top"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes={getImageSizes('avatar')}
            loading="lazy"
            quality={getImageQuality('logo')}
            placeholder="blur"
            blurDataURL={generateBlurDataURL()}
          />
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Pulse animation when first appears */}
        <div className="absolute inset-0 rounded-full bg-pink-400/30 animate-ping opacity-75 group-hover:opacity-0" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-1.5 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to top
          <div className="absolute top-full right-3 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900" />
        </div>
      </button>
    </div>
  )
}