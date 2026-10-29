"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const GOLD = "#C8A34A";
const DARK = "#171717";
const CREAM = "#F3F0E8";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Machinery", href: "/machinery" },
  { label: "Plants", href: "/plants" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP / MOBILE NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20">

          {/* LOGO */}
          <Link
            href="/"
            className="group relative z-10 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <div>
              <div
                className="font-['Barlow_Condensed'] text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl"
                style={{ color: GOLD }}
              >
                YASH
              </div>

              <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-[9px]">
                Construction
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span
                  className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: GOLD }}
                />
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-3 border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:text-[#171717]"
              style={{
                borderColor: GOLD,
                color: GOLD,
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="block h-[1px] w-full bg-white"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1px] w-full bg-white"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="block h-[1px] w-full bg-white"
              />
            </div>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 bg-[#171717] lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8 sm:px-12">
              <div className="mb-8">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: GOLD }}
                >
                  YASH CONSTRUCTION
                </span>
              </div>

              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="font-['Barlow_Condensed'] text-4xl font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#C8A34A] sm:text-5xl">
                        {item.label}
                      </span>

                      <span
                        className="text-2xl opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                        style={{ color: GOLD }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="tel:+917798763555"
                  className="border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{
                    borderColor: GOLD,
                    color: GOLD,
                  }}
                >
                  Call Us
                </a>

                <a
                  href="https://wa.me/917798763555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}