"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { company } from "../lib/company";


const MAGENTA = "#E41B76";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Machinery", href: "/machinery" },
  { label: "Plants", href: "/plants" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/contact" },
  {
  label: "Gallery",
  href: "/gallery",
},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 ${
          scrolled
            ? "border-b border-black/10 bg-white/95 shadow-md backdrop-blur-md"
            : "border-b border-black/5 bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 ">
          {/* LOGO */}
          <Link
            href="/"
            className="group relative z-10 flex items-center transition-opacity hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            <Logo className="h-10 w-auto sm:h-12" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#111318]/75 transition-colors duration-200 hover:text-[#111318]"
              >
                {item.label}

                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: MAGENTA }}
                />
              </Link>
            ))}

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="ml-3 rounded border px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-200"
              style={{
                borderColor: MAGENTA,
                backgroundColor: `${MAGENTA}10`,
                color: MAGENTA,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = MAGENTA;
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${MAGENTA}10`;
                e.currentTarget.style.color = MAGENTA;
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded border border-black/15 bg-black/5 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-full bg-[#111318]"
              />

              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-[1.5px] w-full bg-[#111318]"
              />

              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-full bg-[#111318]"
              />
            </div>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8 sm:px-12">
              <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
                <Logo className="h-9 w-auto" />
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: MAGENTA }}
                >
                  DIRECTORY
                </span>
              </div>

              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.04 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-black/5 py-3.5"
                    >
                      <span className="text-3xl font-bold uppercase tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#E41B76] sm:text-4xl">
                        {item.label}
                      </span>

                      <span
                        className="font-mono text-xl opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                        style={{ color: MAGENTA }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 font-mono text-[11px] font-bold uppercase tracking-wider">
                <a
                  href={company.contact.primaryPhone.href}
                  className="rounded px-5 py-3 text-white"
                  style={{ backgroundColor: MAGENTA }}
                >
                  Call Desk
                </a>

                <a
                  href={company.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-black/20 bg-black/5 px-5 py-3 text-[#111318]"
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