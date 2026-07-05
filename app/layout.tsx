import type { Metadata } from "next";
import { Barlow_Condensed, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProviderLazy } from "./PostHogProviderLazy";

// Condensed display face for the monument headlines ("I SHIP", the rotator, the
// big stat numerals). Used with restraint in caps.
const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
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
  title: "Noah Kim · Full-stack engineer & backend lead",
  description:
    "Data consultant turned self-taught engineer. Nine products since 2023, backend lead on three. I own the schema, the backend, and the deploy.",

  // Favicon configuration
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph / Facebook / iMessage Preview
  openGraph: {
    title: "Noah Kim · Full-stack engineer & backend lead",
    description:
      "Data consultant turned self-taught engineer. Nine products since 2023, backend lead on three. I own the schema, the backend, and the deploy.",
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
        <body className={`${barlowCondensed.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
      </PostHogProviderLazy>
    </html>
  );
}
