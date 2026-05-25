"use client";
import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/public/assets/images/aboutUss.png";
import {
  Info,
  Images,
  Video,
  MessageCircle,
  CalendarDays,
  MapPin,
} from "lucide-react";

// ─── DATA (hər həkim üçün yalnız bunu dəyiş) ───────────────────────
const content = {
  az: {
    name: "Dr. [Ad Soyad]",
    desc: `Dr. [Ad Soyad] 2004–2010-cu illərdə Azərbaycan Tibb Universitetini bitirmişdir. [Universitet adı] xəstəxanasında [ixtisas] üzrə ixtisaslaşma təhsilini 2014–2020-ci illər arasında tamamlamışdır. Hazırda müstəqil mütəxəssis həkim kimi fəaliyyət göstərir.`,
    cards: [
      { icon: Info,           label: "Haqqımda",        href: "/about" },
      { icon: Images,         label: "Fotolarım",       href: "/gallery" },
      { icon: Video,          label: "Videolarım",      href: "/videos" },
      { icon: MessageCircle,  label: "Pasiyent rəyləri",href: "/reviews" },
      { icon: CalendarDays,   label: "Randevu al",      href: "/contact" },
      { icon: MapPin,         label: "Əlaqə",           href: "/contact" },
    ],
  },
};

// ─── KOMPONENT (toxunma) ────────────────────────────────────────────
export default function AboutUs({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];

  return (
    <section className="bg-[#f5f5f3] py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* SOL — Dairəvi şəkil */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div
            data-aos="fade-right"
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden
                       ring-[6px] ring-gray-300"
          >
            <Image
              src={imgSrc}
              alt="Həkim şəkli"
              fill
              quality={95}
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* SAĞ — Mətn + kartlar */}
        <div className="flex-1 w-full">

          {/* Ad */}
          <h2
            data-aos="fade-left"
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4"
          >
            {t.name}
          </h2>

          {/* Təsvir */}
          <p
            data-aos="fade-left"
            className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-10 max-w-xl"
          >
            {t.desc}
          </p>

          {/* 3x2 Kart Grid */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-3 gap-3"
          >
            {t.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Link
                  key={i}
                  href={card.href}
                  className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200
                             rounded-2xl py-6 px-3 hover:shadow-md hover:border-gray-300
                             transition-all duration-200 group"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.4}
                    className="text-gray-700 group-hover:text-[#2A69AC] transition-colors duration-200"
                  />
                  <span className="text-gray-700 text-sm font-medium text-center leading-tight group-hover:text-[#2A69AC] transition-colors duration-200">
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