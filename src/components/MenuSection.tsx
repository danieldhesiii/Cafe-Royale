"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Info } from "@phosphor-icons/react";
import { menu } from "@/lib/menu";
import { site } from "@/lib/site";

// Which photo shows beside each category. Edit freely.
const categoryImage: Record<string, string> = {
  breakfast: "/photos/cafe-09.jpg",
  brunch: "/photos/cafe-11.jpg",
  lunch: "/photos/cafe-02.jpg",
  roasts: "/photos/cafe-16.jpg",
  salads: "/photos/cafe-17.jpg",
  drinks: "/photos/cafe-13.jpg",
};

function Tag({ label }: { label: string }) {
  const popular = label.toLowerCase() === "popular";
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        popular
          ? "bg-gold/15 text-gold-deep"
          : "border border-ink/15 text-ink-mute"
      }`}
    >
      {label}
    </span>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="scroll-mt-28 bg-cream py-16 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h2
            data-reveal
            className="font-display text-4xl tracking-tight text-ink sm:text-6xl"
          >
            The Menu
          </h2>
          <p data-reveal className="mt-4 text-lg text-ink-soft">
            Pick a section below. Everything is cooked to order, so allergies and
            swaps are no trouble at all.
          </p>
        </div>

        {/* Category tabs */}
        <div
          data-reveal
          className="mt-10 -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              aria-pressed={c.id === active}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                c.id === active
                  ? "bg-ink text-cream"
                  : "bg-cream-deep text-ink-soft hover:bg-cream-line"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left: category blurb + photo + call */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                key={category.id}
                src={categoryImage[category.id] ?? "/photos/cafe-09.jpg"}
                alt={category.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 font-display text-3xl text-ink">
              {category.name}
            </h3>
            <p className="mt-2 text-ink-soft">{category.blurb}</p>
            <a
              href={`tel:${site.phone.tel}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone weight="fill" size={17} />
              Call to order or book
            </a>
          </div>

          {/* Right: items */}
          <div>
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {category.items.map((item) => (
                <article key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <h4 className="font-display text-xl text-ink">
                      {item.name}
                    </h4>
                    <span className="-translate-y-1 flex-1 border-b border-dotted border-ink/25" />
                    <span className="font-display text-xl text-gold-deep">
                      £{item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-ink-mute">
              <Info size={16} />
              Sample menu shown. Ask in store for today&apos;s specials and the
              full list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
