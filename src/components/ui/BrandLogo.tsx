'use client';

import { useState } from 'react';
import type { Brand } from '@/data/brands';

export default function BrandLogo({
  brand,
  size = 'md',
}: {
  brand: Brand;
  size?: 'sm' | 'md' | 'lg';
}) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-10 min-w-[80px] px-3 text-[10px] rounded-lg',
    md: 'h-14 min-w-[100px] px-4 text-xs rounded-xl',
    lg: 'h-20 min-w-[130px] px-5 text-sm rounded-2xl',
  };

  const imgSizeClasses = {
    sm: 'h-10 w-auto max-w-[80px] rounded-lg',
    md: 'h-14 w-auto max-w-[120px] rounded-xl',
    lg: 'h-20 w-auto max-w-[160px] rounded-2xl',
  };

  // If we have a real logo URL and it hasn't errored
  if (brand.logo && !imgError) {
    return (
      <div className={`${imgSizeClasses[size]} flex items-center justify-center overflow-hidden bg-white p-1.5`}>
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="h-full w-auto object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: styled text logo
  return (
    <div
      className={`${sizeClasses[size]} inline-flex items-center justify-center font-bold shadow-sm`}
      style={{ backgroundColor: brand.color, color: '#fff' }}
      title={brand.name}
    >
      {brand.name.length > 10
        ? brand.name.split(' ').map(w => w[0]).join('').toUpperCase()
        : brand.name.toUpperCase()}
    </div>
  );
}
