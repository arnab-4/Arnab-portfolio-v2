import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/arnab-4"),
  title: "My portfolio",
  description:
  "Hobby Designer and Software Engineer and create something new",
  generator: "Next.js",
  applicationName: "Arnab Manna",
  keywords: [
      "Arnab Manna",
      "Arnab",
      "Design",
      "Visuals",
      "freelance",
      "developer",
      "freelance developer",
      "frontend",
      "nextjs",
      "astro",
      "react",
      "frontend developer",
      "frontend engineer",
      "creative",
      "creative developer",
      "creative engineer",
      "tech",
      "germany",
      "software",
      "software developer",
      "portfolio",
      "frontend developer portfolio",
      "creative developer portfolio",
      "creative engineer portfolio",
      "software developer portfolio",
      "frontend engineer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
      title: "Arnab Manna - Designer and Developer",
      description:
    "Hobby Designer and Software Engineer and create something new",
      url: "https://github.com/arnab-4",
      siteName: "Arnab's Portfolio",
      images: [
          {
              url: "./public/Arnab.jpg",
              width: 1200,
              height: 630,
              alt: "Arnab Manna - Designer and Developer",
          },
      ],
      locale: "en-US",
      type: "website",
  },
  twitter: {
      card: "summary_large_image",
      title: "Arnab Manna - Designer and Developer",
      description:
    "Hobby Designer and Software Engineer and create something new",
      creator: "Arnab Manna",
      creatorId: "000000",
      images: ["./public/Arnab.jpg"],
  },
  robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
      },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
