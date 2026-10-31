"use client";

import Link from "next/link";
import {
  motion,
  type Variants,
} from "motion/react";

import Navbar from "../components/Navbar";

const MAGENTA = "#E41B76";
const DARK = "#111318";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const slowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 65,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="mb-5 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
      style={{ color: MAGENTA }}
    >
      <span
        className="h-[2px] w-8"
        style={{ backgroundColor: MAGENTA }}
      />
      {children}
    </div>
  );
}

const machinery = [
  {
    number: "01",
    name: "Excavator / Poclain",
    quantity: "04",
    specification: "100 M3 / Hour",
    image: "/images/machinery/excavator.jpg",
  },
  {
    number: "02",
    name: "JCB",
    quantity: "03",
    specification: "3DX",
    image: "/images/machinery/jcb.jpg",
  },
  {
    number: "03",
    name: "Paver",
    quantity: "04",
    specification: "54.5 BHP",
    image: "/images/machinery/paver.jpg",
  },
  {
    number: "04",
    name: "Roller",
    quantity: "04",
    specification: "Standard",
    image: "/images/machinery/roller.jpg",
  },
  {
    number: "05",
    name: "Grader",
    quantity: "01",
    specification: "Standard",
    image: "/images/machinery/grader.jpg",
  },
  {
    number: "06",
    name: "Dumper",
    quantity: "15",
    specification: "3 Brass",
    image: "/images/machinery/dumper.jpg",
  },
  {
    number: "07",
    name: "Asphalt Plant",
    quantity: "01",
    specification: "120 DM",
    image: "/images/machinery/asphalt-plant.jpg",
  },
  {
    number: "08",
    name: "Crusher Plant",
    quantity: "04",
    specification:
      "24X12 · 16X6 · 42X32 · V-Groove · NVI760 · NRI-1005",
    image: "/images/machinery/crusher-plant.jpg",
  },
  {
    number: "09",
    name: "RMC Plant",
    quantity: "01",
    specification: "30 Cum",
    image: "/images/machinery/rmc-plant.jpg",
  },
  {
    number: "10",
    name: "Loader",
    quantity: "01",
    specification: "2021D - Standard",
    image: "/images/machinery/loader.jpg",
  },
  {
    number: "11",
    name: "Sand Washing Plant",
    quantity: "01",
    specification: "100 TPH",
    image: "/images/machinery/sand-washing-plant.jpg",
  },
  {
    number: "12",
    name: "Water Tanker",
    quantity: "02",
    specification: "4.5 MT",
    image: "/images/machinery/water-tanker.jpg",
  },
  {
    number: "13",
    name: "Bitumen Sprayer (Bozar)",
    quantity: "04",
    specification: "8.7 MT · 6 MT · 4.5 MT",
    image: "/images/machinery/bitumen-sprayer.jpg",
  },
  {
    number: "14",
    name: "Diesel Tanker",
    quantity: "01",
    specification: "Standard",
    image: "/images/machinery/diesel-tanker.jpg",
  },
  {
    number: "15",
    name: "Ajax Concrete Machine",
    quantity: "01",
    specification: "Standard",
    image: "/images/machinery/ajax-concrete-machine.jpg",
  },
  {
    number: "16",
    name: "Trailer",
    quantity: "02",
    specification: "Standard",
    image: "/images/machinery/trailer.jpg",
  },
];

