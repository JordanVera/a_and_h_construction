export type Area = {
  name: string;
  slug?: string;
};

export const areas: Area[] = [
  { name: 'Aldine, TX', slug: 'aldine' },
  { name: 'Atascocita, TX', slug: 'atascocita' },
  { name: 'Baytown, TX', slug: 'baytown' },
  { name: 'Bellaire, TX', slug: 'bellaire' },
  { name: 'Channelview, TX', slug: 'channelview' },
  { name: 'Crosby, TX', slug: 'crosby' },
  { name: 'Deer Park, TX', slug: 'deer-park' },
  { name: 'Hilshire Village, TX', slug: 'hilshire-village' },
  { name: 'Houston, TX', slug: 'houston' },
  { name: 'Humble, TX', slug: 'humble' },
  { name: 'Jacinto City, TX', slug: 'jacinto-city' },
  { name: 'Kingwood, TX', slug: 'kingwood' },
  { name: 'La Porte, TX', slug: 'la-porte' },
  { name: 'Missouri City, TX', slug: 'missouri-city' },
  { name: 'New Caney, TX', slug: 'new-caney' },
  { name: 'Pasadena, TX', slug: 'pasadena' },
  { name: 'Pearland, TX', slug: 'pearland' },
  { name: 'Porter, TX', slug: 'porter' },
  { name: 'Spring, TX', slug: 'spring' },
  { name: 'Stafford, TX', slug: 'stafford' },
  { name: 'The Woodlands, TX', slug: 'the-woodlands' },
];

export type FeaturedAreaFaq = {
  question: string;
  answer: string;
};

export type FeaturedArea = {
  slug: string;
  name: string;
  region: string;
  headline: string;
  subheadline: string;
  intro: string;
  image: string;
  imageAlt: string;
  neighborhoods: string[];
  body: string[];
  servicesIntro: string;
  whyUs: { title: string; description: string }[];
  highlights: string[];
  localFaqs: FeaturedAreaFaq[];
  discounts: string[];
};

