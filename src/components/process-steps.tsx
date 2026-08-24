import Link from 'next/link';
import { PhoneIcon, ClipboardListIcon, HardHatIcon, ArrowRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';

const steps = [
  {
    number: '01',
    icon: PhoneIcon,
    title: 'Call or send the form',
    description:
      'Reach out by phone or submit the estimate form. We respond within one business day — usually the same afternoon.',
  },
  {
    number: '02',
    icon: ClipboardListIcon,
    title: 'Free walk-through & estimate',
    description:
      'Jose walks the property with you, documents everything, and hands you a straight number with no hidden fees or pressure.',
  },
  {
    number: '03',
    icon: HardHatIcon,
    title: 'We do the work, you approve',
    description:
      'We show up on schedule, keep you in the loop throughout, and do not consider the job done until you sign off.',
  },
];

export function ProcessSteps() {
  return (
    <Section className="bg-card/40">
      <SectionHeading
        eyebrow="How it works"
        title="Simple from the first call to the final walkthrough"
        description="No runaround, no mystery pricing. Three steps from first contact to a finished project."
      />
      <Stagger className="grid gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:glow-primary">
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                  <step.icon className="size-5 text-primary" />
                </div>
                <span className="font-mono text-4xl font-bold text-border select-none">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeIn className="mt-8">
        <Button asChild className="h-11 px-6">
          <Link href="/contact">
            Start now
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </FadeIn>
    </Section>
  );
}
