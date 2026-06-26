// ─────────────────────────────────────────────────────────────────────────────
// THE MENU — this is the only file you edit to change the menu on the website.
//
// HOW TO EDIT:
//   • Each block below is one CATEGORY (e.g. Breakfast).
//   • Inside `items`, each line is one dish: { name, description, price }.
//   • To add a dish, copy a line and change the text. To remove one, delete it.
//   • Prices are plain text, so "6.50" shows as "£6.50". Write "MKT" or "—" if you like.
//   • `tags` are optional little labels (e.g. "V" veggie, "GF" gluten-free, "Popular").
//
// The items below are SAMPLES drafted from the café photos — replace with the
// real menu and prices. The layout updates automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string; // used for the on-page tab link; lowercase, no spaces
  name: string;
  blurb: string; // one short line shown under the category title
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    blurb: "Served from open. The reason people set an alarm.",
    items: [
      {
        name: "The Royale Full English",
        description:
          "Two eggs, back bacon, sausages, hash browns, mushrooms, beans, grilled tomato and toast.",
        price: "9.95",
        tags: ["Popular"],
      },
      {
        name: "Vegetarian Breakfast",
        description:
          "Two eggs, halloumi, hash browns, mushrooms, beans, grilled tomato, avocado and toast.",
        price: "9.50",
        tags: ["V"],
      },
      {
        name: "Eggs on Toast",
        description: "Poached, fried or scrambled on thick granary toast.",
        price: "5.50",
      },
      {
        name: "Breakfast Bap",
        description: "Bacon, sausage or egg in a soft floured bap. Add a hash brown for 80p.",
        price: "4.50",
      },
    ],
  },
  {
    id: "brunch",
    name: "Brunch",
    blurb: "The weekend plate, all week long.",
    items: [
      {
        name: "Eggs Royale",
        description:
          "Smoked salmon and poached eggs on toasted sourdough with hollandaise and a dressed salad.",
        price: "10.95",
        tags: ["Popular"],
      },
      {
        name: "Eggs Benedict",
        description: "Honey-roast ham, poached eggs and hollandaise on toasted sourdough.",
        price: "9.95",
      },
      {
        name: "Avocado & Poached Egg",
        description:
          "Smashed avocado, poached eggs, cherry tomatoes and seeds on granary toast.",
        price: "9.50",
        tags: ["V"],
      },
    ],
  },
  {
    id: "lunch",
    name: "Lunch & Mains",
    blurb: "Proper plates that fill the gap.",
    items: [
      {
        name: "Royale Beef Burger",
        description:
          "6oz beef patty, cheese and onion rings in a brioche bun with skin-on fries and slaw.",
        price: "11.95",
        tags: ["Popular"],
      },
      {
        name: "Loaded Jacket Potato",
        description:
          "Fluffy baked potato with your choice of filling, salad and slaw. Ask for today's specials.",
        price: "8.50",
      },
      {
        name: "Chicken Gyros Plate",
        description:
          "Grilled chicken, garlic sauce, red onion and salad over seasoned chips.",
        price: "10.95",
      },
      {
        name: "Grilled Halloumi & Rice",
        description: "Halloumi, pitta, wild rice, Greek salad and tzatziki.",
        price: "10.50",
        tags: ["V"],
      },
    ],
  },
  {
    id: "roasts",
    name: "Sunday Roasts",
    blurb: "Sundays only, while it lasts.",
    items: [
      {
        name: "Roast of the Day",
        description:
          "Roast potatoes, seasonal veg, Yorkshire pudding and a jug of proper gravy.",
        price: "13.95",
        tags: ["Sunday"],
      },
      {
        name: "Nut Roast",
        description: "All the trimmings, vegetarian gravy on the side.",
        price: "12.95",
        tags: ["V", "Sunday"],
      },
    ],
  },
  {
    id: "salads",
    name: "Salads & Light",
    blurb: "Fresh, generous, never an afterthought.",
    items: [
      {
        name: "Garden Salad Bowl",
        description:
          "Mixed leaves, cherry tomatoes, cucumber, beetroot, red onion and house dressing.",
        price: "7.95",
        tags: ["V", "GF"],
      },
      {
        name: "Avocado & Halloumi Salad",
        description: "Grilled halloumi, avocado, leaves and toasted seeds.",
        price: "9.50",
        tags: ["V"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Shakes",
    blurb: "Barista coffee, loaded shakes and the lot.",
    items: [
      {
        name: "Flat White / Latte / Cappuccino",
        description: "Locally roasted beans. Oat, almond or soya at no extra cost.",
        price: "3.20",
      },
      {
        name: "Luxury Hot Chocolate",
        description: "Whipped cream, marshmallows and a flake.",
        price: "3.80",
      },
      {
        name: "Loaded Milkshake",
        description: "Thick shake topped with cream and a chocolate bar of your choice.",
        price: "4.95",
        tags: ["Popular"],
      },
      {
        name: "Iced Coffee",
        description: "Double shot over ice with milk of your choice.",
        price: "3.50",
      },
    ],
  },
];
