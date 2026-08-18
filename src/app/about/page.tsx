import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const storyTimeline = [
  { year: "2014", title: "Studio founded", text: "Orchid Interiors began with a simple philosophy: design spaces that feel personal, warm and enduring." },
  { year: "2017", title: "Residential portfolio expands", text: "We grew from boutique residential projects into complete lifestyle-focused home transformations." },
  { year: "2020", title: "Commercial projects added", text: "Our expertise broadened into offices, hospitality and thoughtfully designed commercial interiors." },
  { year: "2025", title: "Multi-city showroom presence", text: "We extended our design footprint with a multi-city showroom presence and a stronger nationwide identity." },
];

export const metadata: Metadata = {
  title: "About Our Interior Design Studio",
  description:
    "Meet Orchid Interiors, a thoughtful interior design studio creating refined residential and commercial spaces in Coimbatore and Tamil Nadu.",
};

const teamMembers = [
  { name: "Aarav Menon", role: "Creative Director", focus: "Concept, identity and the emotional language of each space." },
  { name: "Meera Iyer", role: "Design Lead", focus: "Material palettes, detailing and the rhythm between rooms." },
  { name: "Rohan Shah", role: "Project Director", focus: "Planning, coordination and a considered path from brief to handover." },
];

const goals = [
  { number: "01", title: "Design with purpose", text: "Create spaces that make everyday life feel calmer, more useful and more connected." },
  { number: "02", title: "Make quality visible", text: "Choose honest materials, thoughtful details and craftsmanship that rewards a closer look." },
  { number: "03", title: "Build lasting trust", text: "Keep every conversation clear and every project relationship personal from start to finish." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />

      <section className="relative w-full bg-stone-50 px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-medium tracking-[0.32em] text-stone-600 uppercase">
                OUR STORY
              </p>
              <h3 className="text-3xl font-light text-black sm:text-4xl">
                A studio shaped by thoughtful design and lasting relationships.
              </h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {storyTimeline.map((item) => (
                <div key={item.year} className="rounded-[1.75rem] border border-stone-300 bg-white p-6">
                  <p className="mb-4 text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                    {item.year}
                  </p>
                  <h4 className="mb-3 text-xl font-light text-black">{item.title}</h4>
                  <p className="text-sm leading-7 text-stone-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-stone-300 pt-16 sm:mt-28">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-xs font-medium tracking-[0.32em] text-stone-600 uppercase">
                THE TEAM
              </p>
              <h3 className="text-3xl font-light text-black sm:text-4xl">
                A small, thoughtful team with a wide point of view.
              </h3>
              <p className="mt-5 text-base leading-7 text-stone-700">
                Designers, makers and project minds working together to make every detail feel intentional.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="border-t border-black pt-5">
                  <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">{member.role}</p>
                  <h4 className="mt-4 text-2xl font-light text-black">{member.name}</h4>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{member.focus}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-24 bg-black px-6 py-12 text-white sm:px-10 lg:mt-28 lg:px-14 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.32em] text-stone-400 uppercase">
                  OUR GOALS
                </p>
                <h3 className="max-w-md text-3xl font-light sm:text-4xl">
                  Better spaces, made with intention.
                </h3>
              </div>

              <div className="divide-y divide-white/20">
                {goals.map((goal) => (
                  <div key={goal.number} className="grid gap-4 py-6 first:pt-0 sm:grid-cols-[56px_1fr]">
                    <p className="text-sm text-stone-400">{goal.number}</p>
                    <div>
                      <h4 className="text-xl font-light text-white">{goal.title}</h4>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-stone-300">{goal.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
