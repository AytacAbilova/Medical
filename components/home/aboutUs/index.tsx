"use client";

import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/public/assets/images/aboutUss.png";

import {
  UserRound,
  GraduationCap,
  ImageIcon,
  Video,
  MessageCircleMore,
  CalendarDays,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────
const content = {
  az: {
    name: "Dr. Xatirə Aslanova",

    title: "Həkim İnfeksionist-Parazitoloq",

    desc: `
Dr. Xatirə Aslanova infeksion xəstəliklər və tibbi parazitologiya sahəsində
25 illik fasiləsiz klinik təcrübəyə malik mütəxəssisdir. Hazırda Parasitus
Medical Center klinikasının baş həkimi olaraq fəaliyyət göstərir.

Helmintozlar, virus hepatitləri, parazitar və yoluxucu xəstəliklərin
diaqnostikası və müalicəsi üzrə geniş təcrübəyə sahibdir. Müasir və
sübuta əsaslanan tibbi yanaşmanı əsas prinsip kimi tətbiq edir.
    `,

    cards: [
      {
        icon: UserRound,
        label: "Haqqımda",
        href: "/about",
      },
      {
        icon: GraduationCap,
        label: "Təhsil və təcrübə",
        href: "/about",
      },
      {
        icon: ImageIcon,
        label: "Klinika fotoları",
        href: "/gallery",
      },
      {
        icon: Video,
        label: "Maarifləndirici videolar",
        href: "/videos",
      },
      {
        icon: MessageCircleMore,
        label: "Pasiyent rəyləri",
        href: "/reviews",
      },
      {
        icon: CalendarDays,
        label: "Randevu al",
        href: "/contact",
      },
    ],
  },
};

// ─── COMPONENT ───────────────────────────────────────────────
export default function AboutUs({
  locale = "az",
}: {
  locale?: "az";
}) {
  const t = content[locale];

  return (
    <section className="bg-[#f7f8fb] py-[70px] md:py-[120px]">
      <div
        className="max-w-[1250px] mx-auto px-6
        flex flex-col lg:flex-row items-center gap-14 lg:gap-20"
      >

        {/* LEFT IMAGE */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div
            data-aos="fade-right"
            className="relative
            w-[300px] h-[300px]
            sm:w-[380px] sm:h-[380px]
            lg:w-[470px] lg:h-[470px]
            rounded-full overflow-hidden
            ring-[8px] ring-white shadow-xl"
          >
            <Image
              src={imgSrc}
              alt="Dr. Xatirə Aslanova"
              fill
              quality={100}
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full">

          {/* Badge */}
          <div
            data-aos="fade-left"
            className="inline-flex items-center
            bg-[#EAF3FF] text-[#2A69AC]
            px-4 py-2 rounded-full
            text-sm font-semibold mb-5"
          >
            Parasitus Medical Center
          </div>

          {/* Name */}
          <h2
            data-aos="fade-left"
            className="text-[32px] md:text-[52px]
            font-extrabold text-[#001a56]
            leading-[1.05] mb-3"
          >
            {t.name}
          </h2>

          {/* Title */}
          <p
            data-aos="fade-left"
            className="text-[#2388ff]
            font-bold text-[18px]
            md:text-[22px] mb-6"
          >
            {t.title}
          </p>

          {/* Description */}
          <p
            data-aos="fade-left"
            className="text-[#5B6475]
            text-[15px] md:text-[17px]
            leading-relaxed mb-10
            max-w-2xl whitespace-pre-line"
          >
            {t.desc}
          </p>

          {/* CARDS */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {t.cards.map((card, i) => {
              const Icon = card.icon;

              return (
                <Link
                  key={i}
                  href={card.href}
                  className="group bg-white border border-[#E8EDF5]
                  rounded-[24px] p-5 md:p-6
                  hover:border-[#bfd8f6]
                  hover:shadow-lg
                  transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-2xl
                    bg-[#EEF4FB]
                    flex items-center justify-center mb-4
                    group-hover:bg-[#2388ff]
                    transition-colors duration-300"
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#001a56]
                      group-hover:text-white
                      transition-colors duration-300"
                    />
                  </div>

                  <span
                    className="text-[#001a56]
                    text-[15px] md:text-[17px]
                    font-bold leading-snug"
                  >
                    {card.label}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}