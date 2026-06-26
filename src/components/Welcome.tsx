import Image from "next/image";
import { Coffee, Clock, Sun } from "@phosphor-icons/react/dist/ssr";

const points = [
  { icon: Coffee, label: "Freshly cooked, all day" },
  { icon: Clock, label: "Open from 7am" },
  { icon: Sun, label: "Sunny outdoor seating" },
];

export default function Welcome() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/photos/cafe-15.jpg"
            alt="The bright dining room inside Café Royale"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            data-parallax="-6"
            className="scale-110 object-cover"
          />
        </div>

        <div>
          <h2
            data-reveal
            className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl"
          >
            A warm welcome on
            <span className="text-gold"> Upper Brentwood Road</span>
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft"
          >
            Café Royale is the kind of place Romford turns up to in its slippers.
            A proper neighbourhood café where the coffee is good, the portions
            are honest, and the breakfast runs right through the day.
          </p>
          <p
            data-reveal
            className="mt-4 max-w-prose text-lg leading-relaxed text-ink-soft"
          >
            Pop in for a full English and a flat white, settle in for brunch, or
            grab a table outside when the sun is out. No fuss, just good food.
          </p>

          <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {points.map(({ icon: Icon, label }) => (
              <li
                key={label}
                data-reveal
                className="flex items-center gap-3 text-ink"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-deep text-gold-deep">
                  <Icon weight="fill" size={20} />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
