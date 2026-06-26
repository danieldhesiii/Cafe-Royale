"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Star, ForkKnife, Phone } from "@phosphor-icons/react";
import { site } from "@/lib/site";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let ctx: gsap.Context | undefined;
    // Splitting.js splits the headline into characters we can stagger in.
    import("splitting").then(({ default: Splitting }) => {
      const [result] = Splitting({ target: el, by: "chars" });
      const chars = (result?.chars as HTMLElement[]) ?? [];
      ctx = gsap.context(() => {
        gsap.to(chars, {
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.04,
          delay: 0.15,
        });
      }, el);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="top"
      data-hero
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      {/* Background photo with gentle parallax */}
      <div
        data-parallax="-8"
        className="absolute -top-[8%] left-0 h-[116%] w-full"
      >
        <Image
          src="/photos/cafe-10.jpg"
          alt="Café Royale shopfront with outdoor seating in the morning"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-cream/85">
          <Star weight="fill" className="text-gold" size={16} />
          {site.rating.score} · {site.rating.count} Google reviews
          <span className="mx-1 text-cream/40">|</span>
          Breakfast from 7am
        </p>

        <h1
          ref={titleRef}
          className="hero-title font-display text-[clamp(2.75rem,12.5vw,11rem)] font-medium leading-[0.9] tracking-tight text-cream"
        >
          Café Royale
        </h1>

        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl"
          data-reveal
        >
          Romford&apos;s neighbourhood café. Proper full English breakfasts,
          weekend brunch all week, burgers, roasts and barista coffee.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ForkKnife weight="fill" size={20} />
            View the menu
          </a>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-4 text-base font-semibold text-cream backdrop-blur-md transition-colors hover:bg-cream/20"
          >
            <Phone weight="fill" size={19} />
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
