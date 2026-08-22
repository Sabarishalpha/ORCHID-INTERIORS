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

{/* Hero Content */} <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-16 pt-28 sm:px-6 md:px-10 lg:px-16"> <div className="max-w-[700px] text-left"> <h3 data-hero-label className="mb-8 text-sm font-medium tracking-[0.32em] text-white/80 sm:text-base md:text-lg" > ORCHID INTERIORS </h3> {/* <h1 data-hero-title className="max-w-[620px] text-[3.2rem] font-light leading-[0.88] tracking-[-0.06em] text-white sm:text-[4.2rem] md:text-[5.6rem] lg:text-[7rem] xl:text-[8rem]" > Crafting <br /> Spaces <br /> That Feel Like <br /> Home </h1> */} <p data-hero-description className="mt-8 max-w-xl text-sm leading-7 text-white/75 sm:text-base md:text-lg" > Thoughtfully designed interiors that bring together architecture, comfort and timeless elegance. </p> <div className="mt-10"> <Link href="/projects" data-hero-cta className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium tracking-[0.04em] text-black transition-all duration-300 hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base" > Explore Projects <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1"> → </span> </Link> </div> </div> </div>

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
