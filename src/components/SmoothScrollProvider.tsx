"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = 100; // navbar height + breathing room, so a section's top sits clearly below the bar

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Escape hatch: ?nofx disables smooth scroll + animations entirely
    // (handy for printing, debugging, or low-power devices). Content stays
    // fully visible and the page uses plain native scrolling.
    if (new URLSearchParams(window.location.search).has("nofx")) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReduced,
    });

    // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync.
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Smooth-scroll any in-page anchor link (nav, buttons, footer).
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -NAV_OFFSET,
        duration: prefersReduced ? 0 : 1.1,
        // Images loading below the fold can shift the target mid-scroll, leaving
        // the link landing short ("half way"). A quick re-aim on completion snaps
        // to the section's final resting position.
        onComplete: () =>
          lenis.scrollTo(target as HTMLElement, {
            offset: -NAV_OFFSET,
            duration: 0.25,
          }),
      });
    };
    document.addEventListener("click", onClick);

    // Scroll-reveal + parallax (skipped entirely under reduced motion).
    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      document.documentElement.classList.add("reveal-ready");

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { opacity: 0, y: 26 });
      ScrollTrigger.batch(reveals, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      // Gentle parallax on tagged images. data-parallax="-12" moves it up to 12%.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = parseFloat(el.dataset.parallax || "-10");
        gsap.to(el, {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      ctx.revert();
      lenis.destroy();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return <>{children}</>;
}
