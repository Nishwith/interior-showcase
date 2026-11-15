export const defaultBusiness = {
  name: 'Aria Interiors',
  location: 'Hyderabad, India',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'studio@ariainteriors.com',
  address: 'Road No. 36, Jubilee Hills, Hyderabad 500033',
  tagline: 'Quiet Luxury. Lasting Spaces.',
  instagram: 'https://instagram.com/',
  initials: 'AI'
};

/* ==========================================================================
   01. LUXURY ATELIER CONTENT
   High-end editorial, haute interior architecture, quiet luxury
   ========================================================================== */
export const luxuryContent = {
  hero: {
    eyebrow: 'PRIVATE INTERIOR ARCHITECTURE & ATELIER',
    headingMain: 'A Quieter Kind',
    headingItalic: 'of Luxury.',
    subtext: 'Bespoke residential estates and haute sanctuaries composed with rare materiality, architectural balance and an enduring sense of calm.',
    ctaText: 'DISCOVER PORTFOLIO',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
    meta: {
      locationLabel: 'SANCTUARIES WORLDWIDE',
      index: 'N° 01 — PRIVATE COMMISSIONS'
    }
  },
  statement: {
    kicker: 'THE ART OF PERMANENCE',
    quote: 'True luxury never shouts. It is whispered through proportional mastery, raw stone, soft natural light and spaces that age into family heirlooms.'
  },
  about: {
    eyebrow: 'ATELIER PROVENANCE',
    heading: 'Spaces crafted with',
    headingAccent: 'quiet permanence.',
    body1: 'Founded on the principle that the most moving environments are born from patient listening, our atelier creates private residences that transcend temporary trends.',
    body2: 'Every commission is approached as a singular narrative—orchestrating hand-loomed silks, fluted travertine, patinated bronzes and custom joinery into a cohesive architectural hymn.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    caption: 'VILLA DU CAP — PRIVATE SALON DETAIL',
    statsPill: '18 YEARS OF COUTURE INTERIORS'
  },
  projects: [
    {
      id: 'lux-1',
      title: 'The Bellini Penthouse',
      category: 'Duplex Penthouse',
      location: 'Jubilee Hills, Hyderabad',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      aspect: 'wide',
      palette: ['Roman Travertine', 'Smoked Oak', 'Bouclé Wool'],
      summary: '8,400 sq.ft duplex featuring double-height travertine fireplace and 270-degree panorama.'
    },
    {
      id: 'lux-2',
      title: 'Sanctuary of Shadows',
      category: 'Private Residence',
      location: 'Banjara Hills, Hyderabad',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      aspect: 'tall',
      palette: ['Brushed Brass', 'Belgian Linen', 'Charcoal Stucco'],
      summary: 'Monastic serenity balanced with tactile luxury in a verdant hillside enclave.'
    },
    {
      id: 'lux-3',
      title: 'The Alabaster Residence',
      category: 'Heritage Villa',
      location: 'Gachibowli, Hyderabad',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
      aspect: 'square',
      palette: ['Calacatta Viola', 'Fluted Walnut', 'Raw Silk'],
      summary: 'Restoration of a classic villa paired with contemporary bespoke Italian curation.'
    },
    {
      id: 'lux-4',
      title: 'Maison Lumière',
      category: 'Suburban Estate',
      location: 'Kokapet, Hyderabad',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      aspect: 'wide',
      palette: ['Pierre de Bourgogne', 'Oil-rubbed Bronze', 'Cashmere'],
      summary: 'Seamless transition between landscaped courtyards and private culinary galleries.'
    }
  ],
  philosophy: {
    kicker: 'OUR DESIGN MANIFESTO',
    title: 'Material Honesty, Spatial Poetry',
    quote: 'We do not decorate rooms. We choreograph the sensory theatre of private life.',
    elements: [
      { num: 'I', label: 'Proportional Harmony', desc: 'The golden ratio reinterpreted through modern architectural axes.' },
      { num: 'II', label: 'Tactile Provenance', desc: 'Sourcing single-quarry marble and century-old timber with lineage.' },
      { num: 'III', label: 'Acoustic Serenity', desc: 'Dampening urban noise through hidden acoustic textiles and architectural volumes.' }
    ]
  },
  services: [
    {
      num: '01',
      title: 'Haute Spatial Architecture',
      tag: 'COMPREHENSIVE',
      desc: 'Complete structural spatial reconfiguration, sightline planning, ceiling coves and volumetric rhythm for landmark residences.'
    },
    {
      num: '02',
      title: 'Bespoke FF&E & Materiality',
      tag: 'CURATION',
      desc: 'Exclusive custom furniture commissions crafted in collaboration with master artisans across Milan, Kyoto and Paris.'
    },
    {
      num: '03',
      title: 'Turnkey Private Delivery',
      tag: 'WHITE-GLOVE',
      desc: 'Discreet, flawless execution overseeing every contractor, stonemason and millworker until the scent diffusers are lit.'
    },
    {
      num: '04',
      title: 'Fine Art & Antiquities Advisory',
      tag: 'ACQUISITIONS',
      desc: 'Curating collectible design, rare sculpture and blue-chip contemporary works that harmonize with your interior architecture.'
    }
  ],
  process: [
    { step: 'I', title: 'Sensory Brief & Exploration', period: 'Weeks 1—3', desc: 'We immerse ourselves in your lifestyle rituals, lighting preferences and daily choreography.' },
    { step: 'II', title: 'Atelier Concept & Materials', period: 'Weeks 4—8', desc: 'Tactile trays of hand-selected marbles, patinated metals, timber samples and 3D volumetric renders.' },
    { step: 'III', title: 'Master Craftsmanship & Build', period: 'Months 3—8', desc: 'Artisanal fabrication with uncompromising millimeter-level quality assurance on-site.' },
    { step: 'IV', title: 'The Private Unveiling', period: 'Completion', desc: 'A turnkey reveal with curated art, dressed beds, styled floral arrangements and bespoke home guides.' }
  ],
  stats: [
    { value: '18+', label: 'Years of Atelier Provenance' },
    { value: '140+', label: 'Private Residences Completed' },
    { value: '98%', label: 'Bespoke Custom Commissions' },
    { value: '14', label: 'International Architectural Commendations' }
  ],
  testimonials: [
    {
      quote: 'They did not just redesign our penthouse—they gave us an enduring feeling of sanctuary after demanding days. The travertine transitions and custom lighting are pure poetry.',
      author: 'Vikram & Radhika Singhania',
      title: 'Bellini Duplex Penthouse, Jubilee Hills',
      year: '2025'
    },
    {
      quote: 'An atelier that truly understands what restraint and luxury mean. No ostentation, just flawless proportions and materials that feel alive.',
      author: 'Alessandro De Luca',
      title: 'Private Collector & Estate Owner',
      year: '2024'
    }
  ]
};

