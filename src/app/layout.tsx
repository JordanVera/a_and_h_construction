import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { LocalBusinessJsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Toaster } from '@/components/ui/sonner';
import { site } from '@/lib/site';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Home Remodeling Contractor Humble, TX | Free Estimates | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/icons/favicon-32.png',
    apple: '/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    locale: 'en_US',
    type: 'website',
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
