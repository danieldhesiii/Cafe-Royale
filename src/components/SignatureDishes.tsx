"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { signatureDishes } from "@/lib/gallery";

export default function SignatureDishes() {
  const ref = useRef<HTMLDivElement>(null);
  // Rendered twice so the loop wraps onto an identical card — seamless.
  const strip = [...signatureDishes, ...signatureDishes];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const n = signatureDishes.length;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let paused = false;
    let dragging = false;
    let resumeT: ReturnType<typeof setTimeout> | undefined;
    let startX = 0;
    let startScroll = 0;

    // Distance covered by one full set of cards (handles any margins exactly).
    const period = () =>
      el.children.length > n
        ? (el.children[n] as HTMLElement).offsetLeft -
          (el.children[0] as HTMLElement).offsetLeft
        : 0;

    const wrap = () => {
      const p = period();
      if (p <= 0) return;
      if (el.scrollLeft >= p) el.scrollLeft -= p;
      else if (el.scrollLeft < 0) el.scrollLeft += p;
    };

    const pauseFor = (ms: number) => {
      paused = true;
      if (resumeT) clearTimeout(resumeT);
      resumeT = setTimeout(() => {
        paused = false;
      }, ms);
    };

    const tick = () => {
      if (!paused && !reduced) el.scrollLeft += 0.6; // gentle auto-crawl
      if (!dragging) wrap();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Touch + wheel: let the browser scroll natively, just pause the auto-crawl.
    const onWheel = () => pauseFor(900);
    const onTouchStart = () => {
      paused = true;
      if (resumeT) clearTimeout(resumeT);
    };
    const onTouchEnd = () => pauseFor(900);

    // Mouse: click-and-drag to scroll (desktop has no native horizontal swipe).
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      paused = true;
      if (resumeT) clearTimeout(resumeT);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const p = period();
      let next = startScroll - (e.clientX - startX);
      if (p > 0) next = ((next % p) + p) % p; // keep within one set, seamless
      el.scrollLeft = next;
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("is-dragging");
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
      pauseFor(900);
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeT) clearTimeout(resumeT);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-cream-deep py-16 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2
          data-reveal
          className="text-center font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          Crowd favourites
        </h2>
        <p data-reveal className="mx-auto mt-4 max-w-md text-center text-ink-soft">
          The plates that keep Romford coming back. Swipe to see more.
        </p>
      </div>

      <div ref={ref} className="dish-scroller no-scrollbar mt-10 sm:mt-14">
        {strip.map((dish, i) => (
          <figure
            key={`${dish.src}-${i}`}
            aria-hidden={i >= signatureDishes.length}
            className="group relative mr-3 aspect-[4/5] w-[160px] shrink-0 overflow-hidden rounded-2xl shadow-xl shadow-ink/10 sm:mr-5 sm:w-[300px] lg:w-[360px]"
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 300px, 360px"
              className="select-none object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-4 font-display text-lg text-cream sm:bottom-5 sm:left-5 sm:text-2xl">
              {dish.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
