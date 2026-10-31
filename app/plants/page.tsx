"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { plants as plantsData, plantSite, getPlantSpecification } from "../lib/plants";

const MAGENTA = "#E41B76";

// Shared pill buttons. On dark sections the primary hover turns white (a #111318 hover would vanish into the background).
const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;
const DARK = "#111318";
const LIGHT = "#F5F5F3";

const plants = plantsData.map((pl, i) => ({
  number: String(i + 1).padStart(2, "0"),
  name: pl.name,
  type: pl.type,
  capacity: getPlantSpecification(pl),
  location: pl.location,
  image: pl.image,
  description: pl.description,
}));

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

export default function PlantsPage() {
//   const shouldReduceMotion = useReducedMotion();

  return (
    <>
    <div className="bg-[#111318] text-white">

      {/* HERO */}
<section className="relative min-h-[75vh] overflow-hidden flex items-end">

  <div className="absolute inset-0 z-0">
    <Image
      src="/images/plants/plants-hero.jpg"
      alt="YASH CONSTRUCTION plant infrastructure"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/55" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-black/30 to-black/10" />
  </div>

  <motion.div
    className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10 lg:pt-40"
    initial="hidden"
    animate="visible"
    variants={slowReveal}
  >

    <p
      className="text-sm tracking-[0.35em] uppercase mb-5"
      style={{ color: MAGENTA }}
    >
      Infrastructure
    </p>

    <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
      PLANTS
    </h1>

    <p className="mt-8 max-w-xl text-white/70 text-lg md:text-xl leading-relaxed">
      Production and material infrastructure supporting YASH
      CONSTRUCTION&apos;s construction operations.
    </p>

  </motion.div>
</section>

      {/* INTRO */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4">
              <p
                className="text-sm tracking-[0.3em] uppercase font-semibold"
                style={{ color: MAGENTA }}
              >
                01 / Infrastructure
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                BUILT AROUND
                <br />
                THE WORK.
              </h2>

              <p className="mt-8 max-w-2xl text-lg md:text-xl text-black/60 leading-relaxed">
                YASH CONSTRUCTION maintains plant and material infrastructure
                at {plantSite.full}. These
                facilities form part of the company's construction resources
                across road, concrete and material-related works.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PLANTS */}
      <section className="bg-[#111318] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: MAGENTA }}
            >
              Our Facilities
            </p>

            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
              PLANT
              <br />
              INFRASTRUCTURE
            </h2>
          </div>

          <div className="space-y-24">
            {plants.map((plant, index) => (
              <motion.article
  className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
  key={plant.name}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={reveal}
              >

                {/* IMAGE */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-white/5">

                    <Image
                      src={plant.image}
                      alt={plant.name}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />

                    <div className="absolute top-5 left-5 bg-[#111318] px-4 py-2">
                      <span
                        className="text-sm font-bold"
                        style={{ color: MAGENTA }}
                      >
                        {plant.number}
                      </span>
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >

                  <p
                    className="text-xs tracking-[0.25em] uppercase mb-4"
                    style={{ color: MAGENTA }}
                  >
                    {plant.type}
                  </p>

                  <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                    {plant.name}
                  </h3>

                  <div className="mt-8 border-t border-white/15 pt-6 space-y-5">

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Capacity / Specification
                      </p>

                      <p className="mt-2 text-lg font-medium">
                        {plant.capacity}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Location
                      </p>

                      <p className="mt-2 text-white/70 leading-relaxed">
                        {plant.location}
                      </p>
                    </div>

                  </div>

                  <p className="mt-7 text-white/55 leading-relaxed">
                    {plant.description}
                  </p>

                </div>

              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p
                className="text-sm tracking-[0.3em] uppercase mb-4"
                style={{ color: MAGENTA }}
              >
                Plant Location
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                {plantSite.name}
              </h2>

              <p className="mt-6 text-black/60 max-w-xl leading-relaxed">
                {plantSite.taluka}, {plantSite.district}, {plantSite.state}.
              </p>

            </div>

            <div className="border-l-2 pl-8 md:pl-12" style={{ borderColor: MAGENTA }}>
              <p className="text-5xl md:text-7xl font-black">
                {String(plants.length).padStart(2, "0")}
              </p>

              <p className="mt-2 uppercase tracking-[0.2em] text-sm text-black/50">
                Listed Facilities
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#111318] py-20 lg:py-28 overflow-hidden">

        <div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: MAGENTA }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <p
            className="text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            Explore More
          </p>

          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl max-w-4xl">
            FROM PLANT
            <br />
            TO PROJECT.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/machinery"
              className={btnPrimary}
            >
              View Machinery →
            </Link>

            <Link
              href="/projects"
              className={btnOutline}
            >
              View Projects →
            </Link>

          </div>

        </div>
      </section>

    </div>
    </>
  );
}