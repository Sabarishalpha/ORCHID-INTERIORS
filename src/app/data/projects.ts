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

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "the-willow-residence",
    title: "The Willow Residence",
    category: "Residential",
    location: "Coimbatore",
    image: "/images/projects/1.png",
    width: 4500,
    height: 2531,
    gallery: [
      "/images/projects/1.png",
      "/images/projects/2.jpeg",
      "/images/projects/3.jpeg",
      "/images/projects/4.png",
      "/images/projects/5.png",
      "/images/projects/6.png",
      "/images/about-1.jpeg",
      "/images/about-2.jpeg",
      "/images/about-3.jpeg",
      "/images/about-4.jpeg",
      "/images/about-5.jpeg",
      "/images/about.png",
      "/images/hero-1.png",
      "/images/hero-2.png",
      "/images/hero-3.png",
      "/images/hero-4.png",
      "/images/hero.jpeg",
      "/images/heroo.jpeg",
    ],
  },
  {
    id: "2",
    slug: "the-urban-house",
    title: "The Urban House",
    category: "Modern",
    location: "Chennai",
    image: "/images/projects/2.jpeg",
    width: 4500,
    height: 2531,
    gallery: [
      "/images/projects/2.jpeg",
      "/images/projects/3.jpeg",
      "/images/projects/4.png",
      "/images/about-2.jpeg",
      "/images/about-3.jpeg",
      "/images/hero-2.png",
      "/images/hero-3.png",
      "/images/projects/5.png",
    ],
  },
  {
    id: "3",
    slug: "the-atelier",
    title: "The Atelier",
    category: "Commercial",
    location: "Bangalore",
    image: "/images/projects/3.jpeg",
    width: 4500,
    height: 2531,
    gallery: [
      "/images/projects/3.jpeg",
      "/images/projects/4.png",
      "/images/projects/5.png",
      "/images/about-3.jpeg",
      "/images/about-4.jpeg",
      "/images/hero-3.png",
      "/images/hero-4.png",
      "/images/projects/6.png",
    ],
  },
  {
    id: "4",
    slug: "casa-verde",
    title: "Casa Verde",
    category: "Luxury",
    location: "Coimbatore",
    image: "/images/projects/4.png",
    width: 4500,
    height: 2531,
    gallery: [
      "/images/projects/4.png",
      "/images/projects/5.png",
      "/images/projects/6.png",
      "/images/about-4.jpeg",
      "/images/about-5.jpeg",
      "/images/hero-4.png",
      "/images/hero.jpeg",
      "/images/about.png",
    ],
  },
];