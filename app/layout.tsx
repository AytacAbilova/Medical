import type { Metadata } from "next";
import { Geist, Manrope, DM_Sans} from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css'

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourcompany.az"),

  title: {
    default: "Ana səhifə | Ürək-Damar Cərrahi Dr. Beyrək Abbaszadə ",
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
    <html lang="az" className={`${geistSans.variable} ${manrope.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
