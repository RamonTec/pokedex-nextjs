import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CustomLoader from './CustomLoader';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const LazyImage = ({ src, alt, width, height, className }: LazyImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  if (!isVisible) {
    return (
      <div 
        ref={imgRef} 
        className={`bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="animate-pulse bg-gray-300 dark:bg-gray-600 rounded-full w-8 h-8" />
      </div>
    );
  }

  return (
    <Image
      loader={({ src, width, quality }) =>
        CustomLoader({ src, width, quality }).toString()
      }
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,..."
    />
  );
};

export default LazyImage;