export default function MachineryPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main
        className="overflow-hidden bg-white text-[#111318]"
        style={{ color: DARK }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#111318] pt-20 text-white">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute left-[15%] top-0 h-full w-px bg-white" />
            <div className="absolute left-[40%] top-0 h-full w-px bg-white" />
            <div className="absolute right-[20%] top-0 h-full w-px bg-white" />
          </div>

          <div className="absolute right-[-18%] top-[-40%] h-[800px] w-[800px] rounded-full border border-white/10" />

          <div className="relative mx-auto flex min-h-[70svh] max-w-[1500px] flex-col justify-end px-6 pb-16 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slowReveal}
            >
              <SectionLabel>Our Assets</SectionLabel>

              <h1 className="max-w-6xl text-6xl font-bold uppercase leading-[0.87] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
                Equipment
                <br />
                <span style={{ color: MAGENTA }}>
                  that works.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                A dedicated fleet of construction machinery and supporting
                equipment used across YASH CONSTRUCTION operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
            <Reveal>
              <div>
                <SectionLabel>Construction Assets</SectionLabel>

                <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                  Capability
                  <br />
                  backed by
                  <br />
                  <span style={{ color: MAGENTA }}>
                    equipment.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-[#555A65] md:text-xl">
                  YASH CONSTRUCTION maintains a range of construction
                  machinery and supporting equipment covering excavation,
                  earthwork, road construction, material handling, concrete
                  production and site operations.
                </p>

                <p className="mt-7 text-lg leading-8 text-[#555A65] md:text-xl">
                  The asset list includes excavators, JCB machines, pavers,
                  rollers, graders, dumpers, asphalt and RMC plants, crusher
                  and sand washing facilities, tankers and other supporting
                  equipment.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            ASSET GRID
        ===================================================== */}
        <section className="bg-[#111318] px-6 py-24 text-white sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <SectionLabel>Machinery Fleet</SectionLabel>

                  <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                    Our
                    <br />
                    <span style={{ color: MAGENTA }}>
                      assets.
                    </span>
                  </h2>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  16 Asset Categories
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {machinery.map((machine, index) => (
                <motion.article
                  key={machine.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: (index % 4) * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-[#191B20]"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-[#26282E]">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* NUMBER */}
                    <span
                      className="absolute left-0 top-0 px-4 py-3 font-mono text-[10px] font-bold text-white"
                      style={{ backgroundColor: MAGENTA }}
                    >
                      {machine.number}
                    </span>

                    {/* QUANTITY */}
                    <div className="absolute bottom-4 right-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">
                        Quantity
                      </span>

                      <span className="mt-1 block text-3xl font-bold leading-none">
                        {machine.quantity}
                      </span>
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase leading-tight">
                      {machine.name}
                    </h3>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
                        Capacity / Specification
                      </span>

                      <p
                        className="mt-2 text-xs font-semibold uppercase leading-5"
                        style={{ color: MAGENTA }}
                      >
                        {machine.specification}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EQUIPMENT BREAKDOWN
        ===================================================== */}
        <section className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <SectionLabel>Fleet Overview</SectionLabel>

                  <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                    The numbers
                    <br />
                    behind the
                    <br />
                    <span style={{ color: MAGENTA }}>
                      fleet.
                    </span>
                  </h2>
                </div>

                <div>
                  <div className="grid grid-cols-2 border-t border-[#E4E6EB]">
                    {[
                      ["04", "Excavators / Poclain"],
                      ["03", "JCB"],
                      ["04", "Pavers"],
                      ["04", "Rollers"],
                      ["01", "Grader"],
                      ["15", "Dumpers"],
                      ["01", "Asphalt Plant"],
                      ["04", "Crusher Plant"],
                      ["01", "RMC Plant"],
                      ["01", "Loader"],
                      ["01", "Sand Washing Plant"],
                      ["02", "Water Tankers"],
                      ["04", "Bitumen Sprayers"],
                      ["01", "Diesel Tanker"],
                      ["01", "Ajax Concrete Machine"],
                      ["02", "Trailers"],
                    ].map(([number, name], index) => (
                      <motion.div
                        key={name}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.15,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: (index % 4) * 0.05,
                        }}
                        className="border-b border-[#E4E6EB] py-5 pr-5 sm:py-6 sm:pr-8"
                      >
                        <span
                          className="text-3xl font-bold"
                          style={{ color: MAGENTA }}
                        >
                          {number}
                        </span>

                        <span className="mt-2 block text-xs font-bold uppercase leading-5">
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PLANTS CTA
        ===================================================== */}
        <section className="bg-[#F7F7F8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
            <Reveal>
              <div>
                <SectionLabel>Plant Infrastructure</SectionLabel>

                <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                  More than
                  <br />
                  <span style={{ color: MAGENTA }}>
                    machinery.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-7 text-[#555A65]">
                  The company's infrastructure also includes asphalt, crusher,
                  RMC and quarry operations at Waghangaon, Tal-Lanja,
                  Ratnagiri, Maharashtra.
                </p>

                <Link
                  href="/plants"
                  className="mt-8 inline-flex items-center gap-4 border-b-2 pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ borderColor: MAGENTA }}
                >
                  Explore Plants
                  <span style={{ color: MAGENTA }}>→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">
                <div
                  className="relative aspect-square overflow-hidden bg-[#DCDDE1]"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
                  }}
                >
                  <img
                    src="/images/plants/asphalt-plant.jpg"
                    alt="YASH CONSTRUCTION plant infrastructure"
                    className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div
                  className="absolute -bottom-5 -right-5 px-6 py-5 text-white"
                  style={{ backgroundColor: MAGENTA }}
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                    Location
                  </span>

                  <span className="mt-1 block text-sm font-bold uppercase">
                    Waghangaon
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#111318] px-6 py-24 text-white sm:px-10 md:px-16 md:py-32 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={slowReveal}
            className="mx-auto max-w-[1400px]"
          >
            <SectionLabel>Next</SectionLabel>

            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-4xl text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-8xl">
                Explore our
                <br />
                <span style={{ color: MAGENTA }}>
                  plants.
                </span>
              </h2>

              <Link
                href="/plants"
                className="inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#E41B76] hover:bg-[#E41B76]"
              >
                View Plants
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}