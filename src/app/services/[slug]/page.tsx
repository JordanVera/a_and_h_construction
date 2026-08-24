import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
} from 'lucide-react';

import { CtaBanner } from '@/components/cta-banner';
import { EstimateForm } from '@/components/estimate-form';
import { FaqAccordion } from '@/components/faq-accordion';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getService, serviceSlugs, services } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.name} in Humble, TX`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const ServiceIcon = service.icon;

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Services"
        title={service.hero}
        description={service.summary}
        image={service.image}
        imageAlt={service.name}
        compact
      />

      {/* Quick highlights bar */}
      <div className="border-b border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Stagger className="flex flex-wrap gap-3 py-5">
            {service.highlights.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <CheckIcon className="size-3.5 shrink-0" />
                  {item}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Why A&H for this service */}
      <Section>
        <SectionHeading
          eyebrow={`Why A&H for ${service.shortName.toLowerCase()}`}
          title={`What sets us apart on ${service.shortName.toLowerCase()} jobs`}
          description="Every service we offer comes with the same crew, the same standards, and the same straightforward communication — but here is what is specific to this work."
        />
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {service.whyUs.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:glow-primary">
                <div className="flex items-start justify-between">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <ServiceIcon className="size-5 text-primary" />
                  </div>
                  <span className="font-mono text-4xl font-bold text-border select-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* What's included */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="What's included"
          title={`How we handle ${service.shortName.toLowerCase()}`}
        />
        <Stagger className="grid gap-4 md:grid-cols-2">
          {service.offerings.map((offering) => (
            <StaggerItem key={offering.title}>
              <Card className="h-full transition-shadow hover:glow-primary">
                <CardHeader>
                  <div className="mb-2 flex size-8 items-center justify-center rounded-lg bg-primary/10">
                    <ServiceIcon className="size-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {offering.description}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Trust strip */}
      <div className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
            <div className="flex items-center gap-2 text-sm font-medium">
              <StarIcon className="size-4 text-amber-400" />
              5.0 Google Rating · 50+ reviews
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheckIcon className="size-4 text-primary" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <BadgeCheckIcon className="size-4 text-primary" />
              Bonded
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <ClockIcon className="size-4 text-primary" />
              Since 2016 · Humble, TX
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FaqAccordion
        items={service.faqs}
        title={`Questions about ${service.shortName.toLowerCase()}`}
      />

      {/* Estimate form */}
      <Section className="bg-card/40">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Free estimate
              </Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Tell us about your {service.shortName.toLowerCase()} job
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We will call you back with next steps — usually the same day. No
                pressure, no obligation.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Free walk-through and estimate',
                'Straight pricing — no hidden fees',
                'Response within 1 business day',
                `Serving ${site.region} since ${site.founded}`,
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm">
                  <CheckIcon className="size-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
              >
                {site.phone}
              </a>
              <p className="text-xs text-muted-foreground">{site.hours.weekdays}</p>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
          >
            <EstimateForm defaultService={service.formValue} />
          </FadeIn>
        </div>
      </Section>

      {/* Related services */}
      <Section>
        <SectionHeading
          eyebrow="More services"
          title="Other work we handle"
          description="One crew for the whole project — roofing, remodeling, and everything around it."
        />
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {relatedServices.map((related) => (
            <StaggerItem key={related.slug}>
              <ServiceCard service={related} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View all services
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}
