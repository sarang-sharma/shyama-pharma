import { setRequestLocale, getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import { superStockists, stockists } from '@/data/brands';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandLogo from '@/components/ui/BrandLogo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return generatePageMetadata(locale, 'brands', messages as Record<string, any>);
}

function BrandsContent() {
  const t = useTranslations('brands');

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-900 py-14 md:py-20">
        <Container className="text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mt-3 text-base text-secondary-300 md:text-lg">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Super Stockists */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading
            title={t('superStockistTitle')}
            subtitle={t('superStockistDesc')}
          />
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {superStockists.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center gap-4 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 shadow-sm"
              >
                <BrandLogo brand={brand} size="lg" />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {brand.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white">
                    {t('superStockist')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Brands Grid */}
      <section className="bg-neutral-50 py-12 md:py-20">
        <Container>
          <SectionHeading
            title={t('allBrandsTitle')}
            subtitle={t('allBrandsDesc')}
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {stockists.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <BrandLogo brand={brand} size="lg" />
                <p className="text-center text-sm font-medium text-neutral-800">
                  {brand.name}
                </p>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                  {t('authorizedStockist')}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BrandsContent />;
}
