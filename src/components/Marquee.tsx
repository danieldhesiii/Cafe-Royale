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
      className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream/85"
    >
      <div className="marquee">
        {strip.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display text-lg tracking-tight sm:text-2xl">
              {w}
            </span>
            <span className="mx-6 h-1 w-1 rounded-full bg-gold/70 sm:mx-9 sm:h-1.5 sm:w-1.5" />
          </span>
        ))}
      </div>
    </section>
  );
}
