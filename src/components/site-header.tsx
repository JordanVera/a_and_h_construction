'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon, ClipboardListIcon } from 'lucide-react';

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

export function AnnouncementBar() {
  return (
    <div className="border-b border-primary/30 bg-primary/15">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-2.5 text-sm md:flex-row md:items-center md:px-6">
        <p className="font-medium text-foreground/90">
          Storm damage? We inspect, document, and repair roofs across Humble and north Houston.
        </p>
        <Button asChild variant="outline" size="sm" className="h-7 shrink-0 text-xs">
          <Link href="/services/roof-repair">See storm repair →</Link>
        </Button>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <AnnouncementBar />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={200}
            height={72}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`px-2.5 py-1.5 text-sm font-medium transition-colors ${pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`px-2.5 py-1.5 text-sm font-medium transition-colors ${pathname === '/about' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-0.5 p-1">
                  <li>
                    <NavigationMenuLink href="/services" className="font-medium">
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
              <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground">
                Areas Served
              </NavigationMenuTrigger>
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
                className={`px-2.5 py-1.5 text-sm font-medium transition-colors ${pathname === '/projects' ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-primary md:flex"
          >
            <PhoneIcon className="size-3.5" />
            {site.phone}
          </a>
          <Button asChild className="hidden h-9 px-4 text-sm sm:inline-flex">
            <Link href="/contact">
              <ClipboardListIcon className="size-3.5" />
              Free Estimate
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                {open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader className="pb-2">
                <SheetTitle>
                  <Image
                    src={site.logo}
                    alt={`${site.name} logo`}
                    width={160}
                    height={58}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="px-4 pb-2">
                <Button asChild className="h-11 w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <ClipboardListIcon className="size-4" />
                    Get Free Estimate
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium transition-colors hover:bg-muted"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </div>

              <nav className="flex flex-col gap-0.5 px-4 pb-8 pt-4">
                <MobileLink href="/" onNavigate={() => setOpen(false)} active={pathname === '/'}>
                  Home
                </MobileLink>
                <MobileLink href="/about" onNavigate={() => setOpen(false)} active={pathname === '/about'}>
                  About Us
                </MobileLink>
                <p className="mb-1 mt-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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
                <p className="mb-1 mt-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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
                <MobileLink href="/projects" onNavigate={() => setOpen(false)} active={pathname === '/projects'}>
                  Projects
                </MobileLink>
                <MobileLink href="/contact" onNavigate={() => setOpen(false)} active={pathname === '/contact'}>
                  Contact Us
                </MobileLink>
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
  active,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
        active
          ? 'bg-primary/10 font-medium text-primary'
          : 'text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </Link>
  );
}
