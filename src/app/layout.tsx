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
  title: "Vishnu Subramani | AI Engineer",
  description:
    "AI engineer building agents at Revvity, KeyFortly property-management SaaS, and Dispatchient AI maintenance coordination. University of Waterloo. Seeking a 2027 engineering internship at a startup.",
  keywords: [
    "Vishnu Subramani",
    "University of Waterloo",
    "Management Engineering",
    "Software Engineer",
    "AI Engineer",
    "Keyfortly",
    "Dispatchient",
  ],
  authors: [{ name: "Vishnu Subramani" }],
  openGraph: {
    title: "Vishnu Subramani | AI Engineer",
    description:
      "AI engineer at Waterloo. Building agents at Revvity, KeyFortly property-management SaaS, and Dispatchient AI maintenance coordination. Looking for a 2027 engineering internship at a startup.",
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
        {children}
      </body>
    </html>
  );
}
