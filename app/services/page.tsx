"use client";

import {
  motion,
  type Variants,
} from "motion/react";

import Navbar from "../components/Navbar";

const MAGENTA = "#E41B76";
const DARK = "#111318";
const MUTED = "#555A65";
const BORDER = "#E4E6EB";

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

function SectionLabel({ children }: { children: React.ReactNode }) {
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

const serviceGroups = [
  {
    number: "01",
    title: "Road Construction",
    description:
      "Construction of road infrastructure using bitumen and concrete construction methods.",
    items: [
      "Bitumen Road",
      "Concrete Road",
    ],
  },
  {
    number: "02",
    title: "Building Construction",
    description:
      "Construction capabilities covering residential, commercial and related building works.",
    items: [
      "Residential Buildings",
      "Commercial Buildings",
    ],
  },
  {
    number: "03",
    title: "Industrial Construction",
    description:
      "Construction and development of industrial structures and supporting facilities.",
    items: [
      "Factory Sheds",
    ],
  },
  {
    number: "04",
    title: "Earthwork & Excavation",
    description:
      "Earthwork and excavation operations supporting infrastructure and land development projects.",
    items: [
      "Earthwork",
      "Excavation",
      "Land Development",
    ],
  },
  {
    number: "05",
    title: "Asphalt & Bitumen",
    description:
      "Asphalt production capabilities supporting road construction and surfacing requirements.",
    items: [
      "Carpet",
      "BM",
      "BC",
    ],
  },
  {
    number: "06",
    title: "RMC & Aggregate",
    description:
      "Production and processing infrastructure for concrete and construction aggregates.",
    items: [
      "RMC - All Grades of Concrete",
      "Crushed Aggregate Material",
      "Wash Sand",
    ],
  },
  {
    number: "07",
    title: "Bridge Construction",
    description:
      "Construction of minor bridges across varying spans as part of civil infrastructure works.",
    items: [
      "Minor Bridges",
      "All Span Requirements",
    ],
  },
  {
    number: "08",
    title: "Drainage Work",
    description:
      "Drainage and associated civil works supporting road and infrastructure projects.",
    items: [
      "Drainage Works",
    ],
  },
  {
    number: "09",
    title: "Warehouse Construction",
    description:
      "Construction of warehouse and supporting industrial storage structures.",
    items: [
      "Warehouse Construction",
    ],
  },
];

const governmentContracts = [
  "PWD",
  "PMGSY",
  "MIDC",
  "Nagarpanchayat",
  "Zillah Parishad",
  "MMB",
];

export default function ServicesPage() {
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
            <div className="absolute left-[18%] top-0 h-full w-px bg-white" />
            <div className="absolute left-[50%] top-0 h-full w-px bg-white" />
            <div className="absolute right-[18%] top-0 h-full w-px bg-white" />
          </div>

          <div className="absolute right-[-20%] top-[-40%] h-[800px] w-[800px] rounded-full border border-white/10" />

          <div className="relative mx-auto flex min-h-[70svh] max-w-[1500px] flex-col justify-end px-6 pb-16 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slowReveal}
            >
              <SectionLabel>Our Capabilities</SectionLabel>

              <h1 className="max-w-6xl text-6xl font-bold uppercase leading-[0.87] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
                Built for
                <br />
                <span style={{ color: MAGENTA }}>
                  infrastructure.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                From roads and bridges to buildings, earthwork, asphalt,
                aggregates and concrete operations, YASH CONSTRUCTION
                provides a broad range of construction capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <div>
                <SectionLabel>What We Do</SectionLabel>

                <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                  Construction
                  <br />
                  from the
                  <br />
                  <span style={{ color: MAGENTA }}>
                    ground up.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-[#555A65] md:text-xl">
                  Our capabilities extend across transportation
                  infrastructure, buildings, industrial structures and
                  supporting civil works.
                </p>

                <p className="mt-7 text-lg leading-8 text-[#555A65] md:text-xl">
                  The company also operates supporting production and
                  processing facilities including asphalt, crusher and RMC
                  plants, allowing construction activities to be supported
                  by dedicated material and equipment resources.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            SERVICE LIST
        ===================================================== */}
        <section className="bg-[#111318] px-6 py-24 text-white sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="mb-16">
                <SectionLabel>Services</SectionLabel>

                <h2 className="max-w-4xl text-5xl font-bold uppercase leading-[0.88] sm:text-6xl md:text-8xl">
                  What we
                  <br />
                  <span style={{ color: MAGENTA }}>
                    deliver.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="border-t border-white/10">
              {serviceGroups.map((service, index) => (
                <motion.article
                  key={service.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group grid border-b border-white/10 py-10 md:grid-cols-[80px_1fr_0.8fr] md:gap-12 md:py-14"
                >
                  {/* NUMBER */}
                  <div>
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: MAGENTA }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* TITLE + DESCRIPTION */}
                  <div>
                    <h3 className="text-3xl font-bold uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-[#E41B76] sm:text-4xl md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* ITEMS */}
                  <div className="mt-7 md:mt-0">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Scope
                    </span>

                    <div className="mt-4 space-y-3">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm font-medium uppercase"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0"
                            style={{ backgroundColor: MAGENTA }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTION CAPABILITIES
        ===================================================== */}
        <section className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <SectionLabel>Production Capability</SectionLabel>

                  <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                    Supporting
                    <br />
                    <span style={{ color: MAGENTA }}>
                      infrastructure.
                    </span>
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-7 text-[#555A65]">
                  Construction operations are supported by asphalt,
                  aggregate processing, quarry and ready-mix concrete
                  capabilities.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px bg-[#E4E6EB] md:grid-cols-2">
              {[
                {
                  title: "Asphalt Plant",
                  spec: "120 DM",
                  description:
                    "Production of asphalt materials including Carpet, BM and BC.",
                },
                {
                  title: "Crusher Plant",
                  spec: "Multiple Configurations",
                  description:
                    "Crushed aggregate material and wash sand production.",
                },
                {
                  title: "RMC Plant",
                  spec: "30 Cum",
                  description:
                    "Ready-mix concrete production across all grades of concrete.",
                },
                {
                  title: "Quarry",
                  spec: "Waghangaon",
                  description:
                    "Quarry operations supporting construction material requirements.",
                },
              ].map((plant, index) => (
                <motion.div
                  key={plant.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-white p-8 sm:p-10 md:p-12"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: MAGENTA }}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="font-mono text-[9px] uppercase tracking-[0.15em]"
                      style={{ color: MAGENTA }}
                    >
                      {plant.spec}
                    </span>
                  </div>

                  <h3 className="mt-14 text-3xl font-bold uppercase sm:text-4xl">
                    {plant.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#555A65]">
                    {plant.description}
                  </p>

                  <div
                    className="mt-8 h-[2px] w-10 transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: MAGENTA }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GOVERNMENT CONTRACTS
        ===================================================== */}
        <section className="bg-[#F7F7F8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <SectionLabel>Government Contracts</SectionLabel>

                  <h2 className="text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                    Public
                    <br />
                    infrastructure.
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl text-base leading-7 text-[#555A65]">
                    The supplied company requirements identify the following
                    government and public-sector contracting areas.
                  </p>

                  <div className="mt-10 grid border-t border-[#E4E6EB] sm:grid-cols-2">
                    {governmentContracts.map((client, index) => (
                      <motion.div
                        key={client}
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
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.06,
                        }}
                        className="flex items-center justify-between border-b border-[#E4E6EB] py-5 sm:px-4"
                      >
                        <span className="text-lg font-bold uppercase">
                          {client}
                        </span>

                        <span
                          className="font-mono text-[10px]"
                          style={{ color: MAGENTA }}
                        >
                          0{index + 1}
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
            CAPABILITY STRIP
        ===================================================== */}
        <section className="border-y border-[#E4E6EB] bg-white px-6 py-20 sm:px-10 md:px-16 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
              {[
                ["42+", "Years Experience"],
                ["1,500+", "Projects"],
                ["100+", "Employees"],
                ["20+", "Clients"],
              ].map(([number, label], index) => (
                <Reveal key={label} delay={index * 0.08}>
                  <div
                    className={`${
                      index > 0
                        ? "border-l border-[#E4E6EB] pl-5 sm:pl-8"
                        : ""
                    }`}
                  >
                    <span
                      className="block text-4xl font-bold sm:text-5xl"
                      style={{ color: MAGENTA }}
                    >
                      {number}
                    </span>

                    <span className="mt-2 block font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#555A65]">
                      {label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
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
                  projects.
                </span>
              </h2>

              <a
                href="/projects"
                className="inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#E41B76] hover:bg-[#E41B76]"
              >
                View Projects
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}