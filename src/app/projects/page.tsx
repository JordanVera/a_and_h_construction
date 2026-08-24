import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CtaBanner } from '@/components/cta-banner';
import { Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Recent roofing, remodeling, siding, painting, and deck work from A & H Construction in Humble, TX.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent home improvement work"
        description="Photos from the jobs we do most: roofs, siding, paint, kitchens, baths, and decks. The current gallery on the old site was thin — these are the project images homeowners already see on each service page."
        image="/images/deck.webp"
        imageAlt="Completed outdoor living project"
        compact
      />
      <Section>
        <SectionHeading title="Work around Humble and Houston" />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Link
                href={project.href}
                className="group overflow-hidden rounded-xl ring-1 ring-foreground/10"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card px-4 py-3 text-sm font-medium">
                  {project.title}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <CtaBanner title="Have a similar project?" />
    </>
  );
}
