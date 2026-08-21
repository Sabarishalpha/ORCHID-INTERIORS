export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Modern"
  | "Luxury";

export type Project = {
  id: number;
  number: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;

  image: string;
  width: number;
  height: number;

  gallery: string[];

  /**
   * Optional project video.
   * Leave as an empty string if the project doesn't have a video yet.
   */
  video?: string;
};

export const PROJECTS: Project[] = [
  // ============================================================
  // RESIDENTIAL — 5 PROJECTS
  // ============================================================

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

    gallery: [
      "/images/projects/harmonia.jpg",
      "/images/projects/harmonia-2.jpg",
      "/images/projects/harmonia-3.jpg",
      "/images/projects/harmonia-4.jpg",
      "/imagea/projects/harmonia-5.jpg,
    ],

    video: "/videos/projects/harmonia.mp4",
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

    gallery: [
      "/images/projects/aria.jpg",
      "/images/projects/aria-2.jpg",
      "/images/projects/aria-3.jpg",
      "/images/projects/aria-4.jpg",
    ],

    video: "/videos/projects/aria.mp4",
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

    gallery: [
      "/images/projects/elysian.jpg",
      "/images/projects/elysian-2.jpg",
      "/images/projects/elysian-3.jpg",
      "/images/projects/elysian-4.jpg",
    ],

    video: "/videos/projects/elysian.mp4",
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

    gallery: [
      "/images/projects/solara.jpg",
      "/images/projects/solara-2.jpg",
      "/images/projects/solara-3.jpg",
      "/images/projects/solara-4.jpg",
    ],

    video: "/videos/projects/solara.mp4",
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

    gallery: [
      "/images/projects/aurelia.jpg",
      "/images/projects/aurelia-2.jpg",
      "/images/projects/aurelia-3.jpg",
      "/images/projects/aurelia-4.jpg",
    ],

    video: "/videos/projects/aurelia.mp4",
  },

  // ============================================================
  // COMMERCIAL — 5 PROJECTS
  // ============================================================

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

    gallery: [
      "/images/projects/aurelia-office.jpg",
      "/images/projects/aurelia-office-2.jpg",
      "/images/projects/aurelia-office-3.jpg",
      "/images/projects/aurelia-office-4.jpg",
    ],

    video: "/videos/projects/aurelia-office.mp4",
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

    gallery: [
      "/images/projects/atelier.jpg",
      "/images/projects/atelier-2.jpg",
      "/images/projects/atelier-3.jpg",
      "/images/projects/atelier-4.jpg",
    ],

    video: "/videos/projects/atelier.mp4",
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

    gallery: [
      "/images/projects/vertex.jpg",
      "/images/projects/vertex-2.jpg",
      "/images/projects/vertex-3.jpg",
      "/images/projects/vertex-4.jpg",
    ],

    video: "/videos/projects/vertex.mp4",
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

    gallery: [
      "/images/projects/nexa.jpg",
      "/images/projects/nexa-2.jpg",
      "/images/projects/nexa-3.jpg",
      "/images/projects/nexa-4.jpg",
    ],

    video: "/videos/projects/nexa.mp4",
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

    gallery: [
      "/images/projects/forma.jpg",
      "/images/projects/forma-2.jpg",
      "/images/projects/forma-3.jpg",
      "/images/projects/forma-4.jpg",
    ],

    video: "/videos/projects/forma.mp4",
  },

  // ============================================================
  // MODERN — 5 PROJECTS
  // ============================================================

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

    gallery: [
      "/images/projects/monochrome.jpg",
      "/images/projects/monochrome-2.jpg",
      "/images/projects/monochrome-3.jpg",
      "/images/projects/monochrome-4.jpg",
    ],

    video: "/videos/projects/monochrome.mp4",
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

    gallery: [
      "/images/projects/linear.jpg",
      "/images/projects/linear-2.jpg",
      "/images/projects/linear-3.jpg",
      "/images/projects/linear-4.jpg",
    ],

    video: "/videos/projects/linear.mp4",
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

    gallery: [
      "/images/projects/minimalist.jpg",
      "/images/projects/minimalist-2.jpg",
      "/images/projects/minimalist-3.jpg",
      "/images/projects/minimalist-4.jpg",
    ],

    video: "/videos/projects/minimalist.mp4",
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

    gallery: [
      "/images/projects/axis.jpg",
      "/images/projects/axis-2.jpg",
      "/images/projects/axis-3.jpg",
      "/images/projects/axis-4.jpg",
    ],

    video: "/videos/projects/axis.mp4",
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

    gallery: [
      "/images/projects/element.jpg",
      "/images/projects/element-2.jpg",
      "/images/projects/element-3.jpg",
      "/images/projects/element-4.jpg",
    ],

    video: "/videos/projects/element.mp4",
  },

  // ============================================================
  // LUXURY — 5 PROJECTS
  // ============================================================

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

    gallery: [
      "/images/projects/grand-residence.jpg",
      "/images/projects/grand-residence-2.jpg",
      "/images/projects/grand-residence-3.jpg",
      "/images/projects/grand-residence-4.jpg",
    ],

    video: "/videos/projects/grand-residence.mp4",
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

    gallery: [
      "/images/projects/imperial-villa.jpg",
      "/images/projects/imperial-villa-2.jpg",
      "/images/projects/imperial-villa-3.jpg",
      "/images/projects/imperial-villa-4.jpg",
    ],

    video: "/videos/projects/imperial-villa.mp4",
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

    gallery: [
      "/images/projects/royale-estate.jpg",
      "/images/projects/royale-estate-2.jpg",
      "/images/projects/royale-estate-3.jpg",
      "/images/projects/royale-estate-4.jpg",
    ],

    video: "/videos/projects/royale-estate.mp4",
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

    gallery: [
      "/images/projects/opulent-house.jpg",
      "/images/projects/opulent-house-2.jpg",
      "/images/projects/opulent-house-3.jpg",
      "/images/projects/opulent-house-4.jpg",
    ],

    video: "/videos/projects/opulent-house.mp4",
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

    gallery: [
      "/images/projects/prestige-villa.jpg",
      "/images/projects/prestige-villa-2.jpg",
      "/images/projects/prestige-villa-3.jpg",
      "/images/projects/prestige-villa-4.jpg",
    ],

    video: "/videos/projects/prestige-villa.mp4",
  },
];
