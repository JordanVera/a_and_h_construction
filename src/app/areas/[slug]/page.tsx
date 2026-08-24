import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { EstimateForm } from "@/components/estimate-form";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { featuredAreas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

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
  if (!area) {
    return {};
  }
  return {
    title: `Home Remodeling Contractor in ${area.name}`,
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
  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={area.name}
        title={area.headline}
        description={area.intro}
        image="/images/Home-hero.webp"
        imageAlt={`Home remodeling in ${area.name}`}
        compact
      />

      <Section>
        <FadeIn className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {area.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Call {site.phone} or send the form below. Hours: {site.hours.weekdays}.{" "}
            {site.hours.weekend}.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8">
          <p className="mb-3 text-sm font-medium">Neighborhoods we know</p>
          <Stagger className="flex flex-wrap gap-2" stagger={0.05}>
            {area.neighborhoods.map((name) => (
              <StaggerItem key={name}>
                <Badge variant="secondary">{name}</Badge>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading title={`Services in ${area.name}`} />
        <ul className="grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="text-sm text-muted-foreground">
              {service.name}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading title={`Request an estimate in ${area.name}`} />
        <FadeIn className="rounded-xl border border-border bg-card p-6 md:p-8">
          <EstimateForm />
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}
