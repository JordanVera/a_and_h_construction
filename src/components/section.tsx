import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  id,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={cn('px-4 py-16 md:px-6 md:py-24', className)}>
      <div className={cn('mx-auto w-full', narrow ? 'max-w-3xl' : 'max-w-6xl')}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
