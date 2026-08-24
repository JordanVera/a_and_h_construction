import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from 'lucide-react';

import { EstimateForm } from '@/components/estimate-form';
import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Book a free inspection and estimate with ${site.name} in ${site.region}. Call ${site.phone}.`,
};

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    sub: 'Call or text anytime',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: site.region,
    href: site.mapsUrl,
    sub: 'Open in Google Maps',
    external: true,
  },
  {
    icon: ClockIcon,
    label: 'Hours',
    value: site.hours.weekdays,
    sub: site.hours.weekend,
  },
];

const trustPoints = [
  'Free walk-through and written estimate',
  'No pressure — you decide the timeline',
  'Response within 1 business day',
  `Serving ${site.region} since ${site.founded}`,
];

const trustBadges = [
  { icon: StarIcon, text: '5.0 Google Rating', iconClass: 'text-amber-400' },
  { icon: ShieldCheckIcon, text: 'Licensed & Insured', iconClass: 'text-primary' },
  { icon: BadgeCheckIcon, text: 'Bonded', iconClass: 'text-primary' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring the project to the table"
        description="Free inspections and estimates. Call, or send the form — we will get back to you during business hours."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Left: contact info */}
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Humble, TX
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Choose whichever is easier — we check both. Most calls are answered same day.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:glow-primary"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                        {item.external && <ArrowRightIcon className="size-3 -rotate-45" />}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    )}
                    {item.sub && (
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <Image
                src="/images/map.webp"
                alt="Map of the Humble and Houston service area"
                width={600}
                height={400}
                className="h-52 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Service area</p>
                <p className="text-sm font-medium text-white">{site.region} & surrounding communities</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 border-t border-border pt-4">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5 text-xs font-medium">
                  <badge.icon className={`size-3.5 ${badge.iconClass}`} />
                  {badge.text}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <h2 className="font-heading text-xl font-bold">
                Book a free inspection and estimate
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the form and we will reach out — usually the same afternoon.
              </p>
              <div className="mt-4 space-y-1.5">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <EstimateForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
