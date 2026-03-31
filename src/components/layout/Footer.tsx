'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { COMPANY, getPhoneUrl, getWhatsAppUrl } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const isDevanagari = locale === 'hi' || locale === 'mai';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size="md" variant="white" />
              <span className="text-lg font-bold text-white">
                {isDevanagari ? COMPANY.nameHi : COMPANY.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('quickLinks')}
            </h3>
            <nav className="flex flex-col gap-2">
              {(['home', 'about', 'brands', 'services', 'contact'] as const).map(
                (key) => (
                  <Link
                    key={key}
                    href={key === 'home' ? '/' : `/${key}`}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {tNav(key)}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('contactInfo')}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <p>{COMPANY.address.full}</p>
              <div>
                <a href={getPhoneUrl()} className="transition-colors hover:text-white">{COMPANY.phone}</a>
                <br />
                <a href={getPhoneUrl('secondary')} className="transition-colors hover:text-white">{COMPANY.phone2}</a>
              </div>
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-whatsapp"
              >
                WhatsApp: {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-white"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6">
          <div className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-neutral-500">
            <span>GST: {COMPANY.gst}</span>
            <span>D.L. {COMPANY.drugLicense}</span>
          </div>
          <p className="text-center text-sm text-neutral-500">
            &copy; {year} {COMPANY.name}. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
