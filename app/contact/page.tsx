"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { company } from "../lib/company";
import { exploreLinks } from "../lib/navigation";

const MAGENTA = "#E41B76";

// Shared pill buttons. On dark sections the primary hover turns white (a #111318 hover would vanish into the background).
const btnBase =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition";
const btnPrimary = `${btnBase} bg-[#E41B76] text-white hover:bg-white hover:text-[#111318]`;
const btnOutline = `${btnBase} border border-white/25 text-white hover:border-[#E41B76] hover:bg-[#E41B76]`;

const contactDetails = [
  {
    label: "Registered Office",
    value: company.address.line1,
    detail: company.address.line2,
  },
  {
    label: "Mobile",
    value: company.contact.phones[0].number,
    detail: "Primary contact",
  },
  {
    label: "Alternate Mobile",
    value: company.contact.phones[1].number,
    detail: "Contact number",
  },
  {
    label: "Email",
    value: company.contact.email,
    detail: "Business enquiries",
  },
];

const quickLinks = exploreLinks;

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

export default function ContactPage() {
  return (
    <>
    <main className="bg-[#111318] text-white">

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden flex items-end">

        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-[#111318]" />

          <div
            className="absolute right-[-10%] top-[-25%] h-[700px] w-[700px] rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: MAGENTA }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111318]" />

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
            Get in Touch
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            CONTACT
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Connect with YASH CONSTRUCTION for project enquiries,
            construction requirements and business communication.
          </p>

        </motion.div>

      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* INTRO */}
            <div className="lg:col-span-4">

              <p
                className="text-sm tracking-[0.3em] uppercase font-semibold"
                style={{ color: MAGENTA }}
              >
                01 / Contact
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl mt-5">
                LET&apos;S
                <br />
                TALK
                <br />
                WORK.
              </h2>

              <p className="mt-8 max-w-sm text-black/55 leading-relaxed">
                YASH CONSTRUCTION operates across {company.areasSentence}.
              </p>

            </div>

            {/* DETAILS */}
            <div className="lg:col-span-8">

              <div className="border-t border-black/15">

                {contactDetails.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={reveal}
                    className="grid md:grid-cols-[0.7fr_1.6fr] gap-5 py-7 border-b border-black/10"
                  >

                    <div className="flex items-start gap-4">

                      <span
                        className="font-mono text-xs mt-1"
                        style={{ color: MAGENTA }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                        {item.label}
                      </p>

                    </div>

                    <div>

                      {item.label === "Mobile" ||
                      item.label === "Alternate Mobile" ? (
                        <a
                          href={`tel:+91${item.value}`}
                          className="text-2xl md:text-3xl font-bold hover:opacity-60 transition-opacity"
                        >
                          +91 {item.value}
                        </a>
                      ) : item.label === "Email" ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-xl md:text-2xl font-bold break-all hover:opacity-60 transition-opacity"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl md:text-2xl font-bold">
                          {item.value}
                        </p>
                      )}

                      <p className="mt-2 text-sm text-black/45">
                        {item.detail}
                      </p>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <p
                className="text-sm tracking-[0.3em] uppercase mb-5"
                style={{ color: MAGENTA }}
              >
                02 / Location
              </p>

              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
                FIND
                <br />
                US.
              </h2>

              <p className="mt-7 text-white/50 leading-relaxed max-w-md">
                {company.address.full}.
              </p>

              <a
                href={company.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} mt-8`}
              >
                Open in Google Maps →
              </a>

            </div>

            {/* MAP PLACEHOLDER */}
            <div className="lg:col-span-7">

              <a
                href={company.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center border"
                    style={{ borderColor: MAGENTA }}
                  >
                    <span
                      className="text-2xl"
                      style={{ color: MAGENTA }}
                    >
                      +
                    </span>
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/60">
                    View Location
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    {company.location.town}, {company.location.districtName}
                  </p>

                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: MAGENTA }}
                />

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#F5F5F3] text-[#111318] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14">

            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: MAGENTA }}
            >
              03 / Explore
            </p>

            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">
              MORE FROM
              <br />
              YASH
            </h2>

          </div>

          <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">

            {quickLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-[#F5F5F3] p-8 transition-colors hover:bg-white md:max-lg:last:col-span-2 lg:p-10"
              >

                <div className="flex items-start justify-between">

                  <span
                    className="font-mono text-xs"
                    style={{ color: MAGENTA }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    →
                  </span>

                </div>

                <h3 className="text-xl font-black uppercase sm:text-2xl mt-14">
                  {item.title}
                </h3>

                <p className="mt-4 text-black/50 leading-relaxed">
                  {item.description}
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[#111318] py-20 lg:py-28 overflow-hidden">

        <div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: MAGENTA }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <p
            className="text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            YASH CONSTRUCTION
          </p>

          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl max-w-5xl">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            SOLID.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={company.contact.primaryPhone.href}
              className={btnPrimary}
            >
              Call {company.contact.primaryPhone.number} →
            </a>

            <a
              href={company.contact.emailHref}
              className={btnOutline}
            >
              Email Us →
            </a>

          </div>

        </div>

      </section>

    </main>
    </>
  );
}