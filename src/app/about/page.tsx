import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheckIcon,
  ClockIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet Jose Hernandez and the A & H Construction crew — licensed, insured, and bonded remodeling in ${site.region} since ${site.founded}.`,
};

const values = [
  {
    title: "Reliability",
    icon: ClockIcon,
    body: "We stay organized, communicate clearly, and finish in the window we quoted whenever the weather lets us.",
  },
  {
    title: "Craftsmanship",
    icon: BadgeCheckIcon,
    body: "Materials that last in Gulf Coast weather, installed by a crew that has done this work for more than a decade.",
  },
  {
    title: "Customer relationships",
    icon: UsersIcon,
    body: "Straight recommendations, updates during the job, and a number you can actually call after we leave.",
  },
  {
    title: "Professionalism",
    icon: ShieldCheckIcon,
    body: "Licensed, insured, and bonded. Clean sites, familiar faces, and the same standards on a small repair as a full remodel.",
  },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "200+", label: "Projects completed" },
  { value: "★ 5.0", label: "Google rating" },
  { value: "100%", label: "Licensed · Insured" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About A & H Construction"
        title="Built on showing up and saying what the job will actually take"
        description={`${site.owner} started ${site.name} in ${site.founded} to give Humble homeowners a crew they could trust with the roof, the rooms, and the exterior.`}
        image="/images/about.webp"
        imageAlt="A & H Construction crew"
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 px-6 py-6 text-center"
              >
                <span className="font-heading text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
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

            {/* Pull quote */}
            <blockquote className="relative rounded-xl border border-primary/20 bg-primary/5 p-6">
              <MessageSquareIcon className="mb-3 size-5 text-primary/50" />
              <p className="text-base font-medium leading-relaxed text-foreground">
                &ldquo;I started this company because I saw too many homeowners
                get burned by contractors who disappeared after the deposit. We
                show up, we finish, and we stand behind the work.&rdquo;
              </p>
              <footer className="mt-3 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="size-3 fill-current" />
                  ))}
                </div>
                <cite className="text-sm font-semibold not-italic text-foreground">
                  {site.owner}, Founder &amp; Owner
                </cite>
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn
            delay={0.12}
            className="relative aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-foreground/10"
          >
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

      {/* Values */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="Values"
          title="What we will not trade away"
          description="Honest communication, organized project management, and workmanship that still looks right in five summers."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full transition-shadow hover:glow-primary">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
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
