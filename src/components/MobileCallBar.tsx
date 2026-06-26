import { Phone, ForkKnife } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

// Always-visible bar on mobile so the two things people want — the menu and the
// phone number — are one thumb-tap away from anywhere on the page.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-line bg-cream/95 px-3 py-3 backdrop-blur-md lg:hidden">
      <div className="flex gap-3">
        <a
          href="#menu"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3.5 text-sm font-semibold text-ink"
        >
          <ForkKnife weight="fill" size={18} />
          Menu
        </a>
        <a
          href={`tel:${site.phone.tel}`}
          className="flex flex-[1.3] items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-ink"
        >
          <Phone weight="fill" size={18} />
          Call {site.phone.display}
        </a>
      </div>
    </div>
  );
}
