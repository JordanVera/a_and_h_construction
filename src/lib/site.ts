export const site = {
  name: "A & H Construction",
  shortName: "A & H",
  tagline: "Licensed remodeling and roofing in Humble, TX",
  description:
    "Licensed, insured, and bonded roofing, remodeling, siding, painting, and outdoor living contractor serving Humble, TX and the greater Houston area since 2016.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ahconstructiontx.com",
  phone: "(832) 519-6317",
  phoneHref: "tel:+18325196317",
  email:
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? "hernandez13921@gmail.com",
  owner: "Jose Hernandez",
  founded: 2016,
  city: "Humble",
  state: "TX",
  region: "Humble, TX",
  mapsUrl: "https://maps.app.goo.gl/AG2kFmBEMPEk6kb38",
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    weekend: "Saturday – Sunday: Closed",
    schema: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
  credentials: ["Licensed", "Insured", "Bonded"] as const,
  logo: "/logos/logo-white.png",
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Get To Know Us" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas Served" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
] as const;
