import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProviderLazy } from "./PostHogProviderLazy";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
  title: "Noah Kim",
  description: "A little bit about me",

  // Favicon configuration
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph / Facebook / iMessage Preview
  openGraph: {
    title: "Noah Kim",
    description: "A little bit about me",
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

  // Twitter Card (For X / Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Noah Kim",
    description: "A little bit about me",
    images: ["https://noahk.im/preview-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <PostHogProviderLazy>
        <body className={`${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
      </PostHogProviderLazy>
    </html>
  );
}
