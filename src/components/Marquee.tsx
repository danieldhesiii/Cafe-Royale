import { Crown } from "@phosphor-icons/react/dist/ssr";

const words = [
  "Full English",
  "Eggs Royale",
  "Loaded Shakes",
  "Sunday Roasts",
  "Barista Coffee",
  "Stacked Burgers",
  "Fresh Salads",
  "Brunch All Week",
];

export default function Marquee() {
  // Rendered twice back-to-back so the CSS translateX(-50%) loops seamlessly.
  const strip = [...words, ...words];
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-ink/10 bg-ink py-5 text-cream"
    >
      <div className="marquee">
        {strip.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display text-2xl tracking-tight sm:text-3xl">
              {w}
            </span>
            <Crown weight="fill" className="mx-7 text-gold sm:mx-9" size={20} />
          </span>
        ))}
      </div>
    </section>
  );
}
