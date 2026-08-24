import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "lucide-react";

import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={180}
            height={64}
            className="mb-4 h-12 w-auto"
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Licensed, insured, and bonded remodeling since {site.founded}. Jose
            Hernandez and crew — Humble, TX and the Houston area.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <MapPinIcon className="size-4" />
              {site.region}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-foreground"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                Get To Know Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/areas" className="hover:text-foreground">
                Areas Served
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Service area</h3>
          <ul className="columns-2 gap-4 space-y-2 text-sm text-muted-foreground">
            {areas.map((area) => (
              <li key={area.name} className="break-inside-avoid">
                {area.slug ? (
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-foreground"
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
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Licensed, insured, and bonded · Humble, TX</p>
      </div>
    </footer>
  );
}
