import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { CtaBanner } from '@/components/cta-banner';
import { EstimateForm } from '@/components/estimate-form';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { areas, featuredAreas } from '@/lib/areas';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Areas We Serve',
  description: `Roofing and remodeling throughout Humble, Houston, Spring, The Woodlands, and nearby Texas communities. Call ${site.phone}.`,
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas served"
        title="Humble, TX and the towns around it"
        description="Roofing, remodeling, siding, and paint across north and greater Houston. If you are on the list, we will drive."
        image="/images/map.webp"
        imageAlt="Greater Houston service area"
        compact
      />

      <Section>
        <SectionHeading
          title="Communities we work in"
          description="Dedicated pages for Spring and Hilshire Village. Everywhere else, request an estimate and we will confirm we cover your street."
        />
        <Stagger
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
          stagger={0.04}
        >
          {areas.map((area) => (
            <StaggerItem key={area.name}>
              <Card size="sm" className="h-full">
                <CardHeader>
                  <CardTitle className="text-sm">{area.name}</CardTitle>
                </CardHeader>
                {area.slug ? (
                  <CardContent>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/areas/${area.slug}`}>
                        Local page
                        <ArrowRightIcon data-icon="inline-end" />
                      </Link>
                    </Button>
                  </CardContent>
                ) : null}
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Featured cities"
              description="More local detail for Spring and Hilshire Village homeowners."
            />
            <ul className="space-y-4">
              {featuredAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {area.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {area.intro}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <FadeIn
            delay={0.1}
            className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-foreground/10"
          >
            <Image
              src="/images/map.webp"
              alt="Map of the Humble and Houston service area"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Start a roofing or remodeling project" />
        <FadeIn className="rounded-xl border border-border bg-card p-6 md:p-8">
          <EstimateForm />
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}
