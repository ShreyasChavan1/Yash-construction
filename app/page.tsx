"use client"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import Navbar from "./components/Navbar";

/*
  YASH CONSTRUCTION
  Home page
  Visual direction:
  - Inspired by supplied VDIPL company profile
  - Charcoal / warm gold / off-white
  - Editorial construction photography
  - Curved image framing
  - Large typography
  - Slow scroll reveals
  - Subtle parallax
*/

const GOLD = "#C8A34A";
const DARK = "#171717";
const CREAM = "#F3F0E8";

const services = [
  {
    number: "01",
    title: "Road Construction",
    description: "Bitumen roads, concrete roads and associated infrastructure works.",
    image: "/images/services/road-construction.jpg",
  },
  {
    number: "02",
    title: "Bridge Construction",
    description: "Minor bridge construction and related civil infrastructure works.",
    image: "/images/services/bridge-construction.jpg",
  },
  {
    number: "03",
    title: "Building Construction",
    description:
      "Residential, commercial and government building construction.",
    image: "/images/services/building-construction.jpg",
  },
  {
    number: "04",
    title: "Earthwork & Excavation",
    description:
      "Earthwork, excavation, drainage and land development operations.",
    image: "/images/services/earthwork.jpg",
  },
];

const machinery = [
  {
    name: "Excavator / Poclain",
    quantity: "04",
    spec: "100 M3 / Hour",
    image: "/images/machinery/excavator.jpg",
  },
  {
    name: "JCB",
    quantity: "03",
    spec: "3DX",
    image: "/images/machinery/jcb.jpg",
  },
  {
    name: "Paver",
    quantity: "04",
    spec: "54.5 BHP",
    image: "/images/machinery/paver.jpg",
  },
  {
    name: "Roller",
    quantity: "04",
    spec: "Standard",
    image: "/images/machinery/roller.jpg",
  },
];

