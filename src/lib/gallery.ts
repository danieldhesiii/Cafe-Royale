// ─────────────────────────────────────────────────────────────────────────────
// GALLERY PHOTOS
//
// These are the café's own photos (in /public/photos). To add a photo, drop the
// file in public/photos and add a line below. `shape: "tall"` makes it a taller
// tile in the gallery grid; leave it off for a standard tile.
//
// LATER: to make this auto-update from Instagram, see the integration note at the
// bottom of src/components/Gallery.tsx — you'll swap this static list for the feed.
// ─────────────────────────────────────────────────────────────────────────────

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  shape?: "tall";
};

export const galleryPhotos: Photo[] = [
  { src: "/photos/cafe-11.jpg", alt: "Eggs Royale brunch plate", caption: "Eggs Royale", shape: "tall" },
  { src: "/photos/cafe-10.jpg", alt: "Café Royale storefront with outdoor tables", caption: "Out front" },
  { src: "/photos/cafe-13.jpg", alt: "Two loaded milkshakes", caption: "Loaded shakes", shape: "tall" },
  { src: "/photos/cafe-16.jpg", alt: "Sunday roast dinner with gravy", caption: "Sunday roast" },
  { src: "/photos/cafe-02.jpg", alt: "Beef burgers with fries and onion rings", caption: "Royale burger", shape: "tall" },
  { src: "/photos/cafe-15.jpg", alt: "Bright café interior", caption: "Inside" },
  { src: "/photos/cafe-09.jpg", alt: "Full English breakfast", caption: "Full English", shape: "tall" },
  { src: "/photos/cafe-05.jpg", alt: "Hot chocolate and iced coffee", caption: "Coffee o'clock" },
  { src: "/photos/cafe-07.jpg", alt: "Loaded jacket potato", caption: "Loaded jacket" },
  { src: "/photos/cafe-03.jpg", alt: "Outdoor seating with flowers", caption: "Sunny seats" },
  { src: "/photos/cafe-08.jpg", alt: "Eggs benedict with smoked salmon", caption: "Benedict" },
  { src: "/photos/cafe-12.jpg", alt: "Chicken gyros salad plate", caption: "Gyros plate", shape: "tall" },
  { src: "/photos/cafe-17.jpg", alt: "Avocado and halloumi salad", caption: "Garden fresh", shape: "tall" },
  { src: "/photos/cafe-01.jpg", alt: "Café Royale sign with flowers", caption: "The Royale" },
  { src: "/photos/cafe-14.jpg", alt: "Full English breakfast on a blue plate", caption: "Big breakfast" },
  { src: "/photos/cafe-18.jpg", alt: "Halloumi and rice plates", caption: "Halloumi & rice", shape: "tall" },
  { src: "/photos/cafe-06.jpg", alt: "Fresh salad bowl", caption: "Salad bowl", shape: "tall" },
  { src: "/photos/cafe-04.jpg", alt: "Café Royale shopfront", caption: "Drop in" },
];

// Featured dishes for the signature carousel near the top of the page.
export const signatureDishes: Photo[] = [
  { src: "/photos/cafe-11.jpg", alt: "Eggs Royale", caption: "Eggs Royale" },
  { src: "/photos/cafe-16.jpg", alt: "Sunday roast", caption: "Sunday Roast" },
  { src: "/photos/cafe-02.jpg", alt: "Royale burger", caption: "Royale Burger" },
  { src: "/photos/cafe-09.jpg", alt: "Full English", caption: "Full English" },
  { src: "/photos/cafe-13.jpg", alt: "Loaded shakes", caption: "Loaded Shakes" },
  { src: "/photos/cafe-07.jpg", alt: "Loaded jacket potato", caption: "Loaded Jacket" },
];
