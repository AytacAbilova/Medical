"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import imgSrc from "@/public/assets/images/aboutUss.png";

interface AboutProps {
  locale?: "az" | "en";
}

const content = {
  az: {
    badge: "HAQQIMIZDA",
    title: "Ürək cərrahiyyəsinin etibarlı ünvanı – Dr. Beyrək Abbaszadə",
    desc: `Lux International Hospital, Mərkəzi Klinika və Şirvan Diaqnostik Mərkəzdə fəaliyyət göstərən Dr. Abbaszadə ölkəmizdə ilk dəfə Şirvan bölgəsində açıq ürək əməliyyatı icra etmiş, bu sahədə tarixi bir nailiyyət qazanmışdır. Koronar bypass, qapaq əməliyyatları, aorta cərrahiyyəsi, minimal invaziv müdaxilələr və anadangəlmə ürək qüsurlarının korreksiyası onun geniş ixtisas dairəsini əhatə edir.`,
    features: [
      "Şirvan bölgəsində ilk açıq ürək əməliyyatı – 21 fevral 2024",
      "Xaricdə əməliyyatdan imtina edilmiş xəstələrin müvəffəqiyyətlə müalicəsi",
      "Endoskopik qapaq əməliyyatları və kiçik kəsikli bypass",
    ],
    cta: "Pulsuz məsləhət al",
    contactLabel: "24/7 Əlaqə Mərkəzi",
  },
  en: {
    badge: "ABOUT US",
    title: "Your trusted address for cardiac surgery – Dr. Bayrak Abbaszadeh",
    desc: `Dr. Abbaszadeh operates at Lux International Hospital, Merkezi Klinika, and Shirvan Diagnostic Center. He made history by performing the first open-heart surgery in the Shirvan region. His expertise covers coronary bypass, valve surgery, aortic surgery, minimally invasive procedures, and congenital heart defect corrections.`,
    features: [
      "First open-heart surgery in Shirvan – February 21, 2024",
      "Successful treatment of patients rejected abroad",
      "Endoscopic valve surgery and minimal incision bypass",
    ],
    cta: "Get free consultation",
    contactLabel: "24/7 Contact Center",
  },
};

export default function AboutUs({ locale = "az" }: AboutProps) {
  const t = content[locale];

  return (
    <section aria-label="About Dr. Beyrək Abbaszadə" className="bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-8 py-25 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* TEXT */}
        <div className="flex-1">
          <span data-aos="fade-right" className="text-[#C49B63] uppercase font-extrabold text-sm md:text-[16px] tracking-[0.2em] mb-4 block">
            {t.badge}
          </span>

          <h2 data-aos="fade-right" className="text-[#0F172A] font-extrabold text-3xl md:text-[56px] leading-tight mb-6">
            {t.title}
          </h2>

          <p data-aos="fade-right" className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            {t.desc}
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {t.features.map((item, i) => (
              <li
                key={i}
                data-aos="fade-right"
                className="relative pl-6 font-semibold text-[#0F172A] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-[#C49B63] before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>

          <div data-aos="fade-right" className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
          <div data-aos="fade-left" className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src={imgSrc}
              alt="Dr. Beyrək Abbaszadə – Ürək cərrahı"
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