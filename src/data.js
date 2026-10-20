export const images = {
  hero: "/images/hero-excavator.jpg",
  earth: "/images/earthworks-site.jpg",
  site: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
  workers: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  plans: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
  city: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  house: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  crane: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1600&q=80",
  machine: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1600&q=80",
  oman: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1800&q=80",
  electrical: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80",
  materials: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
};

export const company = {
  name: "Intercity Development Projects LLC",
  short: "Intercity",
  place: "Sultanate of Oman",
  line: "Civil & Carpentry Solutions",
  motto: "Design · Build · Deliver",
  headline: "Building Practical Solutions for Construction, Infrastructure & Development",
  overview: [
    "Intercity Development Projects LLC is a multidisciplinary contracting and services company supporting construction, infrastructure, utility, maintenance and development projects in the Sultanate of Oman.",
    "Our services combine civil construction, earthworks, utility networks, building works, equipment rental, manpower supply, carpentry and furniture, interior and exterior finishing, plumbing, electrical works, maintenance, procurement and import/export activities.",
  ],
  vision:
    "To become a trusted and recognized multidisciplinary construction and development company in Oman, known for dependable execution, professional service and long-term client relationships.",
  mission:
    "To deliver safe, reliable, cost-effective and quality-driven construction and project support services through competent people, suitable equipment, responsible management and practical site solutions.",
  goal: "Our goal is to provide responsive site support, competent manpower, suitable equipment and quality workmanship.",
  partner: "A Multidisciplinary Project Partner",
  supportLead: "We support:",
  email: "info@intercity.com",
  web: "https://www.intercity.com",
  webLabel: "www.intercity.com",
  phones: [
    { display: "+968 9702 1355", tel: "+96897021355" },
    { display: "+968 9702 1455", tel: "+96897021455" },
  ],
};

export const serviceStrip = [
  "Construction",
  "Civil & Infrastructure",
  "Earthworks",
  "Utilities",
  "Equipment Rental",
  "Manpower",
  "Procurement",
  "Interior & Maintenance",
];

export const values = [
  {
    title: "Quality",
    text: "We aim to deliver workmanship and services that meet agreed specifications and client expectations.",
  },
  {
    title: "Safety",
    text: "We promote safe working practices, responsible site behavior and awareness of hazards.",
  },
  {
    title: "Integrity",
    text: "We conduct business transparently and professionally.",
  },
  {
    title: "Reliability",
    text: "We respond to project requirements and commitments with consistency.",
  },
  {
    title: "Teamwork",
    text: "We cooperate with clients, consultants, contractors and our workforce.",
  },
  {
    title: "Timely Delivery",
    text: "We focus on productivity and planning to support project schedules.",
  },
];

export const pillars = [
  {
    title: "Construction",
    text: "Building and civil construction solutions.",
    icon: "crane",
  },
  {
    title: "Infrastructure",
    text: "Utility, earthworks and supporting infrastructure.",
    icon: "infra",
  },
  {
    title: "Project Support",
    text: "Manpower, equipment, materials and site support.",
    icon: "team",
  },
  {
    title: "Procurement",
    text: "Project-specific sourcing and supply.",
    icon: "box",
  },
];

