import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PostHogProviderLazy } from "./PostHogProviderLazy";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
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
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
      </PostHogProviderLazy>
    </html>
  );
}
