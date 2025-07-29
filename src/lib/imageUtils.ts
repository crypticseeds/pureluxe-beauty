/**
 * Utility functions for managing product images
 */

export interface ProductImageConfig {
  productId: string
  mainImage: string
  additionalImages?: string[]
}

/**
 * Generate image paths for a product
 * @param productId - The product ID (e.g., 'na-001')
 * @param imageNames - Array of image filenames (e.g., ['main.jpg', 'detail-1.jpg'])
 * @returns Object with main image and additional images
 */
export function generateProductImages(
  productId: string, 
  imageNames: string[]
): { mainImage: string; additionalImages: Array<{ src: string; alt: string }> } {
  const basePath = `/products/${productId}`
  
  if (imageNames.length === 0) {
    throw new Error(`No images provided for product ${productId}`)
  }

  const mainImage = `${basePath}/${imageNames[0]}`
  const additionalImages = imageNames.slice(1).map((imageName, index) => ({
    src: `${basePath}/${imageName}`,
    alt: `${productId} detail view ${index + 1}`
  }))

  return {
    mainImage,
    additionalImages
  }
}

/**
 * Standard image naming convention for products
 */
export const IMAGE_NAMES = {
  MAIN: 'main.jpg',
  DETAIL_1: 'detail-1.jpg',
  DETAIL_2: 'detail-2.jpg',
  DETAIL_3: 'detail-3.jpg',
  PACKAGING: 'packaging.jpg',
  INGREDIENTS: 'ingredients.jpg',
  APPLICATION: 'application.jpg'
} as const

/**
 * Generate optimized image URLs for different use cases
 */
export function getOptimizedImageUrl(
  imagePath: string, 
  options: {
    width?: number
    height?: number
    quality?: number
  } = {}
): string {
  const { width = 600, height = 600, quality = 85 } = options
  
  // For local images, return as-is (Next.js will handle optimization)
  if (imagePath.startsWith('/')) {
    return imagePath
  }
  
  // For external URLs (like Unsplash), add optimization parameters
  if (imagePath.includes('unsplash.com')) {
    return `${imagePath}&w=${width}&h=${height}&q=${quality}&fit=crop&crop=center`
  }
  
  return imagePath
}

/**
 * Validate that all required images exist for a product
 * Note: This would typically be used in a build script or admin interface
 */
export function validateProductImages(_productId: string, requiredImages: string[]): boolean {
  // In a real application, you'd check if files exist
  // For now, we'll assume they exist if the paths are properly formatted
  return requiredImages.every(imageName => 
    typeof imageName === 'string' && imageName.length > 0
  )
}

/**
 * Get fallback image if main image fails to load
 */
export function getFallbackImage(): string {
  return '/images/product-placeholder.jpg' // You'd create this placeholder
}