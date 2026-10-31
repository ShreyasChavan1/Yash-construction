import Link from "next/link";

const MAGENTA = "#E41B76";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Machinery", href: "/machinery" },
  { label: "Plants", href: "/plants" },
  { label: "Gallery", href: "/gallery" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111318] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-black text-white"
                style={{ backgroundColor: MAGENTA }}
              >
                Y
              </div>

              <div>
                <p className="text-xl font-black tracking-tight">
                  YASH CONSTRUCTION
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Since 1984
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Construction and infrastructure works across Lanja Taluka,
              Rajapur Taluka and Ratnagiri District, with experience spanning
              roads, bridges, buildings, earthwork and government projects.
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E41B76]">
                Registered Office
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Yash Construction-1933, Radhai Niwas,
                <br />
                Lanja, Tal-Lanja,
                <br />
                Dist-Ratnagiri - 416701
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E41B76]">
              Quick Links
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E41B76]">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">
                  Phone
                </p>

                <div className="mt-1 space-y-1">
                  <a
                    href="tel:7798763555"
                    className="block text-sm text-white/70 transition hover:text-white"
                  >
                    +91 77987 63555
                  </a>

                  <a
                    href="tel:9090240707"
                    className="block text-sm text-white/70 transition hover:text-white"
                  >
                    +91 90902 40707
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-white/35">
                  Email
                </p>

                <a
                  href="mailto:yash_const@rediffmail.com"
                  className="mt-1 block break-all text-sm text-white/70 transition hover:text-white"
                >
                  yash_const@rediffmail.com
                </a>
              </div>

              <a
                href="https://wa.me/917798763555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#E41B76] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#111318]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} YASH CONSTRUCTION. All rights
            reserved.
          </p>

          <p>
            Established 1984 · Lanja, Ratnagiri
          </p>
        </div>
      </div>
    </footer>
  );
}