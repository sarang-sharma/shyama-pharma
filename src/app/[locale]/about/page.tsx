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
  return generatePageMetadata(locale, 'about', messages as Record<string, any>);
}

const milestones = [
  { yearKey: 'milestone1Year', titleKey: 'milestone1Title', descKey: 'milestone1Desc' },
  { yearKey: 'milestone2Year', titleKey: 'milestone2Title', descKey: 'milestone2Desc' },
  { yearKey: 'milestone3Year', titleKey: 'milestone3Title', descKey: 'milestone3Desc' },
  { yearKey: 'milestone4Year', titleKey: 'milestone4Title', descKey: 'milestone4Desc' },
] as const;

function AboutContent() {
  const t = useTranslations('about');

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary-900 py-14 md:py-20">
        <Container className="text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">{t('title')}</h1>
          <p className="mt-3 text-base text-secondary-300 md:text-lg">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Intro with Goddess Shyama */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
            <div className="shrink-0">
              <div className="overflow-hidden rounded-2xl border-4 border-primary-100 shadow-lg">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kali_by_Raja_Ravi_Varma.jpg/250px-Kali_by_Raja_Ravi_Varma.jpg"
                  alt="Goddess Shyama (Kali) — painting by Raja Ravi Varma"
                  className="h-48 w-36 object-cover object-top md:h-56 md:w-44"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-center text-[10px] text-neutral-400">
                Goddess Shyama — our namesake
              </p>
            </div>
            <p className="text-center text-base leading-relaxed text-neutral-700 md:text-left md:text-lg">
              {t('intro')}
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 py-12 md:py-20">
        <Container>
          <SectionHeading title={t('historyTitle')} />
          <div className="relative mx-auto max-w-2xl">
            {/* Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200 md:left-1/2 md:-translate-x-0.5" />

            {milestones.map((m, i) => (
              <div
                key={m.yearKey}
                className={`relative mb-10 flex items-start gap-4 md:mb-14 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary-600 ring-4 ring-white md:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-10 rounded-xl bg-white p-5 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-700">
                    {t(m.yearKey)}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                    {t(m.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {t(m.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-primary-50 p-6 md:p-8">
              <div className="mb-3 text-3xl">🎯</div>
              <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
                {t('missionTitle')}
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-700">
                {t('missionText')}
              </p>
            </div>
            <div className="rounded-xl bg-secondary-50 p-6 md:p-8">
              <div className="mb-3 text-3xl">🔭</div>
              <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
                {t('visionTitle')}
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-700">
                {t('visionText')}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}
