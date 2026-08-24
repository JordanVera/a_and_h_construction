import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  BadgeCheckIcon,
  StarIcon,
} from 'lucide-react';

import { areas } from '@/lib/areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import { Separator } from '@/components/ui/separator';

const trustBadges = [
  { icon: StarIcon, text: '5.0 Google Rating', iconClass: 'text-amber-400' },
  {
    icon: ShieldCheckIcon,
    text: 'Licensed & Insured',
    iconClass: 'text-primary',
  },
  { icon: BadgeCheckIcon, text: 'Bonded', iconClass: 'text-primary' },
];

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-6 border-b border-border py-5">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm">
              <badge.icon className={`size-4 shrink-0 ${badge.iconClass}`} />
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={180}
            height={64}
            className="mb-4 h-12 md:h-24 w-auto"
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Licensed, insured, and bonded remodeling since {site.founded}. Jose
            Hernandez and crew — Humble, TX and the Houston area.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              {site.phone}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <MapPinIcon className="size-4 shrink-0 text-primary" />
              {site.region}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground inline-block"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/projects', label: 'Projects' },
              { href: '/areas', label: 'Areas Served' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Service area
          </h3>
          <ul className="columns-2 gap-4 space-y-2 text-sm text-muted-foreground">
            {areas.map((area) => (
              <li key={area.name} className="break-inside-avoid">
                {area.slug ? (
                  <Link
                    href={`/areas/${area.slug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {area.name}
                  </Link>
                ) : (
                  area.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Licensed, insured, and bonded · Humble, TX</p>
      </div>
    </footer>
  );
}
