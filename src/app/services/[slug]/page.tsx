import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckIcon } from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { EstimateForm } from "@/components/estimate-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getService, serviceSlugs } from "@/lib/services";

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

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.hero}
        description={service.summary}
        image={service.image}
        imageAlt={service.name}
        compact
      />

      <Section>
        <Stagger className="grid gap-3 sm:grid-cols-3">
          {service.highlights.map((item) => (
            <StaggerItem key={item}>
              <div className="flex h-full gap-2 rounded-lg border border-border bg-card p-4 text-sm">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="What’s included"
          title={`How we handle ${service.shortName.toLowerCase()}`}
        />
        <Stagger className="grid gap-4 md:grid-cols-2">
          {service.offerings.map((offering) => (
            <StaggerItem key={offering.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {offering.description}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <FaqAccordion
        items={service.faqs}
        title={`Questions about ${service.shortName.toLowerCase()}`}
      />

      <Section>
        <SectionHeading
          eyebrow="Free estimate"
          title="Tell us about the job"
          description="Same form we use on every page. We will call you back with next steps."
        />
        <FadeIn className="rounded-xl border border-border bg-card p-6 md:p-8">
          <EstimateForm defaultService={service.formValue} />
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}