const stats = [
  ["42+", "Years"],
  ["1,500+", "Projects"],
  ["20+", "Clients"],
  ["100+", "Employees"],
];

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
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
        amount: 0.18,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function GoldLine() {
  return (
    <span
      className="inline-block h-[2px] w-10"
      style={{ backgroundColor: GOLD }}
    />
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["0%", shouldReduceMotion ? "0%" : "12%"]
  );

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.05, shouldReduceMotion ? 1.05 : 1]
  );

  const heroTextY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["0px", shouldReduceMotion ? "0px" : "80px"]
  );

  return (
    <>
     <Navbar />
    
    <main
      className="overflow-hidden"
      style={{
        backgroundColor: CREAM,
        color: DARK,
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-[#171717] text-white"
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: heroImageY,
            scale: heroImageScale,
          }}
        >
          <img
            src="/images/hero-construction.jpg"
            alt="YASH CONSTRUCTION project"
            className="h-full w-full object-cover"
          />

          {/* Dark photographic overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Subtle gold tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
        </motion.div>

        {/* Editorial grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute left-[8%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[25%] top-0 h-full w-px bg-white" />
          <div className="absolute right-[22%] top-0 h-full w-px bg-white" />
        </div>

        {/* Gold curved frame */}
        <div className="pointer-events-none absolute right-[-15%] top-[-15%] h-[85vw] w-[85vw] rounded-full border-[2px] border-[#C8A34A]/70 md:right-[-22%] md:top-[-25%]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-12 pt-32 sm:px-10 md:px-16 md:pb-20 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.2,
                },
              },
            }}
            style={{ y: heroTextY }}
          >
            <motion.div
              variants={reveal}
              className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: GOLD }}
            >
              <GoldLine />
              Lanja · Ratnagiri · Maharashtra
            </motion.div>

            <motion.h1
              variants={slowReveal}
              className="max-w-[1100px] font-['Barlow_Condensed'] text-[17vw] font-bold uppercase leading-[0.78] tracking-[-0.035em] sm:text-[13vw] lg:text-[10vw]"
            >
              YASH
              <br />
              <span style={{ color: GOLD }}>CONSTRUCTION</span>
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-8 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg">
                Building roads, bridges, buildings and infrastructure across
                Lanja Taluka, Rajapur Taluka and Ratnagiri District since 1984.
              </p>

              <a
                href="#projects"
                className="group inline-flex w-fit items-center gap-4 border border-white/50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 hover:border-[#C8A34A] hover:bg-[#C8A34A] hover:text-[#171717]"
              >
                Explore Projects
                <span className="transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero bottom information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-5"
          >
            <div>
              <span
                className="block font-['Barlow_Condensed'] text-3xl font-bold"
                style={{ color: GOLD }}
              >
                42+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Years
              </span>
            </div>

            <div>
              <span
                className="block font-['Barlow_Condensed'] text-3xl font-bold"
                style={{ color: GOLD }}
              >
                1,500+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Projects
              </span>
            </div>

            <div>
              <span
                className="block font-['Barlow_Condensed'] text-3xl font-bold"
                style={{ color: GOLD }}
              >
                100+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Employees
              </span>
            </div>

            <div className="ml-auto hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40 md:flex">
              <span className="h-2 w-2 rounded-full bg-[#C8A34A]" />
              Est. 1984
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div>
              <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]">
                <GoldLine />
                Who We Are
              </div>

              <h2 className="font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl">
                Four
                <br />
                Decades
                <br />
                <span style={{ color: GOLD }}>of Work.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
                YASH CONSTRUCTION is a partnership firm established in 1984,
                with extensive experience in construction and infrastructure
                works across Ratnagiri District.
              </p>

              <a
                href="#about"
                className="mt-8 inline-flex items-center gap-3 border-b-2 pb-2 text-xs font-bold uppercase tracking-[0.16em]"
                style={{ borderColor: GOLD }}
              >
                Discover Our Company
                <span style={{ color: GOLD }}>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileInView={{
                y: [30, 0],
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Curved frame */}
              <div
                className="absolute -bottom-5 -left-5 h-full w-full rounded-br-[120px] border-2"
                style={{ borderColor: GOLD }}
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-br-[120px] bg-[#222]">
                <img
                  src="/images/company/company.jpg"
                  alt="YASH CONSTRUCTION"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <span
                    className="font-['Barlow_Condensed'] text-7xl font-bold"
                    style={{ color: GOLD }}
                  >
                    1984
                  </span>

                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    Established
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="bg-[#171717] px-6 py-24 text-white sm:px-10 md:px-16 md:py-36 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-16">
              <div
                className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: GOLD }}
              >
                <GoldLine />
                Our Capabilities
              </div>

              <h2 className="max-w-4xl font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.86] sm:text-7xl md:text-8xl">
                Built for
                <br />
                <span style={{ color: GOLD }}>Infrastructure.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0 border-t border-white/15">
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 1,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid border-b border-white/15 py-10 md:grid-cols-[90px_1fr_0.7fr] md:items-center md:gap-10"
              >
                <span
                  className="mb-5 font-['Barlow_Condensed'] text-3xl font-bold md:mb-0"
                  style={{ color: GOLD }}
                >
                  {service.number}
                </span>

                <div>
                  <h3 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase leading-none transition-colors duration-500 group-hover:text-[#C8A34A] sm:text-5xl md:text-6xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-7 aspect-[16/8] overflow-hidden md:mt-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#C8A34A] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute right-[-15%] top-[-60%] h-[900px] w-[900px] rounded-full border border-black/10" />

        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <div className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em]">
                <span className="h-[2px] w-10 bg-[#171717]" />
                Experience You Can Measure
              </div>

              <h2 className="font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.85] sm:text-7xl md:text-8xl">
                Numbers
                <br />
                that matter.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 border-t border-black/20 md:grid-cols-4">
            {stats.map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className={`py-10 ${
                  index !== stats.length - 1
                    ? "border-r border-black/20"
                    : ""
                } ${index >= 2 ? "border-t border-black/20 md:border-t-0" : ""} px-5 md:px-8`}
              >
                <span className="block font-['Barlow_Condensed'] text-6xl font-bold leading-none sm:text-7xl md:text-8xl">
                  {number}
                </span>

                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.22em] opacity-60 sm:text-xs">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div
                  className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: GOLD }}
                >
                  <GoldLine />
                  Works Executed
                </div>

                <h2 className="font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.85] sm:text-7xl md:text-8xl">
                  Selected
                  <br />
                  <span style={{ color: GOLD }}>Projects.</span>
                </h2>
              </div>

              <a
                href="/projects"
                className="w-fit border-b-2 pb-2 text-xs font-bold uppercase tracking-[0.16em]"
                style={{ borderColor: GOLD }}
              >
                View All Projects →
              </a>
            </div>
          </Reveal>

          {/* Project 01 */}
          <Reveal>
            <motion.a
              href="/projects"
              whileHover="hover"
              className="group relative mb-8 block overflow-hidden bg-[#222]"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <motion.img
                  variants={{
                    hover: {
                      scale: 1.045,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src="/images/projects/project-01.jpg"
                  alt="YASH CONSTRUCTION project"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: GOLD }}
                  >
                    Road Construction
                  </span>

                  <h3 className="mt-2 max-w-3xl font-['Barlow_Condensed'] text-4xl font-bold uppercase sm:text-5xl md:text-7xl">
                    Project Name
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-5 text-xs uppercase tracking-[0.12em] text-white/60">
                    <span>Client</span>
                    <span>•</span>
                    <span>Location</span>
                    <span>•</span>
                    <span>Year</span>
                  </div>
                </div>

                <div
                  className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-xl text-[#171717] transition-transform duration-500 group-hover:rotate-45 md:right-10 md:top-10"
                  style={{ backgroundColor: GOLD }}
                >
                  ↗
                </div>
              </div>
            </motion.a>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {[2, 3].map((item, index) => (
              <Reveal key={item} delay={index * 0.12}>
                <motion.a
                  href="/projects"
                  whileHover="hover"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#222]">
                    <motion.img
                      variants={{
                        hover: {
                          scale: 1.05,
                        },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      src={`/images/projects/project-0${item}.jpg`}
                      alt="YASH CONSTRUCTION project"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <span
                      className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: GOLD }}
                    >
                      Infrastructure
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-3xl font-bold uppercase">
                        Project Name
                      </h3>
                      <p className="mt-2 text-sm text-black/50">
                        Client · Location · Year
                      </p>
                    </div>

                    <span
                      className="text-2xl transition-transform duration-500 group-hover:translate-x-2"
                      style={{ color: GOLD }}
                    >
                      →
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-[#C8A34A] pl-4 text-sm text-black/50">
            Project names, clients, costs, locations and images should be
            replaced with confirmed company data before launch.
          </p>
        </div>
      </section>

      {/* =========================================================
          MACHINERY
      ========================================================= */}

      <section
        id="machinery"
        className="bg-[#171717] px-6 py-24 text-white sm:px-10 md:px-16 md:py-36 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div
                  className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: GOLD }}
                >
                  <GoldLine />
                  Our Assets
                </div>

                <h2 className="font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.85] sm:text-7xl md:text-8xl">
                  Equipment
                  <br />
                  <span style={{ color: GOLD }}>that works.</span>
                </h2>
              </div>

              <a
                href="/machinery"
                className="w-fit border-b-2 pb-2 text-xs font-bold uppercase tracking-[0.16em]"
                style={{ borderColor: GOLD }}
              >
                View Machinery & Plants →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {machinery.map((machine, index) => (
              <motion.div
                key={machine.name}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: index * 0.08,
                }}
                className="group bg-[#202020]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <span
                    className="absolute left-0 top-0 px-4 py-3 font-['Barlow_Condensed'] text-2xl font-bold text-[#171717]"
                    style={{ backgroundColor: GOLD }}
                  >
                    ×{machine.quantity}
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">
                    {machine.name}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
                    {machine.spec}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PLANTS / CAPABILITY
      ========================================================= */}

      <section className="px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <div>
              <div
                className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: GOLD }}
              >
                <GoldLine />
                Plant & Infrastructure
              </div>

              <h2 className="font-['Barlow_Condensed'] text-6xl font-bold uppercase leading-[0.85] sm:text-7xl md:text-8xl">
                More than
                <br />
                <span style={{ color: GOLD }}>construction.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
                YASH CONSTRUCTION operates its own production and processing
                infrastructure, including asphalt, crusher and RMC facilities
                in the Lanja region.
              </p>

              <div className="mt-10 space-y-5 border-t border-black/15 pt-6">
                {[
                  ["Asphalt Plant", "120 DM", "Waghangaon"],
                  ["Crusher Plant", "Multiple configurations", "Waghangaon"],
                  ["RMC Plant", "30 Cum", "Waghangaon"],
                  ["Quarry", "Standard capacity", "Waghangaon"],
                ].map(([name, spec, location]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-5 border-b border-black/10 pb-5"
                  >
                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase">
                        {name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-black/40">
                        {location}
                      </p>
                    </div>

                    <span
                      className="text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: GOLD }}
                    >
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div
                className="absolute -right-5 -top-5 h-full w-full rounded-tl-[120px] border-2"
                style={{ borderColor: GOLD }}
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[120px] bg-[#222]">
                <img
                  src="/images/plants/asphalt-plant.jpg"
                  alt="YASH CONSTRUCTION asphalt plant"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-8 left-8 text-white">
                  <p
                    className="font-['Barlow_Condensed'] text-5xl font-bold uppercase"
                    style={{ color: GOLD }}
                  >
                    Waghangaon
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    Plant Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CREDENTIALS
      ========================================================= */}

      <section className="border-y border-black/10 bg-[#ebe7dc] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div>
                <div
                  className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: GOLD }}
                >
                  <GoldLine />
                  Credentials
                </div>

                <h2 className="font-['Barlow_Condensed'] text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
                  Built on
                  <br />
                  <span style={{ color: GOLD }}>credibility.</span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-black/55">
                YASH CONSTRUCTION holds registrations and credentials
                associated with its construction and contracting operations.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 border-t border-black/15 md:grid-cols-4">
            {[
              "GST Registration",
              "MSME / Udyam",
              "PWD Registration",
              "Partnership Registration",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="border-b border-r border-black/15 px-5 py-8 md:px-8"
              >
                <span
                  className="font-['Barlow_Condensed'] text-2xl font-bold uppercase"
                  style={{ color: DARK }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#171717] px-6 py-28 text-white sm:px-10 md:px-16 md:py-40 lg:px-20"
      >
        <div className="pointer-events-none absolute right-[-20%] top-[-50%] h-[900px] w-[900px] rounded-full border border-[#C8A34A]/30" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={slowReveal}
          className="relative z-10 mx-auto max-w-[1400px]"
        >
          <div
            className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: GOLD }}
          >
            <GoldLine />
            Start a Conversation
          </div>

          <h2 className="max-w-5xl font-['Barlow_Condensed'] text-7xl font-bold uppercase leading-[0.8] tracking-tight sm:text-8xl md:text-[10vw]">
            Let's build
            <br />
            something
            <br />
            <span style={{ color: GOLD }}>lasting.</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="tel:+917798763555"
              className="border border-[#C8A34A] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#171717] transition-all duration-500 hover:bg-transparent hover:text-white"
              style={{ backgroundColor: GOLD }}
            >
              Call Us
            </a>

            <a
              href="https://wa.me/917798763555"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:border-[#C8A34A] hover:text-[#C8A34A]"
            >
              WhatsApp
            </a>

            <a
              href="mailto:yash_const@rediffmail.com"
              className="border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:border-[#C8A34A] hover:text-[#C8A34A]"
            >
              Email
            </a>
          </div>
        </motion.div>
      </section>
    </main>
    </>
  );
}