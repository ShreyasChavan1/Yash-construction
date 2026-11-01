"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { company } from "../lib/company";
import { governmentContracts } from "../lib/services";

const MAGENTA = "#E41B76";

// Shared pill buttons. On dark sections the primary hover turns white (a #111318 hover would vanish into the background).
const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;

const registrations = company.registrations;

const companyDetails: [string, string][] = [
  ["Company", company.name],
  ["Established", String(company.established)],
  ["Firm Type", company.type],
  ["Experience", `${company.experienceYears} Years`],
  ["Area of Operation", company.areasOfOperationText],
  ["PAN", company.pan],
];

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

export default function CredentialsPage() {
  return (
    <>
    <main className="bg-[#111318] text-white">

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden flex items-end">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#111318]" />

          <div
            className="absolute right-[-12%] top-[-20%] h-[650px] w-[650px] rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: MAGENTA }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#111318]" />
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
            Company Credentials
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            CREDENTIALS
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Registered, established and equipped to undertake construction
            works across {company.areaNamesText}.
          </p>

        </motion.div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <p
                className="text-sm tracking-[0.3em] uppercase font-semibold"
                style={{ color: MAGENTA }}
              >
                01 / Company
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl mt-5">
                COMPANY
                <br />
                PROFILE
              </h2>

            </div>

            <div className="lg:col-span-8">

              <div className="border-t border-black/15">

                {companyDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid md:grid-cols-[0.8fr_1.5fr] gap-4 py-5 border-b border-black/10"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                      {label}
                    </p>

                    <p className="font-medium text-lg">
                      {value}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REGISTRATIONS */}
      <section className="bg-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16">

            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: MAGENTA }}
            >
              02 / Registrations
            </p>

            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
              REGISTERED
              <br />
              &amp; RECOGNIZED
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10">

            {registrations.map((registration) => (
              <motion.article
                key={registration.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="bg-[#111318] p-8 md:p-10"
              >

                <div className="flex items-start justify-between gap-6">

                  <span
                    className="text-sm font-mono"
                    style={{ color: MAGENTA }}
                  >
                    {registration.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {registration.label}
                  </span>

                </div>

                <h3 className="text-xl font-black uppercase sm:text-2xl mt-12">
                  {registration.title}
                </h3>

                <div className="mt-7 border-t border-white/10 pt-6">

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Registration Number
                  </p>

                  <p
                    className="mt-3 text-xl md:text-2xl font-mono font-semibold break-all"
                    style={{ color: MAGENTA }}
                  >
                    {registration.value}
                  </p>

                </div>

                <p className="mt-6 text-white/50 leading-relaxed">
                  {registration.description}
                </p>

              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* GOVERNMENT WORK */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">

              <p
                className="text-sm tracking-[0.3em] uppercase font-semibold"
                style={{ color: MAGENTA }}
              >
                03 / Government Contracts
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl mt-5">
                GOVERNMENT
                <br />
                WORK
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
                YASH CONSTRUCTION has identified the following government and
                public-sector bodies within its areas of work.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-px bg-black/10">

                {governmentContracts.map((client, index) => (
                  <div
                    key={client}
                    className="bg-[#F5F5F3] p-6 flex items-center gap-5"
                  >
                    <span
                      className="font-mono text-xs"
                      style={{ color: MAGENTA }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-bold uppercase tracking-wide">
                      {client}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <p
                className="text-sm tracking-[0.3em] uppercase mb-4"
                style={{ color: MAGENTA }}
              >
                04 / Documents
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                OFFICIAL
                <br />
                DOCUMENTS
              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="border border-white/10">

                {registrations.map((registration, index) => (
                  <div
                    key={registration.value}
                    className="flex items-center justify-between gap-6 px-6 py-6 border-b border-white/10 last:border-b-0"
                  >

                    <div className="flex items-center gap-5">

                      <span
                        className="font-mono text-xs"
                        style={{ color: MAGENTA }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="font-semibold">
                          {registration.title}
                        </p>

                        <p className="mt-1 text-xs text-white/35 font-mono">
                          {registration.value}
                        </p>
                      </div>

                    </div>

                    {registration.document ? (
                      <a
                        href={registration.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-wider transition hover:opacity-70"
                        style={{ color: MAGENTA }}
                      >
                        View Certificate →
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-wider text-white/30">
                        Pending
                      </span>
                    )}

                  </div>
                ))}

              </div>

              {registrations.some((r) => !r.document) && (
                <p className="mt-6 text-sm text-white/35 leading-relaxed">
                  Official certificate files and document scans will be added
                  once supplied by YASH CONSTRUCTION.
                </p>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative bg-[#111318] border-t border-white/10 py-20 lg:py-28 overflow-hidden">

        <div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: MAGENTA }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <p
            className="text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            Continue Exploring
          </p>

          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl max-w-4xl">
            PROOF
            <br />
            IN PRACTICE.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className={btnPrimary}
            >
              View Projects →
            </Link>

            <Link
              href="/machinery"
              className={btnOutline}
            >
              View Machinery →
            </Link>

          </div>

        </div>

      </section>

    </main>
    </>
  );
}