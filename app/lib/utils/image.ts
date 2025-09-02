/**
 * Image optimization utilities for Next.js Image component
 */

/**
 * Generate blur data URL for image placeholders
 * This is a simplified version - for production, use plaiceholder or similar
 */
export function getBlurDataURL(color: string = '#f3f4f6'): string {
  // Create a 1x1 pixel SVG with the specified color
  const svg = `
    <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="1" fill="${color}"/>
    </svg>
  `;
  
  // Convert to base64
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Image loader for optimization
 */
export function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For local images, return as-is
  if (src.startsWith('/')) {
    return src;
  }
  
  // For external images, you could add CDN transformation here
  // Example with Cloudinary:
  // return `https://res.cloudinary.com/your-cloud/image/fetch/w_${width},q_${quality || 75}/${src}`;
  
  return src;
}

/**
 * Get optimized image sizes for responsive images
 */
export function getImageSizes(type: 'hero' | 'card' | 'thumbnail' | 'full'): string {
  const sizes = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    thumbnail: '(max-width: 640px) 50vw, 200px',
    full: '100vw'
  };
  
  return sizes[type];
}

/**
 * Common blur data URLs for different image types
 */
export const blurDataURLs = {
  default: getBlurDataURL('#f3f4f6'),
  dark: getBlurDataURL('#1f2937'),
  blue: getBlurDataURL('#3b82f6'),
  white: getBlurDataURL('#ffffff'),
};

/**
 * Priority loading configuration
 */
export function shouldPrioritizeImage(
  imagePath: string,
  section: 'hero' | 'above-fold' | 'below-fold'
): boolean {
  // Prioritize hero and above-fold images
  return section === 'hero' || section === 'above-fold';
}

/**
 * Example usage in component:
 * 
 * import Image from 'next/image';
 * import { getImageSizes, blurDataURLs, shouldPrioritizeImage } from '@/app/lib/utils/image';
 * 
 * <Image
 *   src="/hero-image.png"
 *   alt="Hero"
 *   width={1200}
 *   height={600}
 *   sizes={getImageSizes('hero')}
 *   placeholder="blur"
 *   blurDataURL={blurDataURLs.default}
 *   priority={shouldPrioritizeImage('/hero-image.png', 'hero')}
 * />
 */