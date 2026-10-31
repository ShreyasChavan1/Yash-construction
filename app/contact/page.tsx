"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";

const MAGENTA = "#E41B76";

const contactDetails = [
  {
    label: "Registered Office",
    value: "Yash Construction-1933, Radhai Niwas",
    detail: "Lanja, Tal-Lanja, Dist-Ratnagiri - 416701",
  },
  {
    label: "Mobile",
    value: "7798763555",
    detail: "Primary contact",
  },
  {
    label: "Alternate Mobile",
    value: "9090270707",
    detail: "Contact number",
  },
  {
    label: "Email",
    value: "yash_const@rediffmail.com",
    detail: "Business enquiries",
  },
];

const quickLinks = [
  {
    title: "Projects",
    description: "Explore selected works and project capabilities.",
    href: "/projects",
  },
  {
    title: "Machinery",
    description: "View the company's construction equipment.",
    href: "/machinery",
  },
  {
    title: "Credentials",
    description: "Company registrations and professional credentials.",
    href: "/credentials",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ContactPage() {
  return (
    <>
    {/* <Navbar/> */}
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

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-20">

          <p
            className="text-sm tracking-[0.35em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            Get in Touch
          </p>

          <h1 className="text-[clamp(4rem,11vw,10rem)] leading-[0.8] font-black uppercase tracking-[-0.06em]">
            CONTACT
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Connect with YASH CONSTRUCTION for project enquiries,
            construction requirements and business communication.
          </p>

        </div>

      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-[#F5F5F3] text-[#111318] py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* INTRO */}
            <div className="lg:col-span-4">

              <p
                className="text-sm tracking-[0.3em] uppercase font-semibold"
                style={{ color: MAGENTA }}
              >
                01 / Contact
              </p>

              <h2 className="mt-5 text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight">
                LET&apos;S
                <br />
                TALK
                <br />
                WORK.
              </h2>

              <p className="mt-8 max-w-sm text-black/55 leading-relaxed">
                YASH CONSTRUCTION operates across Lanja Taluka, Rajapur Taluka
                and Ratnagiri District.
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
                    variants={fadeUp}
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

                      {item.label === "Registered Office" && (
                        <p className="mt-1 text-lg text-black/65">
                          {item.detail}
                        </p>
                      )}

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-[#111318] py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <p
                className="text-sm tracking-[0.3em] uppercase mb-5"
                style={{ color: MAGENTA }}
              >
                02 / Location
              </p>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]">
                FIND
                <br />
                US.
              </h2>

              <p className="mt-7 text-white/50 leading-relaxed max-w-md">
                Yash Construction-1933, Radhai Niwas, Lanja,
                Tal-Lanja, Dist-Ratnagiri - 416701.
              </p>

              <a
                href="https://www.google.com/maps/search/Yash+Construction/@16.8620473,73.5527078,17z?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-8 px-7 py-4 font-semibold text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: MAGENTA }}
              >
                Open in Google Maps
              </a>

            </div>

            {/* MAP PLACEHOLDER */}
            <div className="lg:col-span-7">

              <a
                href="https://www.google.com/maps/search/Yash+Construction/@16.8620473,73.5527078,17z?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/9] overflow-hidden bg-white/5 border border-white/10"
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
                    Lanja, Ratnagiri
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
      <section className="bg-[#F5F5F3] text-[#111318] py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="mb-14">

            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: MAGENTA }}
            >
              03 / Explore
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]">
              MORE FROM
              <br />
              YASH
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black/10">

            {quickLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-[#F5F5F3] p-8 md:p-10 hover:bg-white transition-colors"
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

                <h3 className="mt-14 text-2xl md:text-3xl font-black uppercase">
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
      <section className="relative bg-[#111318] py-28 overflow-hidden">

        <div
          className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: MAGENTA }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <p
            className="text-sm tracking-[0.3em] uppercase mb-5"
            style={{ color: MAGENTA }}
          >
            YASH CONSTRUCTION
          </p>

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.85] max-w-5xl">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            SOLID.
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="tel:+917798763555"
              className="inline-flex items-center justify-center px-7 py-4 text-white font-semibold"
              style={{ backgroundColor: MAGENTA }}
            >
              Call 7798763555
            </a>

            <a
              href="mailto:yash_const@rediffmail.com"
              className="inline-flex items-center justify-center px-7 py-4 border border-white/25 text-white font-semibold hover:border-white transition"
            >
              Email Us
            </a>

          </div>

        </div>

      </section>

    </main>
    </>
  );
}