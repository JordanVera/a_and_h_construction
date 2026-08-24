import Link from 'next/link';
import { PhoneIcon, ArrowRightIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';
import { Section } from '@/components/section';

export function CtaBanner({
  title = 'Ready for a free estimate?',
  description = 'Tell us what you need — roof, remodel, siding, paint, or a deck. We will walk the property and give you a straight number.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section className="bg-primary">
      <FadeIn className="relative overflow-hidden rounded-2xl">
        <div className="stripe-pattern absolute inset-0 opacity-60" />
        <div className="relative flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button
              asChild
              className="h-11 bg-white px-6 text-primary hover:bg-white/90 hover:text-primary"
            >
              <Link href="/contact">
                Request an estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/40 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
