"use client";
import Image, { type StaticImageData } from "next/image";
import Button from "../../common/Button";
import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/utils";

interface SlideData {
  img: string | StaticImageData;
  title: ReactNode;
  desc: string;
  cta1: string;
  cta2?: string;
}

interface HeroProps {
  text?: string;
  video?: string;
  isHome?: boolean;
  img?: string | StaticImageData;
  subTitle?: string;
  locale?: Locale;
}

const heroSlides: Record<Locale, SlideData[]> = {
  az: [
    {
      img: "https://i.pinimg.com/736x/48/ed/57/48ed57121a319db8653f72373726ea57.jpg",
      title: (
        <>
          About our AI company
        </>
      ),
      desc: "Lorem ipsum dolor sit amet consectetur id tortor nunc nulla amet mollis arcu ultricies sit neque vitae sed nunc viverra ipsum velit proin.",
     cta1: "Join our team",
    },
    {
      img: "https://i.pinimg.com/1200x/3b/cc/3b/3bcc3b42d3c0448113ca9b7b38210fce.jpg",
      title: (
        <>
          About our AI company
        </>
      ),
      desc: "Lorem ipsum dolor sit amet consectetur id tortor nunc nulla amet mollis arcu ultricies sit neque vitae sed nunc viverra ipsum velit proin.",      cta1: "Join our team",
    },
    {
      img: "https://i.pinimg.com/1200x/3b/cc/3b/3bcc3b42d3c0448113ca9b7b38210fce.jpg",
      title: (
        <>
          About our AI company
        </>
      ),
      desc: "Lorem ipsum dolor sit amet consectetur id tortor nunc nulla amet mollis arcu ultricies sit neque vitae sed nunc viverra ipsum velit proin.",       cta1: "Join our team",
    },
  ],
};

const SLIDE_DURATION = 5000;

export default function Hero({
  text,
  video,
  isHome,
  img,
  subTitle,
  locale = "az",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const slides = heroSlides[locale];

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning, slides.length]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    // Progress bar animasyonunu sıfırla
    if (progressRef.current) {
      progressRef.current.style.animation = "none";
      void progressRef.current.offsetHeight; // reflow trick
      progressRef.current.style.animation = `heroProgress ${SLIDE_DURATION}ms linear forwards`;
    }
  }, [slides.length]);

  useEffect(() => {
    if (!isHome) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHome, resetTimer]);

  // Video autoplay
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const playVideo = () => videoEl.play().catch(() => { });
    playVideo();
    document.addEventListener("touchstart", playVideo, { once: true });
    return () => document.removeEventListener("touchstart", playVideo);
  }, []);

  return (
    <>
      {/* Progress bar keyframe — sadəcə bir dəfə inject edilir */}
      <style>{`
        @keyframes heroProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      <section
        aria-label="Dr. Beyrek Hero Section"
        className={`relative overflow-hidden rounded-[30px] text-white mx-4 sm:mx-6 lg:mx-10 ${isHome
          ? "h-[40vh] sm:h-[60vh] md:h-[50vh]"
          : "h-[45vh] md:h-96"
          }`}
      >
        {/* ── SLIDER (yalnız isHome) ── */}
        {isHome && (
          <>
            {slides.map((slide, i) => (
              <div
                key={i}
                aria-hidden={i !== current}
                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image
                  src={slide.img}
                  alt={`Slide ${i + 1}`}
                  fill
                  priority={i === 0}
                  quality={90}
                  className={`object-cover brightness-75 transition-transform duration-[8000ms] ease-out ${i === current ? "scale-100" : "scale-105"
                    }`}
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70 z-20 pointer-events-none" />

            {/* Slide məzmunları */}
            {slides.map((slide, i) => (
              <div
                key={`content-${i}`}
                className={`absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 transition-all duration-700 ${i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
              >
                {/* <h3 className="uppercase text-[#4a9fd4] mb-4 text-[12px] sm:text-[14px] font-extrabold tracking-[0.25em]">
                  Dr. Beyrək Abbaszadə
                </h3> */}
                <h1 className="text-3xl md:text-[52px] lg:text-[66px] font-extrabold leading-[1.05] tracking-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-[15px] md:text-[18px] max-w-3xl mx-auto text-gray-200 mb-10 leading-relaxed">
                  {slide.desc}
                </p>
                <div className="flex justify-center gap-4 flex-wrap color-[#fff]">
                  <Button text={slide.cta1} link="/contact" type={2} />
                  {/* <Button text={slide.cta2} link="/services" type={4} /> */}
                </div>
              </div>
            ))}

            {/* Sol/Sağ Oxlar */}
            <button
              aria-label="Əvvəlki slide"
              onClick={() => { goTo(current - 1); resetTimer(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 hidden sm:inline-flex w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm items-center justify-center text-xl transition-all"
            >
              ‹
            </button>
            <button
              aria-label="Növbəti slide"
              onClick={() => { goTo(current + 1); resetTimer(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:inline-flex w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm items-center justify-center text-xl transition-all"
            >
              ›
            </button>

            {/* Dot İndikatörlar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => { goTo(i); resetTimer(); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current
                    ? "w-7 bg-[#4a9fd4]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[3px] z-40 bg-[#4a9fd4]"
              ref={progressRef}
              style={{ animation: `heroProgress ${SLIDE_DURATION}ms linear forwards` }}
            />
          </>
        )}

        {/* ── Slider olmayan səhifələr (normal img/video) ── */}
        {!isHome && (
          <>
            {video && (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay muted loop playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            )}
            {img && !video && (
              <Image
                src={img}
                alt="Ürək-Damar Cərrahiyyəsi Xidmətləri"
                fill priority quality={100}
                className="object-cover scale-105 brightness-75"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
            <div className="relative z-30 text-center container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl md:text-[56px] lg:text-[70px] font-extrabold leading-[1.05] tracking-tight mb-6">
                {text}
              </h1>
              <p className="text-[15px] md:text-[20px] max-w-5xl mx-auto text-gray-200 mb-10">
                {subTitle}
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
}