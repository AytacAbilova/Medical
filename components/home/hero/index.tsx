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
}

export default function Hero({ text, video, isHome, img, subTitle }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => { });
    };

    playVideo();

    document.addEventListener("touchstart", playVideo, { once: true });

    return () => {
      document.removeEventListener("touchstart", playVideo);
    };
  }, []);
  const homeTitle = <>Premium hovuz və spa <br /> layihələrinin tikintisi</>;
  const homeText =
    "Hovuzlar, türk hamamı, sauna və spa məkanlarının layihələndirilməsi və tikintisi sahəsində peşəkar xidmət təqdim edirik. Müasir texnologiya, keyfiyyətli materiallar və təcrübəli komandamız ilə evinizdə və obyektinizdə komfortlu istirahət zonaları yaradırıq.";

  return (
    <section className={`${isHome ? 'h-[calc(90vh-180px)] md:h-[calc(90vh-150px)]' : 'md:h-[250px]'}`}>
      <div className={`flex items-center overflow-hidden text-white h-[calc(100%-100px)]`} id="content">
        {video && (
          <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={video} type="video/mp4" />
          </video>
        )}
        {
          img &&
          <Image

            quality={100}
            src={img}
            alt="Hero Image"
            fill
            className="object-cover brightness-75 hero-image"
          />
        }
        <div className="absolute inset-0 bg-black/30" />

        <div className="hero-overlayy" />
        <div className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="uppercase text-[#2A69AC] mb-4 sm:mb-5 text-[14px] sm:text-[16px] font-extrabold leading-[1.1em] tracking-[0.13em] font-manrope">
            Turan İnşaat
          </h3>

          <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold leading-[1.1em] tracking-[-0.03em] mb-5 sm:mb-6 font-manrope">
            {isHome ? homeTitle : text}
          </h1>


          <p className="text-[14px] sm:text-[16px] md:text-[18px] max-w-3xl mx-auto leading-[1.5] sm:leading-[1.6] text-[#ddd] mb-8 sm:mb-10 font-dm-sans">
            {isHome ? homeText : subTitle}
          </p>



          {isHome && (
            <div className="flex justify-center gap-4 sm:gap-5 flex-wrap">
              <Button text={"Öz hovuzunu yarat"} link={"/create"} type={2} />
              <Button text={"Layihələrimizə bax"} link={"/projects"} type={4} />
            </div>
          )}
        </div>
      </div>
    </section>


  );
}