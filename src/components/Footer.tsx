import { Crown, Phone, MapPin, InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-28 pt-16 text-cream sm:px-8 lg:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Crown weight="fill" className="text-gold" size={26} />
              <span className="font-display text-2xl">Café Royale</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/65">{site.tagline}</p>
          </div>

          <nav className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cream/50">
              Explore
            </h3>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-cream/80">
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-cream/50">
              Find us
            </h3>
            <a
              href={`tel:${site.phone.tel}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone weight="fill" size={17} className="text-gold" />
              {site.phone.display}
            </a>
            <p className="flex items-start gap-2">
              <MapPin weight="fill" size={17} className="mt-0.5 text-gold" />
              <span>
                {site.address.line1}, {site.address.city} {site.address.postcode}
              </span>
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cream/50">
              Follow
            </h3>
            <div className="flex gap-3">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramLogo size={20} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <FacebookLogo size={20} />
                </a>
              )}
              {!site.social.instagram && !site.social.facebook && (
                <p className="text-sm text-cream/50">Coming soon.</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-sm text-cream/45">
          © {new Date().getFullYear()} Café Royale, Romford. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
