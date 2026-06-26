// ─────────────────────────────────────────────────────────────────────────────
// SITE DETAILS — edit anything here and it updates across the whole website.
// (Phone, address, hours, social links, review score.)
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Café Royale",
  tagline: "Breakfast · Lunch · Dinner in Romford",

  // The phone number shown on every Call button. Keep `tel` digits only (no spaces).
  phone: {
    display: "01708 733233",
    tel: "+441708733233",
  },

  address: {
    line1: "624 Upper Brentwood Rd",
    city: "Romford",
    postcode: "RM2 6HS",
    // Used for the "Get directions" button and the embedded map.
    mapsQuery: "Café Royale, 624 Upper Brentwood Rd, Romford RM2 6HS",
  },

  // Aggregate rating from Google (update if it changes).
  rating: {
    score: 4.5,
    count: 287,
  },

  priceRange: "£10-20 per person",

  // OPENING HOURS — placeholders. Please confirm the real hours and edit here.
  // Set `closed: true` for any day the café is shut.
  hours: [
    { day: "Monday", open: "7:00", close: "16:00", closed: false },
    { day: "Tuesday", open: "7:00", close: "16:00", closed: false },
    { day: "Wednesday", open: "7:00", close: "16:00", closed: false },
    { day: "Thursday", open: "7:00", close: "16:00", closed: false },
    { day: "Friday", open: "7:00", close: "16:00", closed: false },
    { day: "Saturday", open: "7:00", close: "16:00", closed: false },
    { day: "Sunday", open: "8:00", close: "15:00", closed: false },
  ],

  // "Leave a review" link. Leave empty ("") and the site falls back to the
  // Google Maps listing (which still lets people write a review). For a link
  // that opens the review box directly, find the café's Place ID and use:
  //   https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  reviewUrl: "",

  // Social links. Leave a value empty ("") to hide that icon.
  // When you're ready to make the Gallery auto-update from Instagram, see
  // src/components/Gallery.tsx for the documented integration hook.
  social: {
    instagram: "", // e.g. "https://instagram.com/caferoyale"
    facebook: "",
  },
} as const;

export type DayHours = (typeof site.hours)[number];