/* ==========================================================================
   02. MODERN LIVING CONTENT
   Warm contemporary, Japandi/Scandinavian warmth, lifestyle agency, energetic
   ========================================================================== */
export const modernContent = {
  hero: {
    badge: 'NEW GENERATION INTERIORS',
    headingLead: 'Make Room For',
    headingAccent: 'Living Well.',
    subtext: 'Fresh, light-filled, functional interiors tailored for real daily life. Warm minimalism, custom joinery, and spaces that feel effortless.',
    ctaPrimary: 'Explore Featured Spaces',
    ctaSecondary: 'Quick Consultation',
    floatingCard: {
      title: 'The Courtyard Loft',
      sqft: '3,800 SQ.FT',
      city: 'Hyderabad'
    },
    statsBadge: '45-Day Handover Guarantee',
    images: {
      main: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90',
      secondary: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=85'
    }
  },
  marquee: ['WARM MINIMALISM', 'BIOPHILIC LIVING', 'CUSTOM JOINERY', 'SMART INTEGRATIONS', 'NATURAL LIGHT', 'ORGANIC TEXTURES'],
  about: {
    tag: 'WHO WE ARE',
    title: 'Modern design that feels like a deep breath.',
    body: 'We design homes for messy mornings, Friday evening dinner parties, quiet Sunday reading, and everything in between. No velvet ropes or untouched rooms—just thoughtful, comfortable architecture that makes everyday moments feel elevated.',
    collage: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
        title: 'Tactile Materiality'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
        title: 'Social Culinary Islands'
      }
    ],
    features: [
      'Zero dead-space layouts',
      'Child & pet-friendly fabrics',
      'Smart circadian lighting',
      'Sustainable engineered woods'
    ]
  },
  projects: [
    {
      id: 'mod-1',
      title: 'The Sunlit Triplex',
      category: 'Apartments',
      place: 'Hitec City, Hyderabad',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      tag: 'FEATURED',
      sqft: '4,200 sq.ft'
    },
    {
      id: 'mod-2',
      title: 'Terracotta & Oak Villa',
      category: 'Villas',
      place: 'Gandipet, Hyderabad',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
      tag: 'NEW',
      sqft: '5,600 sq.ft'
    },
    {
      id: 'mod-3',
      title: 'Sage Garden Apartment',
      category: 'Apartments',
      place: 'Financial District, Hyderabad',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      tag: 'AWARD WINNER',
      sqft: '2,900 sq.ft'
    },
    {
      id: 'mod-4',
      title: 'Birchwood Social Kitchen',
      category: 'Kitchens',
      place: 'Kondapur, Hyderabad',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85',
      tag: 'BEST OF 2025',
      sqft: '1,200 sq.ft'
    },
    {
      id: 'mod-5',
      title: 'The Glasshouse Verandah',
      category: 'Outdoor',
      place: 'Moinabad, Hyderabad',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
      tag: 'RECENT',
      sqft: '3,100 sq.ft'
    },
    {
      id: 'mod-6',
      title: 'Zen Primary Suite',
      category: 'Bedrooms',
      place: 'Banjara Hills, Hyderabad',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85',
      tag: 'TRANQUILITY',
      sqft: '1,800 sq.ft'
    }
  ],
  approachPillars: [
    {
      id: 'app-1',
      title: 'Light & Fluid Flow',
      subtitle: 'Circulation over clutter',
      desc: 'We optimize natural illumination angles, eliminate dark dead-corners, and create sightlines that make compact spaces feel vast.',
      accent: 'bg-amber-100 text-amber-900',
      icon: 'Sun'
    },
    {
      id: 'app-2',
      title: 'Warm Tactile Palette',
      subtitle: 'Textures you want to touch',
      desc: 'Raw boucle, fluted ceramics, earthy terracottas, and warm Scandinavian ash that age gracefully with daily family life.',
      accent: 'bg-emerald-100 text-emerald-900',
      icon: 'Sparkles'
    },
    {
      id: 'app-3',
      title: 'Purposeful Storage',
      subtitle: 'A place for everything',
      desc: 'Full-height flush millwork, concealed utility hubs, and tailored drawers that keep your home permanently clean without effort.',
      accent: 'bg-orange-100 text-orange-900',
      icon: 'Layers'
    }
  ],
  services: [
    {
      title: 'Full-Home Interior Transformation',
      subtitle: 'Complete design to move-in turnkey package',
      features: ['3D VR walkthroughs', 'Electrical & plumbing drawings', 'Custom millwork fabrication', 'Site supervision & quality audit'],
      timeline: '8—12 Weeks'
    },
    {
      title: 'Modular Kitchen & Wardrobe Curation',
      subtitle: 'German hardware, bespoke finishes',
      features: ['Hafele & Blum precision hardware', 'Anti-fingerprint nano laminates', 'Integrated under-cabinet circadian LEDs', '10-year structural warranty'],
      timeline: '4—6 Weeks'
    },
    {
      title: 'Living & Dining Experiential Redesign',
      subtitle: 'Social hubs where memories are made',
      features: ['Acoustic ceiling panelling', 'Statement dining & custom credenzas', 'Curated accent armchairs', 'Designer lighting curation'],
      timeline: '3—5 Weeks'
    }
  ],
  journey: [
    { step: '01', title: 'Coffee & Concept Discovery', desc: 'We meet over tea or coffee, explore your Pinterest boards, assess your floorplan, and establish realistic timelines.' },
    { step: '02', title: 'Interactive 3D Virtual Walkthrough', desc: 'Walk through your future home in photorealistic 3D before a single nail is hammered into a wall.' },
    { step: '03', title: 'Fixed-Price Milestone Contracting', desc: 'Zero hidden surprise invoices. Transparent BOM pricing with guaranteed material specifications.' },
    { step: '04', title: 'Precision Fitout & On-Time Handover', desc: 'Factory-finished modules delivered, installed, deep-cleaned and handed over with a champagne welcome.' }
  ],
  benefits: [
    { title: 'Zero Surprise Budget Guarantee', desc: 'Every quote includes itemized specifications. What we contract is what you pay—no surprise add-ons.' },
    { title: '45-Day Handover Protocol', desc: 'Strict timeline tracking with dedicated site engineers and daily progress WhatsApp updates.' },
    { title: '5-Year Workmanship Warranty', desc: 'Comprehensive post-handover support for joinery, hardware alignments, and finishes.' },
    { title: 'Factory-Finished Quality', desc: 'Precision edge-banding and laser-cut cabinetry manufactured in computerized CNC facilities.' }
  ],
  testimonials: [
    {
      id: 1,
      quote: 'The team made our 3BHK feel twice as spacious! The smart hidden storage and warm oak tones transformed how our kids and dog live every day.',
      name: 'Aditya & Priya Menon',
      location: 'My Home Bhooja, Hyderabad',
      project: '3,400 sq.ft Contemporary Apartment',
      rating: 5
    },
    {
      id: 2,
      quote: 'Their 3D walkthrough was so accurate that walking into our completed home felt like stepped right into the render. On time and on budget.',
      name: 'Dr. Suresh & Shobha Reddy',
      location: 'Prestige High Fields, Hyderabad',
      project: 'Villa Renovation',
      rating: 5
    },
    {
      id: 3,
      quote: 'Finding designers who balance aesthetics with practical storage was impossible until we met them. Couldn’t recommend them more warmly!',
      name: 'Kavita Chawla',
      location: 'Banjara Hills, Hyderabad',
      project: 'Bespoke Penthouse',
      rating: 5
    }
  ]
};

