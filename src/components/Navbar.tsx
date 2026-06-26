"use client";

import { useEffect, useState } from "react";
import { Crown, Phone, List, X } from "@phosphor-icons/react";
import { site } from "@/lib/site";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Go solid once the hero has scrolled past (so white text over the photo
  // turns to navy text on cream). Uses IntersectionObserver, not scroll events.
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      setSolid(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Lock scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onCream = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onCream
          ? "bg-cream/90 backdrop-blur-md border-b border-cream-line"
          : "bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#top"
          className={`flex items-center gap-2.5 ${onCream ? "text-ink" : "text-cream"}`}
          aria-label="Café Royale, back to top"
        >
          <Crown weight="fill" className="text-gold" size={28} />
          <span className="font-display text-xl tracking-tight sm:text-2xl">
            Café Royale
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                onCream ? "text-ink-soft" : "text-cream/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone weight="fill" size={17} />
            {site.phone.display}
          </a>
        </div>

        {/* Mobile: phone + burger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phone.tel}`}
            aria-label={`Call ${site.phone.display}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink"
          >
            <Phone weight="fill" size={18} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              onCream
                ? "border-cream-line text-ink"
                : "border-cream/40 text-cream"
            }`}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden bg-cream lg:hidden ${
          open ? "max-h-96 border-b border-cream-line" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-2xl text-ink hover:bg-cream-deep"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
