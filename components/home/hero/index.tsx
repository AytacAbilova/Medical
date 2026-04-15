"use client";
import Image, { type StaticImageData } from "next/image";
import Button from "../../common/Button";
import { useEffect, useRef, type ReactNode } from "react";
import type { Locale } from "@/utils";

interface HeroProps {
  text?: string;
  video?: string;
  isHome?: boolean;
  img?: string | StaticImageData;
  subTitle?: string;
  locale?: Locale;
}

const heroContent: Record<Locale, {
  badge: string;
  title: ReactNode;
  desc: string;
  cta1: string;
  cta2: string;
  cta3: string;
}> = {
  az: {
    badge: "Dr.Beyrək Abbaszadə",
    title: (
      <>
        Ürəyinizi  <br /> Peşəkarlara Etibar Edin
      </>
    ),
    desc: "Ürək-damar xəstəliklərinin beynəlxalq protokollarla cərrahi müalicəsi. Koronar bypass, aorta anevrizması, ürək qapaq cərrahiyyəsi və anadangəlmə qüsurların aradan qaldırılmasında etibarlı mütəxəssis yanaşması. Açıq ürək əməliyyatından minimal invaziv prosedurlaradək – hər bir müdaxilədə peşəkarlıq, dəqiqlik və şəfqəti birləşdiririk.",
    cta1: "Randevu al",
    cta2: "Xidmətlərə bax",
    cta3:"Zəng et "
  },
};

export default function Hero({
  text,
  video,
  isHome,
  img,
  subTitle,
  locale = "az",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const content = heroContent[locale];

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const playVideo = () => {
      videoEl.play().catch(() => {});
    };

    playVideo();
    document.addEventListener("touchstart", playVideo, { once: true });

    return () => {
      document.removeEventListener("touchstart", playVideo);
    };
  }, []);

  return (
    <section
      aria-label="Dr. Beyrek Hero Section"
      className={` ${
        isHome
          ? "h-[calc(90vh-180px)] md:h-[calc(90vh)]"
          : "md:h-[400px]"
      }`}
    >
      <div className=" flex items-center overflow-hidden text-white h-full">
        {video && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {img && !video && (
          <Image
            src={img}
            alt="Ürək-Damar Cərrahiyyəsi Xidmətləri"
            fill
            priority
            quality={100}
            className="object-cover scale-105 brightness-75"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div data-aos="fade-up" className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 data-aos="fade-up" className="uppercase text-[#2A69AC] mb-4 text-[13px] sm:text-[15px] font-extrabold tracking-[0.2em]">
            {content.badge}
          </h3>

          <h1 data-aos="fade-up" className="text-3xl md:text-[56px] lg:text-[70px] font-extrabold leading-[1.05] tracking-tight mb-6">
            {isHome ? content.title : text}
          </h1>

          <p className={`text-[15px]  md:text-[20px] max-w-5xl mx-auto text-gray-200 ${isHome?'mb-20':'mb-10'} `}>
            {isHome ? content.desc : subTitle}
          </p>

          {isHome && (
            <div className="flex justify-center gap-4 flex-wrap">
              <Button text={content.cta1} link="/contact" type={2} />
              <Button text={content.cta2} link="/services" type={4} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
