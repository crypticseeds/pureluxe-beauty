import React from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ui/Card'
import { Product } from '@/types'
import { cn } from '@/lib/utils'

export interface ProductSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const ProductSection = React.forwardRef<HTMLElement, ProductSectionProps>(
  ({ title, subtitle, products, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 px-4 sm:px-6 lg:px-8', className)}
        data-testid="product-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="flex justify-center"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  image={product.image}
                  badge={product.badge}
                  className="w-full max-w-sm"
                  priority={index < 4} // Load first 4 images with priority
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {products.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                No products available at the moment.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    )
  }
)

ProductSection.displayName = 'ProductSection'