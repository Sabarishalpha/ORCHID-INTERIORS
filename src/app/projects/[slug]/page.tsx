import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROJECTS } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Orchid Interiors` : "Project | Orchid Interiors",
    description: project
      ? `${project.category} interiors by Orchid Interiors in ${project.location}.`
      : "Selected work by Orchid Interiors.",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return null;

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 pt-24">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-16 lg:py-24">
          <Link
            href="/projects"
            className="mb-12 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-stone-600 uppercase transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] text-stone-500 uppercase">
                {project.category} / {project.location}
              </p>
              <h1 className="max-w-xl text-5xl leading-[1.05] font-light text-black sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-stone-700">
                A considered {project.category.toLowerCase()} interior shaped around atmosphere, materiality and the everyday experience of the space.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 bg-black px-7 py-3.5 text-sm text-white transition-colors hover:bg-stone-800"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
              <Image
                src={project.image}
                alt={`${project.title}, ${project.location}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-stone-300 bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs tracking-[0.25em] text-stone-500 uppercase">PROJECT NOTES</p>
              <h2 className="mt-4 text-3xl font-light text-black">A space with its own point of view.</h2>
            </div>
            <p className="text-sm leading-7 text-stone-700">
              Every decision is made to bring the architecture, the brief and the people who use it into quiet alignment.
            </p>
            <p className="text-sm leading-7 text-stone-700">
              From the larger composition to the smallest finish, the result is personal, functional and made to last.
            </p>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="bg-stone-50 px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-4 text-xs tracking-[0.28em] text-stone-500 uppercase">PROJECT JOURNAL</p>
                  <h2 className="text-3xl font-light text-black sm:text-4xl">The Willow Residence, in detail.</h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-stone-600">
                  A visual study of the materials, rooms and considered details behind this Coimbatore residence.
                </p>
              </div>

              {project.video && (
                <video
                  className="mb-5 aspect-video w-full object-cover bg-black"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={project.image}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden bg-stone-200 ${index === 0 ? "col-span-2 aspect-[2/1] md:col-span-2" : "aspect-[4/5]"}`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} detail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}