import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caferoyale-romford.example.com"),
  title: `${site.name} | Café in Romford, Breakfast, Brunch & Lunch`,
  description: `${site.name} on ${site.address.line1}, ${site.address.city}. Full English breakfasts, brunch, burgers, Sunday roasts and barista coffee. Rated ${site.rating.score}★. Call ${site.phone.display}.`,
  openGraph: {
    title: `${site.name}, Café in Romford`,
    description:
      "Breakfast, brunch, lunch and Sunday roasts in Romford. Walk in or call ahead.",
    images: ["/photos/cafe-10.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
