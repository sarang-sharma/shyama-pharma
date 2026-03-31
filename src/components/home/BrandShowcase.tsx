'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { brands, superStockists } from '@/data/brands';
import BrandLogo from '@/components/ui/BrandLogo';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BrandShowcase() {
  const t = useTranslations('brandShowcase');

  return (
    <section className="bg-neutral-50 py-12 md:py-20">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        {/* Super Stockist badges */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {superStockists.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center gap-3 rounded-xl border-2 border-primary-200 bg-white px-5 py-3 shadow-sm"
            >
              <BrandLogo brand={brand} size="md" />
              <div>
                <p className="font-semibold text-neutral-900">{brand.name}</p>
                <span className="inline-block rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                  {t('superStockist')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Swipeable brand list — no animation, native scroll, zero jank */}
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 scrollbar-none sm:-mx-6 sm:px-6" style={{ WebkitOverflowScrolling: 'touch' }}>
          {brands.map((brand) => (
            <span
              key={brand.id}
              className="shrink-0 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              {brand.name}
            </span>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/brands"
            className="inline-flex items-center gap-1 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            {t('viewAll')}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
