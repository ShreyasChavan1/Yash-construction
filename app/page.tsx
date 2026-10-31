"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "motion/react";
import Navbar from "./components/Navbar";

// Color System derived directly from Yash Construction Logo Vector
const MAGENTA = "#E41B76"; // Primary Signature Accent
const DARK = "#111318";    // Obsidian Brand Structure
const MUTED = "#555A65";
const BORDER_LIGHT = "#E4E6EB";

const services = [
  {
    number: "01",
    tag: "HIGHWAY & PAVING",
    title: "Road construction & bituminous paving",
    description:
      "Bitumen roads, rigid concrete pavements, subgrade grading, and municipal arterial network developments.",
    image: "/images/services/road-construction.jpg",
  },
  {
    number: "02",
    tag: "STRUCTURAL DRAINAGE",
    title: "Bridge & box culvert works",
    description:
      "Minor river crossings, box culvert casting, retaining wall stabilization, and flood-resilient civil crossing infrastructures.",
    image: "/images/services/bridge-construction.jpg",
  },
  {
    number: "03",
    tag: "INSTITUTIONAL & CIVIL",
    title: "Institutional & building construction",
    description:
      "Turnkey structural construction for public works departments, commercial complexes, and municipal government office facilities.",
    image: "/images/services/building-construction.jpg",
  },
  {
    number: "04",
    tag: "HEAVY EARTHMOVING",
    title: "Earthwork & rock excavation",
    description:
      "Mass soil displacement, rocky terrain cutting, drainage trenching, and industrial site grading.",
    image: "/images/services/earthwork.jpg",
  },
];

const machinery = [
  {
    name: "Excavator / Poclain",
    quantity: "04",
    spec: "100 M³ / Hour Rated",
    role: "Heavy Trenching & Site Clearing",
    image: "/images/machinery/excavator.jpg",
  },
  {
    name: "JCB 3DX",
    quantity: "03",
    spec: "Heavy Utility Loader",
    role: "Excavation & Backfill",
    image: "/images/machinery/jcb.jpg",
  },
  {
    name: "Mechanical Paver",
    quantity: "04",
    spec: "54.5 BHP Hydraulic Screed",
    role: "Hot Mix Bitumen Laying",
    image: "/images/machinery/paver.jpg",
  },
  {
    name: "Vibratory Soil Roller",
    quantity: "04",
    spec: "10-12 Ton High Compaction",
    role: "Surface & Sub-Base Compaction",
    image: "/images/machinery/roller.jpg",
  },
];

const stats = [
  { num: "42+", label: "Years operational", caption: "Continuous contracting since 1984" },
  { num: "1,500+", label: "Projects delivered", caption: "Across Ratnagiri & Western MH" },
  { num: "20+", label: "Institutional clients", caption: "PWD, Councils & Private Tenders" },
  { num: "100+", label: "Site crew & operators", caption: "Certified in-house operators" },
];

