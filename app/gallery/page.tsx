"use client";

import { useState } from "react";
import SafeImage from "../components/SafeImage";
import { motion, type Variants } from "motion/react";
import {
  galleryCategories,
  galleryItems,
  galleryShotList,
  type GalleryCategory,
} from "../lib/gallery";


const reveal: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const slowReveal: Variants = {
  hidden: { opacity: 0, y: 65 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const categories = galleryCategories;

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const visibleItems =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
   
    <main className="bg-[#F5F5F3] text-[#111318]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111318] text-white">
        <motion.div
    className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40"
    initial="hidden"
    animate="visible"
    variants={slowReveal}
  >
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#E41B76]">
              Gallery
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              BUILT
              <br />
              <span className="text-[#E41B76]">IN THE FIELD.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              A visual record of YASH CONSTRUCTION&apos;s machinery,
              construction activities, plants, worksites and people behind
              the work.
            </p>
          </div>
        </motion.div>

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[40px] border-[#E41B76]/20" />
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E41B76]">
              01 / Visual Archive
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Work speaks
              <br />
              for itself.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-black/60">
            From road construction and bridge works to heavy machinery,
            processing plants and project sites, this gallery will showcase
            the physical scale of YASH CONSTRUCTION&apos;s operations across
            the region.
          </p>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-10">
          <div className="flex min-w-max">
            {(["All", ...categories] as const).map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={active === category}
                onClick={() => setActive(category)}
                className={`border-r border-black/10 px-6 py-5 text-sm font-bold uppercase tracking-wide transition-colors first:border-l ${
                  active === category
                    ? "bg-[#E41B76] text-white"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {galleryItems.length > 0 ? (
          visibleItems.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group overflow-hidden rounded-[2rem] bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={item.src}
                    alt={item.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E41B76]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <p className="rounded-[2rem] border border-black/10 bg-white px-6 py-16 text-center text-sm text-black/55">
              No photographs in this category yet.
            </p>
          )
        ) : (
          <div className="rounded-[2rem] border border-black/10 bg-white px-6 py-20 text-center sm:px-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E41B76]/10">
              <span className="text-3xl font-black text-[#E41B76]">Y</span>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#E41B76]">
              Gallery Coming Soon
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase">
              Project photographs will appear here.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55">
              Add approved high-resolution photographs of the office, team,
              machinery, construction sites, projects, plants, quarry and
              warehouse operations to populate this section.
            </p>
          </div>
        )}
      </section>

      {/* PHOTO TYPES */}
      <section className="bg-[#111318] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E41B76]">
                What belongs here
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
                The complete
                <br />
                picture.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {galleryShotList.map((item, index) => (
                <div
                  key={item}
                  className="bg-[#181A20] px-6 py-6 transition hover:bg-[#E41B76]"
                >
                  <span className="mr-4 text-xs font-bold text-[#E41B76]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <span className="font-bold uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E41B76] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Explore more
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl">
                See what we build.
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex w-fit items-center rounded-full bg-[#111318] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#111318]"
            >
              View Projects →
            </a>
          </div>
        </div>
      </section>
    </main>
     </>
  );
}