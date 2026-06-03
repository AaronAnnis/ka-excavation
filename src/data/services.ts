export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "excavation",
    title: "Excavation",
    tagline: "Site work done right",
    description:
      "From foundation digs to grading and drainage, we handle residential and light commercial excavation across Midcoast Maine.",
    features: [
      "Foundation excavation",
      "Land clearing & grading",
      "Drainage solutions",
      "Driveway installation",
      "Demolition & removal",
    ],
  },
  {
    slug: "lawn-care",
    title: "Lawn Care",
    tagline: "Keep your property looking sharp",
    description:
      "Regular mowing, seasonal cleanups, and property maintenance for homeowners who want a well-kept yard without the hassle.",
    features: [
      "Weekly & bi-weekly mowing",
      "Spring & fall cleanups",
      "Brush clearing",
      "Lawn renovation",
      "Property maintenance",
    ],
  },
  {
    slug: "hardscaping",
    title: "Hardscaping",
    tagline: "Built to last",
    description:
      "Patios, walkways, retaining walls, and stone work that transforms your outdoor space and adds lasting value to your property.",
    features: [
      "Patio & walkway installation",
      "Retaining walls",
      "Gravel paths & driveways",
      "Garden bed construction",
      "Stone & boulder placement",
    ],
  },
  {
    slug: "wastewater",
    title: "Wastewater Solutions",
    tagline: "Septic done right the first time",
    description:
      "Full-service septic system installation, repair, and maintenance. Licensed and experienced in Maine wastewater regulations.",
    features: [
      "Septic system installation",
      "Tank replacement & repair",
      "Leach field construction",
      "System inspections",
      "Permit coordination",
    ],
  },
];
