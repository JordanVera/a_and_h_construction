import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  ChevronDownIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from 'lucide-react';

import { CtaBanner } from '@/components/cta-banner';
import { EstimateForm } from '@/components/estimate-form';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredAreas } from '@/lib/areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return featuredAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = featuredAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: area.headline,
    description: area.intro,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = featuredAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={area.region}
        title={area.headline}
        description={area.subheadline}
        image={area.image}
        imageAlt={area.imageAlt}
      />

      {/* Highlights bar */}
      <div className="border-b border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Stagger className="flex flex-wrap gap-3 py-5">
            {area.highlights.map((item) => (
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

      {/* Body copy + neighborhoods */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {area.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Call{' '}
              <a
                href={site.phoneHref}
                className="font-medium text-foreground hover:text-primary"
              >
                {site.phone}
              </a>{' '}
              or send the form below. Hours: {site.hours.weekdays}.{' '}
              {site.hours.weekend}.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-6">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <MapPinIcon className="size-4 text-primary" />
                Neighborhoods we know
              </p>
              <div className="flex flex-wrap gap-2">
                {area.neighborhoods.map((name) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="rounded-full"
                  >
                    {name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick contact card */}
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-semibold">
                Ready to get started?
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-lg font-bold text-primary hover:underline"
              >
                <PhoneIcon className="size-5" />
                {site.phone}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">
                {site.hours.weekdays}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <StarIcon className="size-3.5 text-amber-400" />
                  5.0 Google Rating
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <ShieldCheckIcon className="size-3.5 text-primary" />
                  Licensed &amp; Insured
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <BadgeCheckIcon className="size-3.5 text-primary" />
                  Bonded
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why A&H for this area */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow={`Why A&H in ${area.name}`}
          title={`What makes us the right fit for ${area.name} homeowners`}
          description="Same crew, same standards — with specific knowledge of local home styles, climate, and what holds up here."
        />
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {area.whyUs.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:glow-primary">
                <div className="flex items-start justify-between">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <MapPinIcon className="size-5 text-primary" />
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

      {/* Services in this area */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title={`Services available in ${area.name}`}
          description={area.servicesIntro}
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View all service details
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </FadeIn>
      </Section>

      {/* Discounts */}
      <div className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <FadeIn>
            <div className="flex flex-wrap items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warm/10">
                  <GiftIcon className="size-4 text-warm" />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Special savings for {area.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Because quality remodeling should be accessible
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {area.discounts.map((discount) => (
                  <div
                    key={discount}
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium"
                  >
                    <CheckIcon className="size-3.5 text-primary" />
                    {discount}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Local FAQs */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow={`${area.name} FAQ`}
          title={`Common questions from ${area.name} homeowners`}
          description="Everything you need to know before reaching out — specific to your area."
        />
        <FadeIn className="max-w-3xl space-y-3">
          {area.localFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-sm">
                {faq.question}
                <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </div>
            </details>
          ))}
        </FadeIn>
      </Section>

      {/* Estimate form */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                {area.name}
              </Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Request a free estimate in {area.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We will reach out the same day — usually the same afternoon. No
                obligation, no pressure.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Free walk-through and written estimate',
                'Licensed, insured & bonded crew',
                'Response within 1 business day',
                `Serving ${area.name} since ${site.founded}`,
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
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
              <p className="text-xs text-muted-foreground">
                {site.hours.weekdays}
              </p>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <EstimateForm />
          </FadeIn>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
