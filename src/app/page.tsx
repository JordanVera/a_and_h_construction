import Image from 'next/image';
import Link from 'next/link';
import {
  BadgeCheckIcon,
  ClockIcon,
  HammerIcon,
  MessageSquareIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { CtaBanner } from '@/components/cta-banner';
import { FaqAccordion } from '@/components/faq-accordion';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Reviews } from '@/components/reviews';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { areas } from '@/lib/areas';
import { homeFaqs } from '@/lib/faq';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

const values = [
  {
    title: 'Craftsmanship',
    description:
      'Durable materials and careful installs — not a rush-and-hope finish.',
    icon: HammerIcon,
  },
  {
    title: 'Communication',
    description:
      'You know what is happening this week, not after the dumpster leaves.',
    icon: MessageSquareIcon,
  },
  {
    title: 'Reliability',
    description:
      'Jose shows up when he says he will. The crew works to the schedule you were given.',
    icon: ClockIcon,
  },
  {
    title: 'Consistency',
    description:
      'A regular crew, the same standards, whether it is a soffit or a full kitchen.',
    icon: BadgeCheckIcon,
  },
  {
    title: 'Customer care',
    description:
      'Neighbors hire us again. That is the metric that matters after the punch list.',
    icon: ShieldCheckIcon,
  },
];

export default function HomePage() {
  return (
    <>
      <div className="border-b border-primary/30 bg-primary/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-3 text-sm md:flex-row md:items-center md:px-6">
          <p className="font-medium">
            Storm damage? We inspect, document, and repair roofs across Humble
            and north Houston.
          </p>
          <Button asChild variant="outline" size="sm" className="h-8 shrink-0">
            <Link href="/services/roof-repair">See storm repair</Link>
          </Button>
        </div>
      </div>

      <PageHero
        eyebrow={`${site.region} · Since ${site.founded}`}
        title="A remodeling contractor you can actually reach."
        description="Roofing, kitchens, baths, siding, paint, and decks — licensed, insured, and bonded. Jose Hernandez and crew have been doing the work in Humble since 2016."
        image="/images/Home-hero.webp"
        imageAlt="Houston-area home exterior"
      >
        <Button asChild className="h-11 px-5">
          <Link href="/contact">Let’s talk</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-5 bg-black/30">
          <a href={site.phoneHref}>
            <PhoneIcon data-icon="inline-start" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section className="py-8 md:py-10">
        <Stagger className="flex flex-wrap items-center justify-center gap-2">
          {site.credentials.map((item) => (
            <StaggerItem key={item}>
              <Badge variant="secondary" className="px-3 py-1">
                {item}
              </Badge>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Badge variant="secondary" className="px-3 py-1">
              Free estimates
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <Badge variant="secondary" className="px-3 py-1">
              Serving the Houston area
            </Badge>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Since 2016"
              title="Helping homeowners finish the house they meant to buy"
              description="If you need one crew for the roof, the siding, and the rooms inside, that is the work we take. We stay organized, show up on time, and keep you in the loop until the walkthrough."
            />
            <FadeIn>
              <Button asChild variant="outline" className="h-10">
                <Link href="/about">Learn about us</Link>
              </Button>
            </FadeIn>
          </div>
          <FadeIn delay={0.12} className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/home-media.webp"
              alt="Finished home exterior by A & H Construction"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="How we work"
          title="Licensed, insured, and bonded — and still a small crew"
          description="We started A & H Construction to give homeowners a straight process: honest scope, a schedule, and work that matches what we said we would do."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full">
                <CardHeader>
                  <value.icon className="mb-2 size-5 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {value.description}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Roofing, remodeling, and the work around it"
          description="From storm repairs to kitchens and outdoor living — one team for the whole job."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Reviews />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Humble, TX and the communities around it"
              description="We work throughout north and greater Houston. Dedicated pages for Spring and Hilshire Village — everywhere else, just call."
            />
            <Stagger className="flex flex-wrap gap-2" stagger={0.04}>
              {areas.map((area) =>
                area.slug ? (
                  <StaggerItem key={area.name}>
                    <Link href={`/areas/${area.slug}`}>
                      <Badge variant="outline" className="hover:bg-muted">
                        {area.name}
                      </Badge>
                    </Link>
                  </StaggerItem>
                ) : (
                  <StaggerItem key={area.name}>
                    <Badge variant="outline">{area.name}</Badge>
                  </StaggerItem>
                ),
              )}
            </Stagger>
          </div>
          <FadeIn delay={0.1} className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/map.webp"
              alt="Map of communities served around Humble, Texas"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      <FaqAccordion items={homeFaqs} />
      <CtaBanner />
    </>
  );
}
