import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { galleryPhotos } from "@/lib/gallery";
import { site } from "@/lib/site";

function shapeOf(shape: string | undefined, i: number) {
  if (shape === "tall") return "tall";
  return i % 3 === 0 ? "square" : "wide";
}

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 bg-cream py-16 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2
              data-reveal
              className="font-display text-4xl tracking-tight text-ink sm:text-6xl"
            >
              Straight from the café
            </h2>
            <p data-reveal className="mt-4 max-w-md text-lg text-ink-soft">
              Real plates, real mornings, real regulars.
            </p>
          </div>
          {site.social.instagram && (
            <a
              data-reveal
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream-deep"
            >
              <InstagramLogo size={18} />
              Follow us
            </a>
          )}
        </div>

        <div className="masonry mt-10 sm:mt-12">
          {galleryPhotos.map((photo, i) => (
            <figure
              key={photo.src}
              data-reveal
              data-shape={shapeOf(photo.shape, i)}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-2 font-display text-lg text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/*
        ── MAKING THIS AUTO-UPDATE FROM INSTAGRAM ─────────────────────────────
        Right now this shows the photos listed in src/lib/gallery.ts.
        To pull the café's latest Instagram posts automatically:
          1. The café needs an Instagram Business or Creator account
             (linked to a Facebook Page).
          2. Create a Meta app and get a long-lived access token for the
             Instagram Graph API (or use the Basic Display API).
          3. Add a server route (e.g. app/api/instagram/route.ts) that fetches
             https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink
             &access_token=YOUR_TOKEN  and cache it (revalidate hourly).
          4. Map the response to the Photo[] shape and render it here instead of
             `galleryPhotos`. Everything else (layout, hover, etc.) stays.
        Tell me when the account + token are ready and I'll wire it up.
      */}
    </section>
  );
}
