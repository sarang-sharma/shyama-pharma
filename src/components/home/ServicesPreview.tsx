'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const serviceCards = [
  { icon: '🚛', titleKey: 'distribution', descKey: 'distributionDesc', href: '/services' },
  { icon: '🏪', titleKey: 'wholesale', descKey: 'wholesaleDesc', href: '/services' },
  { icon: '🤝', titleKey: 'stockist', descKey: 'stockistDesc', href: '/services' },
] as const;

export default function ServicesPreview() {
  const t = useTranslations('servicesPreview');
  const ts = useTranslations('services');

  return (
    <section className="py-12 md:py-20">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.titleKey}
              href={card.href}
              className="group rounded-xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-primary-700">
                {ts(card.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {ts(card.descKey)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                {t('learnMore')}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
