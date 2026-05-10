import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
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
    <html lang="en" className={`${ibm.variable} scroll-smooth`}>
      <body className={`${ibm.className} min-h-screen`}>{children}</body>
    </html>
  );
}