export const services = [
  {
    id: "construction",
    title: "Construction",
    category: "Construction",
    icon: "crane",
    summary: "New construction, civil works, renovation, finishing and maintenance.",
    detail:
      "Our building and civil construction capability covers new construction, supporting civil works, renovation, finishing and maintenance activities.",
    scopes: ["Residential", "Commercial", "General building works", "Concrete", "Blockwork", "Plastering", "Tiling"],
    image: images.site,
  },
  {
    id: "infrastructure",
    title: "Civil & Infrastructure",
    category: "Infrastructure",
    icon: "infra",
    summary: "Site development, formation and supporting infrastructure.",
    detail:
      "Site development covers the ground and infrastructure works that prepare a plot for what gets built on it.",
    scopes: ["Site preparation", "Grading", "Leveling", "Formation", "Supporting infrastructure works"],
    image: images.crane,
  },
  {
    id: "earthworks",
    title: "Earthworks",
    category: "Earthworks",
    icon: "earth",
    summary: "Efficient groundwork and reliable site support.",
    detail:
      "We provide earthwork and excavation support for building, utility, road and infrastructure projects.",
    scopes: [
      "General excavation",
      "Trench excavation",
      "Mountain cutting",
      "Hard ground and rock excavation",
      "Site clearing",
      "Grading and leveling",
      "Loading and hauling",
      "Excavated material removal",
      "Work-area preparation",
      "Utility trenching",
      "Water and sewer trenching",
      "Drainage excavation",
      "Backfilling",
      "Compaction",
      "Reinstatement support",
      "Access route preparation",
      "Material handling",
    ],
    image: images.earth,
  },
  {
    id: "utilities",
    title: "Utilities",
    category: "Infrastructure",
    icon: "bolt",
    summary: "Water pipeline networks and the civil works around them.",
    detail:
      "We undertake water pipeline installation and associated civil works for utility and infrastructure projects.",
    scopes: [
      "HDPE water pipelines",
      "Ductile iron pipelines",
      "Pipe trench excavation",
      "Trench preparation",
      "Bedding",
      "Pipe laying",
      "Jointing",
      "Backfilling",
      "Valve and chamber works",
      "Testing and commissioning support",
      "Service and house connections",
    ],
    image: images.electrical,
  },
  {
    id: "equipment",
    title: "Equipment Rental",
    category: "Support",
    icon: "truck",
    summary: "Suitable equipment for the work in front of the site.",
    detail:
      "Equipment rental is there so projects can draw on suitable plant when they need it, without separating machinery from the people who use it.",
    scopes: ["Equipment rental", "Suitable site equipment", "Plant matched to the task"],
    image: images.machine,
  },
  {
    id: "manpower",
    title: "Manpower",
    category: "Support",
    icon: "team",
    summary: "Competent people for project and site support.",
    detail:
      "Manpower supply puts competent people on site, working with consultants, contractors and the client team already in place.",
    scopes: ["Manpower supply", "Competent site teams", "Workforce coordination"],
    image: images.workers,
  },
  {
    id: "procurement",
    title: "Procurement",
    category: "Support",
    icon: "box",
    summary: "Project-specific sourcing and supply.",
    detail:
      "Procurement covers project-specific sourcing, materials and import/export activities so the site has what the programme calls for.",
    scopes: ["Project-specific sourcing", "Procurement", "Import/export activities", "Materials supply"],
    image: images.plans,
  },
  {
    id: "interior",
    title: "Interior & Maintenance",
    category: "Interiors",
    icon: "home",
    summary: "Finishing, upkeep and the trades that complete a place.",
    detail:
      "Interior and maintenance work brings together finishing, carpentry, furniture, plumbing, electrical works and ongoing upkeep.",
    scopes: [
      "Interior and exterior finishing",
      "Carpentry and furniture",
      "Plumbing",
      "Electrical works",
      "Maintenance",
    ],
    image: images.interior,
  },
];

export const workAreas = [
  {
    id: "building-civil",
    title: "Building & Civil Works",
    category: "Construction",
    serviceId: "construction",
    image: images.site,
    text: "Building works and civil construction delivered against agreed specifications, with workmanship kept at the centre of the job.",
  },
  {
    id: "infrastructure-support",
    title: "Infrastructure Support",
    category: "Infrastructure",
    serviceId: "infrastructure",
    image: images.crane,
    text: "Supporting infrastructure and civil works that sit beside buildings, utilities and the rest of a development.",
  },
  {
    id: "ground-works",
    title: "Earthworks & Formation",
    category: "Earthworks",
    serviceId: "earthworks",
    image: images.machine,
    text: "Earthworks and ground preparation that ready a site and stay coordinated with the construction sequence.",
  },
  {
    id: "utility-networks",
    title: "Utility Networks",
    category: "Infrastructure",
    serviceId: "utilities",
    image: images.electrical,
    text: "Utility networks handled as part of a wider construction and infrastructure scope, not as an isolated afterthought.",
  },
  {
    id: "plant",
    title: "Equipment on Site",
    category: "Support",
    serviceId: "equipment",
    image: images.hero,
    text: "Equipment rental for teams that need suitable plant matched to the work, alongside manpower already on the ground.",
  },
  {
    id: "crews",
    title: "Manpower & Crews",
    category: "Support",
    serviceId: "manpower",
    image: images.workers,
    text: "Competent manpower and site support, cooperating with clients, consultants, contractors and the workforce.",
  },
  {
    id: "supply",
    title: "Procurement & Supply",
    category: "Support",
    serviceId: "procurement",
    image: images.plans,
    text: "Project-specific sourcing, procurement and import/export activities that keep materials moving toward the site.",
  },
  {
    id: "fitout",
    title: "Interiors & Finishing",
    category: "Interiors",
    serviceId: "interior",
    image: images.interior,
    text: "Interior and exterior finishing, carpentry and furniture, for spaces that need to be completed with care.",
  },
  {
    id: "upkeep",
    title: "Maintenance & Trades",
    category: "Interiors",
    serviceId: "interior",
    image: images.house,
    text: "Maintenance together with plumbing and electrical works, for places that need practical upkeep after construction.",
  },
];

export const categories = ["All", "Construction", "Infrastructure", "Earthworks", "Support", "Interiors"];

export const approach = [
  {
    n: "01",
    title: "Understand",
    text: "Project scope, specifications, programme and site conditions.",
  },
  {
    n: "02",
    title: "Prepare",
    text: "Suitable manpower, equipment, materials and supervision.",
  },
  {
    n: "03",
    title: "Execute",
    text: "Strong focus on safety, quality and productivity.",
  },
  {
    n: "04",
    title: "Support",
    text: "Collaborative communication with clients, consultants and contractors.",
  },
];

