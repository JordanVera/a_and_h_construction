import type { Metadata } from 'next';
import Link from 'next/link';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects and uses information on this website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective November 2024, updated for this site rebuild."
        compact
      />
      <Section narrow>
        <FadeIn className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            Your privacy matters. This page explains what we collect when you
            use the {site.name} website and how we use it.
          </p>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              1. Information we collect
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Information you send through the estimate form: name, email,
                phone, zip code, service type, and message.
              </li>
              <li>
                Basic technical data your browser sends, such as IP address,
                browser type, and pages viewed.
              </li>
              <li>
                Cookies or similar tools if we add analytics later. You can
                block cookies in your browser.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              2. How we use it
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To reply to estimate requests and schedule work.</li>
              <li>
                To improve the site and understand which pages help homeowners.
              </li>
              <li>To meet legal obligations if they apply.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              3. Form submissions
            </h2>
            <p>
              Estimate forms are processed by{' '}
              <a
                href="https://formsubmit.co/"
                className="text-foreground underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                FormSubmit
              </a>{' '}
              and delivered to our business email. Do not send payment card
              numbers or other sensitive records through the form.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              4. Third-party services
            </h2>
            <p>
              We may use tools such as Google Analytics or ads in the future.
              Those companies have their own privacy policies. We do not sell
              your contact information.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              5. Data security and children
            </h2>
            <p>
              We take reasonable steps to protect information, but no website is
              perfectly secure. This site is not directed at children under 13,
              and we do not knowingly collect their information.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium text-foreground">
              6. Changes and contact
            </h2>
            <p>
              We may update this policy and will change the date at the top when
              we do. Questions? Use the{' '}
              <Link
                href="/contact"
                className="text-foreground underline underline-offset-4"
              >
                contact form
              </Link>{' '}
              or call {site.phone}.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
