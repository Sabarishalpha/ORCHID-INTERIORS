"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "#lead-form";

const process = [
  ["01", "Discover", "We understand your space, lifestyle and vision.", "/images/about-1.jpeg"],
  ["02", "Plan", "We develop the layout, concept and design direction.", "/images/about-2.jpeg"],
  ["03", "Design", "Materials, colours, furniture and details come together.", "/images/about-3.jpeg"],
  ["04", "Execute", "Our team coordinates the execution and transformation.", "/images/about-4.jpeg"],
  ["05", "Reveal", "You step into a finished space designed around you.", "/images/about-5.jpeg"],
] as const;

const faqs = [
  [
    "How much does interior design cost?",
    "Every project is scoped around its size, requirements and level of support. We discuss the brief first, then provide a considered proposal.",
  ],
  [
    "Do you provide turnkey interior solutions?",
    "Yes. Our team can support the journey from concept and planning through procurement, coordination and final styling.",
  ],
  [
    "How long does an interior project take?",
    "Timelines depend on scope, site conditions and execution requirements. We outline the expected stages during consultation.",
  ],
  [
    "Do you work outside Coimbatore?",
    "Yes. We work across Tamil Nadu and nearby regions with trusted local coordination where needed.",
  ],
  [
    "Can you work within my budget?",
    "We begin by understanding your priorities and budget, then shape the design direction around what matters most.",
  ],
  [
    "Can I customise the design?",
    "Absolutely. Every Orchid Interiors project is developed around the people, architecture and aspirations behind it.",
  ],
  [
    "Do you handle furniture and decor?",
    "Our scope can include custom furniture, material selection, lighting direction and the details that complete a space.",
  ],
  [
    "How do I start my project?",
    "Share a few details in the form below. Our design team will contact you for a first conversation.",
  ],
] as const;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  name: "Orchid Interiors",
  description:
    "Premium residential, commercial and turnkey interior design solutions.",
  email: "hello@orchidinteriors.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: ["Coimbatore", "Tamil Nadu"],
};

function CampaignNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-transparent text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/orchid-interiors"
          aria-label="Orchid Interiors home"
          className="flex h-14 w-45 items-center px-2 py-1 sm:h-16 sm:w-55"
        >
          <Image
            src="/images/logo.png"
            alt="Orchid Interiors"
            width={220}
            height={62}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>
      </div>
    </header>
  );
}

