import { BadgeCheckIcon, ShieldCheckIcon, StarIcon, CalendarIcon } from 'lucide-react';

const trustItems = [
  {
    icon: StarIcon,
    label: '5.0 Google Rating',
    sub: '50+ reviews',
    iconClass: 'text-amber-400',
  },
  {
    icon: ShieldCheckIcon,
    label: 'Licensed & Insured',
    sub: 'State of Texas',
    iconClass: 'text-primary',
  },
  {
    icon: BadgeCheckIcon,
    label: 'Bonded',
    sub: 'Fully bonded crew',
    iconClass: 'text-primary',
  },
  {
    icon: CalendarIcon,
    label: 'Since 2016',
    sub: 'Humble, TX',
    iconClass: 'text-primary',
  },
];

export function TrustBar() {
  return (
    <div className="border-b border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex overflow-x-auto scrollbar-none">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex shrink-0 items-center gap-3 px-6 py-4 ${
                i < trustItems.length - 1 ? 'border-r border-border' : ''
              } first:pl-0 last:pr-0`}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                <item.icon className={`size-4 ${item.iconClass}`} />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
