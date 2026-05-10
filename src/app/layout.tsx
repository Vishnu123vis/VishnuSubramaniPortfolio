import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Vishnu Subramani",
  description:
    "Management Engineering student at the University of Waterloo. Software engineering, cloud, and full-stack development.",
  keywords: [
    "Vishnu Subramani",
    "University of Waterloo",
    "Management Engineering",
    "Software Engineer",
  ],
  authors: [{ name: "Vishnu Subramani" }],
  openGraph: {
    title: "Vishnu Subramani",
    description:
      "Management Engineering student at the University of Waterloo.",
    url: "https://vishnus.online",
    siteName: "Vishnu Subramani",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} scroll-smooth`}>
      <body className={`${lexend.className} min-h-screen`}>{children}</body>
    </html>
  );
}
