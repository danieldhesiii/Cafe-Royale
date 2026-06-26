import { Star } from "@phosphor-icons/react/dist/ssr";
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
];

export default function Reviews() {
  const fullStars = Math.floor(site.rating.score);
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Rating panel */}
          <div
            data-reveal
            className="flex flex-col justify-center rounded-2xl bg-ink p-9 text-cream"
          >
            <div className="font-display text-6xl leading-none text-gold">
              {site.rating.score}
            </div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  weight="fill"
                  size={22}
                  className={i < fullStars ? "text-gold" : "text-cream/25"}
                />
              ))}
            </div>
            <p className="mt-4 text-cream/80">
              Rated by {site.rating.count} people on Google. Come and see what the
              fuss is about.
            </p>
          </div>

          {/* Quotes */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {quotes.map((q) => (
              <figure
                key={q.name}
                data-reveal
                className="flex flex-col justify-between rounded-2xl border border-cream-line bg-cream-deep p-7"
              >
                <blockquote className="font-display text-xl leading-snug text-ink">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">{q.name}</span>
                  <span className="mx-2 text-ink/30">|</span>
                  {q.note}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
