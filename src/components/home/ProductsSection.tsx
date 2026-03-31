'use client';

import { useTranslations } from 'next-intl';
import { products } from '@/data/products';
import Container from '@/components/ui/Container';

export default function ProductsSection() {
  const t = useTranslations('products');

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            {t('badge')}
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-base text-neutral-600 md:text-lg">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-sm font-medium italic text-primary-600">
            &ldquo;{t('tagline')}&rdquo;
          </p>
        </div>

        {/* Product cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Colored header strip with icon */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ backgroundColor: product.color }}
              >
                <span className="text-3xl">{product.icon}</span>
                <div>
                  <h3 className="font-bold text-white">
                    {product.name}
                  </h3>
                  {product.nameHi && (
                    <span className="text-xs text-white/70">{product.nameHi}</span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-xs font-medium leading-relaxed text-neutral-600">
                  {product.tagline}
                </p>

                {/* Benefits */}
                <ul className="mt-3 space-y-1.5">
                  {product.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-neutral-700">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Packing */}
                <div className="mt-4 rounded-lg bg-neutral-50 px-3 py-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                    {t('packing')}
                  </span>
                  <p className="text-xs font-medium text-neutral-800">{product.packing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
