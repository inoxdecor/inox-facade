export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: [string, string][];
  specs: [string, string][];
  options: string[];
  applications: string[];
  gallery: string[];
};
const pdf = (file: string) => `/images/pdf/${file}.webp`;
const finish = [
  "Finish",
  "Powder coated · Wood finish · Corten finish",
] satisfies [string, string];
export const products: Product[] = [
  {
    slug: "fluting-series",
    name: "Fluting Series",
    tagline: "Designed to protect. Engineered to impress.",
    description: "Rhythm, texture and a quieter kind of statement.",
    image: pdf("page-3-6"),
    features: [
      [
        "Sleek & modern",
        "Enhances any facade with a clean, contemporary ripple effect.",
      ],
      [
        "Weather resistant",
        "Built to withstand harsh climates, UV rays, and corrosion.",
      ],
      [
        "Durable aluminium",
        "Premium grade aluminium ensures strength, lightweight & long life.",
      ],
      [
        "Low maintenance",
        "Easy to clean, scratch resistant & built for years of performance.",
      ],
      [
        "Design flexibility",
        "Wide range of profiles, finishes & colours to match your vision.",
      ],
      [
        "Sustainable choice",
        "100% recyclable aluminium for a greener tomorrow.",
      ],
    ],
    specs: [
      ["Material", "High grade aluminium alloy 3003 / 5052"],
      ["Thickness", "1.2 / 1.5 / 2.0 mm · Custom available"],
      ["Length", "Up to 6000 mm · Custom lengths available"],
      finish,
      ["Coating warranty", "15 years"],
    ],
    options: [
      "Profile 01",
      "Profile 02",
      "Profile 03",
      "Profile 04",
      "Profile 05",
      "Profile 06",
      "Profile 07",
      "Profile 08",
      "Profile 09",
      "Profile 10",
      "Profile 11",
      "Profile 12",
    ],
    applications: ["Facades", "Ceilings", "Partitions", "Interiors"],
    gallery: [pdf("page-4-29"), pdf("page-4-3")],
  },
  {
    slug: "box-profiles",
    name: "Box Profiles",
    tagline: "Strong by design. Refined by detail.",
    description: "Clean lines. Endless architectural possibilities.",
    image: pdf("page-3-7"),
    features: [
      [
        "Modern aesthetic",
        "Clean lines and seamless finishes for contemporary architecture.",
      ],
      [
        "Weather resistant",
        "Built to withstand harsh climates, UV rays, and corrosion.",
      ],
      [
        "Structural strength",
        "Excellent load-bearing capacity with high dimensional stability.",
      ],
      [
        "Design flexibility",
        "Hollow profiles in multiple sizes allow endless creative possibilities.",
      ],
      [
        "Premium aluminium",
        "Manufactured using high-grade aluminium for long life and reliability.",
      ],
      [
        "Sustainable choice",
        "100% recyclable aluminium for a greener tomorrow.",
      ],
    ],
    specs: [
      ["Material", "High grade aluminium alloy 6063 T5"],
      ["Thickness", "1.2 / 1.5 / 2.0 mm · Custom available"],
      ["Length", "Up to 6000 mm · Custom lengths available"],
      finish,
    ],
    options: [
      "25 × 25 mm",
      "30 × 50 mm",
      "40 × 40 mm",
      "50 × 50 mm",
      "50 × 75 mm",
      "75 × 75 mm",
      "100 × 50 mm",
      "100 × 100 mm",
    ],
    applications: [
      "Facades",
      "Ceilings",
      "Partitions",
      "Balconies",
      "Fences & gates",
      "Sun screens",
      "Signage",
      "Interiors",
    ],
    gallery: [pdf("page-5-15"), pdf("page-4-29")],
  },
  {
    slug: "perforated-panels",
    name: "Perforated Panels",
    tagline: "Design freedom. Functional performance.",
    description: "A considered balance of light, air and privacy.",
    image: pdf("page-3-4"),
    features: [
      [
        "Precision engineered",
        "High-precision aluminium panels fabricated using advanced CNC cutting and punching technology.",
      ],
      [
        "Natural light & ventilation",
        "Optimised perforation ratios ensure daylight, airflow and privacy without compromise.",
      ],
      [
        "Strength & durability",
        "Built to withstand harsh weather conditions. Corrosion resistant and UV stable.",
      ],
      [
        "Acoustic & thermal benefits",
        "Reduces noise transmission and improves thermal performance of buildings.",
      ],
      [
        "Design flexibility",
        "Wide range of hole shapes, patterns, and layouts to suit every architectural vision.",
      ],
      [
        "Customisable",
        "Available in various materials, finishes, thicknesses and custom patterns.",
      ],
    ],
    specs: [
      ["Material", "Aluminium alloy 1100 / 3003 / 5052"],
      ["Thickness", "1.2 / 1.5 / 2.0 / 2.5 / 3.0 mm"],
      ["Maximum panel size", "1200 × 2400 mm"],
      ["Finish", "Powder coated · Wood · Metallic · Corten · Matt / satin"],
    ],
    options: ["Round", "Square", "Hexagonal", "Slot", "Linear", "Custom"],
    applications: [
      "Sun shading & soffits",
      "Facade cladding",
      "Pergolas & canopies",
      "Feature walls",
      "Balcony infill",
      "Gates & fencing",
    ],
    gallery: [pdf("page-6-11"), pdf("page-6-3")],
  },
  {
    slug: "designer-panels",
    name: "Designer Panels",
    tagline: "Design freedom. Functional performance.",
    description: "Sculptural surfaces that shape light and shadow.",
    image: pdf("page-3-2"),
    features: [
      [
        "Distinctive design",
        "Sculptural panel patterns create a strong visual identity.",
      ],
      [
        "Precision engineered",
        "Digital modelling supports accurate pattern development.",
      ],
      [
        "Durable performance",
        "Refined metal panel construction for long-term use.",
      ],
      [
        "Lightweight construction",
        "High visual impact with efficient panel solutions.",
      ],
      [
        "Architectural flexibility",
        "Suitable for expressive interior and exterior applications.",
      ],
      [
        "Custom design possibilities",
        "Bespoke parametric patterns for project-specific expression.",
      ],
    ],
    specs: [
      ["Material", "Metallic sheet panel systems"],
      ["Design method", "Parametric and geometric pattern development"],
      ["Fabrication", "Precision cutting, bending and assembly"],
      finish,
    ],
    options: ["Geometric", "Parametric", "Custom pattern"],
    applications: [
      "Facades",
      "Ceilings",
      "Partitions",
      "Walls",
      "Screens",
      "Interiors",
    ],
    gallery: [
      pdf("page-7-4"),
      pdf("page-7-7"),
      pdf("page-7-16"),
      pdf("page-7-6"),
    ],
  },
  {
    slug: "aluminium-bamboo",
    name: "Aluminium Bamboo",
    tagline: "Natural character. Engineered performance.",
    description: "The warmth of nature. The precision of aluminium.",
    image: pdf("page-3-3"),
    features: [
      [
        "Natural bamboo aesthetic",
        "Bamboo-inspired surfaces bring warmth and natural character to contemporary architecture.",
      ],
      [
        "Aluminium core",
        "Engineered aluminium construction combines the visual appeal of bamboo with dependable performance.",
      ],
      [
        "Lightweight construction",
        "Strong and lightweight construction supports efficient handling and installation.",
      ],
      [
        "Durable performance",
        "Designed for long-lasting architectural applications with resistance to demanding environments.",
      ],
      [
        "Eco-conscious design",
        "A sustainable alternative that combines natural visual character with engineered aluminium.",
      ],
      [
        "Architectural flexibility",
        "Suitable for a variety of interior and exterior architectural applications.",
      ],
    ],
    specs: [
      ["Material", "Aluminium with bamboo-look surface"],
      ["Construction", "Aluminium tube with decorative bamboo finish"],
      ["Diameter", "Ø40 / Ø50 mm"],
      ["Length", "Up to 6000 mm"],
      finish,
    ],
    options: ["Ø40 mm", "Ø50 mm", "Moso bamboo", "Green bamboo"],
    applications: ["Ceilings", "Walls", "Screens", "Facades", "Interiors"],
    gallery: [pdf("page-8-2"), pdf("page-8-6")],
  },
];
export const finishes = [
  { name: "Wooden Oak", color: "#a97b49" },
  { name: "Teak Wood", color: "#80512e" },
  { name: "Walnut", color: "#513a2e" },
  { name: "Coffee Brown", color: "#655048" },
  { name: "Champagne Gold", color: "#d8c29d" },
  { name: "Slate Grey", color: "#697071" },
  { name: "Jet Black", color: "#303335" },
  { name: "Custom RAL", color: "#8fa89b" },
  { name: "Corten", color: "#b5714a" },
];
