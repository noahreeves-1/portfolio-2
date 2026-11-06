import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProviderLazy } from "./PostHogProviderLazy";

// One reading face for everything, plus a mono face for dates and the heatmap axis.
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
  title: "Noah Kim · Good with numbers. Better with people.",
  description:
    "Backend engineer at OSMOS and co-founder of Dx-Chart. I work with early-stage founders to turn their ideas into a working MVP.",

  // Favicon configuration
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph / Facebook / iMessage Preview
  openGraph: {
    title: "Noah Kim · Good with numbers. Better with people.",
    description:
      "Backend engineer at OSMOS and co-founder of Dx-Chart. I work with early-stage founders to turn their ideas into a working MVP.",
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
        <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
      </PostHogProviderLazy>
    </html>
  );
}
