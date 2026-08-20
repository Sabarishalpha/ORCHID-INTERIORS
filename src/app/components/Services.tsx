"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      data-services-section
      className="relative w-full bg-stone-50 px-4 py-20 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Content */}
      <div className="mx-auto max-w-7xl">
        {/* Section Introduction */}
        <div className="mb-16 text-center md:mb-20">
          {/* Label */}
          <p
            data-services-label
            className="mb-6 text-xs font-medium tracking-[0.32em] text-stone-600 sm:text-sm"
          >
          </p>

          {/* Heading */}
          <h2
            data-services-title
            className="mx-auto mb-8 max-w-2xl text-4xl font-light leading-tight text-black sm:text-5xl md:text-6xl"
          >
            Spaces designed around you.
          </h2>

          {/* Description */}
          <p
            data-services-description
            className="mx-auto max-w-2xl text-sm leading-8 text-stone-700 sm:text-base md:text-lg"
          >
            From concept to completion, we create considered interiors that
            combine functionality, craftsmanship and timeless design.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:grid-cols-5 sm:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              data-service-card
              className="group relative flex flex-col overflow-hidden border border-stone-300 bg-white transition-all duration-300 hover:border-stone-400 hover:bg-stone-100"
            >
              {/* Service Image */}
              <div
                className="
                  relative
                  h-56
                  w-full
                  overflow-hidden
                  bg-stone-200
                  sm:h-60
                  md:h-64
                  lg:h-80
                  xl:h-96
                "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-grow flex-col items-center justify-center px-4 py-6 text-center sm:px-5 sm:py-7">
                {/* Number */}
                <span
                  data-service-number
                  className="mb-3 text-xs font-light tracking-[0.1em] text-stone-500 transition-colors duration-300 group-hover:text-stone-700"
                >
                  {service.number}
                </span>

                {/* Service Title */}
                <h3
                  data-service-title
                  className="mb-3 text-base font-light leading-tight text-black sm:text-lg"
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  data-service-description
                  className="mb-4 flex-grow text-xs leading-6 text-stone-700 sm:text-sm"
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <ArrowRight
                    data-service-arrow
                    className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