/* ==========================================================================
   03. PROFESSIONAL INTERIOR DESIGN COMPANY CONTENT
   Inspired by Satyam Interiors & Developers (Hyderabad)
   Turnkey Residential & Commercial Interiors, Modular Kitchens, Wardrobes, Civil Engineering Quality
   Warm ivory & off-white, rich walnut & dark brown, charcoal typography, muted bronze/terracotta accent
   ========================================================================== */
export const architecturalContent = {
  hero: {
    badge: 'TURNKEY HOME INTERIORS & DEVELOPERS',
    rating: {
      score: '5.0',
      reviews: '67+ Verified Google Reviews',
      tag: 'Ranked Top Interior Studio in Hyderabad'
    },
    headingLead: 'Modular Kitchens, Wardrobes &',
    headingAccent: 'Complete Home Interiors.',
    subtext: 'Civil engineer-supervised turnkey execution for flats, villas and independent homes. In-house factory manufacturing, transparent fixed pricing, and a 45-day handover guarantee.',
    ctaPrimary: 'Get Free Instant Quote',
    ctaSecondary: 'Chat on WhatsApp',
    stats: [
      { val: '500+', label: 'Homes Handed Over' },
      { val: '45 Days', label: 'Guaranteed Move-In' },
      { val: '10 Years', label: 'Hardware Warranty' },
      { val: '100%', label: 'In-House Factory Team' }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  },
  about: {
    kicker: 'ABOUT OUR COMPANY',
    title: 'Civil engineering precision meets elegant interior aesthetics.',
    story1: 'Founded with a strong civil engineering discipline, we bridge the gap between architectural strength and refined interior styling. While many agencies act as middlemen who sub-contract work to outside carpenters, we operate our own in-house computerized manufacturing facility with dedicated site engineers.',
    story2: 'From precision-engineered modular kitchens with German hardware to hand-finished fluted TV wall panelling and false ceilings with cove profile lighting, every inch of your space is crafted with millimeter accuracy. Transparent BOM pricing means what we quote is exactly what you pay.',
    founder: {
      name: 'T. Satya Narayana Reddy',
      title: 'Founder & Managing Director',
      credentials: 'B.Tech Civil Engineering · 15+ Years Industry Experience',
      quote: '“A home is the largest investment of a lifetime. It deserves genuine engineering rigour, honest materials, and zero compromises.”'
    },
    highlights: [
      { title: 'In-House Factory Finish', desc: 'Computerized CNC cutting, automated edge-banding, and zero hand-sawn uneven joints.' },
      { title: 'Engineer-Led Site Supervision', desc: 'Every site is inspected daily by certified civil engineers to verify electrical, plumbing and levelling.' },
      { title: 'Transparent Fixed Contract', desc: 'Itemized material specifications down to plywood thickness, brand of laminates, and hinges.' },
      { title: '45-Day Handover Protocol', desc: 'Systematic factory pre-fabrication ensures installation on site completes within 45 days guaranteed.' }
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
  },
  services: [
    {
      id: 'srv-1',
      title: 'Modular Kitchens',
      subtitle: 'Ergonomic, heat & water-resistant culinary hubs',
      description: 'Custom L-shaped, U-shaped and island modular kitchens featuring high-gloss acrylic laminates, fluted glass wall units, quartz countertops, Blum and Hafele soft-close tandem drawers, and profile LED backsplashes.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      features: ['Marine-grade BWR plywood', 'Anti-fingerprint matte/acrylic finish', 'Concealed cutlery & bottle pullouts', 'Chimney & built-in hob integration']
    },
    {
      id: 'srv-2',
      title: 'Wardrobes & Bedrooms',
      subtitle: 'Maximised storage with quiet luxury finishes',
      description: 'Floor-to-ceiling sliding wardrobes with aluminium profiles, hinged wardrobes with loft storage, integrated dresser mirrors, custom upholstered king beds, and ergonomic study desks designed to room dimensions.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      features: ['Smooth silent sliding tracks', 'Tinted fluted glass wardrobe shutters', 'Integrated sensor-lit hanging rods', 'Bespoke vanity & study consoles']
    },
    {
      id: 'srv-3',
      title: 'TV Units & Wall Panelling',
      subtitle: 'The dramatic focal point of your living salon',
      description: 'Sophisticated living room TV entertainment units paired with Italian marble-finish backdrops, vertical fluted oak louvres, floating credenzas, and concealed wire conduits for a zero-cable aesthetic.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
      features: ['Book-matched marble laminate panelling', 'Charcoal & gold metallic inlay strips', 'Warm LED cove wash lighting', 'Floating acoustic media drawers']
    },
    {
      id: 'srv-4',
      title: 'False Ceilings & Lighting Design',
      subtitle: 'Architectural depth and ambient circadian warmth',
      description: 'Saint-Gobain gypsum false ceiling installations featuring hidden cove lighting, magnetic track spotlights, wooden rafters, and mirror ceiling elements that visually expand room height and volume.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
      features: ['Rust-proof heavy channel framing', 'Dual-circuit warm & daylight cove LEDs', 'Wooden veneer ceiling rafter inserts', 'Anti-crack joint compound guarantee']
    },
    {
      id: 'srv-5',
      title: 'Crockery Units & Dining Partitions',
      subtitle: 'Functional spatial separation with artistic flair',
      description: 'CNC laser-cut partition jalis, fluted glass sliding room dividers, and glass-fronted crockery display units with internal warm spotlights, wine glass stemware racks, and quartz breakfast ledges.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      features: ['Rose gold aluminium frame glass shutters', 'Toughened acoustic glass dividers', 'Internal spotlight display shelves', 'Integrated bar counter and credenza']
    },
    {
      id: 'srv-6',
      title: 'Complete Turnkey Home Interiors',
      subtitle: 'End-to-end design, civil fitout & furnishing',
      description: 'Comprehensive turnkey packages for 2BHK, 3BHK, 4BHK apartments and independent villas. Includes 3D interior design, civil modifications, electrical replanning, false ceilings, millwork, painting, and deep-cleaning.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
      features: ['Single point of accountability', 'Daily site progress photo updates', 'Complete turnkey handover in 45 days', '10-year comprehensive warranty']
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'The Skyview Triplex Residence',
      category: 'Complete Home Interior',
      location: 'My Home Bhooja, Hitec City',
      scope: '4,200 sq.ft 4BHK Full Turnkey',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1800&q=85',
      aspect: 'wide',
      highlights: ['Marble wall panelling', 'Teal modular kitchen', 'Custom walk-in wardrobe']
    },
    {
      id: 'proj-2',
      title: 'Contemporary Emerald Kitchen & Pantry',
      category: 'Modular Kitchen',
      location: 'Prestige High Fields, Financial District',
      scope: 'Modular Kitchen with Breakfast Bar',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
      aspect: 'square',
      highlights: ['Quartz counters', 'Fluted glass wall units', 'Hafele tandem boxes']
    },
    {
      id: 'proj-3',
      title: 'Fluted Walnut TV Unit & Dining Partition',
      category: 'Living & Dining',
      location: 'Aparna Sarovar, Nallagandla',
      scope: 'Living, Dining & Entertainment Lounge',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
      aspect: 'square',
      highlights: ['Floating TV credenza', 'CNC metal partition', 'Warm cove lighting']
    },
    {
      id: 'proj-4',
      title: 'The Serene Master Bedroom Suite',
      category: 'Bedrooms & Wardrobes',
      location: 'Jayabheri The Summit, Gachibowli',
      scope: 'Master Suite & Child Bedroom',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      aspect: 'wide',
      highlights: ['Sliding wardrobe with loft', 'Upholstered headboard', 'Integrated study desk']
    },
    {
      id: 'proj-5',
      title: 'Royal Oak Villa Living & False Ceiling',
      category: 'Villa Interiors',
      location: 'Gandipet Boulevard, Hyderabad',
      scope: '5,800 sq.ft Independent Villa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      aspect: 'wide',
      highlights: ['Double height ceiling feature', 'Crockery unit with wine racks', 'Italian marble flooring']
    }
  ],
  whyChooseUs: [
    {
      title: 'Civil Engineer Founded & Supervised',
      desc: 'Our projects are supervised directly by certified civil engineers who ensure flawless structural alignment, electrical safety, plumbing, and wall anchoring.',
      badge: 'ENGINEERING MASTERY'
    },
    {
      title: 'Own Computerized CNC Factory',
      desc: 'We manufacture all modular joinery in our own factory with computerized edge-banding and laser-cut precision. No hand-cut rough edges.',
      badge: 'FACTORY FINISH'
    },
    {
      title: '100% Transparent Fixed Price BOM',
      desc: 'Every quote is backed by an itemized Bill of Materials specifying brand, thickness, and hardware. What we contract is what you pay—zero surprises.',
      badge: 'FIXED PRICE GUARANTEE'
    },
    {
      title: '45-Day Handover Guarantee',
      desc: 'Because 80% of our cabinetry is pre-fabricated in the factory, on-site fitout is fast, clean, and completed within 45 working days guaranteed.',
      badge: 'ON-TIME DELIVERY'
    },
    {
      title: '10-Year Hardware Warranty',
      desc: 'We exclusively partner with certified brands like Blum, Hafele, Hettich, and CenturyPly. All moving hardware carries a 10-year replacement warranty.',
      badge: '10-YEAR WARRANTY'
    },
    {
      title: 'Direct Execution, Zero Middlemen',
      desc: 'You work directly with the business owners and our in-house team. No outside sub-contractor commissions or delayed third-party handoffs.',
      badge: 'ZERO COMMISSIONS'
    }
  ],
  process: [
    {
      step: '01',
      title: 'Free On-Site Consultation & Laser Measurements',
      desc: 'Our team visits your flat or villa, reviews architectural floorplans, measures every wall with digital laser tools, and discusses your family’s budget and preferences.'
    },
    {
      step: '02',
      title: 'Photorealistic 3D Renders & Material Selection',
      desc: 'We present 3D walkthroughs of your kitchen, bedrooms, TV units and ceilings. You touch and select actual laminate, quartz, and veneer samples before confirmation.'
    },
    {
      step: '03',
      title: 'Automated Factory Pre-Fabrication',
      desc: 'Cabinets, wardrobe frames, and drawer modules are precision-cut and edge-banded in our factory, avoiding messy woodworking and noise inside your apartment.'
    },
    {
      step: '04',
      title: 'Rapid On-Site Assembly & Key Handover',
      desc: 'Factory-finished modules arrive on site for swift installation by our master technicians. We conduct a 50-point quality audit, deep clean, and hand over your dream home.'
    }
  ],
  gallery: [
    {
      id: 'g-1',
      title: 'Modular Kitchen with Teal Accents & Quartz Island',
      category: 'Kitchens',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'g-2',
      title: 'Marble Panelled Living Room & TV Wall',
      category: 'Living & TV Units',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'g-3',
      title: 'Sliding Mirror Wardrobe with Loft Storage',
      category: 'Bedrooms',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'g-4',
      title: 'Modern Cove Ceiling with Wooden Rafter Detail',
      category: 'False Ceilings',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'g-5',
      title: 'Glass-Fronted Dining Crockery Cabinet',
      category: 'Dining & Crockery',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 'g-6',
      title: 'Fluted Wood Bedroom Wall & Floating Bedside Tables',
      category: 'Bedrooms',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85'
    }
  ],
  testimonials: [
    {
      id: 1,
      quote: 'We gave our 3BHK flat at My Home Bhooja to Satyam Interiors. Being civil engineers, their planning of electrical points, kitchen plumbing, and false ceiling was flawless. Completed within 42 days!',
      name: 'Prabhakar Annarapu',
      location: 'My Home Bhooja, Hyderabad',
      project: '3BHK Turnkey Interior',
      rating: 5
    },
    {
      id: 2,
      quote: 'The modular kitchen and sliding wardrobes in our villa are top-notch quality. Every visitor compliments the fluted TV unit and quartz counter. Transparent pricing with zero hidden charges.',
      name: 'Gubbala Swathi Reddy',
      location: 'Aparna Sarovar, Hyderabad',
      project: 'Villa Modular Interiors',
      rating: 5
    },
    {
      id: 3,
      quote: 'Satya Narayana Reddy garu personally oversaw our site execution. Their factory-made cabinets have zero rough edges and the Blum soft-close fittings are working smoothly. Highly recommended!',
      name: 'Suresh Adilapuram',
      location: 'Kukatpally Housing Board Colony, Hyderabad',
      project: 'Complete Home Interior',
      rating: 5
    }
  ],
  officeInfo: {
    address: 'MIG-99 & 100, Dharma Reddy Colony Phase II, Kukatpally Housing Board Colony, Hyderabad, Telangana 500085',
    phone1: '+91 96032 24391',
    phone2: '+91 79893 73914',
    email: 'satyaminteriors152@gmail.com',
    hours: 'Mon—Sun: 9:00 AM — 9:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Satyam+Interiors+Developers+Kukatpally+Hyderabad'
  }
};
