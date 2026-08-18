"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["Residential", "Commercial", "Modern", "Luxury"] as const;
type CategoryType = typeof CATEGORIES[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Residential");

  // Filter projects based on active category
  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      id="projects"
      data-projects-section
      className="relative w-full bg-stone-50 px-4 py-20 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Introduction */}
        <div className="mb-16 text-center md:mb-20">
          {/* Label */}
          <p
            data-projects-label
            className="mb-6 text-sm font-medium tracking-[0.32em] text-stone-600 sm:text-base md:text-lg"
          >
            SELECTED WORK
          </p>

          {/* Heading */}
          <h2
            data-projects-title
            className="mx-auto mb-8 max-w-2xl text-4xl font-light leading-tight text-black sm:text-5xl md:text-6xl"
          >
            Spaces we&apos;ve
            <br />
            brought to life.
          </h2>

          {/* Description */}
          <p
            data-projects-description
            className="mx-auto max-w-2xl text-base leading-8 text-stone-700 sm:text-lg md:text-xl"
          >
            A selection of interiors shaped by thoughtful design,
            <br />
            materiality and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center gap-4 overflow-x-auto pb-2 sm:gap-6 md:mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap text-sm font-medium transition-all duration-300 sm:text-base md:text-lg ${
                activeCategory === category
                  ? "border-b-2 border-black text-black"
                  : "border-b-2 border-transparent text-stone-500 hover:text-stone-700"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Uniform Layout */}
        <div className="mb-16 grid gap-4 sm:gap-6 md:mb-20 md:gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const aspectRatio = project.width / project.height;
            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                data-project-card
                className="group relative overflow-hidden border border-stone-200 bg-stone-100 transition-all duration-500 hover:border-stone-400"
                style={{ aspectRatio: `${aspectRatio}` }}
              >
                {/* Project Image Container */}
                <div
                  data-project-image
                  className="relative h-full w-full overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    priority={index === 0}
                  />

                  {/* Overlay */}
                  <div
                    data-project-overlay
                    className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20"
                  />
                </div>

                {/* Project Information */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-6 lg:py-8">
                  {/* Category */}
                  <p
                    data-project-category
                    className="mb-2 text-xs font-medium tracking-[0.1em] text-white/80 transition-colors duration-300 group-hover:text-white sm:text-sm md:text-base"
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3
                    data-project-title
                    className="mb-2 text-lg font-light leading-tight text-white transition-colors duration-300 group-hover:text-white sm:text-xl md:text-2xl"
                  >
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center justify-between">
                    <p
                      data-project-location
                      className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 sm:text-sm md:text-base"
                    >
                      {project.location}
                    </p>

                    {/* Arrow */}
                    <ArrowRight
                      data-project-arrow
                      className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="flex items-center justify-center">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium text-black transition-all duration-300 hover:gap-4 md:text-base"
          >
            View All Projects
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}