/**
 * AWS S3 Image Management Utilities
 * Use this if you want to store images on S3 instead of locally
 */

const S3_BUCKET_URL = process.env.NEXT_PUBLIC_S3_BUCKET_URL || 'https://your-bucket.s3.amazonaws.com'

export interface S3ImageConfig {
  bucket: string
  region: string
  folder: string
}

/**
 * Generate S3 URLs for product images
 */
export function generateS3ProductImages(
  productId: string,
  imageNames: string[],
  config: S3ImageConfig = {
    bucket: 'pureluxe-beauty-images',
    region: 'us-east-1',
    folder: 'products'
  }
) {
  const baseUrl = `https://${config.bucket}.s3.${config.region}.amazonaws.com/${config.folder}/${productId}`
  
  const mainImage = `${baseUrl}/${imageNames[0]}`
  const additionalImages = imageNames.slice(1).map((imageName, index) => ({
    src: `${baseUrl}/${imageName}`,
    alt: `${productId} detail view ${index + 1}`
  }))

  return {
    mainImage,
    additionalImages
  }
}

/**
 * Generate CloudFront URLs with optimization
 */
export function generateCloudFrontUrl(
  imagePath: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
  } = {}
): string {
  const { width = 600, height = 600, quality = 85, format = 'webp' } = options
  const cloudFrontUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL
  
  if (!cloudFrontUrl) {
    return imagePath
  }
  
  return `${cloudFrontUrl}/${imagePath}?w=${width}&h=${height}&q=${quality}&f=${format}`
}

/**
 * Upload image to S3 (for admin interface)
 */
export async function uploadImageToS3(
  file: File,
  productId: string,
  imageName: string
): Promise<string> {
  // This would use AWS SDK to upload
  // Implementation depends on your backend setup
  const formData = new FormData()
  formData.append('file', file)
  formData.append('productId', productId)
  formData.append('imageName', imageName)
  
  const response = await fetch('/api/upload-image', {
    method: 'POST',
    body: formData
  })
  
  if (!response.ok) {
    throw new Error('Failed to upload image')
  }
  
  const { url } = await response.json()
  return url
}