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
  title: "Arnab Manna || My portfolio",
  description:
    "Welcome to my portfolio website! Here, you'll find a curated collection of my creative endeavors, showcasing my passion and expertise. From captivating graphic designs to innovative web development projects, I aim to blend artistry with technology. Explore my work to witness a fusion of aesthetics and functionality that reflects my dedication to crafting meaningful digital experiences. Thank you for visiting, and I look forward to sharing my journey with you.",
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
              url: "https://raw.githubusercontent.com/arnab-4/Arnab-portfolio-v2/main/public/Arnab.jpg",
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
    creatorId: "123456789",
    images: ["https://raw.githubusercontent.com/arnab-4/Arnab-portfolio-v2/main/public/Arnab.jpg"],
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