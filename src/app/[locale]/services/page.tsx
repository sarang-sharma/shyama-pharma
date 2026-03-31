import { setRequestLocale, getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return generatePageMetadata(locale, 'services', messages as Record<string, any>);
}

const serviceCards = [
  { icon: '🚛', titleKey: 'distribution', descKey: 'distributionDesc', features: ['distributionF1', 'distributionF2', 'distributionF3'] },
  { icon: '🏪', titleKey: 'wholesale', descKey: 'wholesaleDesc', features: ['wholesaleF1', 'wholesaleF2', 'wholesaleF3'] },
  { icon: '🤝', titleKey: 'stockist', descKey: 'stockistDesc', features: ['stockistF1', 'stockistF2', 'stockistF3'] },
] as const;

const whyCards = [
  { icon: '🏆', titleKey: 'why1Title', descKey: 'why1Desc' },
  { icon: '🏷️', titleKey: 'why2Title', descKey: 'why2Desc' },
  { icon: '🗺️', titleKey: 'why3Title', descKey: 'why3Desc' },
  { icon: '💰', titleKey: 'why4Title', descKey: 'why4Desc' },
  { icon: '🚚', titleKey: 'why5Title', descKey: 'why5Desc' },
  { icon: '🤝', titleKey: 'why6Title', descKey: 'why6Desc' },
] as const;

const biharDistricts = [
  'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Purnia', 'Darbhanga',
  'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Chhapra',
  'Samastipur', 'Hajipur', 'Sasaram', 'Dehri', 'Siwan', 'Motihari',
  'Nawada', 'Bagaha', 'Buxar', 'Kishanganj', 'Sitamarhi', 'Jamalpur',
];

function ServicesContent() {
  const t = useTranslations('services');

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-900 py-14 md:py-20">
        <Container className="text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mt-3 text-base text-secondary-300 md:text-lg">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm md:p-8"
              >
                <span className="text-4xl">{card.icon}</span>
                <h2 className="mt-4 text-xl font-bold text-neutral-900">
                  {t(card.titleKey)}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {t(card.descKey)}
                </p>
                <ul className="mt-4 space-y-2">
                  {card.features.map((fKey) => (
                    <li key={fKey} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t(fKey)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="bg-neutral-50 py-12 md:py-20">
        <Container>
          <SectionHeading title={t('coverageTitle')} subtitle={t('coverageDesc')} />
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap gap-2">
              {biharDistricts.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700"
                >
                  {d}
                </span>
              ))}
              <span className="rounded-full bg-primary-600 px-3 py-1.5 text-sm font-medium text-white">
                + more
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <Container>
          <SectionHeading title={t('whyTitle')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-xl border border-neutral-100 bg-white p-5 shadow-sm"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="mt-2 font-semibold text-neutral-900">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{t(card.descKey)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}
