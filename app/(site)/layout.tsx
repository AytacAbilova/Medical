import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import AOSProvider from "../providers/AOSProvider";
import Hero from "@/components/home/hero";
// import herovideo from "../../public/assets/videos/hero.mp4";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // SEO + performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourcompany.az"),

  title: {
    default: "Tikinti Şirkəti | Etibarlı və Keyfiyyətli İnşaat",
    template: "%s | YourCompany",
  },

  description:
    "Peşəkar tikinti şirkəti. Yaşayış və kommersiya obyektlərinin tikintisi, təmir və layihələndirmə xidmətləri.",

  keywords: [
    "tikinti şirkəti",
    "inşaat",
    "ev tikintisi",
    "təmir işləri",
    "construction company azerbaijan",
  ],

  authors: [{ name: "YourCompany" }],
  creator: "YourCompany",

  openGraph: {
    title: "Tikinti Şirkəti | Keyfiyyətli İnşaat",
    description: "Azerbaycanda peşəkar tikinti və təmir xidmətləri.",
    url: "https://yourcompany.az",
    siteName: "YourCompany",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tikinti Şirkəti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tikinti Şirkəti | YourCompany",
    description: "Peşəkar tikinti və inşaat həlləri",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://yourcompany.az",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <div className="headercontainer rounded-[40px] overflow-hidden">
        <Header />   
        <AOSProvider />
<video
  className="hero-video"
  autoPlay
  muted
  loop
  playsInline
  aria-hidden="true"
>
  <source src="/assets/videos/hero2.mp4" type="video/mp4" />
</video>
      <div className="hero-overlayy" />
      <Hero/>
       </div> 
       
       {children}
      </body>
    </html>
  );
}
