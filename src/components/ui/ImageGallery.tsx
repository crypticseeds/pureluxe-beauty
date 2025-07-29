import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { ProductImage } from '@/types'
import { cn, generateProductAltText } from '@/lib/utils'

export interface ImageGalleryProps {
  isOpen: boolean
  onClose: () => void
  images: ProductImage[]
  productName: string
  productBrand: string
  initialImageIndex?: number
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  isOpen,
  onClose,
  images,
  productName,
  productBrand,
  initialImageIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex)
  const [isLoaded, setIsLoaded] = useState(false)

  // Reset index when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialImageIndex)
      setIsLoaded(false)
    }
  }, [isOpen, initialImageIndex])

  // Keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return

    switch (event.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        event.preventDefault()
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
        break
      case 'ArrowRight':
        event.preventDefault()
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
        break
    }
  }, [isOpen, onClose, images.length])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (!isOpen || typeof window === 'undefined') return null

  const currentImage = images[currentIndex]

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 id="gallery-title" className="font-semibold text-gray-900">{productName}</h3>
                <p className="text-sm text-gray-600">{productBrand}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close gallery"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative aspect-square bg-gray-50">
              <Image
                src={currentImage.src}
                alt={currentImage.alt || generateProductAltText(productName, productBrand)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                priority
                onLoad={() => setIsLoaded(true)}
              />

              {/* Loading State */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="p-4 border-t">
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={cn(
                        'relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors',
                        index === currentIndex
                          ? 'border-pink-500'
                          : 'border-gray-200 hover:border-gray-300'
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt || `${productName} view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}