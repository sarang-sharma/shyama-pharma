'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { COMPANY } from '@/lib/constants';
import Container from '@/components/ui/Container';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-bold text-white md:text-4xl">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { value: COMPANY.yearsInBusiness, suffix: '+', label: t('years') },
    { value: 30, suffix: '+', label: t('brands') },
    { value: 38, suffix: '', label: t('coverage'), displayValue: t('coverageValue') },
  ];

  return (
    <section className="bg-primary-700 py-10 md:py-14">
      <Container>
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              {stat.displayValue ? (
                <div className="text-2xl font-bold text-white md:text-4xl">
                  {stat.displayValue}
                </div>
              ) : (
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              )}
              <p className="mt-1 text-xs text-primary-200 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
