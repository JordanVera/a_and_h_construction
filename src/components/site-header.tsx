'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, PhoneIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { areas } from '@/lib/areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

const featuredAreas = areas.filter((area) => area.slug);

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={200}
            height={72}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                Get To Know Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-0.5 p-1">
                  <li>
                    <NavigationMenuLink
                      href="/services"
                      className="font-medium"
                    >
                      All services
                    </NavigationMenuLink>
                  </li>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavigationMenuLink href={`/services/${service.slug}`}>
                        {service.shortName}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Areas Served</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-64 gap-0.5 p-1">
                  <li>
                    <NavigationMenuLink href="/areas" className="font-medium">
                      All areas
                    </NavigationMenuLink>
                  </li>
                  {featuredAreas.map((area) => (
                    <li key={area.slug}>
                      <NavigationMenuLink href={`/areas/${area.slug}`}>
                        {area.name}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects"
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex h-10 px-4">
            <a href={site.phoneHref}>
              <PhoneIcon data-icon="inline-start" />
              Call Now
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-8">
                <MobileLink href="/" onNavigate={() => setOpen(false)}>
                  Home
                </MobileLink>
                <MobileLink href="/about" onNavigate={() => setOpen(false)}>
                  Get To Know Us
                </MobileLink>
                <p className="mt-3 mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Services
                </p>
                <MobileLink href="/services" onNavigate={() => setOpen(false)}>
                  All services
                </MobileLink>
                {services.map((service) => (
                  <MobileLink
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onNavigate={() => setOpen(false)}
                  >
                    {service.shortName}
                  </MobileLink>
                ))}
                <p className="mt-3 mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Areas
                </p>
                <MobileLink href="/areas" onNavigate={() => setOpen(false)}>
                  All areas
                </MobileLink>
                {featuredAreas.map((area) => (
                  <MobileLink
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    onNavigate={() => setOpen(false)}
                  >
                    {area.name}
                  </MobileLink>
                ))}
                <MobileLink href="/projects" onNavigate={() => setOpen(false)}>
                  Projects
                </MobileLink>
                <MobileLink href="/contact" onNavigate={() => setOpen(false)}>
                  Contact Us
                </MobileLink>
                <Button asChild className="mt-6 h-11">
                  <a href={site.phoneHref} onClick={() => setOpen(false)}>
                    <PhoneIcon data-icon="inline-start" />
                    {site.phone}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-lg px-2 py-2 text-sm text-foreground hover:bg-muted"
    >
      {children}
    </Link>
  );
}
