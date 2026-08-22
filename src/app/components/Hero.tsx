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
  {/* Outer Glass Border */}
  <div
    data-hero-content
    className="
      relative
      w-full
      max-w-[700px]
      rounded-[2rem]
      border
      border-white/25
      bg-white/[0.04]
      p-1
      backdrop-blur-xl
      backdrop-saturate-150
      shadow-[0_20px_80px_rgba(0,0,0,0.25)]
    "
  >
    {/* Inner Glass Border */}
    <div
      className="
        relative
        overflow-hidden
        rounded-[1.8rem]
        border
        border-white/10
        bg-black/[0.12]
        p-6
        backdrop-blur-md
        sm:p-8
        md:p-10
        lg:p-12
      "
    >
      {/* Subtle Glass Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
        aria-hidden="true"
      />

      {/* =====================================================
          HERO LABEL
      ====================================================== */}

      <div
        className="
          mb-8
          inline-flex
          rounded-full
          border
          border-white/20
          bg-white/[0.06]
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

      {/* =====================================================
          HERO TITLE
      ====================================================== */}

      {/*
      <h1
        data-hero-title
        className="
          max-w-[620px]
          text-[3.2rem]
          font-light
          leading-[0.88]
          tracking-[-0.06em]
          text-white
          sm:text-[4.2rem]
          md:text-[5.6rem]
          lg:text-[7rem]
          xl:text-[8rem]
        "
      >
        Crafting
        <br />
        Spaces
        <br />
        That Feel Like
        <br />
        Home
      </h1>
      */}

      {/* =====================================================
          HERO DESCRIPTION
      ====================================================== */}

      <p
        data-hero-description
        className="
          max-w-xl
          text-sm
          leading-7
          text-white/75
          sm:text-base
          sm:leading-8
          md:text-lg
        "
      >
        Thoughtfully designed interiors that bring together architecture,
        comfort and timeless elegance.
      </p>

      {/* =====================================================
          HERO CTA
      ====================================================== */}

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
            hover:shadow-2xl
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Explore Projects

          <span
            aria-hidden="true"
            className="
              inline-block
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>
      </div>

      {/* =====================================================
          BOTTOM GLASS DETAIL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
        aria-hidden="true"
      />
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
