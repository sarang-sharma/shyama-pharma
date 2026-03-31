import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';
import BrandShowcase from '@/components/home/BrandShowcase';
import ServicesPreview from '@/components/home/ServicesPreview';
import AnimalGallery from '@/components/ui/AnimalGallery';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return generatePageMetadata(locale, 'home', messages as Record<string, any>);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <BrandShowcase />
      <AnimalGallery />
      <ServicesPreview />
    </>
  );
}
