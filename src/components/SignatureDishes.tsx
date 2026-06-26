"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { signatureDishes } from "@/lib/gallery";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function SignatureDishes() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="overflow-hidden bg-cream-deep py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2
          data-reveal
          className="text-center font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          Crowd favourites
        </h2>
        <p
          data-reveal
          className="mx-auto mt-4 max-w-md text-center text-ink-soft"
        >
          The plates that keep Romford coming back.
        </p>
      </div>

      <div className="mt-14">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 140,
            modifier: 2.4,
            slideShadows: false,
          }}
          autoplay={
            reduced ? false : { delay: 2600, disableOnInteraction: false }
          }
          pagination={{ clickable: true }}
          className="!px-5 !pb-14"
        >
          {signatureDishes.map((dish) => (
            <SwiperSlide
              key={dish.src}
              className="!w-[280px] sm:!w-[360px] lg:!w-[420px]"
            >
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 font-display text-2xl text-cream">
                  {dish.caption}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
