export type Area = {
  name: string;
  slug?: "hilshire-village" | "spring";
};

export const areas: Area[] = [
  { name: "Aldine, TX" },
  { name: "Atascocita, TX" },
  { name: "Baytown, TX" },
  { name: "Bellaire, TX" },
  { name: "Channelview, TX" },
  { name: "Crosby, TX" },
  { name: "Deer Park, TX" },
  { name: "Hilshire Village, TX", slug: "hilshire-village" },
  { name: "Houston, TX" },
  { name: "Humble, TX" },
  { name: "Jacinto City, TX" },
  { name: "Kingwood, TX" },
  { name: "La Porte, TX" },
  { name: "Missouri City, TX" },
  { name: "New Caney, TX" },
  { name: "Pasadena, TX" },
  { name: "Pearland, TX" },
  { name: "Porter, TX" },
  { name: "Spring, TX", slug: "spring" },
  { name: "Stafford, TX" },
  { name: "The Woodlands, TX" },
];

export const featuredAreas = [
  {
    slug: "spring" as const,
    name: "Spring, TX",
    headline: "Home remodeling contractor in Spring, TX",
    intro:
      "When Spring homeowners need roofing, remodeling, or storm repairs, A & H Construction brings the same licensed crew that Humble neighbors have trusted since 2016. We know North Harris County home styles and the heat, humidity, and storms that come with them.",
    neighborhoods: ["Remington Ranch", "Broadway Oaks", "Summerwood", "Fall Creek"],
    body: [
      "From a kitchen refresh to a full exterior reset, we plan around Texas weather: moisture-resistant interiors, siding and paint that hold up in Gulf Coast humidity, and roofing that can take wind and hail.",
      "Spring clients regularly mention on-time arrivals, clear estimates, and crews that keep the job site clean. Call for a free estimate — we also serve Humble, Kingwood, and the rest of the north Houston area.",
    ],
  },
  {
    slug: "hilshire-village" as const,
    name: "Hilshire Village, TX",
    headline: "General contractor in Hilshire Village, TX",
    intro:
      "Hilshire Village homes need finishes that survive Gulf Coast humidity and sudden storms. A & H Construction handles remodeling, painting, siding, and roofing with materials chosen for this climate — not generic national-spec products.",
    neighborhoods: ["Hilshire Village", "Spring Branch", "Memorial"],
    body: [
      "We prep and coat exteriors for mildew and UV, detail flashing and ventilation on roofs, and manage kitchen or bathroom remodels from consult through final walkthrough.",
      "Spring and fall are ideal for exterior paint and siding; interiors run year-round. Call (832) 519-6317 to walk the property and get a straightforward plan.",
    ],
  },
] as const;
