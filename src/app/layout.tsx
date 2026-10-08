import type { Metadata, Viewport } from "next";

import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fouziamahjabeen.github.io"),

  title: {
    default: "Fouzia Mahjabeen — Product Designer & Video Editor",
    template: "%s — Fouzia Mahjabeen",
  },

  description:
    "Fouzia Mahjabeen is a Product Designer and Video Editor with 5+ years of experience creating intuitive digital products, SaaS experiences, web and mobile interfaces, and engaging visual content.",

  keywords: [
    "Fouzia Mahjabeen",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "UX UI Designer",
    "Product Design",
    "SaaS Product Designer",
    "Web App Designer",
    "Mobile App Designer",
    "UI UX Designer",
    "Video Editor",
    "Video Editing",
    "Visual Storytelling",
    "Motion Design",
    "Figma Designer",
    "Design Systems",
    "Prototyping",
    "User Research",
  ],

  authors: [
    {
      name: "Fouzia Mahjabeen",
      url: "https://www.linkedin.com/in/fouzia-mahjabeen-7606b7221/",
    },
  ],

  creator: "Fouzia Mahjabeen",

  applicationName: "Fouzia Mahjabeen Portfolio",

  category: "design",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fouziamahjabeen.github.io",
    siteName: "Fouzia Mahjabeen",
    title: "Fouzia Mahjabeen — Product Designer & Video Editor",
    description:
      "Portfolio of Fouzia Mahjabeen, a Product Designer & Video Editor with 5+ years of experience designing digital products and creating visual experiences.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fouzia Mahjabeen — Product Designer & Video Editor",
    description:
      "Product Designer & Video Editor creating intuitive digital products and clear visual experiences.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="top" className="site-wrapper">
          <Header />

          <main className="site-main">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
