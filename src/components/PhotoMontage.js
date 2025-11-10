'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PhotoMontage({ images, className = '' }) {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const [recentImages, setRecentImages] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true to prevent hydration mismatch
    setMounted(true);

    // Function to fade to next image (crossfade)
    const animateImages = () => {
      // Get available images (not recently shown)
      const availableIndices = images
        .map((_, idx) => idx)
        .filter(idx => !recentImages.includes(idx));

      // If all images have been shown recently, reset the recent list
      const pool = availableIndices.length > 0 ? availableIndices : images.map((_, idx) => idx);

      // Pick random from available pool
      const idx = pool[Math.floor(Math.random() * pool.length)];
      setVisibleImages(new Set([idx]));

      // Update recent images list (keep last 3)
      setRecentImages(prev => [...prev, idx].slice(-3));
    };

    // Initial animation - show first image after a brief delay
    const initialIdx = Math.floor(Math.random() * images.length);
    setVisibleImages(new Set([initialIdx]));
    setRecentImages([initialIdx]);

    // Set up interval for transitions (every 4-6 seconds)
    const scheduleNext = () => {
      const delay = 4000 + Math.random() * 2000; // 4-6 seconds
      return setTimeout(() => {
        animateImages();
        timeoutId = scheduleNext();
      }, delay);
    };

    let timeoutId = scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [images.length]);

  // Don't render anything until mounted on client to prevent hydration mismatch
  if (!mounted) {
    return <div className={`relative ${className}`}></div>;
  }

  return (
    <div className={`relative ${className}`}>
      {images.map((image, index) => {
        // Generate consistent random position for each image based on index
        const seed = index * 123.456;
        const x = (Math.sin(seed) * 35) + 50; // 15-85% range
        const y = (Math.cos(seed) * 30) + 50; // 20-80% range
        const size = 350 + (Math.abs(Math.sin(seed * 2)) * 200); // 350-550px size
        const rotation = (Math.sin(seed * 3) * 2) - 1; // -1 to +1 degrees

        const isVisible = visibleImages.has(index);

        return (
          <div
            key={index}
            className="absolute transition-opacity duration-[2500ms] ease-in-out"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -10%) rotate(${rotation}deg)`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: isVisible ? 1 : 0,
              zIndex: isVisible ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md bg-warm-beige">
              <Image
                src={image.src}
                alt={image.alt || 'Montage image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 600px"
                priority={index === 0}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
