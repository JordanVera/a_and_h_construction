import type { Metadata } from 'next';
import Image from 'next/image';
import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

import { EstimateForm } from '@/components/estimate-form';
import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Book a free inspection and estimate with ${site.name} in ${site.region}. Call ${site.phone}.`,
};

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
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <FadeIn className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneIcon className="size-4 text-primary" />
                  Call us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={site.phoneHref}
                  className="text-lg font-medium hover:text-primary"
                >
                  {site.phone}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className="size-4 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>{site.region}</p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  Open in Google Maps
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="size-4 text-primary" />
                  Working hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm text-muted-foreground">
                <p>{site.hours.weekdays}</p>
                <p>{site.hours.weekend}</p>
              </CardContent>
            </Card>
            <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <Image
                src="/images/map.webp"
                alt="Map of the Humble and Houston service area"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <h2 className="mb-6 font-heading text-xl font-semibold">
              Book a free inspection and estimate
            </h2>
            <EstimateForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
