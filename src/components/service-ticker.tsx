'use client';

import { HammerIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const SERVICE_TICKER = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage Repair',
  'Siding Installation',
  'Fiber Cement Siding',
  'Interior Painting',
  'Exterior Painting',
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Deck Building',
  'Composite Decking',
  'Free Inspections',
] as const;

const TRUST_ITEMS = [
  {
    value: 'Licensed',
    label: 'Residential contractor licensed for Humble and the Houston area.',
  },
  {
    value: 'Insured',
    label: 'Coverage in place so the work on your house is protected.',
  },
  {
    value: 'Bonded',
    label: 'A bonded crew you can trust on the property from start to finish.',
  },
  {
    value: 'Free estimates',
    label: 'We walk the job and give you a straight number — no lock-in.',
  },
] as const;

function TickerRow({
  items,
  direction,
  duration,
}: {
  items: readonly string[];
  direction: 'forwards' | 'reverse';
  duration: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="group flex overflow-hidden"
      style={
        {
          '--animation-duration': duration,
          '--animation-direction': direction,
        } as React.CSSProperties
      }
    >
      <ul className="flex w-max shrink-0 animate-scroll flex-nowrap items-center gap-4 pr-4 group-hover:paused motion-reduce:animate-none">
        {doubled.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-border/60 bg-background/60 px-5 py-2.5 backdrop-blur"
          >
            <HammerIcon className="size-3.5 shrink-0 text-primary" />
            <span className="text-sm font-medium whitespace-nowrap text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceTicker({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-y border-border/60 bg-background/40 py-10 md:py-12',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background via-background/80 to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background via-background/80 to-transparent sm:w-40" />

      <p className="mb-6 text-center text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        Every service under one roof
      </p>

      <div className="space-y-4">
        <TickerRow items={SERVICE_TICKER} direction="forwards" duration="60s" />
        <TickerRow
          items={[...SERVICE_TICKER].reverse()}
          direction="reverse"
          duration="75s"
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item.value} className="border-l-2 border-primary/40 pl-4">
            <p className="text-sm font-bold text-foreground">{item.value}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
