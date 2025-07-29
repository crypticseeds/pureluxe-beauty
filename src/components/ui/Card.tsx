import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon, Camera } from 'lucide-react'
import { cn, generateProductAltText, getImageSizes, getImageQuality, generateBlurDataURL } from '@/lib/utils'
import Image from 'next/image'
import { ImageGallery } from './ImageGallery'
import { ProductImage } from '@/types'

// Base Card Component
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-white shadow-sm',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'

// Product Card Component
export interface ProductCardProps {
  id: string
  name: string
  brand: string
  price?: string
  image: string
  images?: ProductImage[] | undefined
  badge?: 'new' | 'trending' | undefined
  onHover?: () => void
  className?: string
  priority?: boolean
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ id, name, brand, price, image, images, badge, onHover, className, priority = false }, ref) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    
    // Prepare gallery images - combine main image with additional images
    const galleryImages = React.useMemo(() => {
      const allImages = [
        { src: image, alt: generateProductAltText(name, brand), isMain: true },
        ...(images || [])
      ]
      return allImages
    }, [image, images, name, brand])

    const hasMultipleImages = galleryImages.length > 1

    const handleCardClick = () => {
      if (hasMultipleImages) {
        setIsGalleryOpen(true)
      }
    }

    return (
      <>
        <motion.div
          ref={ref}
          className={cn('group cursor-pointer', className)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          {...(onHover && { onHoverStart: onHover })}
          onClick={handleCardClick}
          data-testid={`product-card-${id}`}
        >
          <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image}
                alt={generateProductAltText(name, brand)}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                sizes={getImageSizes('product')}
                loading={priority ? 'eager' : 'lazy'}
                priority={priority}
                quality={getImageQuality('product')}
                placeholder="blur"
                blurDataURL={generateBlurDataURL()}
              />
              
              {/* Badge */}
              {badge && (
                <div className="absolute top-2 left-2 z-10">
                  <span
                    className={cn(
                      'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                      badge === 'new' && 'bg-pink-500 text-white',
                      badge === 'trending' && 'bg-yellow-400 text-gray-900'
                    )}
                  >
                    {badge === 'new' ? 'New' : 'Trending'}
                  </span>
                </div>
              )}

              {/* Multiple Images Indicator */}
              {hasMultipleImages && (
                <div className="absolute top-2 right-2 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                    <Camera size={12} />
                    <span>{galleryImages.length}</span>
                  </div>
                </div>
              )}

              {/* Click Overlay for Gallery */}
              {hasMultipleImages && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    View Gallery
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                {name}
              </h3>
              <p className="text-gray-600 text-xs">{brand}</p>
              {price && (
                <p className="text-gray-900 font-medium text-sm mt-1">{price}</p>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Image Gallery Modal */}
        <ImageGallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={galleryImages}
          productName={name}
          productBrand={brand}
        />
      </>
    )
  }
)
ProductCard.displayName = 'ProductCard'

// Service Card Component
export interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  featured?: boolean
  className?: string
}

export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, icon: Icon, featured = false, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('group cursor-pointer', className)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Card className={cn(
          'p-6 text-center border-gray-200 hover:shadow-md transition-shadow duration-200',
          featured && 'border-pink-200 bg-pink-50'
        )}>
          <div className="flex justify-center mb-4">
            <div className={cn(
              'p-3 rounded-full',
              featured ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-pink-100 group-hover:text-pink-600'
            )}>
              <Icon size={24} />
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            {description}
          </p>
        </Card>
      </motion.div>
    )
  }
)
ServiceCard.displayName = 'ServiceCard'