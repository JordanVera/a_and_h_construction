import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing and Remodeling Services",
  description: `Roof replacement and repair, siding, painting, kitchen and bathroom remodeling, and decks in ${site.region}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Roofing and remodeling for the whole house"
        description="One licensed crew for the roof, the exterior, and the rooms you live in. Free estimates in Humble and the Houston area."
        image="/images/Home-hero.webp"
        imageAlt="Residential remodeling project"
        compact
      />
      <Section>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <CtaBanner />
    </>
  );
}
