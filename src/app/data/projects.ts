export type ProjectCategory = "Residential" | "Commercial" | "Modern" | "Luxury";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  width: number;
  height: number;
  gallery?: readonly string[];
  video?: string;
};

export const PROJECTS = [
  // =====================================================
  // RESIDENTIAL — 5
  // =====================================================

  {
    id: 1,
    number: "01",
    title: "The Harmonia Residence",
    slug: "harmonia-residence",
    category: "Residential",
    location: "Bangalore",
    image: "/images/projects/harmonia.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 2,
    number: "02",
    title: "The Aria Residence",
    slug: "aria-residence",
    category: "Residential",
    location: "Coimbatore",
    image: "/images/projects/aria.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 3,
    number: "03",
    title: "The Elysian Home",
    slug: "elysian-home",
    category: "Residential",
    location: "Chennai",
    image: "/images/projects/elysian.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 4,
    number: "04",
    title: "The Solara Villa",
    slug: "solara-villa",
    category: "Residential",
    location: "Bangalore",
    image: "/images/projects/solara.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 5,
    number: "05",
    title: "The Aurelia Home",
    slug: "aurelia-home",
    category: "Residential",
    location: "Coimbatore",
    image: "/images/projects/aurelia.jpg",
    width: 1600,
    height: 1067,
  },

  // =====================================================
  // COMMERCIAL — 5
  // =====================================================

  {
    id: 6,
    number: "01",
    title: "Aurelia Corporate Office",
    slug: "aurelia-corporate-office",
    category: "Commercial",
    location: "Bangalore",
    image: "/images/projects/aurelia-office.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 7,
    number: "02",
    title: "The Atelier Workspace",
    slug: "atelier-workspace",
    category: "Commercial",
    location: "Coimbatore",
    image: "/images/projects/atelier.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 8,
    number: "03",
    title: "Vertex Business Lounge",
    slug: "vertex-business-lounge",
    category: "Commercial",
    location: "Chennai",
    image: "/images/projects/vertex.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 9,
    number: "04",
    title: "Nexa Studio",
    slug: "nexa-studio",
    category: "Commercial",
    location: "Bangalore",
    image: "/images/projects/nexa.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 10,
    number: "05",
    title: "The Forma Office",
    slug: "forma-office",
    category: "Commercial",
    location: "Coimbatore",
    image: "/images/projects/forma.jpg",
    width: 1600,
    height: 1067,
  },

  // =====================================================
  // MODERN — 5
  // =====================================================

  {
    id: 11,
    number: "01",
    title: "Monochrome House",
    slug: "monochrome-house",
    category: "Modern",
    location: "Bangalore",
    image: "/images/projects/monochrome.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 12,
    number: "02",
    title: "The Linear Residence",
    slug: "linear-residence",
    category: "Modern",
    location: "Chennai",
    image: "/images/projects/linear.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 13,
    number: "03",
    title: "The Minimalist Home",
    slug: "minimalist-home",
    category: "Modern",
    location: "Coimbatore",
    image: "/images/projects/minimalist.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 14,
    number: "04",
    title: "Axis Residence",
    slug: "axis-residence",
    category: "Modern",
    location: "Bangalore",
    image: "/images/projects/axis.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 15,
    number: "05",
    title: "The Element House",
    slug: "element-house",
    category: "Modern",
    location: "Chennai",
    image: "/images/projects/element.jpg",
    width: 1600,
    height: 1067,
  },

  // =====================================================
  // LUXURY — 5
  // =====================================================

  {
    id: 16,
    number: "01",
    title: "The Grand Residence",
    slug: "grand-residence",
    category: "Luxury",
    location: "Bangalore",
    image: "/images/projects/grand-residence.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 17,
    number: "02",
    title: "The Imperial Villa",
    slug: "imperial-villa",
    category: "Luxury",
    location: "Chennai",
    image: "/images/projects/imperial-villa.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 18,
    number: "03",
    title: "The Royale Estate",
    slug: "royale-estate",
    category: "Luxury",
    location: "Coimbatore",
    image: "/images/projects/royale-estate.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 19,
    number: "04",
    title: "The Opulent House",
    slug: "opulent-house",
    category: "Luxury",
    location: "Bangalore",
    image: "/images/projects/opulent-house.jpg",
    width: 1600,
    height: 1067,
  },
  {
    id: 20,
    number: "05",
    title: "The Prestige Villa",
    slug: "prestige-villa",
    category: "Luxury",
    location: "Chennai",
    image: "/images/projects/prestige-villa.jpg",
    width: 1600,
    height: 1067,
  },
];
