export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  summary: string;
  hero: string;
  image: string;
  cardImage: string;
  highlights: string[];
  offerings: { title: string; description: string }[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Roof Replacement",
    formValue: "Roof Replacement",
    summary:
      "Full replacements built for Texas heat, wind, and hail — from inspection through cleanup.",
    hero: "Replace a worn roof before the next storm finds the weak spots.",
    image: "/images/roof-replacement.webp",
    cardImage: "/images/roof-replacement-card.webp",
    highlights: [
      "Free roof inspections in Humble and nearby cities",
      "Insurance documentation after storm damage",
      "Asphalt shingles and metal systems rated for Texas weather",
    ],
    offerings: [
      {
        title: "Roof inspections",
        description:
          "We check leaks, ventilation, flashing, and structure so you know whether repair or replacement is the honest call.",
      },
      {
        title: "Storm replacements",
        description:
          "Hail and wind can finish a tired roof. We tear off damaged systems and install materials that can take another season of Gulf weather.",
      },
      {
        title: "Insurance help",
        description:
          "We document damage and speak with adjusters so homeowners are not left translating roofing jargon alone.",
      },
      {
        title: "Full installation",
        description:
          "Careful tear-off, proper ventilation and flashing, then a clean job site. Most replacements finish in one to three days.",
      },
    ],
    faqs: [
      {
        question: "How do I know I need a replacement?",
        answer:
          "Missing shingles, leaks, sagging, water stains, or a roof older than 15–25 years are common signs. An inspection tells you if a repair still makes sense.",
      },
      {
        question: "How long does a replacement take?",
        answer:
          "Most homes take one to three days, depending on size, material, and weather.",
      },
      {
        question: "Do you work with insurance?",
        answer:
          "Yes. We document storm damage and communicate with adjusters throughout the claim.",
      },
    ],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair & Storm Damage",
    shortName: "Roof Repair",
    formValue: "Roof Repair & Storm Damage Repair",
    summary:
      "Fast leak, hail, and wind repairs so a small problem does not become a ceiling stain and a mold bill.",
    hero: "Stop the leak first. Then decide what the roof actually needs.",
    image: "/images/roof-repair.webp",
    cardImage: "/images/roof-repair-card.webp",
    highlights: [
      "Quick response after storms",
      "Leak, hail, and wind repairs",
      "We recommend replacement only when the roof is truly done",
    ],
    offerings: [
      {
        title: "Leak repair",
        description:
          "We find the source — not just the stain — and close it before water moves through insulation and drywall.",
      },
      {
        title: "Storm and hail repair",
        description:
          "Lifted shingles, bruised tabs, and beaten flashing get repaired with materials that match the existing system when we can.",
      },
      {
        title: "Wind damage",
        description:
          "Missing or creased shingles leave the deck exposed. We patch those sections quickly so the next rain does not finish the job.",
      },
      {
        title: "Emergency protection",
        description:
          "When a storm opens the roof, we can add temporary protection, then schedule the lasting repair.",
      },
    ],
    faqs: [
      {
        question: "How fast can you come after a storm?",
        answer:
          "We prioritize storm calls so water does not sit in the attic. Call (832) 519-6317 and we will get you on the schedule.",
      },
      {
        question: "What are leak warning signs?",
        answer:
          "Ceiling stains, dripping, attic moisture, mold smell, and missing shingles. Hail can also bruise a roof before a leak shows.",
      },
      {
        question: "Will you push a full replacement?",
        answer:
          "Only if the roof is past a safe repair. If a targeted repair will hold, that is what we recommend.",
      },
    ],
  },
  {
    slug: "siding",
    name: "Siding Installation & Replacement",
    shortName: "Siding",
    formValue: "Siding Installation & Replacement",
    summary:
      "Vinyl, fiber cement, and engineered wood siding that can take Houston heat and humidity.",
    hero: "Siding that protects the walls — and makes the house look finished again.",
    image: "/images/siding.webp",
    cardImage: "/images/siding-card.webp",
    highlights: [
      "Vinyl, fiber cement, and engineered wood",
      "Weather barrier and trim done with the install",
      "Better curb appeal and a tighter envelope",
    ],
    offerings: [
      {
        title: "Vinyl siding",
        description:
          "Low-maintenance color and a clean line — a practical upgrade for many Humble and Houston-area homes.",
      },
      {
        title: "Fiber cement",
        description:
          "Hardie-style panels that handle heat, moisture, and impact better than tired wood siding.",
      },
      {
        title: "Engineered wood",
        description:
          "The look of wood with better resistance to insects and moisture when it is detailed correctly.",
      },
      {
        title: "Energy-minded installs",
        description:
          "We pay attention to wrap, trim, and seams so the new siding actually helps with comfort, not just photos.",
      },
    ],
    faqs: [
      {
        question: "How long does siding last?",
        answer:
          "Most systems last 20–40 years depending on material, sun, and how the house is kept.",
      },
      {
        question: "When is replacement smarter than paint?",
        answer:
          "Cracks, warping, soft spots, mold behind the boards, or constant caulk-and-paint cycles usually mean the siding is done.",
      },
      {
        question: "Can new siding help with energy bills?",
        answer:
          "A tight install with a proper weather barrier can cut drafts and help the house hold temperature.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    shortName: "Painting",
    formValue: "Interior & Exterior Painting",
    summary:
      "Prep-first painting for walls, cabinets, trim, and exteriors that have to live in Texas weather.",
    hero: "Paint that lasts starts with prep, not a second coat on dirty siding.",
    image: "/images/painting.webp",
    cardImage: "/images/painting-card.webp",
    highlights: [
      "Interior walls, ceilings, doors, and trim",
      "Cabinet painting without a full kitchen tear-out",
      "Exterior coatings chosen for heat and humidity",
    ],
    offerings: [
      {
        title: "Interior painting",
        description:
          "Clean lines on walls, ceilings, doors, and trim — rooms that look finished instead of patched.",
      },
      {
        title: "Cabinet painting",
        description:
          "A kitchen or bath refresh without replacing every box. Proper degloss, prime, and a hard finish.",
      },
      {
        title: "Exterior painting",
        description:
          "Wash, scrape, prime bare spots, then weather-resistant coatings on siding, fascia, and trim.",
      },
      {
        title: "Color guidance",
        description:
          "We help pick colors that work with your light, brick, and roof so you are not guessing from a chip in the driveway.",
      },
    ],
    faqs: [
      {
        question: "How long does exterior paint last here?",
        answer:
          "Typically five to ten years, depending on sun, prep, and the product. Houston weather is hard on cheap paint.",
      },
      {
        question: "Do you prep before you roll?",
        answer:
          "Yes. Cleaning, sanding, patching, and priming are part of the job — that is what makes the finish last.",
      },
      {
        question: "How long is an interior paint job?",
        answer:
          "Most homes take several days, depending on room count and how much repair the walls need.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen Remodeling",
    formValue: "Kitchen Remodeling",
    summary:
      "Cabinets, counters, layouts, and lighting planned so the kitchen works on a Tuesday night, not just in photos.",
    hero: "A kitchen that cooks better — storage, flow, and finishes that hold up.",
    image: "/images/kitchen.webp",
    cardImage: "/images/kitchen-card.webp",
    highlights: [
      "Cabinets, counters, backsplash, and flooring",
      "Open-concept layouts when the structure allows",
      "Typical projects run three to six weeks",
    ],
    offerings: [
      {
        title: "Cabinets and counters",
        description:
          "New boxes or a thoughtful refit, plus granite, quartz, or other surfaces that can take daily use.",
      },
      {
        title: "Tile and flooring",
        description:
          "Backsplashes and kitchen floors that clean easily and tie the room together.",
      },
      {
        title: "Lighting and fixtures",
        description:
          "Task light where you chop, ambient light where you sit — not one sad can in the middle of the ceiling.",
      },
      {
        title: "Open layouts",
        description:
          "When a wall can come down safely, we plan the opening so the kitchen connects to the living space without a surprise structural bill.",
      },
    ],
    faqs: [
      {
        question: "How long does a kitchen remodel take?",
        answer:
          "Most projects take three to six weeks, depending on layout changes and lead times on materials.",
      },
      {
        question: "Do you help with design?",
        answer:
          "Yes. We walk layout, finishes, and budget before demolition so the plan is settled.",
      },
      {
        question: "Does a kitchen remodel add value?",
        answer:
          "An updated, functional kitchen is one of the improvements buyers notice first — and you get to use it in the meantime.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom Remodeling",
    formValue: "Bathroom Remodeling",
    summary:
      "Tile, showers, tubs, and vanities rebuilt for wet rooms that have to work every morning.",
    hero: "A bathroom that feels new — and stays dry behind the tile.",
    image: "/images/bathroom.webp",
    cardImage: "/images/bathroom-card.webp",
    highlights: [
      "Walk-in showers, tubs, tile, and vanities",
      "Most baths take one to three weeks",
      "Layouts that are easier to clean and use",
    ],
    offerings: [
      {
        title: "Tile and flooring",
        description:
          "Floors and wet walls built with moisture in mind — not just a pretty pattern.",
      },
      {
        title: "Walk-in showers",
        description:
          "More usable space and easier access than a cracked tub surround from 1998.",
      },
      {
        title: "Tub replacement",
        description:
          "Swap a worn tub for something that actually holds water and looks like it belongs in the room.",
      },
      {
        title: "Vanities and storage",
        description:
          "Counters and cabinets that give you a place for the everyday clutter instead of the windowsill.",
      },
    ],
    faqs: [
      {
        question: "How long does a bathroom remodel take?",
        answer:
          "Most bathrooms take one to three weeks, depending on plumbing moves and tile scope.",
      },
      {
        question: "Can you help pick finishes?",
        answer:
          "Yes. Tile, fixtures, vanities, and paint — we keep the palette coherent and the budget honest.",
      },
      {
        question: "Are walk-in showers more accessible?",
        answer:
          "Usually yes. A low-threshold shower is easier to use than a high tub, and it often makes a small bath feel larger.",
      },
    ],
  },
  {
    slug: "deck-building",
    name: "Deck Building & Outdoor Living",
    shortName: "Deck Building",
    formValue: "Deck Building & Outdoor Living",
    summary:
      "Wood or composite decks, railings, and stairs built for Houston heat and weekend cookouts.",
    hero: "Turn the backyard into a room you actually use.",
    image: "/images/deck.webp",
    cardImage: "/images/deck-card.webp",
    highlights: [
      "Custom wood and composite decks",
      "Railings, stairs, and built-in seating",
      "Most decks take one to two weeks",
    ],
    offerings: [
      {
        title: "Custom decks",
        description:
          "Sized to the yard and how you live — morning coffee, a grill station, or a larger entertaining platform.",
      },
      {
        title: "Wood vs. composite",
        description:
          "Wood looks classic and costs less up front. Composite costs more now and skips years of stain and splinters.",
      },
      {
        title: "Remodels",
        description:
          "Unsteady rails, soft boards, and tired stairs can often be rebuilt without starting from dirt.",
      },
      {
        title: "Railings and extras",
        description:
          "Code-smart railings, stairs, and built-ins so the deck is safe and finished, not a platform with a hope.",
      },
    ],
    faqs: [
      {
        question: "How long does a deck take?",
        answer:
          "Most custom decks take one to two weeks, depending on size and details.",
      },
      {
        question: "Is composite worth it in Texas?",
        answer:
          "Many homeowners pick it because it resists moisture, fading, and insects with less yearly maintenance.",
      },
      {
        question: "Do I need a permit in Humble?",
        answer:
          "Often yes. We help you through permitting when the city requires it.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
