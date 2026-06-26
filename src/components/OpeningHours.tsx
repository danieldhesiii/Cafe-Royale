"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
}

export default function OpeningHours() {
  // Computed on the client so it reflects the visitor's current time.
  const [todayIdx, setTodayIdx] = useState<number | null>(null);
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    // site.hours runs Monday(0) → Sunday(6); JS getDay() is Sunday(0) → Saturday(6).
    const idx = (now.getDay() + 6) % 7;
    const today = site.hours[idx];
    const mins = now.getHours() * 60 + now.getMinutes();
    setTodayIdx(idx);
    setOpenNow(
      !today.closed &&
        mins >= toMinutes(today.open) &&
        mins < toMinutes(today.close),
    );
  }, []);

  return (
    <div>
      {todayIdx !== null && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
            openNow ? "bg-gold/20 text-gold-deep" : "bg-ink/10 text-ink-soft"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              openNow ? "bg-gold-deep" : "bg-ink-mute"
            }`}
          />
          {openNow ? "Open now" : "Closed right now"}
        </span>
      )}

      <ul className="mt-5 divide-y divide-cream-line">
        {site.hours.map((h, i) => (
          <li
            key={h.day}
            className={`flex items-center justify-between py-2.5 ${
              i === todayIdx ? "font-semibold text-ink" : "text-ink-soft"
            }`}
          >
            <span className="flex items-center gap-2">
              {h.day}
              {i === todayIdx && (
                <span className="rounded bg-gold/15 px-1.5 py-0.5 text-[11px] font-semibold text-gold-deep">
                  Today
                </span>
              )}
            </span>
            <span>{h.closed ? "Closed" : `${h.open} - ${h.close}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
