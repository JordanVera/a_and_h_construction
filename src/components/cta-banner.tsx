import Link from 'next/link';
import { PhoneIcon } from 'lucide-react';

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
    <Section className="bg-primary/10">
      <FadeIn className="flex flex-col items-start justify-between gap-6 rounded-xl border border-primary/20 bg-card p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="h-11 px-5">
            <Link href="/contact">Request an estimate</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-5">
            <a href={site.phoneHref}>
              <PhoneIcon data-icon="inline-start" />
              {site.phone}
            </a>
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
