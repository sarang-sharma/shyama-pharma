'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { products } from '@/data/products';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const categoryIcons: Record<string, string> = {
  supplement: '💊',
  mineral: '⚗️',
  tonic: '🧪',
  treatment: '🩺',
  digestive: '🌿',
};

export default function ProductsSection() {
  const t = useTranslations('products');

  return (
    <section className="bg-secondary-900 py-14 md:py-20">
      <Container>
        {/* Header with Sanjeevani branding */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300">
            {t('badge')}
          </span>
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-base text-secondary-400 md:text-lg">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-sm italic text-primary-400">
            {t('tagline')}
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-secondary-700 bg-secondary-800 p-5 transition-all hover:border-primary-600/50 hover:bg-secondary-700/50"
            >
              {/* Product icon & category */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl">{categoryIcons[product.category]}</span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {t(`categories.${product.category}`)}
                </span>
              </div>

              {/* Name & tagline */}
              <h3 className="text-lg font-bold text-white">
                {product.name}
                {product.nameHi && (
                  <span className="ml-1.5 text-sm font-normal text-secondary-400">
                    ({product.nameHi})
                  </span>
                )}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-primary-300">
                {product.tagline}
              </p>

              {/* Benefits */}
              <ul className="mt-3 space-y-1">
                {product.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-1.5 text-xs text-secondary-300">
                    <svg className="mt-0.5 h-3 w-3 shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Packing info */}
              <div className="mt-4 flex items-center gap-1.5 border-t border-secondary-700 pt-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-secondary-500">
                  {t('packing')}:
                </span>
                <span className="text-xs text-secondary-300">{product.packing}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
