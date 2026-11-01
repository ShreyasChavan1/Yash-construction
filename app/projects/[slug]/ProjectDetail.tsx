"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import SafeImage from "../../components/SafeImage";
import type { Project } from "../../lib/projects";

const MAGENTA = "#E41B76";

const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;

const reveal: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
};

const slowReveal: Variants = {
  hidden: { opacity: 0, y: 65 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project | null;
}) {
  // Only show facts that were actually supplied. Never invent or pad.
  const facts = [
    ["Client", project.client],
    ["Location", project.location],
    ["Year", project.year],
    ["Project Cost", project.cost],
    ["Duration", project.duration],
    ["Status", project.status],
  ].filter(([, value]) => Boolean(value));

  return (
    <main className="bg-[#111318] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          {project.images[0] ? (
            <div className="absolute inset-0">
              <SafeImage src={project.images[0]} alt={project.name} sizes="100vw" priority className="opacity-40" />
            </div>
          ) : null}
          <div
            className="absolute right-[-10%] top-[-25%] h-[700px] w-[700px] rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: MAGENTA }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#111318]" />
        </div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40"
          initial="hidden"
          animate="visible"
          variants={slowReveal}
        >
          <Link
            href="/projects"
            className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
          >
            ← All Projects
          </Link>

          <p className="mb-5 text-sm uppercase tracking-[0.35em]" style={{ color: MAGENTA }}>
            {project.category ?? "Project"}
          </p>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            {project.name}
          </h1>

          {project.location ? (
            <p className="mt-6 text-lg text-white/65 md:text-xl">{project.location}</p>
          ) : null}
        </motion.div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="bg-[#F5F5F3] py-20 text-[#111318] lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: MAGENTA }}>
                01 / Information
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                Project
                <br />
                Details
              </h2>
            </div>

            <div className="lg:col-span-8">
              {facts.length > 0 ? (
                <motion.dl
                  className="border-t border-black/15"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                >
                  {facts.map(([label, value]) => (
                    <div key={label} className="grid gap-4 border-b border-black/10 py-5 md:grid-cols-[0.8fr_1.5fr]">
                      <dt className="text-xs uppercase tracking-[0.2em] text-black/45">{label}</dt>
                      <dd className="text-lg font-medium">{value}</dd>
                    </div>
                  ))}
                </motion.dl>
              ) : (
                <p className="border-t border-black/15 pt-5 text-black/50">
                  Project details will be added once supplied by YASH CONSTRUCTION.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
      <section className="bg-[#111318] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-sm uppercase tracking-[0.3em]" style={{ color: MAGENTA }}>
                02 / Scope
              </p>
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                Scope
                <br />
                of Work
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-3xl whitespace-pre-line text-lg leading-relaxed text-white/65 md:text-xl">
                {project.scope || "The scope of work will be added once supplied by YASH CONSTRUCTION."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#F5F5F3] py-20 text-[#111318] lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: MAGENTA }}>
            03 / Gallery
          </p>
          <h2 className="mb-12 text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
            Project Gallery
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(project.images.length > 0 ? project.images : [null, null, null]).map((src, i) => (
              <div key={src ?? `placeholder-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
                <SafeImage src={src} alt={`${project.name}, photo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#111318] py-20 lg:py-28">
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: MAGENTA }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
            Have a project
            <br />
            in mind?
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className={btnPrimary}>
              Contact Us →
            </Link>
            {next ? (
              <Link href={`/projects/${next.slug}`} className={btnOutline}>
                Next Project →
              </Link>
            ) : (
              <Link href="/projects" className={btnOutline}>
                All Projects →
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
