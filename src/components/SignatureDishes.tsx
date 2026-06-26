import Image from "next/image";
import { signatureDishes } from "@/lib/gallery";

export default function SignatureDishes() {
  // Rendered twice back-to-back. The CSS track animates by exactly -50%, so the
  // loop point lands on an identical card — seamless, with no gap or reload.
  const strip = [...signatureDishes, ...signatureDishes];

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
          The plates that keep Romford coming back.
        </p>
      </div>

      <div className="dish-marquee mt-12 sm:mt-14">
        <div className="dish-track">
          {strip.map((dish, i) => (
            <figure
              key={`${dish.src}-${i}`}
              aria-hidden={i >= signatureDishes.length}
              className="group relative aspect-[4/5] w-[240px] shrink-0 overflow-hidden rounded-2xl shadow-xl shadow-ink/10 sm:w-[320px] lg:w-[380px]"
            >
              <Image
                src={dish.src}
                alt={dish.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 font-display text-2xl text-cream">
                {dish.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
