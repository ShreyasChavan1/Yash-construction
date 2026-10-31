"use client";

import {
  motion,
  type Variants,
} from "motion/react";
import { company } from "../lib/company";


const MAGENTA = "#E41B76";

// Shared pill buttons. On dark sections the primary hover turns white (a #111318 hover would vanish into the background).
const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;
const DARK = "#111318";
const MUTED = "#555A65";
const BORDER = "#E4E6EB";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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
    y: 60,
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

const values = company.coreValues.map((v, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: v.title,
  text: v.description,
}));

const projectTypes = company.projectTypes;

const partners = company.partners;

export default function AboutPage() {
  return (
    <>

      <main
        className="overflow-hidden bg-white text-[#111318] antialiased"
        style={{
          color: DARK,
        }}
      >
        {/* =====================================================
            PAGE HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#111318] text-white">
          <div className="mx-auto flex min-h-[70svh] flex-col justify-end pb-16 max-w-7xl px-6 lg:px-10 pt-32 lg:pt-40">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="absolute left-[15%] top-0 h-full w-px bg-white" />
              <div className="absolute left-[40%] top-0 h-full w-px bg-white" />
              <div className="absolute right-[20%] top-0 h-full w-px bg-white" />
            </div>

            <div className="absolute right-[-18%] top-[-35%] h-[700px] w-[700px] rounded-full border border-white/10" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slowReveal}
              className="relative z-10"
            >
              <SectionLabel>Company Profile</SectionLabel>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl max-w-6xl">
                About
                <br />
                <span style={{ color: MAGENTA }}>
                  YASH.
                </span>
              </h1>

              <div className="mt-10 flex max-w-4xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <p className="max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                  A construction and infrastructure partnership firm
                  established in {company.established}, operating across {company.areasSentence}.
                </p>

                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  EST. {company.established}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            COMPANY OVERVIEW
        ===================================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div>
                <SectionLabel>Who We Are</SectionLabel>

                <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl max-w-lg">
                  Four decades
                  <br />
                  of <span style={{ color: MAGENTA }}>execution.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="text-lg leading-8 text-[#555A65] md:text-xl">
                  YASH CONSTRUCTION is a partnership firm established in
                  {company.established} with extensive experience in construction and
                  infrastructure works. The company operates across {company.areasSentence}, undertaking
                  projects across road, bridge, residential, commercial and
                  government building sectors.
                </p>

                <p className="mt-7 text-lg leading-8 text-[#555A65] md:text-xl">
                  Over its {company.experienceYears} years of operations, the company has developed
                  capabilities across multiple stages of construction,
                  supported by its own machinery, production facilities and
                  construction resources.
                </p>

                <p className="mt-7 text-lg leading-8 text-[#555A65] md:text-xl">
                  Its project capabilities include road construction,
                  earthwork, excavation, drainage work, bridge construction,
                  building construction, asphalt production, aggregate
                  processing and ready-mix concrete operations.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            COMPANY DATA
        ===================================================== */}
        <section className="border-y border-[#E4E6EB] bg-[#F7F7F8]">
          <div className="mx-auto grid md:grid-cols-2 max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="border-b border-[#E4E6EB] p-8 sm:p-10 md:border-b-0 md:border-r md:p-16">
                <SectionLabel>Company Details</SectionLabel>

                <div className="space-y-0">
                  <div className="border-t border-[#E4E6EB] py-5">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                      Company
                    </span>
                    <span className="mt-2 block text-xl font-semibold uppercase">
                      YASH CONSTRUCTION
                    </span>
                  </div>

                  <div className="border-t border-[#E4E6EB] py-5">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                      Established
                    </span>
                    <span className="mt-2 block text-xl font-semibold">
                      {company.established}
                    </span>
                  </div>

                  <div className="border-t border-[#E4E6EB] py-5">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                      Organization
                    </span>
                    <span className="mt-2 block text-xl font-semibold">
                      {company.type}
                    </span>
                  </div>

                  <div className="border-t border-[#E4E6EB] py-5">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                      Experience
                    </span>
                    <span
                      className="mt-2 block text-xl font-semibold"
                      style={{ color: MAGENTA }}
                    >
                      {company.experienceYears} Years
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="p-8 sm:p-10 md:p-16">
                <SectionLabel>Operating Region</SectionLabel>

                <div className="flex min-h-full flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold uppercase leading-none sm:text-5xl">
                      {company.areaNames.map((name, i) => (
                        <span key={name}>
                          {i > 0 && <br />}
                          {name}
                        </span>
                      ))}
                    </h3>

                    <p className="mt-8 max-w-md text-base leading-7 text-[#555A65]">
                      The company operates across {company.areasSentence}.
                    </p>
                  </div>

                  <div className="mt-12 border-t border-[#E4E6EB] pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                      Registered Office
                    </span>

                    <p className="mt-3 text-sm font-medium uppercase leading-6">
                      YASH CONSTRUCTION
                      <br />
                      {company.location.town}, {company.location.taluka}
                      <br />
                      {company.location.district}, {company.location.state}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PROJECT TYPES
        ===================================================== */}
        <section className="bg-[#111318] py-24 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <SectionLabel>Experience</SectionLabel>

                  <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                    Built across
                    <br />
                    <span style={{ color: MAGENTA }}>
                      sectors.
                    </span>
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-7 text-white/55">
                  Construction capabilities spanning transportation
                  infrastructure, buildings and supporting civil works.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 border-t border-white/10">
              {projectTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center justify-between border-b border-white/10 py-7"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className="font-mono text-xs"
                      style={{ color: MAGENTA }}
                    >
                      0{index + 1}
                    </span>

                    <span className="text-2xl font-semibold uppercase tracking-tight transition-colors duration-300 group-hover:text-[#E41B76] sm:text-3xl md:text-4xl">
                      {type}
                    </span>
                  </div>

                  <span
                    className="text-xl opacity-30 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                    style={{ color: MAGENTA }}
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="max-w-2xl">
                <SectionLabel>Core Values</SectionLabel>

                <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                  How we
                  <br />
                  <span style={{ color: MAGENTA }}>
                    work.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid border-t border-[#E4E6EB] md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.number}
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
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group border-b border-[#E4E6EB] p-7 sm:p-10 ${
                    index === values.length - 1 && values.length % 2 === 1
                      ? "md:col-span-2"
                      : index % 2 === 0
                      ? "md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: MAGENTA }}
                    >
                      {value.number}
                    </span>

                    <span
                      className="text-2xl opacity-20 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: MAGENTA }}
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase sm:text-2xl mt-12">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#555A65]">
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNERS
        ===================================================== */}
        <section className="bg-[#F7F7F8] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <SectionLabel>Leadership</SectionLabel>

                  <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                    The
                    <br />
                    <span style={{ color: MAGENTA }}>
                      Partners.
                    </span>
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-7 text-[#555A65]">
                  YASH CONSTRUCTION is operated as a partnership firm led by
                  its partners.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.1}>
                  <article className="group overflow-hidden border border-[#E4E6EB] bg-white">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E5E7]">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                        <span
                          className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]"
                          style={{ color: MAGENTA }}
                        >
                          Partner
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-black uppercase sm:text-2xl">
                        {partner.name}
                      </h3>

                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555A65]">
                        {partner.role}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-16 border-t border-[#E4E6EB] pt-8">
                <p className="max-w-3xl text-sm leading-7 text-[#555A65]">
                  Founder and partner message will be added once the approved
                  company statement and partner photographs are provided.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            ABOUT CTA
        ===================================================== */}
        <section className="bg-[#111318] py-24 text-white lg:py-28">
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
                See what we
                <br />
                <span style={{ color: MAGENTA }}>
                  build.
                </span>
              </h2>

              <a
                href="/projects"
                className={btnPrimary}
              >
                Explore Projects
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}