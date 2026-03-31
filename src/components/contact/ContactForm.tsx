'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppUrl } from '@/lib/constants';

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const message = data.get('message') as string;

    // Compose WhatsApp message as fallback/primary contact method
    const whatsappText = `${locale === 'hi' ? 'नमस्ते' : locale === 'mai' ? 'प्रणाम' : 'Hello'}, ${locale === 'hi' ? 'मेरा नाम' : locale === 'mai' ? 'हमर नाम' : 'my name is'} ${name}. ${locale === 'hi' ? 'फोन' : locale === 'mai' ? 'फोन' : 'Phone'}: ${phone}. ${message}`;

    // Open WhatsApp with the composed message
    window.open(
      `https://wa.me/918935805714?text=${encodeURIComponent(whatsappText)}`,
      '_blank'
    );

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 p-10">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-primary-800">{t('formSuccess')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
        {t('formTitle')}
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
            {t('formName')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-700">
            {t('formPhone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
            {t('formEmail')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">
            {t('formMessage')} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
        >
          {loading ? '...' : t('formSubmit')}
        </button>
      </form>
    </div>
  );
}
