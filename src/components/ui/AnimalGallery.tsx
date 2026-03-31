'use client';

import { useEffect, useState } from 'react';

const animals = [
  {
    // Unsplash: dairy cow in field — confirmed working
    src: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&q=60&auto=format&fit=crop',
    alt: 'Dairy cow',
    label: 'Cattle',
  },
  {
    // Wikimedia Commons: domestic water buffalo
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Domestic_water_buffalo_01.jpg/400px-Domestic_water_buffalo_01.jpg',
    alt: 'Water buffalo',
    label: 'Buffalo',
  },
  {
    // Wikimedia Commons: goat in India
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/A_cute_Goat.jpg/400px-A_cute_Goat.jpg',
    alt: 'Goat',
    label: 'Goat',
  },
  {
    // Unsplash: golden retriever — confirmed working
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=60&auto=format&fit=crop',
    alt: 'Dog',
    label: 'Dog',
  },
  {
    // Unsplash: cat — confirmed working
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=60&auto=format&fit=crop',
    alt: 'Cat',
    label: 'Cat',
  },
  {
    // Unsplash: chickens — confirmed working
    src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&q=60&auto=format&fit=crop',
    alt: 'Chickens',
    label: 'Poultry',
  },
];

export default function AnimalGallery() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const conn = (navigator as any).connection;
    if (conn) {
      const slow = conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g';
      setShow(!slow);
    } else {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <section className="bg-secondary-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-secondary-500">
          Complete healthcare for all animals
        </p>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {animals.map((animal) => (
            <div key={animal.label} className="group relative aspect-square overflow-hidden rounded-xl bg-secondary-200">
              <img
                src={animal.src}
                alt={animal.alt}
                loading="lazy" decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-2 pb-2 pt-8">
                <p className="text-center text-xs font-semibold text-white">
                  {animal.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
