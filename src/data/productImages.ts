/**
 * Centralized product image configuration
 * This makes it easy to manage and update product images
 */

import { generateProductImages, IMAGE_NAMES } from '@/lib/imageUtils'

// Define which images each product has
export const PRODUCT_IMAGE_CONFIG = {
  'na-001': [IMAGE_NAMES.MAIN, IMAGE_NAMES.DETAIL_1, IMAGE_NAMES.DETAIL_2],
  'na-002': [IMAGE_NAMES.MAIN, IMAGE_NAMES.DETAIL_1],
  'na-003': [IMAGE_NAMES.MAIN], // Single image product
  'na-004': [IMAGE_NAMES.MAIN], // Single image product
  'tr-001': [IMAGE_NAMES.MAIN, IMAGE_NAMES.DETAIL_1, IMAGE_NAMES.DETAIL_2],
  'tr-002': [IMAGE_NAMES.MAIN], // Single image product
  'tr-003': [IMAGE_NAMES.MAIN], // Single image product
  'tr-004': [IMAGE_NAMES.MAIN], // Single image product
} as const

/**
 * Get all images for a product
 */
export function getProductImages(productId: keyof typeof PRODUCT_IMAGE_CONFIG) {
  const imageNames = PRODUCT_IMAGE_CONFIG[productId]
  if (!imageNames) {
    throw new Error(`No image configuration found for product: ${productId}`)
  }
  
  return generateProductImages(productId, [...imageNames])
}

/**
 * Helper to get just the main image path
 */
export function getMainImage(productId: keyof typeof PRODUCT_IMAGE_CONFIG): string {
  return getProductImages(productId).mainImage
}

/**
 * Helper to get additional images
 */
export function getAdditionalImages(productId: keyof typeof PRODUCT_IMAGE_CONFIG) {
  return getProductImages(productId).additionalImages
}