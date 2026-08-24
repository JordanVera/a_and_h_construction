import { FadeIn } from '@/components/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section, SectionHeading } from '@/components/section';

export function FaqAccordion({
  items,
  eyebrow = 'FAQ',
  title = 'Questions homeowners ask first',
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FadeIn>
        <Accordion
          type="single"
          collapsible
          className="rounded-xl border border-border bg-card px-4"
        >
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-4 text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </Section>
  );
}
