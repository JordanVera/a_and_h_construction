import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get To Know Us",
  description: `Meet Jose Hernandez and the A & H Construction crew — licensed, insured, and bonded remodeling in ${site.region} since ${site.founded}.`,
};

const values = [
  {
    title: "Reliability",
    body: "We stay organized, communicate clearly, and finish in the window we quoted whenever the weather lets us.",
  },
  {
    title: "Craftsmanship",
    body: "Materials that last in Gulf Coast weather, installed by a crew that has done this work for more than a decade.",
  },
  {
    title: "Customer relationships",
    body: "Straight recommendations, updates during the job, and a number you can actually call after we leave.",
  },
  {
    title: "Professionalism",
    body: "Licensed, insured, and bonded. Clean sites, familiar faces, and the same standards on a small repair as a full remodel.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Get To Know Us"
        title="Built on showing up and saying what the job will actually take"
        description={`${site.owner} started ${site.name} in ${site.founded} to give Humble homeowners a crew they could trust with the roof, the rooms, and the exterior.`}
        image="/images/about.webp"
        imageAlt="A & H Construction crew"
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <FadeIn className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              The company exists for one reason: homeowners deserve roofing and
              remodeling that is organized, on time, and built to last — without
              a runaround. Since {site.founded} we have stayed in Humble, kept a
              regular crew, and taken the jobs neighbors actually need: storm
              roofs, kitchens, baths, siding, paint, and decks.
            </p>
            <p>
              Jose has more than ten years of hands-on construction experience.
              That shows up in the estimate, not just the brochure. We walk the
              property, say what we would do on our own house, and manage
              planning, materials, and schedule so you are not project-managing
              a half-dozen trades by text.
            </p>
            <p>
              What people notice is consistency. The same faces come back. We
              are licensed, insured, and bonded, and we treat a soffit repair
              with the same care as a full exterior. If you want a partner for
              the next project — not a one-and-done bid — that is the
              relationship we are after.
            </p>
          </FadeIn>
          <FadeIn delay={0.12} className="relative aspect-4/5 overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image
              src="/images/about.webp"
              alt="Jose Hernandez and crew on a job site"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="Values"
          title="What we will not trade away"
          description="Honest communication, organized project management, and workmanship that still looks right in five summers."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {value.body}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBanner title="Want to talk through a project?" />
    </>
  );
}