export default function OrchidInteriorsLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const submitLead = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f4f1eb] pb-16 text-[#171715] lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <CampaignNav />

      <section
        className="relative flex min-h-180 items-end overflow-hidden bg-[#252521] text-white sm:min-h-195"
        aria-labelledby="landing-title"
      >
        <Image
          src="/images/hero-1.png"
          alt="Refined Orchid Interiors living space"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs tracking-[0.3em] text-white/70 uppercase">
              Premium Interior Design Studio
            </p>
            <h1
              id="landing-title"
              className="max-w-2xl text-5xl leading-[0.98] font-light sm:text-7xl lg:text-8xl"
            >
              Beautiful Spaces.
              <br />
              Designed Around You.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              From thoughtful design to flawless execution, Orchid Interiors
              creates refined residential and commercial interiors tailored to
              the way you live.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                id="hero-cta"
                href="#lead-form"
                className="inline-flex items-center justify-center bg-white px-6 py-4 text-sm text-black transition-colors hover:bg-[#d9d2c6]"
              >
                Get a Free Consultation <span className="ml-2">&rarr;</span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-white/70 px-6 py-4 text-sm text-white transition-colors hover:bg-white hover:text-black"
              >
                View Our Projects
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/75">
              <span>&#10003; Personalised Design</span>
              <span>&#10003; Transparent Process</span>
              <span>&#10003; End-to-End Support</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#d3cec4] bg-[#e9e3d9]"
        aria-label="Studio promises"
      >
        <div className="mx-auto grid max-w-7xl divide-y divide-[#cfc8bd] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {[
            "Designed With Purpose",
            "Built With Detail",
            "Created For You",
          ].map((item) => (
            <div
              key={item}
              className="py-5 text-center text-xs tracking-[0.2em] uppercase sm:py-7"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="bg-[#e8e2d8] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
        aria-labelledby="process-title"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-[#857d71] uppercase">
            HOW IT WORKS
          </p>
          <h2
            id="process-title"
            className="mt-5 text-4xl font-light sm:text-6xl"
          >
            A Simple Process.
            <br />
            Beautiful Results.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {process.map(([number, title, text, image]) => (
              <article key={number} className="border-t border-black/30 pt-5">
                <div className="relative mb-5 aspect-4/3 overflow-hidden bg-[#d8d1c6]">
                  <Image
                    src={image}
                    alt={`${title} stage of the Orchid Interiors process`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <p className="text-sm text-[#857d71]">{number}</p>
                <h3 className="mt-8 text-xl font-light">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#625e56]">{text}</p>
              </article>
            ))}
          </div>
          <a
            href="#lead-form"
            className="mt-12 inline-flex items-center bg-black px-6 py-4 text-sm text-white"
          >
            Start Your Project <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>

      <section
        id="lead-form"
        className="scroll-mt-10 bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12"
        aria-labelledby="form-title"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#857d71] uppercase">
              START A CONVERSATION
            </p>
            <h2
              id="form-title"
              className="mt-5 text-4xl leading-tight font-light sm:text-6xl"
            >
              Tell us what you&apos;re imagining.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#625e56]">
              Share a few details and our design team will contact you shortly.
            </p>
            <a
              id="whatsapp-cta"
              href={WHATSAPP_LINK}
              className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <p className="mt-3 max-w-xs text-xs leading-5 text-[#857d71]">
              WhatsApp number will be connected when the studio number is
              provided.
            </p>
          </div>
          {submitted ? (
            <div className="flex min-h-107.5 flex-col justify-center border border-[#c9c2b8] bg-[#f4f1eb] p-7 sm:p-10">
              <Check className="h-7 w-7" />
              <h3 className="mt-6 text-3xl font-light">Thank You!</h3>
              <p className="mt-4 text-base leading-7 text-[#625e56]">
                Your project details are ready for the Orchid Interiors team.
              </p>
              <p className="mt-2 text-base leading-7 text-[#625e56]">
                Connect the enquiry API before launch to send this request to your team.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submitLead}
              className="border border-[#c9c2b8] bg-[#f4f1eb] p-6 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm">
                  Name *
                  <input
                    required
                    name="name"
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none focus:border-black"
                  />
                </label>
                <label className="text-sm">
                  Phone *
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none focus:border-black"
                  />
                </label>
                <label className="text-sm">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none focus:border-black"
                  />
                </label>
                <label className="text-sm">
                  Project Type *
                  <select
                    required
                    name="projectType"
                    defaultValue=""
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {[
                      "Home Interior",
                      "Villa",
                      "Apartment",
                      "Office",
                      "Retail",
                      "Commercial",
                      "Renovation",
                      "Other",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm sm:col-span-2">
                  Project Location *
                  <input
                    required
                    name="location"
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none focus:border-black"
                    placeholder="City / location"
                  />
                </label>
                <label className="text-sm">
                  Approximate Budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="mt-2 w-full border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none"
                  >
                    <option value="">Not sure</option>
                    {[
                      "Under ₹5 Lakhs",
                      "₹5-10 Lakhs",
                      "₹10-25 Lakhs",
                      "₹25-50 Lakhs",
                      "₹50 Lakhs+",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm">
                  Message
                  <textarea
                    required
                    minLength={20}
                    name="message"
                    rows={2}
                    className="mt-2 w-full resize-none border-b border-[#aaa298] bg-transparent px-0 py-3 outline-none focus:border-black"
                    placeholder="Tell us a little about your project"
                  />
                </label>
              </div>
              <button
                id="lead-submit"
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-sm text-white transition-colors hover:bg-[#393934]"
              >
                Get My Free Consultation <span className="ml-2">&rarr;</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <section
        className="bg-[#f4f1eb] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
        aria-labelledby="faq-title"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs tracking-[0.25em] text-[#857d71] uppercase">
            QUESTIONS, ANSWERED
          </p>
          <h2
            id="faq-title"
            className="mt-5 text-center text-4xl font-light sm:text-6xl"
          >
            Before we begin.
          </h2>
          <div className="mt-12 divide-y divide-[#c9c2b8] border-y border-[#c9c2b8]">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-base"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-[#625e56]">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#171715] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm tracking-[0.28em] uppercase">
              Orchid Interiors
            </p>
            <p className="mt-5 text-sm text-white/55">
              Interior Design <span className="mx-1">&bull;</span> Turnkey
              Interiors
            </p>
          </div>
          <div>
            <p className="text-sm text-white/75">
              Coimbatore, Tamil Nadu, India
            </p>
            <a
              href="mailto:hello@orchidinteriors.com"
              className="mt-3 block text-sm text-white/55 hover:text-white"
            >
              hello@orchidinteriors.com
            </a>
            <p className="mt-3 text-sm text-white/55">+91 XXXXX XXXXX</p>
          </div>
          <div className="flex gap-5 text-sm text-white/65">
            <a href="#lead-form">Instagram</a>
            <a href="#lead-form">Facebook</a>
            <a href="#lead-form">Pinterest</a>
            <a href="#lead-form">LinkedIn</a>
          </div>
          <div className="text-sm text-white/45 lg:text-right">
            &copy; 2026 Orchid Interiors.
            <br />
            All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-black/20 bg-[#171715] text-sm text-white lg:hidden">
        <a
          id="mobile-whatsapp-cta"
          href={WHATSAPP_LINK}
          className="flex items-center justify-center gap-2 border-r border-white/20 py-4"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          id="mobile-consultation-cta"
          href="#lead-form"
          className="flex items-center justify-center bg-white py-4 text-black"
        >
          Get Free Consultation
        </a>
      </div>
    </main>
  );
}
