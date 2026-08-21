"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * ------------------------------------------
       * INITIAL STATE
       * ------------------------------------------
       */

      gsap.set(videoWrapperRef.current, {
        clipPath: "inset(12% 8% 12% 8%)",
        scale: 0.92,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        y: 50,
      });

      /*
       * ------------------------------------------
       * VIDEO REVEAL
       * ------------------------------------------
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(videoWrapperRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8"
        );

      /*
       * ------------------------------------------
       * SCROLL PARALLAX
       * ------------------------------------------
       */

      gsap.to(videoWrapperRef.current, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /*
       * ------------------------------------------
       * REFRESH SCROLLTRIGGER
       * ------------------------------------------
       */

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * ------------------------------------------
   * MUTE / UNMUTE
   * ------------------------------------------
   */

  const toggleMute = () => {
    const newMutedState = !isMuted;

    setIsMuted(newMutedState);

    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = newMutedState;
    }

    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = newMutedState;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#11100e]
        px-3
        py-20
        sm:px-5
        sm:py-24
        md:px-8
        md:py-28
        lg:px-12
        lg:py-32
        xl:px-16
      "
    >
      <div className="mx-auto max-w-[1600px]">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div
          ref={contentRef}
          className="
            mb-10
            flex
            flex-col
            justify-between
            gap-8
            md:mb-14
            md:flex-row
            md:items-end
            lg:mb-16
          "
        >
          {/* Left */}

          <div>
            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-stone-400
                sm:text-xs
              "
            >
              Behind The Design
            </p>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-light
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Where ideas become
              <br className="hidden sm:block" />
              beautiful spaces.
            </h2>
          </div>

          {/* Right */}

          <div className="max-w-sm md:pb-1 lg:max-w-md">
            <p
              className="
                text-sm
                leading-7
                text-stone-400
                sm:text-base
                sm:leading-8
              "
            >
              Discover our approach to interior design, from the first sketch
              to the final detail. Every space is thoughtfully crafted around
              the people who live in it.
            </p>
          </div>
        </div>

        {/* =====================================================
            VIDEO
        ====================================================== */}

        <div
          ref={videoWrapperRef}
          className="
            relative
            w-full
            overflow-hidden
            bg-black
            will-change-transform
          "
        >
          {/* =================================================
              DESKTOP / LAPTOP VIDEO — 16:9
          ================================================== */}

          <div className="relative hidden aspect-video w-full md:block">
            <video
              ref={desktopVideoRef}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/orchid-interiors-landscape.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Desktop Overlay */}

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* =================================================
              MOBILE VIDEO — 9:16
          ================================================== */}

          <div className="relative block aspect-[9/16] w-full md:hidden">
            <video
              ref={mobileVideoRef}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/orchid-interiors-landscape.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Mobile Overlay */}

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* =================================================
              VIDEO LABEL
          ================================================== */}

          <div
            className="
              absolute
              left-5
              top-5
              z-10
              sm:left-7
              sm:top-7
              md:left-8
              md:top-8
              lg:left-10
              lg:top-10
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/30
                bg-black/20
                px-4
                py-2
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white
                backdrop-blur-md
                sm:text-[10px]
              "
            >
              Orchid Interiors
            </span>
          </div>

          {/* =================================================
              MUTE BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/20
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white
              hover:bg-white
              hover:text-black
              sm:right-7
              sm:top-7
              md:right-8
              md:top-8
              lg:right-10
              lg:top-10
            "
          >
            {isMuted ? (
              <VolumeX size={15} strokeWidth={1.4} />
            ) : (
              <Volume2 size={15} strokeWidth={1.4} />
            )}
          </button>

          {/* =================================================
              BOTTOM CONTENT
          ================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-10
              flex
              items-end
              justify-between
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
              px-5
              pb-5
              pt-20
              sm:px-7
              sm:pb-7
              md:px-8
              md:pb-8
              lg:px-10
              lg:pb-10
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/60
                  sm:text-[10px]
                "
              >
                Design · Craft · Detail
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  font-light
                  text-white
                  sm:text-base
                  md:text-lg
                "
              >
                Every detail tells a story.
              </p>
            </div>

            {/* Decorative Arrow */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                sm:h-12
                sm:w-12
              "
            >
              <ArrowDownRight
                size={18}
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TEXT
        ====================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            justify-between
            gap-4
            sm:mt-8
            md:flex-row
            md:items-center
          "
        >
          <p
            className="
              max-w-xl
              text-xs
              leading-6
              text-stone-500
              sm:text-sm
              sm:leading-7
            "
          >
            Thoughtful materials, refined proportions and personal details come
            together to create interiors that feel uniquely yours.
          </p>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-stone-500
              sm:text-[10px]
            "
          >
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
