import type { Metadata } from 'next';
import { COMPANY } from './constants';

type PageKey = 'home' | 'about' | 'brands' | 'services' | 'contact';

const BASE_URL = 'https://shyamapharma.com';

export function generatePageMetadata(
  locale: string,
  page: PageKey,
  messages: Record<string, any>
): Metadata {
  const meta = messages.meta;

  const titleMap: Record<PageKey, string> = {
    home: meta.title,
    about: meta.aboutTitle,
    brands: meta.brandsTitle,
    services: meta.servicesTitle,
    contact: meta.contactTitle,
  };

  const descMap: Record<PageKey, string> = {
    home: meta.description,
    about: meta.aboutDesc,
    brands: meta.brandsDesc,
    services: meta.servicesDesc,
    contact: meta.contactDesc,
  };

  const pathMap: Record<PageKey, string> = {
    home: '',
    about: 'about',
    brands: 'brands',
    services: 'services',
    contact: 'contact',
  };

  const path = pathMap[page];
  const localePrefix = `${locale}/`;

  return {
    title: titleMap[page],
    description: descMap[page],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${localePrefix}${path ? `${path}/` : ''}`,
      languages: {
        en: `${BASE_URL}/en/${path ? `${path}/` : ''}`,
        hi: `${BASE_URL}/hi/${path ? `${path}/` : ''}`,
        'x-default': `${BASE_URL}/en/${path ? `${path}/` : ''}`,
      } as Record<string, string>,
    },
    openGraph: {
      title: titleMap[page],
      description: descMap[page],
      siteName: COMPANY.name,
      url: `${BASE_URL}/${localePrefix}${path ? `${path}/` : ''}`,
      locale: locale === 'hi' ? 'hi_IN' : locale === 'mai' ? 'mai_IN' : 'en_IN',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} - Veterinary Pharma Distributor, Patna Bihar`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleMap[page],
      description: descMap[page],
      images: [`${BASE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    keywords: locale === 'hi'
      ? 'पशु चिकित्सा दवा, वितरक पटना, पशु दवा होलसेल बिहार, वेटरनरी मेडिसिन, न्यूट्रीवेट, टीटीके हेल्थकेयर, पशु दवा थोक विक्रेता बिहार'
      : 'veterinary medicine distributor Patna, vet pharma wholesale Bihar, animal medicine supplier Bihar, Nutrivet Farm Care stockist, TTK Healthcare distributor, veterinary pharmaceutical wholesaler India, livestock medicine Bihar',
  };
}

// Enhanced JSON-LD with more structured data
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: COMPANY.name,
  alternateName: COMPANY.nameHi,
  description:
    'Bihar\'s trusted veterinary pharmaceutical distributor since 1995. Super stockist of Nutrivet Farm Care & TTK Healthcare. Wholesale veterinary medicines across all 38 districts of Bihar.',
  url: BASE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: '1995',
  image: `${BASE_URL}/og-image.png`,
  logo: `${BASE_URL}/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.line1,
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800004',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.619238,
    longitude: 85.15954,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  areaServed: {
    '@type': 'State',
    name: 'Bihar',
    containedInPlace: { '@type': 'Country', name: 'India' },
  },
  knowsAbout: [
    'Veterinary Medicine',
    'Animal Healthcare',
    'Livestock Pharmaceuticals',
    'Veterinary Pharmaceutical Distribution',
    'Cattle Medicine',
    'Poultry Medicine',
    'Animal Feed Supplements',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Veterinary Pharmaceutical Products',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Super Stockist Brands',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Nutrivet Farm Care Products' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'TTK Healthcare Products' } },
        ],
      },
    ],
  },
  sameAs: [],
};

// Breadcrumb JSON-LD for inner pages
export function getBreadcrumbJsonLd(locale: string, page: PageKey, pageTitle: string) {
  const localePrefix = `${locale}/`;
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/${localePrefix}` },
  ];

  if (page !== 'home') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle,
      item: `${BASE_URL}/${localePrefix}${page}/`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