export const capabilities = [
  {
    id: "building",
    title: "Building & Civil Construction",
    kicker: "Structures",
    image: images.hero,
    lead: "Our building and civil construction capability covers new construction, supporting civil works, renovation, finishing and maintenance activities.",
    note: "Project support: site teams, materials, equipment and manpower to support project delivery.",
    items: ["Residential", "Commercial", "General building works", "Concrete", "Blockwork", "Plastering", "Tiling"],
  },
  {
    id: "concrete",
    title: "Concrete & Structural Works",
    kicker: "Structure",
    image: images.hero,
    lead: "We support essential civil and structural construction activities.",
    note: "Typical work packages: Excavation → Foundations → Concrete Works → Structural Works → Finishing",
    items: ["Foundations", "Concrete slabs", "Concrete structures", "Kerbs", "Minor structures", "Related civil construction activities"],
  },
  {
    id: "earthworks-cap",
    title: "Earthworks & Excavation",
    kicker: "Ground",
    image: images.earth,
    lead: "Earthwork and excavation support for building, utility, road and infrastructure projects.",
    items: [
      "General excavation",
      "Trench excavation",
      "Mountain cutting",
      "Hard ground and rock excavation",
      "Site clearing",
      "Grading and leveling",
      "Loading and hauling",
      "Excavated material removal",
      "Work-area preparation",
    ],
  },
  {
    id: "excavation-support",
    title: "Excavation & Site Support",
    kicker: "Efficient groundwork",
    image: images.hero,
    lead: "Efficient groundwork. Reliable site support.",
    items: [
      "Utility trenching",
      "Water and sewer trenching",
      "Drainage excavation",
      "Backfilling",
      "Compaction",
      "Reinstatement support",
      "Access route preparation",
      "Material handling",
    ],
  },
  {
    id: "site-development",
    title: "Site Development & Finishing",
    kicker: "Site development",
    image: images.earth,
    lead: "The works that shape a site before and alongside the build.",
    items: ["Site preparation", "Grading", "Leveling", "Formation", "Supporting infrastructure works"],
  },
  {
    id: "pipelines",
    title: "Water Pipeline Networks",
    kicker: "Utilities",
    image: images.earth,
    lead: "Water pipeline installation and associated civil works for utility and infrastructure projects.",
    items: [
      "HDPE water pipelines",
      "Ductile iron pipelines",
      "Pipe trench excavation",
      "Trench preparation",
      "Bedding",
      "Pipe laying",
      "Jointing",
      "Backfilling",
      "Valve and chamber works",
      "Testing and commissioning support",
      "Service and house connections",
    ],
  },
];

export const orgChart = {
  board: "Board of Directors",
  directors: ["Managing Director 1", "Managing Director 2"],
  chain: ["CEO", "Project Manager", "Project Engineer", "Surveyor"],
  flank: ["QA/QC Engineer", "Document Controller"],
  branches: [
    {
      id: "mep",
      title: "MEP",
      lead: "MEP Works Supervisor",
      skilled: "MEP Skilled Workers",
      roles: ["Pipe Fitters", "Pipe Welders", "Electricians"],
      support: "MEP Unskilled Workers",
      helpers: ["Helpers"],
    },
    {
      id: "civil",
      title: "Civil",
      lead: "Civil Works Supervisor",
      skilled: "Civil Skilled Workers",
      roles: ["Masons", "Shuttering Carpenters"],
      support: "Civil Unskilled Workers",
      helpers: ["General Workers"],
    },
    {
      id: "carpentry",
      title: "Carpentry & Painting",
      lead: "Carpentry & Painting Work Supervisor",
      skilled: "Carpentry Skilled Workers",
      roles: ["Steel Fixers", "Kitchen Carpenters", "Painters", "Joinery Carpenters", "Painter Skilled"],
      support: "Unskilled Workers",
      helpers: ["Carpentry Helpers", "Painter Helpers"],
    },
  ],
};

export const faqs = [
  {
    q: "Where does Intercity work?",
    a: "Intercity Development Projects LLC supports construction, infrastructure, utility, maintenance and development projects in the Sultanate of Oman.",
  },
  {
    q: "What can a single brief include?",
    a: "A project can draw on more than one service. Construction, earthworks, utilities, equipment, manpower, procurement, interiors and maintenance can be combined in one brief.",
  },
  {
    q: "Do you supply people and equipment?",
    a: "Yes. Project support covers manpower, equipment, materials and site support, alongside procurement for project-specific sourcing and supply.",
  },
  {
    q: "How should we start a conversation?",
    a: "Call +968 9702 1355 or +968 9702 1455, email info@intercity.com, or mark the scopes you need and send the brief from this site.",
  },
];

export const stats = [
  { value: 8, label: "Core service lines" },
  { value: 6, label: "Values that guide the work" },
  { value: 13, label: "Activities across our scope" },
];