export const featuredAreas: FeaturedArea[] = [
  // ─── Aldine ──────────────────────────────────────────────────────────────────
  {
    slug: 'aldine',
    name: 'Aldine, TX',
    region: 'North Harris County',
    headline: 'Home Remodeling & Roofing Contractor in Aldine, TX',
    subheadline:
      'Straight estimates and dependable crews for Aldine homeowners — from roof inspections to full interior remodels.',
    intro:
      'Aldine homes range from postwar bungalows to 1980s ranch styles, and most have seen more summers than their roofs were rated for. A & H Construction works with North Harris County homeowners who need honest assessments and durable work, not upsells.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Aldine, TX',
    neighborhoods: [
      'Greenspoint',
      'Inwood',
      'Aldine',
      'Acres Homes',
      'Bordersville',
    ],
    body: [
      'Older housing stock in Aldine is often overdue for a roof, exterior paint, or a bathroom that actually functions. We walk the property, say what needs to be done, and give you a written number before work starts — no surprises.',
      'Storm seasons hit North Harris County hard. After hail or wind events, we prioritize response calls in Aldine so water does not sit in attics while homeowners wait months for a contractor.',
      'Every job in Aldine is handled by the same licensed, insured, and bonded crew from Humble — not a subcontractor chain. We show up on schedule and keep the site clean.',
    ],
    servicesIntro:
      'Roofing, remodeling, siding, painting, and decks — the same full-service offering we bring to every North Harris County community.',
    whyUs: [
      {
        title: 'Older home expertise',
        description:
          "Aldine's housing stock runs from the 1950s through the 1980s. We know the materials and failure points common to those eras and do not charge discovery fees when the walls tell a different story than the inspection.",
      },
      {
        title: 'No pressure, no upsell',
        description:
          'If a repair will hold, we say so. We will not write up a full replacement when a targeted fix is the honest answer — and we put it in writing either way.',
      },
      {
        title: 'Storm priority response',
        description:
          'After North Harris County weather events, we triage calls by water risk so Aldine homeowners are not left with open roofs while they wait weeks for a contractor to show up.',
      },
    ],
    highlights: [
      'Free inspections and estimates',
      'Storm damage priority scheduling',
      'Honest repair-vs-replace advice',
      'Licensed, insured & bonded',
      'Serving Greenspoint, Inwood & surrounding areas',
    ],
    localFaqs: [
      {
        question: 'Do you work on older homes in Aldine?',
        answer:
          'Yes — a significant portion of our work is on homes built between the 1950s and 1980s. We are familiar with the materials, framing conventions, and common failure points of that era.',
      },
      {
        question:
          'How do I know if my Aldine roof needs repair or full replacement?',
        answer:
          'We start with a free inspection. Age, deck condition, ventilation, and the extent of storm damage all factor in. We will tell you what we see and what we would do on our own house.',
      },
      {
        question: 'How quickly can you respond after a storm in Aldine?',
        answer:
          'We prioritize storm calls. After major hail or wind events, call (832) 519-6317 and we will get you on the schedule as fast as possible — every day matters when water is getting into the structure.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Atascocita ───────────────────────────────────────────────────────────────
  {
    slug: 'atascocita',
    name: 'Atascocita, TX',
    region: 'Northeast Harris County',
    headline: 'Home Remodeling Contractor in Atascocita, TX',
    subheadline:
      "Serving Fall Creek, Summerwood, and Lakeshore communities with roofing, remodeling, and exterior work built for Lake Houston's climate.",
    intro:
      'Atascocita sits at the edge of Lake Houston, where humidity, flooding risk, and storm exposure all run higher than further inland. A & H Construction brings materials and methods built for that reality — not box-spec products that fail in a Gulf Coast summer.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Atascocita, TX',
    neighborhoods: [
      'Fall Creek',
      'Summerwood',
      'Atascocita Shores',
      'Lakeshore',
      'Kings Mill',
    ],
    body: [
      'Lakefront and lake-adjacent homes in Atascocita face accelerated wear on exteriors — moisture gets into siding joints, paint peels faster, and roofing systems work harder in the humidity. We specify materials that account for that exposure, not just what looks good in a brochure.',
      'Fall Creek and Summerwood are master-planned communities with HOA guidelines on exterior colors and materials. We are familiar with those requirements and will work within them for painting, siding, and roofing projects.',
      'For interior remodels — kitchens, bathrooms, flooring — we manage the full project from design conversation through final walkthrough, so you are not coordinating a half-dozen trades by text message.',
    ],
    servicesIntro:
      'Full-service roofing, remodeling, siding, and painting for Atascocita homeowners — with material choices suited to life near Lake Houston.',
    whyUs: [
      {
        title: 'Lake Houston moisture expertise',
        description:
          'Proximity to water accelerates exterior wear. We specify coatings and siding products with the moisture resistance those conditions require — not generic national-spec materials.',
      },
      {
        title: 'HOA-compliant work',
        description:
          'Fall Creek, Summerwood, and Lakeshore HOAs have specific exterior guidelines. We know how to work within them and will get the approvals you need before work starts.',
      },
      {
        title: 'Full project management',
        description:
          'One crew, one point of contact from estimate to final walkthrough. You do not manage the schedule — we do.',
      },
    ],
    highlights: [
      'Lake Houston moisture-resistant materials',
      'HOA-compliant for Fall Creek & Summerwood',
      'Free estimates — no obligation',
      'Licensed, insured & bonded',
      'Storm response priority scheduling',
    ],
    localFaqs: [
      {
        question:
          'Does lake proximity affect how long my siding or paint lasts?',
        answer:
          'Yes, meaningfully. Higher ambient humidity and occasional lake-driven weather accelerate wear on exterior finishes. We account for this in our material selections and surface prep.',
      },
      {
        question:
          'Will you handle HOA approval for exterior projects in Fall Creek?',
        answer:
          'Yes. We can help you submit the right documentation and material specs to your HOA before work starts so there are no surprises after installation.',
      },
      {
        question: 'Do you do kitchen and bathroom remodels in Atascocita?',
        answer:
          'Yes — interior remodeling is a significant part of our work. We manage cabinets, counters, tile, flooring, and fixtures as a single project so you are not coordinating trades on your own.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Baytown ──────────────────────────────────────────────────────────────────
  {
    slug: 'baytown',
    name: 'Baytown, TX',
    region: 'East Harris County',
    headline: 'Roofing & Home Remodeling Contractor in Baytown, TX',
    subheadline:
      'Baytown homes face salt air, Gulf storms, and industrial proximity — we use materials rated for those conditions.',
    intro:
      "Baytown's location near Galveston Bay and the petrochemical corridor means exteriors wear faster than the Texas average. A & H Construction selects materials that account for coastal salt exposure and installs them with the detail work those conditions demand.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Roofing and remodeling in Baytown, TX',
    neighborhoods: [
      'Goose Creek',
      'Sterling',
      'Wooster',
      'Brownwood',
      'Ward Road area',
    ],
    body: [
      'Salt air from Galveston Bay degrades exterior finishes, siding seals, and roofing fasteners faster than inland Gulf Coast communities. Choosing the wrong material or skipping proper flashing detail is expensive here — failures show up in two to three years instead of ten.',
      "Baytown's housing stock is largely older — 1950s through 1980s construction that has handled decades of coastal humidity. We are familiar with the framing conventions and repair realities that come with those homes.",
      'For storm damage — and Baytown gets its share from Gulf events — we move quickly to assess and secure the structure so water damage does not compound while claims are sorted out.',
    ],
    servicesIntro:
      'Roofing, siding, painting, and interior remodeling in Baytown — with material choices and installation methods suited to the coastal Gulf environment.',
    whyUs: [
      {
        title: 'Coastal atmosphere material selection',
        description:
          'Salt air accelerates corrosion and finish failure. We specify roofing fasteners, siding products, and coatings rated for coastal proximity so the job lasts instead of coming undone in three years.',
      },
      {
        title: 'Older home restoration knowledge',
        description:
          "Baytown's postwar housing stock has specific quirks. We know what to expect inside walls and attics of 1950s-1980s construction and price accordingly.",
      },
      {
        title: 'Storm response after Gulf events',
        description:
          'Gulf storms that clip or hit Baytown move fast. We prioritize emergency assessments and temporary protection so damage does not compound while insurance claims process.',
      },
    ],
    highlights: [
      'Coastal climate material specifications',
      'Storm response — Gulf event priority',
      'Older home inspection and restoration',
      'Licensed, insured & bonded',
      'Free estimates with written scope',
    ],
    localFaqs: [
      {
        question:
          'Does salt air from the bay really affect my roof or siding faster?',
        answer:
          'Yes, measurably. Salt particles accelerate oxidation of fasteners and breakdown of sealants. We use materials and installation methods that account for coastal exposure in Baytown.',
      },
      {
        question:
          'My home was built in the 1960s — can you work with older construction?',
        answer:
          'Absolutely. A significant part of our work in East Harris County is on older housing stock. We inspect what is behind the walls before we give you a firm number.',
      },
      {
        question: 'How do you handle storm damage documentation in Baytown?',
        answer:
          'We photograph and document all storm damage and can communicate directly with your insurance adjuster. Baytown homeowners should not have to navigate the claims process alone.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Bellaire ─────────────────────────────────────────────────────────────────
  {
    slug: 'bellaire',
    name: 'Bellaire, TX',
    region: 'Inner Loop Houston',
    headline: 'Home Remodeling & Roofing Contractor in Bellaire, TX',
    subheadline:
      "Quality craftsmanship for Bellaire's established homes — roofing, remodeling, and exterior work done to the standard the neighborhood expects.",
    intro:
      "Bellaire's mature tree canopy and 1950s–1970s housing stock create a specific set of maintenance and remodel demands. A & H Construction handles roofing, interior remodels, exterior painting, and siding for inner-loop homeowners who expect work done right the first time.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Bellaire, TX',
    neighborhoods: [
      'Bellaire',
      'Braeswood Place',
      'Meyerland',
      'Westbury',
      'Fondren Southwest',
    ],
    body: [
      "Bellaire's tree canopy is a major asset — and a regular source of roof damage. Falling limbs, shaded sections prone to algae and moss, and gutters that fill fast are issues we see on nearly every Bellaire roofing call. We inspect the whole system, not just the visible damage.",
      "Interior remodels in Bellaire's postwar homes often reveal surprises — original plumbing, outdated wiring near remodel zones, or subfloor conditions that need addressing before tile goes down. We factor that into the estimate and communicate before we proceed, not after.",
      'Exterior painting and siding on these homes requires thorough prep. Wood trim that has been painted and repainted for fifty years needs different treatment than new construction, and we adjust accordingly.',
    ],
    servicesIntro:
      'Kitchen and bathroom remodels, roof replacement and repair, exterior painting, siding, and decks — quality finishes for established Bellaire homes.',
    whyUs: [
      {
        title: 'Tree canopy roof expertise',
        description:
          "Bellaire's mature oaks and pecans create specific roofing problems — limb strikes, shaded sections with moss and algae, and gutter systems that can't keep up. We inspect and remediate the whole system.",
      },
      {
        title: 'Postwar renovation knowledge',
        description:
          "Bellaire's mid-century homes require a different approach than new construction. We know what to expect behind 1960s walls and how to price around it honestly.",
      },
      {
        title: 'High-end finish standards',
        description:
          'Inner-loop homes have interior and exterior standards that suburban spec work does not meet. We use materials and methods that hold up to that expectation.',
      },
    ],
    highlights: [
      'Tree canopy roof inspection & repair',
      'Mid-century home renovation expertise',
      'Quality finishes — interior & exterior',
      'Licensed, insured & bonded',
      'Free written estimates',
    ],
    localFaqs: [
      {
        question: 'A tree limb damaged my roof — what should I do first?',
        answer:
          'Call us and we will come out for an assessment. We can add temporary protection to prevent water intrusion while we document the damage for insurance and schedule the repair.',
      },
      {
        question:
          'My Bellaire home is from the 1960s. Can you remodel the kitchen without finding expensive surprises?',
        answer:
          'We cannot guarantee what is inside every wall, but we inspect before we commit to a fixed price and communicate any finds immediately. Most mid-century kitchen remodels in Bellaire go smoothly with good planning.',
      },
      {
        question:
          'How do you handle exterior paint prep on older Bellaire homes?',
        answer:
          'Thoroughly. Wood trim that has been layered with paint for decades requires more surface prep time than new construction. We include proper scraping, sanding, priming, and caulking before any coating goes on.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Channelview ──────────────────────────────────────────────────────────────
  {
    slug: 'channelview',
    name: 'Channelview, TX',
    region: 'East Harris County',
    headline: 'Roofing & Home Renovation Contractor in Channelview, TX',
    subheadline:
      'Honest estimates and durable work for Channelview homeowners — exterior systems built for Ship Channel air and Gulf storms.',
    intro:
      "Channelview's proximity to the Houston Ship Channel creates an environment that is harder on exterior materials than most. A & H Construction selects coatings and roofing systems rated for industrial-adjacent conditions and installs them with the detail work that actually makes the difference.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Roofing and home renovation in Channelview, TX',
    neighborhoods: [
      'Channelview',
      'Highlands',
      'Jacinto City adjacent',
      'Cloverleaf',
    ],
    body: [
      'Salt air from the Ship Channel, combined with occasional industrial particulate, accelerates weathering on Channelview homes faster than areas further inland. Roofing fasteners corrode sooner, paint films degrade faster, and siding seals break down ahead of schedule when the wrong materials are used.',
      'We work in Channelview and know what holds up here. That means product selection matters — not just the brand name, but the specific formulation and the install detail around it.',
      'Storm response is part of our regular work in East Harris County. After Gulf-driven weather events, we move quickly so water does not sit in attics and walls while homeowners wait for help.',
    ],
    servicesIntro:
      'Roofing, siding, exterior painting, and interior remodeling for Channelview homeowners — with materials rated for the Ship Channel environment.',
    whyUs: [
      {
        title: 'Industrial-environment material selection',
        description:
          'Ship Channel proximity creates conditions that eat through generic exterior products. We specify roofing and siding materials rated for salt and industrial-air exposure.',
      },
      {
        title: 'Straight, honest estimates',
        description:
          'No price discovery after demolition starts. We walk the property, assess what we see, and give you a written number that holds.',
      },
      {
        title: 'East Harris County storm response',
        description:
          'Channelview is in the path of Gulf weather that moves up the Ship Channel corridor. We prioritize storm calls in this area so damage does not compound.',
      },
    ],
    highlights: [
      'Ship Channel environment material expertise',
      'Storm damage priority response',
      'Written estimates — no surprises',
      'Licensed, insured & bonded',
      'Free inspections',
    ],
    localFaqs: [
      {
        question:
          'Does living near the Ship Channel really affect how fast my exterior wears?',
        answer:
          'Yes. Salt air and industrial particulate both accelerate the degradation of paint, siding seals, and roofing fasteners. Proper material selection and installation detail make a significant difference in lifespan.',
      },
      {
        question:
          "What roofing materials work best in Channelview's environment?",
        answer:
          'We recommend systems with corrosion-resistant fasteners and impact-rated shingles. For metal roofing, we specify products with appropriate coatings for salt exposure. We walk you through the options and the trade-offs.',
      },
      {
        question: 'How quickly can you respond to storm damage in Channelview?',
        answer:
          'We prioritize East Harris County storm calls. After major weather events, call (832) 519-6317 and we will schedule an assessment as quickly as possible.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Crosby ───────────────────────────────────────────────────────────────────
  {
    slug: 'crosby',
    name: 'Crosby, TX',
    region: 'East Harris County',
    headline: 'Home Remodeling & Roofing Contractor in Crosby, TX',
    subheadline:
      'Dependable crews and straight estimates for Crosby homeowners — from storm roofs to kitchen and bathroom remodels.',
    intro:
      'Crosby is a community of older ranch homes, newer suburban development, and everything in between. A & H Construction serves the full range — from postwar farmhouses that need a new roof and siding overhaul to newer homes that are ready for an interior update.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Crosby, TX',
    neighborhoods: [
      'Crosby',
      'Highlands',
      'Barrett Station',
      'Newport',
      'Crosby Lynchburg Road area',
    ],
    body: [
      'Crosby sits in a flood-aware corridor east of Humble where storm seasons matter. Roofing systems that are not properly installed, flashed, and ventilated will show it — usually during the next heavy storm. We build and install to hold through Gulf weather, not just the average week.',
      'For interior work, we manage kitchen and bathroom remodels from initial consultation through the last fixture. Crosby homeowners should not have to coordinate plumbers, tile setters, and finish carpenters separately — we handle that.',
      'Exterior painting and siding work in Crosby benefits from the same prep-first approach we use everywhere: thorough surface preparation before any product goes on, materials matched to the Gulf Coast climate.',
    ],
    servicesIntro:
      'Roofing, remodeling, siding, painting, and deck building in Crosby — full-service, one crew, from the first estimate through final walkthrough.',
    whyUs: [
      {
        title: 'Flood and storm-aware construction',
        description:
          'East Harris County storm exposure means roofing, siding, and exterior detail work has to be done right. We install to hold through real Gulf weather events, not just typical rain.',
      },
      {
        title: 'Rural and suburban range',
        description:
          'Crosby has everything from older farmhouses on acreage to newer subdivisions. We are comfortable across that range and adjust approach to what the property actually needs.',
      },
      {
        title: 'One crew, full project accountability',
        description:
          'No subcontractor rotation. The same team walks the estimate and completes the job — so someone is accountable from start to finish.',
      },
    ],
    highlights: [
      'Storm and flood-aware installation methods',
      'Rural and suburban home experience',
      'Free estimates with written scope',
      'Licensed, insured & bonded',
      'Interior and exterior full-service',
    ],
    localFaqs: [
      {
        question:
          'Do you handle remodels on older farmhouses in the Crosby area?',
        answer:
          'Yes. We work on a range of Crosby properties — including older rural homes that require a different inspection approach than newer suburban construction.',
      },
      {
        question: "How important is roof ventilation in Crosby's climate?",
        answer:
          'Very. Heat and humidity in this area build up in attic spaces and shorten shingle life significantly when ventilation is inadequate. We assess and address ventilation as part of any roofing project.',
      },
      {
        question: 'Do you serve Barrett Station and Newport in Crosby?',
        answer:
          'Yes. We serve Crosby and surrounding communities including Barrett Station, Newport, and the Highlands area. Call us and we will confirm your address falls within our service range.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Deer Park ────────────────────────────────────────────────────────────────
  {
    slug: 'deer-park',
    name: 'Deer Park, TX',
    region: 'Southeast Harris County',
    headline: 'Roofing & Home Remodeling Contractor in Deer Park, TX',
    subheadline:
      'Full-service roofing, remodeling, and exterior work for Deer Park homeowners — materials matched to the Gulf Coast and Ship Channel environment.',
    intro:
      'Deer Park is a tight-knit suburban community with a housing stock that largely dates from the 1960s through 1990s. A & H Construction works with homeowners who are ready to update, repair, or fully remodel — with material selection that accounts for the coastal industrial environment.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Roofing and remodeling in Deer Park, TX',
    neighborhoods: [
      'Deer Park',
      'La Porte adjacent',
      'San Jacinto area',
      'Deepwater',
    ],
    body: [
      'Deer Park homeowners deal with the same coastal and industrial atmospheric conditions as La Porte and Baytown. Salt air and occasional refinery particulate are real factors in how long exterior coatings and roofing systems last, and we choose products accordingly.',
      'The 1960s–1980s homes that dominate Deer Park are at a point in their lifecycle where roofing, siding, and kitchen and bath updates all become relevant at the same time. We can sequence and manage multiple projects efficiently when that is the situation.',
      'Storm response matters in southeast Harris County. Gulf events that come up the Ship Channel corridor hit Deer Park regularly, and we prioritize assessment and temporary protection calls when they do.',
    ],
    servicesIntro:
      'Roofing replacement and repair, siding, exterior painting, kitchen and bathroom remodeling, and deck building for Deer Park homes.',
    whyUs: [
      {
        title: 'Southeast Harris County climate knowledge',
        description:
          'Coastal proximity and industrial atmosphere both affect how exterior products perform in Deer Park. We select materials with ratings and track records that match those conditions.',
      },
      {
        title: 'Multi-project sequencing',
        description:
          'When a home needs a roof, siding, and a kitchen update, we can plan and sequence those projects efficiently — one contractor relationship, one schedule to manage.',
      },
      {
        title: 'Storm damage priority',
        description:
          'We move quickly on storm calls in southeast Harris County. Deer Park homeowners should not have to wait weeks after a Gulf event for someone to assess the damage.',
      },
    ],
    highlights: [
      'Coastal and industrial atmosphere material selection',
      'Multi-project planning and sequencing',
      'Storm damage fast response',
      'Licensed, insured & bonded',
      'Free inspections and estimates',
    ],
    localFaqs: [
      {
        question:
          'My Deer Park home is from the 1970s and needs several things. Where do we start?',
        answer:
          'We start with a free walk-through where we look at everything and help you prioritize. Roof integrity and exterior water protection usually come before cosmetic interior work, but we will lay out the full picture.',
      },
      {
        question:
          "Does living near the petrochemical plants affect my home's exterior?",
        answer:
          'It can. Industrial particulate and salt air from nearby water accelerate finish degradation. We use products rated for that environment and prep surfaces thoroughly.',
      },
      {
        question: 'Do you work in the La Porte area adjacent to Deer Park?',
        answer:
          'Yes. We serve both Deer Park and La Porte and work throughout the southeast Harris County corridor.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Hilshire Village ─────────────────────────────────────────────────────────
  {
    slug: 'hilshire-village',
    name: 'Hilshire Village, TX',
    region: 'Greater Houston',
    headline: 'General Contractor in Hilshire Village, TX',
    subheadline:
      'Remodeling, roofing, painting, and siding for Hilshire Village and Spring Branch homeowners who expect the work done right.',
    intro:
      'Hilshire Village homes need finishes that survive Gulf Coast humidity and sudden storms. A & H Construction handles remodeling, painting, siding, and roofing with materials chosen for this climate — not generic national-spec products.',
    image: '/images/Home-hero.webp',
    imageAlt: 'General contracting in Hilshire Village, TX',
    neighborhoods: [
      'Hilshire Village',
      'Spring Branch',
      'Memorial',
      'Garden Oaks',
      'Oak Forest',
    ],
    body: [
      'The Gulf Coast climate places real demands on Hilshire Village homes. Humidity finds its way behind poorly installed siding. Paint that was not prepped correctly peels in a single summer. Roofs that skip flashing and ventilation detail develop leaks long before their stated lifespan. We build and coat to account for all of that.',
      'For interior work — kitchen and bathroom remodels — we manage every phase: design consultation, permitting when required, demolition, construction, and final finishes. You work with one contractor, not a rotating cast of subs you have never met.',
      'Spring and fall are ideal for exterior painting and siding in Hilshire Village, when temperatures moderate and humidity is more manageable. We work year-round and adjust methods by season. Interior remodeling runs on whatever schedule fits your household.',
    ],
    servicesIntro:
      'From a bathroom remodel to a complete exterior re-skin — painting, siding, roofing, and decks — we handle it all in Hilshire Village with the same licensed crew.',
    whyUs: [
      {
        title: 'Gulf Coast climate expertise',
        description:
          'We select paint coatings formulated for mildew resistance and UV degradation, roof systems with proper ventilation and flashing for Houston humidity, and siding materials that hold their seal in this environment.',
      },
      {
        title: 'Interior and exterior under one roof',
        description:
          'Bathroom and kitchen remodels, exterior painting, roofing, and siding — all from one contractor. No coordinating between trades. No version of a job that looked good on paper but fell apart in execution.',
      },
      {
        title: 'Seasonal scheduling knowledge',
        description:
          'Spring and fall are the best windows for exterior painting and siding in this area. We help you plan timing so the conditions are right for a finish that actually lasts.',
      },
    ],
    highlights: [
      'Materials specified for Gulf Coast humidity',
      'Interior & exterior specialists',
      'Optimal seasonal scheduling for exterior work',
      'Licensed, insured & bonded',
      'One contractor for every trade',
    ],
    localFaqs: [
      {
        question:
          'Why does exterior paint fail so quickly in Hilshire Village?',
        answer:
          'Gulf Coast humidity, intense UV, and temperature swings break down paint applied over improperly prepared surfaces or with products not rated for this climate. We clean, scrape, sand, and prime before any coating goes on.',
      },
      {
        question:
          'When is the best time to paint the exterior of my Hilshire Village home?',
        answer:
          'Spring (March–May) and fall (October–November) are the best windows — temperatures are moderate and humidity is lower, which gives coatings the best chance to cure and adhere properly.',
      },
      {
        question: 'Do you handle permit work for remodels in Hilshire Village?',
        answer:
          'Yes. When a kitchen or bathroom remodel or structural exterior work requires a permit, we manage that process. You do not have to navigate Houston or Harris County permitting on your own.',
      },
      {
        question: 'What neighborhoods near Hilshire Village do you serve?',
        answer:
          'In addition to Hilshire Village itself, we regularly work in Spring Branch, Memorial, Garden Oaks, Oak Forest, and communities throughout the greater Houston area.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Houston ──────────────────────────────────────────────────────────────────
  {
    slug: 'houston',
    name: 'Houston, TX',
    region: 'Greater Houston Metro',
    headline: 'Home Remodeling & Roofing Contractor in Houston, TX',
    subheadline:
      'Serving north and northeast Houston neighborhoods with licensed roofing, remodeling, and exterior work since 2016.',
    intro:
      "A & H Construction is based in Humble and serves Houston homeowners across the north, northeast, and east corridors. Whether you need a roof replaced after storm damage, a kitchen updated, or an exterior painted that will actually hold in Houston's heat and humidity — we bring the same licensed crew to every job.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling and roofing in Houston, TX',
    neighborhoods: [
      'Near Northside',
      'Oak Forest',
      'Garden Oaks',
      'Greater Heights',
      'East End',
      'Northshore',
    ],
    body: [
      "Houston's weather is hard on homes. The combination of intense summer heat, high humidity, sudden hail storms, and occasional flooding means roofing, siding, and exterior coatings have to be installed correctly — not just installed. We use materials rated for the Gulf Coast climate and prep surfaces the way the finish deserves.",
      'North and northeast Houston neighborhoods range from mid-century bungalows to 1990s suburban tract homes and everything in between. We are familiar with the construction conventions and remodel realities across that range.',
      'For Houston homeowners ready for a kitchen or bathroom remodel, we manage the full scope — design conversation, permitting, demolition, construction, and final finishes — so you are not assembling your own contractor team.',
    ],
    servicesIntro:
      'Roof replacement and repair, siding, exterior painting, kitchen and bathroom remodeling, and deck building for Houston homeowners in our service corridor.',
    whyUs: [
      {
        title: 'North Houston focus, not a city-wide dispatch',
        description:
          'We are based in Humble and work the north and northeast Houston corridor regularly. You get a crew that knows the commute, not a company that treats your zip code as an edge case.',
      },
      {
        title: 'Single-crew accountability in a big market',
        description:
          'In a large market, it is easy to get handed to subcontractors. Our work is done by the same team — the one that walked your estimate — start to finish.',
      },
      {
        title: 'Gulf Coast climate specifications',
        description:
          'Houston heat, humidity, and storm exposure demand specific materials and installation methods. We do not use what is convenient — we use what holds up here.',
      },
    ],
    highlights: [
      'Based in Humble — serving north & northeast Houston',
      'Licensed, insured & bonded',
      'Storm damage priority response',
      'Free written estimates',
      'Full-service roofing and remodeling',
    ],
    localFaqs: [
      {
        question: 'What parts of Houston do you serve?',
        answer:
          'We focus on north, northeast, and east Houston — from the Heights and Oak Forest area out through Near Northside, Northshore, and connecting communities. Call us with your address and we will confirm service.',
      },
      {
        question:
          'Do you help with Houston flood repair and remodeling after water damage?',
        answer:
          'Yes. We assess water damage, help document for insurance, and handle the repairs and remodel work needed to restore the space.',
      },
      {
        question: 'How do you price a Houston roofing project?',
        answer:
          'We start with a free inspection and give you a written estimate before any work begins. Pricing depends on roof size, material choice, and condition of the deck and ventilation system.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Humble ───────────────────────────────────────────────────────────────────
  {
    slug: 'humble',
    name: 'Humble, TX',
    region: 'North Harris County',
    headline: 'Home Remodeling & Roofing Contractor in Humble, TX',
    subheadline:
      'This is our backyard. A & H Construction has been serving Humble homeowners since 2016 — roofing, remodeling, siding, painting, and decks.',
    intro:
      'Humble is home base. Jose Hernandez and the A & H Construction crew have worked in Eagle Springs, Summerwood, Kings Mill, and neighborhoods across Humble since 2016. When neighbors call, we treat their houses the way we treat our own.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Humble, TX',
    neighborhoods: [
      'Eagle Springs',
      'Summerwood',
      'Kings Mill',
      'Generation Park',
      'Fall Creek',
      'Atascocita',
    ],
    body: [
      "Humble homeowners deal with Gulf Coast heat, storm seasons, and the specific wear patterns that come with North Harris County's mix of master-planned communities and older established neighborhoods. We have handled it all here — storm roofs, full kitchen remodels, bathroom overhauls, siding replacements, and exterior painting projects that needed to meet HOA standards.",
      'Eagle Springs, Kings Mill, and other Humble master-planned communities have specific HOA guidelines on exterior colors, materials, and finishes. We know those requirements and work within them — and we help get the approvals before work starts.',
      'For everything else, from a soffit repair to a complete interior renovation, the same licensed, insured, and bonded crew shows up. No subcontractors rotating in and out — the faces are familiar from the estimate to the final walkthrough.',
    ],
    servicesIntro:
      'Every service we offer — roofing, remodeling, siding, painting, decks — is available in Humble. This is our primary service area and where we do our best work.',
    whyUs: [
      {
        title: 'This is where we live and work',
        description:
          'Jose and the crew have been in Humble since 2016. We know Eagle Springs, Kings Mill, and Summerwood the way a contractor should know their home territory — including the HOA requirements, the typical roofing conditions, and what the neighbors expect.',
      },
      {
        title: '10+ years of Humble-specific experience',
        description:
          "More than a decade of work in Humble means we have seen the failure patterns, the storm aftermath, and the remodel opportunities that come with this community's specific housing stock and climate.",
      },
      {
        title: 'The neighbor-referral track record',
        description:
          'Most of our Humble work comes from neighbors referring neighbors. That is the metric we care about — it means the work held up and the experience was worth recommending.',
      },
    ],
    highlights: [
      'Our home base since 2016',
      'HOA-compliant for Eagle Springs, Kings Mill & more',
      'Neighbor-referred — 50+ Google reviews',
      'Licensed, insured & bonded',
      'Storm response priority in Humble',
    ],
    localFaqs: [
      {
        question: 'Does A & H Construction primarily serve Humble?',
        answer:
          'Humble is our home base and primary service area. We also serve North Harris County and the greater Houston area, but Humble is where we do our highest volume of work and have the deepest local knowledge.',
      },
      {
        question:
          'Do you know the HOA requirements for Eagle Springs and Kings Mill?',
        answer:
          'Yes. We have worked in those communities for years and are familiar with their exterior color and material guidelines. We help you get HOA approval before we start work.',
      },
      {
        question: 'How quickly do you respond to storm calls in Humble?',
        answer:
          'Humble gets first priority after weather events. We are local — call (832) 519-6317 and we will get to you as quickly as anyone in the area can.',
      },
      {
        question: 'What is the fastest way to get an estimate in Humble?',
        answer:
          'Call us directly at (832) 519-6317. We schedule walk-throughs quickly for Humble addresses and can usually get out within a few days of your call.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Jacinto City ─────────────────────────────────────────────────────────────
  {
    slug: 'jacinto-city',
    name: 'Jacinto City, TX',
    region: 'East Harris County',
    headline: 'Home Renovation & Roofing Contractor in Jacinto City, TX',
    subheadline:
      'Dependable roofing, remodeling, and exterior work for Jacinto City homeowners — honest estimates and durable results.',
    intro:
      'Jacinto City is a small but established community along I-10 east of downtown Houston. The housing stock is largely postwar, and many homes are overdue for roofing, exterior updates, or interior renovations. A & H Construction brings straight assessments and durable work to Jacinto City homeowners.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home renovation in Jacinto City, TX',
    neighborhoods: ['Jacinto City', 'Galena Park', 'Cloverleaf', 'South Acres'],
    body: [
      "Jacinto City's position along the Ship Channel corridor means exterior materials are exposed to salt air and occasional industrial particulate — the same conditions that affect Channelview and Baytown. We account for that in product selection and installation detail.",
      'Postwar homes in Jacinto City are often at a stage where roofing, siding, and interior work all become relevant in the same season. We can assess the full picture, help prioritize, and sequence projects to fit budget and timeline.',
      'We bring the same crew, the same written estimates, and the same standards to Jacinto City that we bring to every job across our service area. No subcontractor rotation — the same faces handle the work.',
    ],
    servicesIntro:
      'Roofing, remodeling, painting, siding, and deck work for Jacinto City homeowners — affordable, licensed, and honest.',
    whyUs: [
      {
        title: 'Ship Channel environment awareness',
        description:
          "East Houston's industrial and coastal atmosphere affects how exterior products perform. We select materials suited to that environment, not what is easiest to spec.",
      },
      {
        title: 'Affordable, honest estimates',
        description:
          'No upsell, no padding, no scope creep. We walk the property, assess what needs to be done, and give you a written number that does not change unless the job does.',
      },
      {
        title: 'Older home experience',
        description:
          "Jacinto City's postwar housing stock has specific construction characteristics. We know what is typically inside those walls and price accordingly from the start.",
      },
    ],
    highlights: [
      'Ship Channel climate material expertise',
      'Affordable, honest pricing',
      'Older home renovation experience',
      'Licensed, insured & bonded',
      'Free estimates',
    ],
    localFaqs: [
      {
        question: 'Do you serve Galena Park near Jacinto City?',
        answer:
          'Yes. We serve Jacinto City, Galena Park, Cloverleaf, and the surrounding East Harris County communities.',
      },
      {
        question:
          'My home is from the 1950s — what should I expect from a renovation estimate?',
        answer:
          'We will walk the property and look at the full picture before quoting. Postwar homes often have attic insulation, plumbing, and electrical realities that affect cost. We assess first and price accordingly.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Kingwood ─────────────────────────────────────────────────────────────────
  {
    slug: 'kingwood',
    name: 'Kingwood, TX',
    region: 'Northeast Harris County',
    headline: 'Home Remodeling & Roofing Contractor in Kingwood, TX',
    subheadline:
      "Quality craftsmanship for Kingwood's established homes — roofing, remodeling, and exterior work that meets the standard the community expects.",
    intro:
      "Kingwood's tree canopy is magnificent — and it creates specific, recurring roofing challenges. Falling limbs, shaded roof sections with algae and moss growth, and gutters that fill quickly are part of life in The Livable Forest. A & H Construction handles it all, along with interior remodels and exterior updates for one of North Harris County's most established communities.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Kingwood, TX',
    neighborhoods: [
      'Barrington Green',
      'Trailwood Village',
      'Kings Harbor',
      'Forest Cove',
      'Woodland Hills',
      'Kingwood Lakes',
    ],
    body: [
      'Tree canopy damage accounts for a significant share of roofing calls in Kingwood. Limb strikes, sustained shading that accelerates moss and algae growth, and root systems that shift gutters all create conditions that standard roofing estimates do not always catch. We inspect the whole system — deck, ventilation, flashing, and gutters — not just the visible damage.',
      "Kingwood HOAs maintain specific exterior standards across the community's various villages. We are familiar with common HOA guidelines for exterior colors and materials and will help you navigate the approval process before work starts.",
      "Interior remodeling in Kingwood's established homes — kitchens, bathrooms, and living spaces — often means working with a home that has had multiple previous updates. We assess what is there, work with what makes sense to keep, and deliver a result that holds up.",
    ],
    servicesIntro:
      'Roof repair and replacement, interior remodeling, exterior painting, siding, and deck construction for Kingwood homeowners — meeting the quality standard the community expects.',
    whyUs: [
      {
        title: 'Tree canopy roof expertise',
        description:
          "Kingwood's forest coverage means limb strikes, shaded moss zones, and demanding gutter situations are routine. We inspect and address the full system, not just the visible damage.",
      },
      {
        title: 'Kingwood HOA familiarity',
        description:
          'Each Kingwood village has specific exterior standards. We know the landscape and can help you get HOA approval on colors and materials before installation begins.',
      },
      {
        title: 'Quality that fits the neighborhood',
        description:
          'Kingwood homeowners expect craftsmanship that holds up over time. We use materials and methods that meet that expectation — and we stand behind the work.',
      },
    ],
    highlights: [
      'Tree canopy roof inspection & repair',
      'HOA-compliant work in all Kingwood villages',
      'High-quality finishes — interior & exterior',
      'Licensed, insured & bonded',
      'Free written estimates',
    ],
    localFaqs: [
      {
        question:
          'How do tree limbs affect Kingwood roofs differently than other areas?',
        answer:
          'In Kingwood, the density of tree coverage means more frequent limb contact, more shaded sections prone to moss, and faster gutter saturation. We inspect the roof as a full system — not just the strike zone — to catch secondary damage.',
      },
      {
        question: 'Will you work with my Kingwood HOA on exterior approvals?',
        answer:
          'Yes. We help Kingwood homeowners prepare and submit the material and color documentation required by HOA review. Getting approval before work starts is part of how we manage exterior projects here.',
      },
      {
        question: 'Do you remodel kitchens in Kingwood?',
        answer:
          'Yes — kitchen and bathroom remodels are a significant part of our work in Kingwood. We manage cabinets, counters, tile, lighting, and fixtures as a single project from consultation through final walkthrough.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── La Porte ─────────────────────────────────────────────────────────────────
  {
    slug: 'la-porte',
    name: 'La Porte, TX',
    region: 'Southeast Harris County',
    headline: 'Roofing & Home Remodeling Contractor in La Porte, TX',
    subheadline:
      'Bay-area materials and installation methods for La Porte homeowners — roofing, siding, and remodeling built for Galveston Bay exposure.',
    intro:
      'La Porte sits directly on Galveston Bay — and the salt air, storm exposure, and moisture levels that come with that location are real factors in how long exterior systems last. A & H Construction uses materials and installation methods selected for coastal Bay Area conditions, not inland specifications.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Roofing and remodeling in La Porte, TX',
    neighborhoods: ['La Porte', "Morgan's Point", 'Shoreacres', 'Bayview'],
    body: [
      'Galveston Bay proximity creates an accelerated weathering environment for La Porte homes. Salt particles in the air attack roofing fasteners, siding seals, and paint films at rates that inland areas do not experience. We select corrosion-resistant systems and prepare surfaces to extend life in that environment.',
      "La Porte's older neighborhoods have housing stock from the 1950s through 1980s — homes that have managed decades of coastal humidity and are ready for a roof, siding overhaul, or interior renovation. We assess the whole structure before quoting so there are no surprises.",
      'Storm exposure from the Bay corridor means quick response matters when Gulf systems move through. We prioritize La Porte storm calls and can add emergency temporary protection to prevent further damage while the lasting repair is scheduled.',
    ],
    servicesIntro:
      'Coastal-specification roofing, siding, exterior painting, interior remodeling, and deck building for La Porte and the Galveston Bay shoreline communities.',
    whyUs: [
      {
        title: 'Galveston Bay coastal specifications',
        description:
          'Saltwater proximity demands corrosion-resistant fasteners, moisture-barriers specified for coastal exposure, and surface prep that accounts for salt contamination. We build to those standards in La Porte.',
      },
      {
        title: 'Storm surge and Gulf event preparation',
        description:
          'La Porte is directly in the path of Galveston Bay storm surge. We understand how that affects roofing, siding, and foundation exposure and can assess and advise accordingly.',
      },
      {
        title: 'Older home coastal renovation',
        description:
          "La Porte's established homes have experienced decades of coastal humidity. We assess what those conditions have done to the structure and price work that actually addresses the underlying issues.",
      },
    ],
    highlights: [
      'Galveston Bay coastal material specifications',
      'Storm surge awareness — Gulf event priority',
      'Older coastal home restoration',
      'Licensed, insured & bonded',
      'Free inspections and written estimates',
    ],
    localFaqs: [
      {
        question: 'How does bay salt air affect my La Porte roof?',
        answer:
          'Salt particles accelerate fastener corrosion, breakdown of sealants around flashing, and degradation of shingle adhesive strips. In La Porte, roofing systems that are not specified for coastal exposure fail significantly sooner than their rated lifespan.',
      },
      {
        question: 'What roofing materials work best near Galveston Bay?',
        answer:
          'We look at corrosion-resistant fasteners, impact-rated and algae-resistant shingles, and for metal systems, coatings rated for saltwater proximity. We walk through the options and trade-offs at the estimate.',
      },
      {
        question:
          'Can you help with storm surge damage assessment in La Porte?',
        answer:
          'Yes. We assess and document both wind and water damage, help communicate with insurance adjusters, and handle the repairs and restoration.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Missouri City ────────────────────────────────────────────────────────────
  {
    slug: 'missouri-city',
    name: 'Missouri City, TX',
    region: 'Southwest Fort Bend County',
    headline: 'Home Remodeling & Roofing Contractor in Missouri City, TX',
    subheadline:
      'Quality roofing, remodeling, and exterior work for Missouri City and Sienna homeowners — HOA-compliant and built to last.',
    intro:
      "Missouri City is home to some of the Houston area's most established master-planned communities — Sienna, First Colony, and Quail Valley among them. A & H Construction serves Missouri City homeowners with the HOA-compliant craftsmanship and quality finishes those communities expect.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Missouri City, TX',
    neighborhoods: [
      'Sienna',
      'First Colony',
      'Quail Valley',
      'Hunters Creek Village',
      'Steep Bank Crossing',
    ],
    body: [
      'Missouri City HOA communities — particularly Sienna — have specific and enforced exterior guidelines on roofing materials, paint colors, and siding systems. We are familiar with the approval process and will help you get HOA sign-off before work begins, not after.',
      "Fort Bend County's climate brings the same heat and humidity as the rest of the Gulf Coast, and Missouri City homes that are a decade or older are often ready for roofing, exterior painting, or a full interior remodel. We manage all of it with one crew.",
      'Interior remodeling in Missouri City — kitchens, bathrooms, and primary suites — is a significant part of our work. We handle the full scope from design through completion, including all sub-trades, so the project runs on one schedule.',
    ],
    servicesIntro:
      'HOA-compliant roofing, remodeling, siding, painting, and outdoor living projects for Missouri City and Fort Bend County homeowners.',
    whyUs: [
      {
        title: 'HOA approval process experience',
        description:
          'Sienna and First Colony have real HOA review requirements. We know what documentation and specifications they need and submit the right materials before work starts.',
      },
      {
        title: 'Fort Bend County permit knowledge',
        description:
          'Permitting requirements in Fort Bend County differ from Harris County. We handle permit applications for work that requires them, including kitchen remodels, deck builds, and structural work.',
      },
      {
        title: 'Quality finishes for established neighborhoods',
        description:
          'Missouri City communities hold a high standard for appearance and workmanship. We deliver finishes that hold up and look right — inside and out.',
      },
    ],
    highlights: [
      'HOA-compliant work for Sienna & First Colony',
      'Fort Bend County permits handled',
      'Quality finishes — interior & exterior',
      'Licensed, insured & bonded',
      'Free estimates',
    ],
    localFaqs: [
      {
        question: 'Do you handle Sienna HOA approval for exterior projects?',
        answer:
          'Yes. We prepare and submit the material and color documentation required by Sienna HOA. Getting approval before work starts is a standard part of how we manage exterior projects in Missouri City.',
      },
      {
        question: 'Do you need a permit to build a deck in Missouri City?',
        answer:
          'Yes, generally. Fort Bend County and the city of Missouri City require permits for deck construction. We handle the permit application as part of the project.',
      },
      {
        question: 'What areas of Missouri City do you serve?',
        answer:
          'We serve all of Missouri City including Sienna, First Colony, Quail Valley, and surrounding neighborhoods. We also work in adjacent Fort Bend County communities.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── New Caney ────────────────────────────────────────────────────────────────
  {
    slug: 'new-caney',
    name: 'New Caney, TX',
    region: 'Montgomery County',
    headline: 'Home Remodeling & Roofing Contractor in New Caney, TX',
    subheadline:
      'Serving rapidly growing New Caney with roofing, remodeling, and exterior work — from older rural properties to new master-planned communities.',
    intro:
      "New Caney is one of the Houston area's fastest-growing corridors — older rural properties on US-59 alongside new master-planned communities like Valley Ranch. A & H Construction serves the full range, from farmhouses that need structural attention to new builds that are ready for their first remodel.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in New Caney, TX',
    neighborhoods: [
      'Valley Ranch',
      'New Caney',
      'Splendora',
      'Porter adjacent',
      'Roman Forest',
    ],
    body: [
      "New Caney's rapid growth means there is a wider mix of property types here than in more established suburbs. Older rural homes on larger lots and new master-planned subdivisions share the same US-59 corridor, and we work comfortably across both ends of that range.",
      'Montgomery County has its own permitting requirements, and we handle permit applications for New Caney projects — deck builds, kitchen remodels, structural exterior work — as part of the job scope.',
      'Storm exposure in Montgomery County is real. The same Gulf-driven weather that hits Harris County moves through New Caney, and we prioritize storm assessment calls so water damage does not compound.',
    ],
    servicesIntro:
      'Roofing, remodeling, siding, painting, and decks for New Caney homeowners — across the full range of property types in this fast-growing corridor.',
    whyUs: [
      {
        title: 'Old and new construction range',
        description:
          'New Caney has rural farmhouses from the 1960s and master-planned homes from last year. We are experienced with both ends of that range and adjust our assessment approach to what the property actually is.',
      },
      {
        title: 'Montgomery County permit handling',
        description:
          'We manage permit applications for New Caney projects — decks, structural remodels, and exterior work — so you do not have to navigate the county process alone.',
      },
      {
        title: 'Storm response in a growing area',
        description:
          'Growth corridors like New Caney sometimes have less contractor density for storm response. We prioritize our New Caney and Montgomery County calls after weather events.',
      },
    ],
    highlights: [
      'Rural and master-planned home expertise',
      'Montgomery County permits handled',
      'Storm response priority',
      'Licensed, insured & bonded',
      'Free estimates',
    ],
    localFaqs: [
      {
        question:
          'Do you work on older properties outside of Valley Ranch in New Caney?',
        answer:
          'Yes. We serve the full range of New Caney — from rural properties on larger lots to newer master-planned homes. The assessment and approach adjust to what the property actually needs.',
      },
      {
        question: 'What permits are required for a deck in New Caney?',
        answer:
          'Montgomery County typically requires a permit for deck construction. We handle the application as part of the project scope.',
      },
      {
        question:
          'Do you also serve Splendora and Roman Forest near New Caney?',
        answer:
          'Yes — we serve New Caney and the surrounding Montgomery County communities including Splendora and Roman Forest.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Pasadena ─────────────────────────────────────────────────────────────────
  {
    slug: 'pasadena',
    name: 'Pasadena, TX',
    region: 'Southeast Harris County',
    headline: 'Home Remodeling & Roofing Contractor in Pasadena, TX',
    subheadline:
      'Honest pricing and durable work for Pasadena homeowners — roofing, remodeling, and exterior systems built for southeast Harris County.',
    intro:
      "Pasadena is southeast Harris County's largest city, with a housing stock that spans decades and a community that values honest pricing and dependable contractors. A & H Construction brings the same standards to Pasadena that we bring to every job — written estimates, consistent crews, and work that holds up.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Pasadena, TX',
    neighborhoods: [
      'Southmore',
      'Strawberry',
      'Park Place',
      'Fairmont',
      'Deer Park adjacent',
    ],
    body: [
      "Pasadena's older housing stock — 1950s through 1980s across most of the city — is at a stage where roofing, exterior surfaces, and interior spaces all benefit from attention. We assess the full picture and help homeowners prioritize what matters most for safety and value first.",
      'Proximity to the Ship Channel and Galveston Bay means exterior systems in Pasadena are exposed to some of the same salt-air and industrial conditions that affect Deer Park and Channelview. We account for that in material selection.',
      'We give Pasadena homeowners the same written estimates and consistent crew experience as any other job in our area. No scope creep, no subcontractor rotation, no surprises after work starts.',
    ],
    servicesIntro:
      'Roofing, interior remodeling, exterior painting, siding, and deck construction for Pasadena homeowners — competitive pricing, honest assessments.',
    whyUs: [
      {
        title: 'Honest, competitive pricing',
        description:
          'Pasadena homeowners deserve straight numbers, not inflated bids they have to negotiate down. We assess accurately, scope honestly, and give you a written estimate that holds.',
      },
      {
        title: 'Southeast Houston coastal awareness',
        description:
          'Ship Channel proximity and coastal conditions affect exterior materials in Pasadena. We specify products with the durability those conditions require.',
      },
      {
        title: 'Older home expertise',
        description:
          'Decades of postwar housing across Pasadena means we see a wide range of conditions inside walls and attics. We assess before we commit to a price — no surprise change orders.',
      },
    ],
    highlights: [
      'Honest, competitive pricing — written estimates',
      'Southeast Harris County coastal material selection',
      'Older home renovation experience',
      'Licensed, insured & bonded',
      'Free inspections',
    ],
    localFaqs: [
      {
        question: 'Do you offer competitive pricing in Pasadena?',
        answer:
          'Yes. We price honestly and competitively. We will not pad a bid and we do not use low estimates to get the job and then add change orders — the written estimate is the price.',
      },
      {
        question:
          'My Pasadena home is from the 1960s. How do you handle the unknowns?',
        answer:
          'We walk the property and inspect before we quote. For remodeling projects, we look at the areas we will be working in, note any visible concerns, and price around them — not around the best case.',
      },
      {
        question: 'Do you serve the Deer Park area adjacent to Pasadena?',
        answer:
          'Yes. We serve Pasadena, Deer Park, and the broader southeast Harris County corridor.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Pearland ─────────────────────────────────────────────────────────────────
  {
    slug: 'pearland',
    name: 'Pearland, TX',
    region: 'South Brazoria County',
    headline: 'Home Remodeling & Roofing Contractor in Pearland, TX',
    subheadline:
      'HOA-compliant roofing, remodeling, and exterior work for Shadow Creek, Silverlake, and Pearland homeowners.',
    intro:
      'Pearland has grown dramatically over the last two decades, and its master-planned communities — Shadow Creek Ranch, Silverlake, and others — have specific HOA standards and a homeowner base that expects quality work. A & H Construction serves Pearland with the craftsmanship and compliance knowledge those communities require.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Pearland, TX',
    neighborhoods: [
      'Shadow Creek Ranch',
      'Silverlake',
      'Pearland Town Center area',
      'West Pearland',
      'Southdown',
    ],
    body: [
      'Shadow Creek Ranch and Silverlake HOAs have enforceable exterior guidelines on roofing materials, paint schemes, and siding products. We are experienced with the HOA approval process and prepare the right documentation before any work begins.',
      "Pearland's rapid growth means many homes built in the 2000s and early 2010s are now ready for first remodels — kitchens, bathrooms, and master suites that were built to a builder standard and are due for an upgrade. We manage those projects from design through final walkthrough.",
      'Pearland also sits in a flood-aware zone. Storm and drainage awareness inform how we approach exterior work — proper grading, flashing detail, and drainage routing around decks and foundation areas.',
    ],
    servicesIntro:
      'HOA-compliant roofing, interior remodeling, exterior painting, siding, and deck building for Pearland and Brazoria County homeowners.',
    whyUs: [
      {
        title: 'Shadow Creek and Silverlake HOA compliance',
        description:
          "Pearland's major HOA communities require pre-approval for exterior changes. We prepare and submit the correct material and color documentation before work begins.",
      },
      {
        title: 'First remodel expertise',
        description:
          'Many Pearland homes built in the 2000s are ready for their first real upgrade. We handle those kitchen, bathroom, and primary suite remodels efficiently — one crew, one schedule.',
      },
      {
        title: 'Flood-aware construction practices',
        description:
          'Brazoria County flooding risk informs how we approach exterior work in Pearland — drainage routing, deck foundation detail, and grading around structure.',
      },
    ],
    highlights: [
      'HOA-compliant — Shadow Creek Ranch & Silverlake',
      'First remodel specialists for 2000s-era homes',
      'Flood-aware exterior construction',
      'Licensed, insured & bonded',
      'Free written estimates',
    ],
    localFaqs: [
      {
        question:
          'Do you handle Shadow Creek Ranch HOA approval for exterior projects?',
        answer:
          'Yes. We prepare the material specifications and color documentation required by Shadow Creek Ranch HOA and submit them before work begins.',
      },
      {
        question:
          'My Pearland home was built in 2005 and the kitchen feels dated. Can you help?',
        answer:
          "Yes — this is a common situation in Pearland's 2000s-era neighborhoods. We handle full kitchen remodels from cabinet replacement and new counters through flooring, lighting, and fixtures.",
      },
      {
        question: 'Is flooding a concern for deck building in Pearland?',
        answer:
          'In some areas, yes. We assess drainage patterns and ground conditions before recommending foundation and material choices for decks, and we route drainage appropriately.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Porter ───────────────────────────────────────────────────────────────────
  {
    slug: 'porter',
    name: 'Porter, TX',
    region: 'Montgomery County',
    headline: 'Home Remodeling & Roofing Contractor in Porter, TX',
    subheadline:
      'Dependable roofing, remodeling, and exterior work for Porter homeowners — the same licensed crew serving the US-59 corridor since 2016.',
    intro:
      'Porter sits on the US-59 corridor between Humble and New Caney — a community that blends rural character with suburban growth. A & H Construction serves Porter homeowners with the same straight estimates and consistent crew that neighbors across North Harris and Montgomery County have trusted since 2016.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Porter, TX',
    neighborhoods: [
      'Porter',
      'Porterwood',
      'Kingwood adjacent',
      'New Caney border area',
    ],
    body: [
      "Porter's proximity to Kingwood and New Caney means we are in the area regularly. Roofing, siding, and exterior painting in Porter experience the same Gulf Coast heat, humidity, and storm exposure as the rest of the North Houston corridor — and we install accordingly.",
      'Older homes on larger lots in Porter often have deferred maintenance across roofing and exterior systems that can be addressed efficiently with one crew and a clear scope. We assess the full picture and help prioritize.',
      'Montgomery County permitting applies to structural work in Porter — deck builds, major remodels, and some exterior projects. We handle permit applications as part of the job.',
    ],
    servicesIntro:
      'Roofing, remodeling, painting, siding, and deck building for Porter homeowners — honest assessments, consistent crew, written estimates.',
    whyUs: [
      {
        title: 'US-59 corridor regulars',
        description:
          'We work in Porter, Humble, Kingwood, and New Caney regularly. You get a crew that knows the area — not someone treating your address as a one-off long haul.',
      },
      {
        title: 'Rural and suburban range',
        description:
          'Porter has both older rural properties and newer suburban homes. We adjust our assessment and installation approach to what the property is, not a single standard template.',
      },
      {
        title: 'Montgomery County permits handled',
        description:
          'Structural remodeling and deck projects in Porter require Montgomery County permits. We manage the application process as part of the scope.',
      },
    ],
    highlights: [
      'US-59 corridor — regular service area',
      'Rural and suburban property experience',
      'Montgomery County permits handled',
      'Licensed, insured & bonded',
      'Free estimates',
    ],
    localFaqs: [
      {
        question: 'Do you regularly serve Porter, TX?',
        answer:
          'Yes. Porter is on the US-59 corridor between Humble and New Caney — we are in the area regularly and schedule Porter jobs efficiently.',
      },
      {
        question: 'Do I need a permit for a deck in Porter?',
        answer:
          'Generally yes — Montgomery County requires a permit for deck construction. We handle the application as part of the project.',
      },
      {
        question:
          'Do you work on older properties outside of the main subdivisions?',
        answer:
          'Yes. Porter has rural properties on larger lots with older housing stock. We are comfortable assessing and working on those, and we price what we actually find, not the best case.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Spring ───────────────────────────────────────────────────────────────────
  {
    slug: 'spring',
    name: 'Spring, TX',
    region: 'North Harris County',
    headline: 'Home Remodeling Contractor in Spring, TX',
    subheadline:
      'Trusted by Remington Ranch, Broadway Oaks, and Summerwood homeowners for roofing, remodeling, and storm repairs.',
    intro:
      'When Spring homeowners need roofing, remodeling, or storm repairs, A & H Construction brings the same licensed crew that Humble neighbors have trusted since 2016. We know North Harris County home styles and the heat, humidity, and storms that come with them.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Spring, TX',
    neighborhoods: [
      'Remington Ranch',
      'Broadway Oaks',
      'Summerwood',
      'Fall Creek',
      'Kingwood',
      'Atascocita',
    ],
    body: [
      'Spring homeowners deal with the same Gulf Coast challenges as the rest of North Harris County — intense summer heat, sudden hail storms, and humidity that finds every gap in a poorly installed exterior. We pick materials and techniques that account for all of it.',
      'Whether you need a kitchen refreshed, a bathroom rebuilt, a roof replaced after hail, or new siding that can stand up to the next storm season, A & H Construction manages the whole project with one crew. We arrive when we say we will, give you a written estimate before work starts, and do not consider the job done until you walk through it.',
      'Spring clients in Remington Ranch and Broadway Oaks regularly mention our fast response times, clean job sites, and the fact that we communicate throughout the project rather than going quiet after the deposit.',
    ],
    servicesIntro:
      'We offer every service in Spring that we do in Humble — roofing, remodeling, siding, painting, and decks — with the same licensed, insured, and bonded crew.',
    whyUs: [
      {
        title: 'We know North Harris County homes',
        description:
          'Spring neighborhoods like Remington Ranch and Broadway Oaks have specific home styles, HOA standards, and climate exposures. We have worked in enough of them to know what materials and methods hold up.',
      },
      {
        title: 'Storm response is a priority',
        description:
          'Spring gets its share of Gulf weather. After major hail or wind events, we triage calls so water does not sit in attics and walls while homeowners wait weeks for a contractor to show up.',
      },
      {
        title: 'One licensed crew, every job',
        description:
          'The same team that does your roof handles the siding and the interior — no handoffs to subcontractors, no strangers on the property, and no gaps in accountability.',
      },
    ],
    highlights: [
      'Free estimates — no obligation',
      'Storm damage priority scheduling',
      'Serving Remington Ranch, Broadway Oaks & more',
      'Licensed, insured & bonded',
      'Senior & military discounts available',
    ],
    localFaqs: [
      {
        question: 'Do you work in Spring HOA communities like Remington Ranch?',
        answer:
          'Yes. We are familiar with HOA material and color requirements in Remington Ranch, Broadway Oaks, and other Spring communities and will work within those guidelines.',
      },
      {
        question: 'How quickly can you respond to storm damage in Spring?',
        answer:
          'We prioritize storm calls across our service area. After major weather events, call (832) 519-6317 and we will get you on the schedule as fast as possible.',
      },
      {
        question: 'Do you offer any discounts in Spring?',
        answer:
          'Yes — referral discounts, package discounts for combining services, and special savings for seniors and military families.',
      },
      {
        question: 'What areas near Spring do you also serve?',
        answer:
          'In addition to Spring, we regularly work in Humble, Kingwood, Summerwood, Fall Creek, Atascocita, and communities throughout North Harris County.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── Stafford ─────────────────────────────────────────────────────────────────
  {
    slug: 'stafford',
    name: 'Stafford, TX',
    region: 'Fort Bend County',
    headline: 'Home Remodeling & Roofing Contractor in Stafford, TX',
    subheadline:
      'Quality roofing, remodeling, and exterior work for Stafford homeowners — Fort Bend County permits handled, licensed crew throughout.',
    intro:
      'Stafford is a unique Fort Bend community known for having no city property tax — and for a residential mix that ranges from established older neighborhoods to newer suburban development. A & H Construction serves Stafford homeowners with the same consistent crew and written estimates we bring to every job.',
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in Stafford, TX',
    neighborhoods: [
      'Stafford',
      'Missouri City adjacent',
      'Sugar Land border area',
      'Alief adjacent',
    ],
    body: [
      "Stafford's housing spans from 1970s and 1980s established neighborhoods near Kirkwood Road to more recent suburban developments. We work across that range — from older home restoration to first remodels on homes built in the late 1990s and 2000s.",
      'Fort Bend County has its own permitting requirements that differ from Harris County. We handle permit applications for Stafford projects — decks, major kitchen remodels, and structural exterior work — as a standard part of the project scope.',
      "Southwest Houston's heat and humidity require the same Gulf Coast material approach we use everywhere in our service area. Exterior coatings, roofing systems, and siding products are specified for the climate, not the cheapest available option.",
    ],
    servicesIntro:
      'Roofing, remodeling, painting, siding, and deck construction for Stafford and Fort Bend County homeowners — permits handled, quality finishes.',
    whyUs: [
      {
        title: 'Fort Bend County permit knowledge',
        description:
          'Stafford falls in Fort Bend County permitting jurisdiction. We manage permit applications for remodeling and structural exterior projects so you do not have to navigate that process alone.',
      },
      {
        title: 'Multi-era home experience',
        description:
          'Stafford has housing from the 1970s through the 2000s. We are experienced across that range — from older home restoration to first-remodel upgrades on builder-grade construction.',
      },
      {
        title: 'Gulf Coast climate specifications',
        description:
          'Southwest Houston heat, humidity, and storm exposure require the same material care as the rest of our service area. We specify products that hold up — not just the standard spec.',
      },
    ],
    highlights: [
      'Fort Bend County permits handled',
      'Multi-era home renovation experience',
      'Gulf Coast climate material selection',
      'Licensed, insured & bonded',
      'Free written estimates',
    ],
    localFaqs: [
      {
        question:
          'Do I need a Fort Bend County permit for remodeling in Stafford?',
        answer:
          'For structural remodeling, deck construction, and some exterior work, yes. Fort Bend County permitting applies in Stafford, and we handle the application process as part of the project.',
      },
      {
        question: 'Do you serve Sugar Land and Missouri City near Stafford?',
        answer:
          'Yes. We serve Stafford and the surrounding Fort Bend communities including Missouri City and areas adjacent to Sugar Land.',
      },
      {
        question: 'What should I expect from a roofing estimate in Stafford?',
        answer:
          'A free inspection, a review of the deck and ventilation system, and a written estimate that covers materials, scope, and timeline before we ask you to commit to anything.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },

  // ─── The Woodlands ────────────────────────────────────────────────────────────
  {
    slug: 'the-woodlands',
    name: 'The Woodlands, TX',
    region: 'South Montgomery County',
    headline: 'Home Remodeling & Roofing Contractor in The Woodlands, TX',
    subheadline:
      'Premium roofing, remodeling, and exterior work for Woodlands homeowners — HOA and deed restriction compliant, built to the neighborhood standard.',
    intro:
      "The Woodlands holds one of the Houston area's strictest sets of deed restrictions and HOA standards — and for good reason. Maintaining that standard requires contractors who know the process and use materials and methods that meet the expectation. A & H Construction works in The Woodlands with that understanding from the first call.",
    image: '/images/Home-hero.webp',
    imageAlt: 'Home remodeling in The Woodlands, TX',
    neighborhoods: [
      "Grogan's Mill",
      "Cochran's Crossing",
      'Indian Springs',
      'Sterling Ridge',
      'Carlton Woods',
      'Panther Creek',
    ],
    body: [
      'The Woodlands deed restrictions and HOA covenants require pre-approval for exterior modifications — roofing materials, siding products, paint colors, and deck designs all fall under community review. We know the documentation and specification process and submit properly before work begins, not after.',
      "The Woodlands' signature tree coverage creates the same roofing challenges as Kingwood — falling limbs, shaded sections with algae and moss, and demanding gutter situations. We inspect the full roofing system, not just the visible damage, and address the root cause.",
      'Interior remodeling in The Woodlands — kitchens, primary suites, bathrooms — is among our most detail-sensitive work. The homes in this community have been well maintained, and updates need to hold up to that standard. We use quality materials and precise finish work throughout.',
    ],
    servicesIntro:
      'Deed-restriction-compliant roofing, premium interior remodeling, exterior painting, siding, and outdoor living projects for The Woodlands and Montgomery County homeowners.',
    whyUs: [
      {
        title: 'Woodlands HOA and deed restriction compliance',
        description:
          'Every exterior project in The Woodlands requires community review and approval. We prepare the correct material specifications, color documentation, and design details required by the Woodlands associations before work begins.',
      },
      {
        title: 'Tree canopy roofing expertise',
        description:
          "The Woodlands' namesake forest coverage creates specific roofing conditions — limb strikes, sustained shading, moss and algae buildup, and gutter systems under constant pressure. We inspect the whole system and address causes, not just symptoms.",
      },
      {
        title: 'Premium finish standards',
        description:
          'The Woodlands is not a spec-build market. Interior and exterior work here is held to a higher standard by the homeowners and the community, and we deliver accordingly — quality materials, precise execution, clean job sites.',
      },
    ],
    highlights: [
      'HOA & deed restriction pre-approval handled',
      'Tree canopy roof inspection & remediation',
      'Premium interior & exterior finishes',
      'Licensed, insured & bonded',
      'Free written estimates',
    ],
    localFaqs: [
      {
        question:
          'Do you handle The Woodlands HOA approval process for exterior projects?',
        answer:
          'Yes. We prepare the full documentation package — material specifications, color selections, and design drawings where required — and submit to the appropriate Woodlands association before work begins. Getting approval before installation is how we operate in this community.',
      },
      {
        question: 'Tree limbs damaged my Woodlands roof — what happens next?',
        answer:
          'We come out for a thorough assessment of the full roofing system — not just where the limb hit. We document everything for insurance, assess deck and ventilation condition, and give you a complete scope before any work is scheduled.',
      },
      {
        question: 'What villages in The Woodlands do you work in?',
        answer:
          "We serve all of The Woodlands' villages — Grogan's Mill, Cochran's Crossing, Indian Springs, Sterling Ridge, Carlton Woods, Panther Creek, and the rest. If you are in The Woodlands, we serve you.",
      },
      {
        question: 'Do you do high-end kitchen remodels in The Woodlands?',
        answer:
          'Yes. Kitchen remodeling in The Woodlands is some of our most involved work. We manage cabinets, counters, lighting, flooring, and fixtures as a complete project — quality materials, precise installation, and finish work that holds up to the neighborhood standard.',
      },
    ],
    discounts: [
      'Referral discount when you send a neighbor our way',
      'Package discount for combining multiple services',
      'Senior discount for homeowners 65+',
      'Military discount — active duty and veterans',
    ],
  },
];
