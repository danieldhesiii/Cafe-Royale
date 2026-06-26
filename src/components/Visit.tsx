import { MapPin, Phone, NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import OpeningHours from "./OpeningHours";

export default function Visit() {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery,
  )}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    site.address.mapsQuery,
  )}`;

  return (
    <section id="visit" className="scroll-mt-28 bg-cream-deep py-16 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div>
            <h2
              data-reveal
              className="font-display text-5xl tracking-tight text-ink sm:text-6xl"
            >
              Come and find us
            </h2>

            <div data-reveal className="mt-8 flex items-start gap-3">
              <MapPin weight="fill" size={24} className="mt-0.5 text-gold-deep" />
              <p className="text-lg text-ink-soft">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.postcode}
              </p>
            </div>

            <div data-reveal className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone weight="fill" size={19} />
                Call {site.phone.display}
              </a>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-base font-semibold text-ink transition-colors hover:bg-cream"
              >
                <NavigationArrow weight="fill" size={19} />
                Get directions
              </a>
            </div>

            <div data-reveal className="mt-10">
              <h3 className="font-display text-2xl text-ink">Opening hours</h3>
              <div className="mt-4 max-w-sm">
                <OpeningHours />
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            data-reveal
            className="relative min-h-[360px] overflow-hidden rounded-2xl border border-cream-line lg:min-h-full"
          >
            <iframe
              title={`Map to ${site.name}`}
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
