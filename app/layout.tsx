import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { PostHogProviderLazy } from "./PostHogProviderLazy";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Editorial serif for hero headlines (variable: weight + optical-size + italic).
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Noah Kim · Engineer & Founder",
  description:
    "Self-taught engineer and founder building data-first products end to end, from the database to the deploy. 0 to 1 for seven clients and two of my own.",

  // Favicon configuration
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph / Facebook / iMessage Preview
  openGraph: {
    title: "Noah Kim · Engineer & Founder",
    description:
      "Self-taught engineer and founder building data-first products end to end, from the database to the deploy.",
    url: "https://noahk.im",
    siteName: "Noah Kim",
    images: [
      {
        url: "https://noahk.im/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProviderLazy>
        <body className={`${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} font-sans`}>{children}</body>
      </PostHogProviderLazy>
    </html>
  );
}
