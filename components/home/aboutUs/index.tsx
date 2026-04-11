"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import imgSrc from "@/public/assets/images/aboutUs.jpg";

interface AboutProps {
  locale?: "az" | "en";
}

const content = {
  az: {
    badge: "HAQQIMIZDA",
    title: "Su ilə rahatlığı birləşdirən peşəkar hovuz və spa həlləri",
    desc: `Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət göstərir. İllərin təcrübəsi və yenilikçi texnologiyalar ilə müasir, estetik və uzunömürlü istirahət məkanları yaradırıq.`,
    features: [
      "Fərdi hovuz və spa layihələndirilməsi",
      "İnnovativ texnologiyalar və keyfiyyətli materiallar",
      "Peşəkar quraşdırma və zəmanətli xidmət",
    ],
    cta: "Pulsuz məsləhət al",
    contactLabel: "24/7 Əlaqə Mərkəzi",
  },
  en: {
    badge: "ABOUT US",
    title: "Professional pool and spa solutions combining comfort with water",
    desc: `Turan Construction LLC is a licensed company providing professional services in the design, construction, and installation of pool, spa, and sauna systems. With years of experience and innovative technologies, we create modern, aesthetic, and long-lasting relaxation spaces.`,
    features: [
      "Custom pool and spa design",
      "Innovative technologies and premium materials",
      "Professional installation with warranty",
    ],
    cta: "Get free consultation",
    contactLabel: "24/7 Contact Center",
  },
};

export default function AboutUs({ locale = "az" }: AboutProps) {
  const t = content[locale];

  return (
    <section
      aria-label="About Turan İnşaat"
      className="bg-gray-50"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-8 py-20 sm:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* TEXT */}
        <div className="flex-1">
          {/* Badge */}
          <span className="text-[#C49B63] uppercase font-extrabold text-sm md:text-[16px] tracking-[0.2em] mb-4 block">
            {t.badge}
          </span>

          {/* Title (SEO) */}
          <h2 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-[56px] leading-tight mb-6">
            {t.title}
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            {t.desc}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-3 mb-10">
            {t.features.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 font-semibold text-[#0F172A] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-[#C49B63] before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button text={t.cta} link="/contact" type={2} />

            <div>
              <span className="text-slate-400 uppercase tracking-wider text-xs">
                {t.contactLabel}
              </span>
              <div className="text-[#C49B63] font-extrabold text-lg mt-1">
                +994 50 312 76 57
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src={imgSrc}
              alt="Turan İnşaat hovuz və spa layihəsi"
              fill
              quality={100}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}