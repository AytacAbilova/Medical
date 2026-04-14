"use client";
import Image from "next/image";
import Button from "../../common/Button";
import { useEffect, useRef } from "react";

interface HeroProps {
  text?: string;
  video?: string;
  isHome?: boolean;
  img?: string;
  subTitle?: string;
  locale?: "az" | "en";
}

const heroContent = {
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
  // en: {
  //   badge: "TURAN CONSTRUCTION LLC",
  //   title: (
  //     <>
  //       We bring life to water <br /> and value to comfort
  //     </>
  //   ),
  //   desc: "Turan Construction LLC is a licensed company providing professional design, construction, and installation of pool, spa, and sauna systems. With modern technologies, high-quality materials, and innovative designs, we create premium relaxation spaces.",
  //   cta1: "Create your pool",
  //   cta2: "View projects",
  // },
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
      aria-label="Turan İnşaat Hero Section"
      className={` ${
        isHome
          ? "h-[calc(90vh-180px)] md:h-[calc(90vh)]"
          : "md:h-[250px]"
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

        {/* IMAGE */}
        {img && !video && (
          <Image
            src={img}
            alt="Turan İnşaat hovuz və spa layihəsi"
            fill
            priority
            quality={100}
            className="object-cover scale-105 brightness-75"
          />
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* CONTENT */}
        <div data-aos="fade-up" className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* BADGE */}
          <h3 data-aos="fade-up" className="uppercase text-[#2A69AC] mb-4 text-[13px] sm:text-[15px] font-extrabold tracking-[0.2em]">
            {content.badge}
          </h3>

          {/* TITLE */}
          <h1 data-aos="fade-up" className="text-3xl md:text-[56px] lg:text-[70px] font-extrabold leading-[1.05] tracking-tight mb-6">
            {isHome ? content.title : text}
          </h1>

          {/* DESCRIPTION */}
          <p className={`text-[15px]  md:text-[20px] max-w-5xl mx-auto text-gray-200 ${isHome?'mb-20':'mb-10'} `}>
            {isHome ? content.desc : subTitle}
          </p>

          {/* CTA */}
          {isHome && (
            <div className="flex justify-center gap-4 flex-wrap">
              <Button text={content.cta1} link="/create" type={2} />
              <Button text={content.cta2} link="/projects" type={4} />
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
