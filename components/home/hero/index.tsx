"use client";
import Button from "../../common/Button";

interface HeroProps {
  text?: string;
  video?: string;
  isHome?: boolean;
}

export default function Hero({ text, video, isHome }: HeroProps) {
  const homeTitle = <>Premium hovuz və spa <br /> layihələrinin tikintisi</>;
  const homeText =
    "Hovuzlar, türk hamamı, sauna və spa məkanlarının layihələndirilməsi və tikintisi sahəsində peşəkar xidmət təqdim edirik. Müasir texnologiya, keyfiyyətli materiallar və təcrübəli komandamız ilə evinizdə və obyektinizdə komfortlu istirahət zonaları yaradırıq.";

  return (
    <section className="flex items-center overflow-hidden text-white h-[calc(100%-150px)]" id="content">
      {video && (
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="hero-overlayy" />
      <div className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="uppercase text-[#2A69AC] mb-4 sm:mb-5 text-[14px] sm:text-[16px] font-extrabold leading-[1.1em] tracking-[0.13em] font-manrope">
          Turan İnşaat
        </h3>

        <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold leading-[1.1em] tracking-[-0.03em] mb-5 sm:mb-6 font-manrope">
          {isHome ? homeTitle : text}
        </h1>

        {isHome && (
          <p className="text-[16px] sm:text-[18px] max-w-3xl mx-auto leading-[1.5] sm:leading-[1.6] text-[#ddd] mb-8 sm:mb-10 font-dm-sans">
            {homeText}
          </p>
        )}

        {isHome && (
          <div className="flex justify-center gap-4 sm:gap-5 flex-wrap">
            <Button text={"Öz hovuzunu yarat"} link={"/create"} type={2} />
            <Button text={"Layihələrimizə bax"} link={"/projects"} type={4} />
          </div>
        )}
      </div>
    </section>
  );
}