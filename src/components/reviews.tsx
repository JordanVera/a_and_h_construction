import { StarIcon } from 'lucide-react';

import { Stagger, StaggerItem } from '@/components/motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { reviews } from '@/lib/reviews';
import { Section, SectionHeading } from '@/components/section';

export function Reviews() {
  return (
    <Section className="bg-card/40">
      <SectionHeading
        eyebrow="Google reviews"
        title="Trusted by local homeowners"
        description="A sample of what Humble-area neighbors say about Jose Hernandez and the crew."
      />
      <Stagger
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {reviews.map((review) => (
          <StaggerItem key={review.name}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 flex gap-0.5 text-primary" aria-hidden>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-sm">{review.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  “{review.quote}”
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
