"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Hero carousel images - update these paths to your actual images
const HERO_IMAGES = [
  "/images/hero.jpeg",
  "/images/heroo.jpeg",
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Swiper Carousel Background */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".swiper-pagination",
          }}
          loop
          className="h-full w-full"
        >
          {HERO_IMAGES.map((imagePath, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={imagePath}
                alt={`Luxury Orchid Interiors interior design ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Black shade overlay */}
              <div className="absolute inset-0 bg-black/25" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_30%)]" />
      </div>

      {/* Hero Content */}
<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-16 pt-28 sm:px-6 md:px-10 lg:px-16">
  <div
    className="
      w-full
      max-w-[700px]
      rounded-3xl
      border
      border-white/20
      bg-white/[0.06]
      p-6
      backdrop-blur-xl
      backdrop-saturate-150
      shadow-[0_8px_40px_rgba(0,0,0,0.15)]
      sm:p-8
      md:p-10
      lg:p-12
    "
  >
    {/* Small Glass Label */}
    <div
      className="
        mb-8
        inline-flex
        rounded-full
        border
        border-white/20
        bg-white/[0.08]
        px-4
        py-2
        backdrop-blur-md
      "
    >
      <h3
        data-hero-label
        className="
          text-xs
          font-medium
          tracking-[0.32em]
          text-white/85
          sm:text-sm
          md:text-base
        "
      >
        ORCHID INTERIORS
      </h3>
    </div>

    {/* Description */}
    <p
      data-hero-description
      className="
        max-w-xl
        text-sm
        leading-7
        text-white/75
        sm:text-base
        md:text-lg
        md:leading-8
      "
    >
      Thoughtfully designed interiors that bring together architecture,
      comfort and timeless elegance.
    </p>

    {/* CTA */}
    <div className="mt-10">
      <Link
        href="/projects"
        data-hero-cta
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/30
          bg-white/95
          px-6
          py-3
          text-sm
          font-medium
          tracking-[0.04em]
          text-black
          shadow-lg
          transition-all
          duration-500
          hover:border-white
          hover:bg-white
          hover:px-8
          sm:px-8
          sm:py-4
          sm:text-base
        "
      >
        Explore Projects

        <span
          aria-hidden="true"
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    </div>
  </div>
</div>


      {/* Scroll Indicator */}
      <div
        data-hero-scroll
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.32em] text-white/70"
      >
        <span>SCROLL</span>
        <span aria-hidden="true" className="text-base leading-none">
          ↓
        </span>
      </div>

      {/* Swiper Pagination Dots */}
      <div className="swiper-pagination absolute bottom-24 left-1/2 z-20 -translate-x-1/2" />
    </section>
  );
} 
