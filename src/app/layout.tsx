import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://i2prod.ca"),

  title: {
    default: "I2Prod — Intelligent Software",
    template: "%s | I2Prod",
  },

  description:
    "I2Prod is a Canadian software and AI engineering company building intelligent applications, digital products and scalable platforms.",

  applicationName: "I2Prod",

  keywords: [
    "I2Prod",
    "software engineering",
    "AI engineering",
    "artificial intelligence",
    "software development",
    "mobile applications",
    "web applications",
    "AI agents",
    "cloud engineering",
  ],

  openGraph: {
    type: "website",
    siteName: "I2Prod",
    title: "I2Prod — Intelligent Software",
    description:
      "Canadian software and AI engineering company building intelligent applications, digital products and scalable platforms.",
    url: "https://i2prod.ca",
  },

  twitter: {
    card: "summary_large_image",
    title: "I2Prod — Intelligent Software",
    description:
      "Canadian software and AI engineering company building intelligent applications, digital products and scalable platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}