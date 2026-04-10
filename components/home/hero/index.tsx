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
    badge: "TURAN İNŞAAT MMC",
    title: (
      <>
        Suya həyat, <br /> rahatlığa dəyər qatırıq
      </>
    ),
    desc: "Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət təqdim edir. Müasir texnologiyalar, keyfiyyətli materiallar və innovativ dizaynlarla komfortlu istirahət məkanları yaradırıq.",
    cta1: "Öz hovuzunu yarat",
    cta2: "Layihələrimizə bax",
  },
  en: {
    badge: "TURAN CONSTRUCTION LLC",
    title: (
      <>
        We bring life to water <br /> and value to comfort
      </>
    ),
    desc: "Turan Construction LLC is a licensed company providing professional design, construction, and installation of pool, spa, and sauna systems. With modern technologies, high-quality materials, and innovative designs, we create premium relaxation spaces.",
    cta1: "Create your pool",
    cta2: "View projects",
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
    //   <section className={`${isHome ? 'h-[calc(90vh-180px)] md:h-[calc(90vh-150px)]' : 'md:h-[250px]'}`}>
    // <div className={`flex items-center overflow-hidden text-white h-[calc(100%-100px)]`} id="content"></div>
    <section
      aria-label="Turan İnşaat Hero Section"
      className={` ${
        isHome
          ? "h-[calc(90vh-180px)] md:h-[calc(100vh)]"
          : "md:h-[250px]"
      }`}
    >
      <div className=" flex items-center overflow-hidden text-white h-full">
        {/* VIDEO */}
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
        <div className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* BADGE */}
          <h3 className="uppercase text-[#2A69AC] mb-4 text-[13px] sm:text-[15px] font-extrabold tracking-[0.2em]">
            {content.badge}
          </h3>

          {/* TITLE */}
          <h1 className="text-[28px] sm:text-[42px] md:text-[56px] lg:text-[60px] font-extrabold leading-[1.05] tracking-tight mb-6">
            {isHome ? content.title : text}
          </h1>

          {/* DESCRIPTION */}
          <p className={`text-[15px]  md:text-[16px] max-w-3xl mx-auto text-gray-200 ${isHome?'mb-20':'mb-10'} leading-relaxed`}>
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