const plants = [
  { name: "Asphalt Hot Mix Plant", capacity: "120 DM Rated", location: "Waghangaon Complex" },
  { name: "Aggregate Crusher Unit", capacity: "Multi-stage screening", location: "Waghangaon Complex" },
  { name: "Ready-Mix Concrete (RMC)", capacity: "30 Cu.M / Hour", location: "Waghangaon Complex" },
  { name: "Basalt Stone Quarry", capacity: "Captive Supply", location: "Waghangaon Complex" },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const slowReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
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
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SiteBadge({ label }: { label: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-100/90 px-3.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-neutral-800">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: MAGENTA }} />
      {label}
    </div>
  );
}

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["0%", shouldReduceMotion ? "0%" : "10%"]
  );

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.04, shouldReduceMotion ? 1.04 : 1]
  );

  const heroTextY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["0px", shouldReduceMotion ? "0px" : "35px"]
  );

  return (
    <>
      <Navbar />

      <main className="font-sans bg-white text-[#111318] antialiased selection:bg-[#E41B76] selection:text-white">
        {/* =========================================================
            HERO: Enterprise Engineering Statement with Telemetry
        ========================================================= */}
        <section
          id="home"
          className="relative min-h-[92svh] overflow-hidden bg-[#111318] text-white"
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: heroImageY, scale: heroImageScale }}
          >
            <img
              src="/images/hero-construction.jpg"
              alt="Yash Construction Project Operations"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/75 to-transparent" />
          </motion.div>

          {/* Telemetry Bar */}
          <div className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between border-b border-white/10 px-6 pt-32 pb-4 font-mono text-xs text-white/50 sm:px-10 lg:px-20">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: MAGENTA }} />
              <span>APPROVED GOVERNMENT CONTRACTOR // MH REGION</span>
            </div>
            <div className="hidden sm:block">
              <span>LAT 16.8524º N &nbsp; LON 73.5182º E &nbsp; // &nbsp; LANJA - RAJAPUR</span>
            </div>
            <div>
              <span>EST. 1984</span>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(92svh-140px)] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-12 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.15 },
                },
              }}
              style={{ y: heroTextY }}
            >
              <motion.div variants={reveal}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: MAGENTA }} />
                  Heavy Civil & Highway Infrastructure
                </div>
              </motion.div>

              <motion.h1
                variants={slowReveal}
                className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]"
              >
                TOTAL CONTROL OF <br />
                <span style={{ color: MAGENTA }}>CIVIL INFRASTRUCTURE</span>
              </motion.h1>

              <motion.div
                variants={reveal}
                className="mt-8 flex max-w-4xl flex-col gap-8 md:flex-row md:items-end md:justify-between"
              >
                <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                  Delivering end-to-end highway construction, bridge civil works, and departmental
                  contracts across Ratnagiri District. Powered by captive asphalt plants, aggregate
                  crushers, and heavy fleet readiness.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-110"
                    style={{ backgroundColor: MAGENTA }}
                  >
                    View Project Ledger
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                  >
                    Tender Desk →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            KEY METRICS (SiteAssist Clean Strip in Logo Theme)
        ========================================================= */}
        <section className="border-b border-[#E4E6EB] bg-white py-14">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s, index) => (
                <Reveal key={s.label} delay={index * 0.08}>
                  <div className="border-l-2 pl-5" style={{ borderColor: MAGENTA }}>
                    <span className="text-4xl font-bold tracking-tight text-[#111318] md:text-5xl">
                      {s.num}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-[#111318]">{s.label}</h3>
                    <p className="text-xs text-[#555A65]">{s.caption}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STATEMENT / PROFILE
        ========================================================= */}
        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div>
                  <SiteBadge label="• OPERATIONAL PROFILE" />
                  <h2 className="text-4xl font-bold tracking-tight text-[#111318] sm:text-5xl md:text-6xl">
                    Four decades of consistent public delivery.
                  </h2>

                  <p className="mt-6 text-base leading-relaxed text-[#555A65] md:text-lg">
                    Yash Construction is an established civil engineering partnership firm. We
                    operate as direct Class IA registered contractors for government bodies and
                    regional infrastructure authorities, maintaining direct oversight over materials,
                    plant extraction, and heavy field fleets.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E4E6EB] pt-6 text-xs text-[#555A65]">
                    <div>
                      <span className="font-mono font-semibold text-[#111318] block">
                        ESTABLISHED
                      </span>
                      1984 in Lanja, Maharashtra
                    </div>
                    <div>
                      <span className="font-mono font-semibold text-[#111318] block">
                        SPECIALIZATION
                      </span>
                      High-Volume Highway & Pavements
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="relative rounded-2xl border border-[#E4E6EB] bg-[#F4F5F8] p-3 shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                    <img
                      src="/images/company/company.jpg"
                      alt="Yash Construction Field Engineering"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                      <div>
                        <span className="font-mono text-xs" style={{ color: MAGENTA }}>
                          CLASS IA CONTRACTOR
                        </span>
                        <h4 className="text-xl font-bold text-white">
                          Ratnagiri Infrastructure Unit
                        </h4>
                      </div>
                      <span className="rounded bg-white/20 px-2 py-1 font-mono text-[10px] backdrop-blur-sm">
                        REG: PWD // 1984
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SOLUTIONS: SiteAssist Sync Hover Rail (Magenta Accents)
        ========================================================= */}
        <section id="services" className="border-b border-[#E4E6EB] bg-[#F4F5F8] py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <Reveal>
              <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#E4E6EB] pb-8 md:flex-row md:items-end">
                <div>
                  <SiteBadge label="• WHAT WE DO" />
                  <h2 className="text-4xl font-bold tracking-tight text-[#111318] sm:text-5xl md:text-6xl">
                    Engineered solutions.
                  </h2>
                </div>
                <p className="max-w-md text-sm text-[#555A65]">
                  Built for major infrastructure projects across civil roads, bridges, and earthworks.
                  Hover over capabilities to inspect active site parameters.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              {/* Interactive Left Rail */}
              <div className="space-y-4">
                {services.map((svc, idx) => {
                  const isActive = activeService === idx;
                  return (
                    <motion.div
                      key={svc.number}
                      onMouseEnter={() => setActiveService(idx)}
                      onClick={() => setActiveService(idx)}
                      className={`relative cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                        isActive
                          ? "border-[#E41B76] bg-white shadow-md ring-1 ring-[#E41B76]/30"
                          : "border-transparent bg-transparent hover:border-neutral-300 hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: isActive ? MAGENTA : "#555A65" }}
                        >
                          {svc.number} // {svc.tag}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="active-indicator"
                            className="font-mono text-xs font-bold"
                            style={{ color: MAGENTA }}
                          >
                            [SELECTED]
                          </motion.span>
                        )}
                      </div>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111318] md:text-3xl">
                        {svc.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#555A65]">
                        {svc.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dynamic Preview Frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E4E6EB] bg-neutral-900 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: MAGENTA }}
                      >
                        INSPECTION & EXECUTION READY
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {services[activeService].title}
                      </h4>
                      <p className="font-mono text-xs text-white/70">
                        {services[activeService].tag}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FLEET REEL: SiteAssist Module Reel Animation
        ========================================================= */}
        <section id="machinery" className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <Reveal>
              <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#E4E6EB] pb-8 md:flex-row md:items-end">
                <div>
                  <SiteBadge label="• FLEET & MODULES" />
                  <h2 className="text-4xl font-bold tracking-tight text-[#111318] sm:text-5xl md:text-6xl">
                    Dedicated assets.
                  </h2>
                </div>
                <div className="font-mono text-xs uppercase text-[#555A65]">
                  DRAG OR SCROLL TO VIEW CAPACITIES →
                </div>
              </div>
            </Reveal>

            <motion.div
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {machinery.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="min-w-[280px] max-w-[320px] flex-shrink-0 scroll-snap-align-start rounded-2xl border border-[#E4E6EB] bg-white p-5 shadow-sm transition-all hover:border-[#E41B76]/50 hover:shadow-lg sm:min-w-[320px]"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-[#555A65]">
                    <span>ASSET // 0{index + 1}</span>
                    <span
                      className="rounded px-2 py-0.5 font-bold"
                      style={{ backgroundColor: `${MAGENTA}15`, color: MAGENTA }}
                    >
                      QTY: {item.quantity}
                    </span>
                  </div>

                  <div className="relative my-4 aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#111318]">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold" style={{ color: MAGENTA }}>
                    {item.spec}
                  </p>
                  <p className="mt-2 text-xs text-[#555A65]">{item.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PRODUCTION PLANTS & FACILITIES
        ========================================================= */}
        <section id="plants" className="border-t border-[#E4E6EB] bg-[#F4F5F8] py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div>
                  <SiteBadge label="• PLANT INFRASTRUCTURE" />
                  <h2 className="text-4xl font-bold tracking-tight text-[#111318] sm:text-5xl md:text-6xl">
                    Captive material plants.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#555A65]">
                    Zero third-party bottlenecks. Direct manufacturing of verified bituminous mix,
                    controlled aggregate crushing, and ready-mix concrete at Waghangaon.
                  </p>

                  <div className="mt-8 divide-y divide-[#E4E6EB] rounded-xl border border-[#E4E6EB] bg-white">
                    {plants.map((p) => (
                      <div key={p.name} className="flex items-center justify-between p-4">
                        <div>
                          <h4 className="text-base font-bold text-[#111318]">{p.name}</h4>
                          <span className="font-mono text-xs text-neutral-400">LOC: {p.location}</span>
                        </div>
                        <span className="rounded bg-[#F4F5F8] px-3 py-1 font-mono text-xs font-semibold text-[#111318]">
                          {p.capacity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl border border-[#E4E6EB] bg-white p-3 shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
                    <img
                      src="/images/plants/asphalt-plant.jpg"
                      alt="Waghangaon Plant Complex"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="font-mono text-xs" style={{ color: MAGENTA }}>
                        CENTRAL PROCESSING HUB
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Waghangaon Operations Base
                      </h3>
                      <p className="font-mono text-xs text-white/70">
                        Supplying Lanja, Rajapur, and Ratnagiri Highway Networks.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            CREDENTIALS
        ========================================================= */}
        <section className="border-t border-[#E4E6EB] bg-white py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20">
            <Reveal>
              <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <SiteBadge label="• STATUTORY COMPLIANCE" />
                  <h2 className="text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
                    Accreditations & registrations.
                  </h2>
                </div>
                <p className="text-xs text-[#555A65]">Fully certified for state & central bids.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { title: "PWD Registration", sub: "Class IA Contractor" },
                { title: "MSME / Udyam", sub: "Registered Enterprise" },
                { title: "GST Compliant", sub: "Verified Entity" },
                { title: "Partnership Act", sub: "Registered Since 1984" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-[#E4E6EB] bg-[#F4F5F8] p-5 transition-colors hover:border-[#E41B76]"
                >
                  <span className="font-mono text-xs font-bold" style={{ color: MAGENTA }}>
                    VERIFIED //
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-[#111318]">{c.title}</h4>
                  <p className="font-mono text-xs text-[#555A65]">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CALL TO ACTION
        ========================================================= */}
        <section
          id="contact"
          className="border-t border-[#E4E6EB] bg-[#111318] py-28 text-white sm:py-36"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slowReveal}
            className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: MAGENTA }} />
              Direct Tender & Partner Inquiries
            </div>

            <h2 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Let's talk about your <br />
              <span style={{ color: MAGENTA }}>next project.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base text-white/60 md:text-lg">
              Contact our engineering and tenders desk for joint venture works, departmental
              tenders, or direct hot-mix supply.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 font-mono text-xs tracking-wider">
              <a
                href="tel:+917798763555"
                className="rounded-lg px-8 py-4 font-bold text-white transition-all hover:brightness-110"
                style={{ backgroundColor: MAGENTA }}
              >
                Call Office
              </a>
              <a
                href="https://wa.me/917798763555"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-bold transition-all hover:border-[#E41B76] hover:text-[#E41B76]"
              >
                WhatsApp Desk
              </a>
              <a
                href="mailto:yash_const@rediffmail.com"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-bold transition-all hover:border-[#E41B76] hover:text-[#E41B76]"
              >
                Dispatch Email
              </a>
            </div>

            <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 font-mono text-xs text-white/40 md:flex-row">
              <div>
                YASH CONSTRUCTION · LANJA, RATNAGIRI DISTRICT, MAHARASHTRA
              </div>
              <div>© 1984 {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}