"use client";

import { useRef } from "react";
import {
  Star,
  GoogleLogo,
  CaretLeft,
  CaretRight,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import { site } from "@/lib/site";

// SAMPLE reviews — replace with real Google review snippets when you like.
// Keep each quote short (a line or two) and credit a first name + initial.
const quotes = [
  {
    text: "Best full English in Romford, no contest. We're here every Saturday without fail.",
    name: "Danny F.",
    note: "Regular",
  },
  {
    text: "Lovely staff and proper coffee. The Eggs Royale are honestly unreal.",
    name: "Priya S.",
    note: "Brunch fan",
  },
  {
    text: "Felt like a proper local the moment we walked in. The kids loved the shakes.",
    name: "Mark & Jo",
    note: "First visit",
  },
  {
    text: "Generous portions, fair prices and always a warm welcome. My go-to.",
    name: "Sandra W.",
    note: "Local",
  },
  {
    text: "The Sunday roast is the real deal. Booked again before we'd even left.",
    name: "Tom H.",
    note: "Sunday regular",
  },
  {
    text: "Friendly, fast and spotless. Great spot for a catch-up over coffee.",
    name: "Aisha K.",
    note: "Coffee lover",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fullStars = Math.floor(site.rating.score);

  // Direct write-a-review link if provided, otherwise open the Google listing
  // (people can still tap "Write a review" there).
  const reviewUrl =
    site.reviewUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      site.address.mapsQuery,
    )}`;

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-16 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header: rating + leave-a-review CTA */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <div className="flex items-end gap-3">
              <span className="font-display text-6xl leading-none text-ink">
                {site.rating.score}
              </span>
              <div className="mb-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      weight="fill"
                      size={20}
                      className={i < fullStars ? "text-gold" : "text-ink/15"}
                    />
                  ))}
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
                  <GoogleLogo weight="bold" size={15} />
                  {site.rating.count} reviews on Google
                </p>
              </div>
            </div>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              What Romford says
            </h2>
          </div>

          <a
            data-reveal
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PencilSimpleLine weight="fill" size={18} />
            Leave a review
          </a>
        </div>

        {/* Swipeable carousel of quotes */}
        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 sm:mx-0 sm:gap-5 sm:px-0"
          >
            {quotes.map((q) => (
              <figure
                key={q.name}
                className="flex w-[270px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-cream-line bg-cream-deep p-6 sm:w-[340px] sm:p-7"
              >
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} weight="fill" size={15} className="text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display text-lg leading-snug text-ink sm:text-xl">
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">{q.name}</span>
                  <span className="mx-2 text-ink/30">|</span>
                  {q.note}
                </figcaption>
              </figure>
            ))}

            {/* Final card: invite to add your own */}
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[270px] shrink-0 snap-start flex-col items-start justify-center gap-3 rounded-2xl border border-dashed border-ink/25 bg-cream p-6 transition-colors hover:border-gold hover:bg-cream-deep sm:w-[340px] sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink">
                <PencilSimpleLine weight="fill" size={22} />
              </span>
              <span className="font-display text-xl text-ink">
                Been in lately?
              </span>
              <span className="text-sm text-ink-soft">
                Share your visit and help others find us. Leave a review on
                Google.
              </span>
            </a>
          </div>

          {/* Desktop arrows */}
          <div className="mt-6 hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Previous reviews"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-cream-deep"
            >
              <CaretLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="More reviews"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-cream-deep"
            >
              <CaretRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
