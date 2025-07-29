import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn, generateProductAltText, getImageSizes, getImageQuality, generateBlurDataURL } from '@/lib/utils'
import Image from 'next/image'

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
  badge?: 'new' | 'trending' | undefined
  onHover?: () => void
  className?: string
  priority?: boolean

}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ id, name, brand, image, badge, onHover, className, priority = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('group cursor-pointer', className)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        {...(onHover && { onHoverStart: onHover })}
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
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
              {name}
            </h3>
            <p className="text-gray-600 text-xs">{brand}</p>
          </div>
        </Card>
      </motion.div>
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