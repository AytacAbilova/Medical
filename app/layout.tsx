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
  metadataBase: new URL("https://drbeyrek.az"),

  title: {
    default: "Ürək-damar cərrahı Dr. Beyrək Abbaszadə",
    template: "%s | Dr. Beyrək Abbaszadə",
  },

  description:
    "Ürək-damar cərrahı Dr. Beyrək Abbaszadə: açıq ürək əməliyyatı, koronar bypass (CABG), minimal invaziv ürək cərrahiyyəsi, aorta cərrahiyyəsi, varikoz venaların müalicəsi və anadangəlmə ürək qüsurlarının cərrahi müalicəsi. Bakı, Azərbaycan.",

  keywords: [
    "ürək əməliyyatı Bakı",
    "koronar bypass Azərbaycan",
    "açıq ürək əməliyyatı",
    "aorta anevrizması cərrahiyyəsi",
    "ürək damar cərrahı Bakı",
    "varikoz venaların müalicəsi",
    "ASD əməliyyatı Azərbaycan",
    "minimal invaziv ürək cərrahiyyəsi",
    "dr beyrək abbaszadə",
    "dr beyrek bakı ürək cərrahı",
    "Lux International Hospital bypass əməliyyatı",
    "Şirvanda ürək əməliyyatı",
    "anadangəlmə ürək qüsuru müalicəsi Bakı",
    "koronar angioqrafiya qızıl standart",
    "ürək çatışmazlığı cərrahi müalicə",
    "xaricdə imtina edilmiş pasiyent Azərbaycan",
    "LMCA stenozu bypass",
    "karotid endarterektomiya Bakı",
    "EF 30% bypass əməliyyatı",
    "sinus venosus ASD korreksiyası",
  ],

  authors: [{ name: "Dr. Beyrək Abbaszadə" }],
  creator: "Dr. Beyrək Abbaszadə",

  openGraph: {
    title: "Ürək-damar cərrahı Dr. Beyrək Abbaszadə",
    description:
      "Açıq ürək əməliyyatı, koronar bypass (CABG), minimal invaziv ürək cərrahiyyəsi, aorta cərrahiyyəsi və varikoz venaların müalicəsi. Bakı, Azərbaycan.",
    url: "https://drbeyrek.az",
    siteName: "Dr. Beyrək Abbaszadə",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Beyrək Abbaszadə",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ürək-damar cərrahı Dr. Beyrək Abbaszadə",
    description:
      "Açıq ürək əməliyyatı, koronar bypass (CABG), minimal invaziv ürək cərrahiyyəsi və aorta cərrahiyyəsi.",
    images: ["/assets/images/logo.png"],
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
    canonical: "https://drbeyrek.az",
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
