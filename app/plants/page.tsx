"use client";

import Link from "next/link";
import { motion } from "motion/react";
   import Navbar from "../components/Navbar";

const MAGENTA = "#E41B76";
const DARK = "#111318";
const LIGHT = "#F5F5F3";

const plants = [
  {
    number: "01",
    name: "Asphalt Plant",
    type: "Production Facility",
    capacity: "120 DM",
    location: "Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra",
    image: "/images/plants/asphalt-plant.jpg",
    description:
      "YASH CONSTRUCTION operates an asphalt plant at Waghangaon, Tal-Lanja, Dist-Ratnagiri, supporting its road construction and asphalt-related works.",
  },
  {
    number: "02",
    name: "Crusher Plant",
    type: "Aggregate Processing",
    capacity:
      "24X12 · 16X6 · 42X32 · V-Groove · NVI760 · NRI-1005",
    location: "Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra",
    image: "/images/plants/crusher-plant.jpg",
    description:
      "The crusher plant at Waghangaon supports the production and processing of crushed aggregate materials used across construction activities.",
  },
  {
    number: "03",
    name: "Quarry",
    type: "Material Source",
    capacity: "Standard capacity",
    location: "Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra",
    image: "/images/plants/quarry.jpg",
    description:
      "YASH CONSTRUCTION's quarry operation at Waghangaon forms part of its material and infrastructure resources.",
  },
  {
    number: "04",
    name: "RMC Plant",
    type: "Concrete Production",
    capacity: "30 Cum",
    location: "Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra",
    image: "/images/plants/rmc-plant.jpg",
    description:
      "The RMC plant provides concrete production capability as part of YASH CONSTRUCTION's construction infrastructure.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PlantsPage() {
//   const shouldReduceMotion = useReducedMotion();

  return (
    <>
    {/* <Navbar /> */}
    <div className="bg-[#111318] text-white">

      {/* HERO */}
<section className="relative min-h-[75vh] overflow-hidden flex items-end">

  <div className="absolute inset-0 z-0">
    <img
      src="/images/plants/plants-hero.jpg"
      alt="YASH CONSTRUCTION plant infrastructure"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/55" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-black/30 to-black/10" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-20">

    <p
      className="text-sm tracking-[0.35em] uppercase mb-5"
      style={{ color: MAGENTA }}
    >
      Infrastructure
    </p>

    <h1 className="text-[clamp(4rem,11vw,10rem)] leading-[0.8] font-black uppercase tracking-[-0.06em]">
      PLANTS
    </h1>

    <p className="mt-8 max-w-xl text-white/70 text-lg md:text-xl leading-relaxed">
      Production and material infrastructure supporting YASH
      CONSTRUCTION&apos;s construction operations.
    </p>

  </div>
</section>

      {/* INTRO */}
      <section className="bg-[#F5F5F3] text-[#111318] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

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
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                BUILT AROUND
                <br />
                THE WORK.
              </h2>

              <p className="mt-8 max-w-2xl text-lg md:text-xl text-black/60 leading-relaxed">
                YASH CONSTRUCTION maintains plant and material infrastructure
                at Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra. These
                facilities form part of the company's construction resources
                across road, concrete and material-related works.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PLANTS */}
      <section className="bg-[#111318] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: MAGENTA }}
            >
              Our Facilities
            </p>

            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight">
              PLANT
              <br />
              INFRASTRUCTURE
            </h2>
          </div>

          <div className="space-y-24">
            {plants.map((plant, index) => (
              <motion.article
  key={plant.name}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
              >

                {/* IMAGE */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">

                    <img
                      src={plant.image}
                      alt={plant.name}
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
      <section className="bg-[#F5F5F3] text-[#111318] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p
                className="text-sm tracking-[0.3em] uppercase mb-4"
                style={{ color: MAGENTA }}
              >
                Plant Location
              </p>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]">
                WAGHANGAON
              </h2>

              <p className="mt-6 text-black/60 max-w-xl leading-relaxed">
                Tal-Lanja, Dist-Ratnagiri, Maharashtra.
              </p>
            </div>

            <div className="border-l-2 pl-8 md:pl-12" style={{ borderColor: MAGENTA }}>
              <p className="text-5xl md:text-7xl font-black">
                04
              </p>

              <p className="mt-2 uppercase tracking-[0.2em] text-sm text-black/50">
                Listed Facilities
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#111318] py-28 overflow-hidden">

        <div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: MAGENTA }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <p
            className="text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            Explore More
          </p>

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.85] max-w-4xl">
            FROM PLANT
            <br />
            TO PROJECT.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/machinery"
              className="inline-flex items-center justify-center px-7 py-4 bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              View Machinery
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-7 py-4 border border-white/25 text-white font-semibold hover:border-white transition"
            >
              View Projects
            </Link>

          </div>

        </div>
      </section>

    </div>
    </>
  );
}