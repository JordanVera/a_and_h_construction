import { FadeIn } from '@/components/motion';

const stats = [
  { value: '200+', label: 'Projects completed' },
  { value: '10', label: 'Years in business' },
  { value: '★ 5.0', label: 'Google rating', sub: '50+ reviews' },
  { value: '100%', label: 'Licensed · Insured · Bonded' },
];

export function StatsBanner() {
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
              <span className="font-heading text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground">{stat.label}</span>
              {stat.sub && (
                <span className="text-xs text-muted-foreground">{stat.sub}</span>
              )}
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  );
}
