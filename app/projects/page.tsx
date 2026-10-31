"use client";

import Link from "next/link";
import {
  motion,
  type Variants,
} from "motion/react";

import { projects } from "../lib/projects";

const MAGENTA = "#E41B76";

// Shared pill buttons. On dark sections the primary hover turns white (a #111318 hover would vanish into the background).
const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;
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

export default function ProjectsPage() {
  return (
    <>

      <main
        className="overflow-hidden bg-white text-[#111318]"
        style={{ color: DARK }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#111318] text-white">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute left-[18%] top-0 h-full w-px bg-white" />
            <div className="absolute left-[45%] top-0 h-full w-px bg-white" />
            <div className="absolute right-[20%] top-0 h-full w-px bg-white" />
          </div>

          <div className="absolute right-[-20%] top-[-40%] h-[800px] w-[800px] rounded-full border border-white/10" />

          <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slowReveal}
            >
              <SectionLabel>Works Executed</SectionLabel>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl max-w-6xl">
                Selected
                <br />
                <span style={{ color: MAGENTA }}>
                  Projects.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                A record of construction and infrastructure works undertaken
                by YASH CONSTRUCTION.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl px-6 lg:px-10 gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div>
                <SectionLabel>Project Portfolio</SectionLabel>

                <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                  Work that
                  <br />
                  speaks
                  <br />
                  <span style={{ color: MAGENTA }}>
                    for itself.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-[#555A65] md:text-xl">
                  This section presents major projects and works executed by
                  YASH CONSTRUCTION, with project information, scope,
                  locations, clients and supporting photography.
                </p>

                <p className="mt-7 text-lg leading-8 text-[#555A65] md:text-xl">
                  Detailed project information will be published as the
                  corresponding project records and approved photographs are
                  provided.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PROJECT TABLE / LIST
        ===================================================== */}
        <section className="bg-[#111318] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <SectionLabel>Works Executed</SectionLabel>

                  <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                    Project
                    <br />
                    <span style={{ color: MAGENTA }}>
                      archive.
                    </span>
                  </h2>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  {projects.length} Projects Listed
                </div>
              </div>
            </Reveal>

            {projects.length > 0 ? (
              <div className="border-t border-white/10">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group grid gap-6 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:grid-cols-[70px_1.4fr_1fr_0.6fr_40px] md:items-center md:px-5"
                    >
                      <span
                        className="font-mono text-xs"
                        style={{ color: MAGENTA }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-xl font-black uppercase sm:text-2xl transition-colors duration-300 group-hover:text-[#E41B76]">
                          {project.name}
                        </h3>

                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/35">
                          {project.client}
                        </p>
                      </div>

                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                          Location
                        </span>

                        <span className="mt-1 block text-sm uppercase">
                          {project.location}
                        </span>
                      </div>

                      <div>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                          Year
                        </span>

                        <span className="mt-1 block text-sm">
                          {project.year}
                        </span>
                      </div>

                      <span
                        className="text-xl transition-transform duration-300 group-hover:translate-x-2"
                        style={{ color: MAGENTA }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="border-y border-white/10 py-24 text-center">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: MAGENTA }}
                  >
                    Project Archive
                  </span>

                  <h3 className="mt-6 text-4xl font-bold uppercase sm:text-5xl">
                    Project details
                    <br />
                    <span style={{ color: MAGENTA }}>
                      coming soon.
                    </span>
                  </h3>

                  <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/45">
                    Project information and approved project photographs will
                    be added here once provided by YASH CONSTRUCTION.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* =====================================================
            PROJECT DETAIL FORMAT
        ===================================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <SectionLabel>Project Details</SectionLabel>

                  <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                    Every project.
                    <br />
                    <span style={{ color: MAGENTA }}>
                      In detail.
                    </span>
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl text-base leading-7 text-[#555A65]">
                    Each project page will present the approved project
                    information in a structured format, supported by
                    high-quality project photography.
                  </p>

                  <div className="mt-10 grid grid-cols-2 border-t border-[#E4E6EB]">
                    {[
                      "Project Name",
                      "Client Name",
                      "Location",
                      "Year",
                      "Project Cost",
                      "Scope of Work",
                      "Duration",
                      "Current Status",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="border-b border-[#E4E6EB] py-5 pr-5"
                      >
                        <span
                          className="font-mono text-[9px] font-bold"
                          style={{ color: MAGENTA }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="mt-2 block text-sm font-bold uppercase">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PROJECT PHOTOGRAPHY
        ===================================================== */}
        <section className="bg-[#F7F7F8] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
                <div>
                  <SectionLabel>Project Photography</SectionLabel>

                  <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                    Built
                    <br />
                    <span style={{ color: MAGENTA }}>
                      on site.
                    </span>
                  </h2>
                </div>

                <p className="text-sm leading-7 text-[#555A65]">
                  Each project will support three to five high-quality images
                  showing the completed work, construction activity,
                  infrastructure or relevant site details.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item, index) => (
                <Reveal key={item} delay={index * 0.08}>
                  <div className="flex aspect-[4/3] items-center justify-center border border-[#E4E6EB] bg-white">
                    <div className="text-center">
                      <span
                        className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: MAGENTA }}
                      >
                        Project Image {String(item).padStart(2, "0")}
                      </span>

                      <p className="mt-3 text-xs uppercase text-[#555A65]">
                        Image to be provided
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#111318] py-20 text-white lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={slowReveal}
            className="mx-auto max-w-7xl px-6 lg:px-10"
          >
            <SectionLabel>Next</SectionLabel>

            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl max-w-4xl">
                See the
                <br />
                <span style={{ color: MAGENTA }}>
                  machinery.
                </span>
              </h2>

              <Link
                href="/machinery"
                className={btnPrimary}
              >
                View Machinery
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}