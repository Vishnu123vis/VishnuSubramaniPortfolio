import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import SmoothCursor from "@/components/SmoothCursor";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Vishnu Subramani | AI Engineer",
  description:
    "AI engineer building internal agents at Revvity and Keyfortly, a property-management SaaS. University of Waterloo. Seeking a summer 2027 startup internship.",
  keywords: [
    "Vishnu Subramani",
    "University of Waterloo",
    "Management Engineering",
    "Software Engineer",
    "AI Engineer",
    "Keyfortly",
  ],
  authors: [{ name: "Vishnu Subramani" }],
  openGraph: {
    title: "Vishnu Subramani | AI Engineer",
    description:
      "AI engineer at Waterloo. Building internal agents at Revvity and property-management tools at Keyfortly. Open to summer 2027 startup internships.",
    url: "https://vishnus.online",
    siteName: "Vishnu Subramani",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){return;}document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibm.variable} scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${ibm.className} min-h-screen`}>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
