import { cn } from '@/lib/utils';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && 'text-center', 'mb-10 md:mb-14', className)}>
      <h2 className="text-2xl font-bold text-neutral-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-neutral-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
