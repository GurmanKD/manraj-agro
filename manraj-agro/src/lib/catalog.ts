export type CategorySlug =
  | "tractors"
  | "combine-harvesters"
  | "seed-drills"
  | "rotavators"
  | "straw-reapers"
  | "laser-land-levelers"
  | "threshers"
  | "parts";

export type Category = {
  slug: CategorySlug;
  title: string;
  subtitle: string;
  imageHint: string; // later: CMS image
};

export type Product = {
  slug: string;
  title: string;
  category: CategorySlug;
  brand?: string;
  price?: string; // keep string: "₹ 9,35,000" or "Get Quote"
  highlights: string[];
};

export const categories: Category[] = [
  {
    slug: "tractors",
    title: "Tractors",
    subtitle: "John Deere tractors (multiple HP models)",
    imageHint: "tractor in field",
  },
  {
    slug: "combine-harvesters",
    title: "Combine Harvesters",
    subtitle: "Self-propelled & mini harvesters",
    imageHint: "combine harvester",
  },
  {
    slug: "seed-drills",
    title: "Seed Drills",
    subtitle: "Super Seeder & Zero Till drills",
    imageHint: "seed drill implement",
  },
  {
    slug: "rotavators",
    title: "Rotavators",
    subtitle: "Rotary tillers for soil prep",
    imageHint: "rotavator implement",
  },
  {
    slug: "straw-reapers",
    title: "Straw Reapers",
    subtitle: "Stubble management solutions",
    imageHint: "straw reaper machine",
  },
  {
    slug: "laser-land-levelers",
    title: "Laser Land Levelers",
    subtitle: "Precision land levelling",
    imageHint: "laser land leveler",
  },
  {
    slug: "threshers",
    title: "Threshers",
    subtitle: "Crop/groundnut threshers",
    imageHint: "thresher machine",
  },
  {
    slug: "parts",
    title: "Parts & Industrial",
    subtitle: "Bearings, chains & cutting machines",
    imageHint: "machine parts",
  },
];

export const products: Product[] = [
  {
    slug: "john-deere-5050d-50hp",
    title: "John Deere 5050D (50 HP)",
    category: "tractors",
    brand: "John Deere",
    price: "Get Quote",
    highlights: ["50 HP", "Available in 2WD/4WD", "Heavy-duty applications"],
  },
  {
    slug: "john-deere-5042d-44hp",
    title: "John Deere 5042D (44 HP)",
    category: "tractors",
    brand: "John Deere",
    price: "Get Quote",
    highlights: ["44 HP", "High productivity", "Fuel efficient"],
  },
  {
    slug: "john-deere-5075e-75hp",
    title: "John Deere 5075E (75 HP)",
    category: "tractors",
    brand: "John Deere",
    price: "Get Quote",
    highlights: ["75 HP", "Turbocharged engine", "Heavy-duty lifting"],
  },
  {
    slug: "ks-9300-self-propelled-combine",
    title: "KS 9300 Self Propelled Combine Harvester",
    category: "combine-harvesters",
    brand: "KS",
    price: "Get Quote",
    highlights: ["Multi-crop", "Wheat/Paddy", "High performance"],
  },
  {
    slug: "ks-super-seeder-11-tine",
    title: "KS Super Seeder (11 Tine)",
    category: "seed-drills",
    brand: "KS",
    price: "Get Quote",
    highlights: ["Direct seeding", "Residue management", "Works with ~50 HP"],
  },
  {
    slug: "zero-till-seed-drill-7ft",
    title: "Zero Till Seed Drill (7 ft)",
    category: "seed-drills",
    brand: "KS",
    price: "Get Quote",
    highlights: ["Conservation tech", "Efficient sowing", "High productivity"],
  },
];
