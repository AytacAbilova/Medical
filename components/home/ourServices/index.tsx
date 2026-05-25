"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "swiper/css";

// ─── DATA ───────────────────────────────────────────────
const content = {
  az: {
    badge:    "Pasiyent Rəyləri",
    title:    "Pasiyentlər nə deyir?",
    desc:     "Uğurlu əməliyyatlar və məmnun pasiyentlər bizim əsas prioritetimizdir.",
    items: [
      {
        text: "Xaricdə əməliyyatdan imtina etdilər. Dr. Beyrək bizi qurtardı. İki ay sonra həyatımıza qayıtdıq.",
        name: "Pasiyent ailəsi",
      },
      {
        text: "82 yaşında bypass keçirdim. 6 gün sonra evə getdim. Çox sağ olun, həkimim.",
        name: "Hüseynqulu baba",
      },
      {
        text: "4 damar bypass – klinik prosedur çox peşəkar aparıldı. Bütün göstəricilər normal.",
        name: "Biləsuvar pasiyenti",
      },
      {
        text: "32 yaşında ASD ilə gəldim. 5 gün sonra evə yazıldım. Gözəl komanda!",
        name: "Gənc pasiyent",
      },
    ],
  },
};

// ─── KOMPONENT ──────────────────────────────────────────
export default function Testimonials({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* ── Header: sol başlıq / sağ izah (skrenşotdakı kimi) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div data-aos="fade-right">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49B63] mb-3">
              {t.badge}
            </p>
            <h2 className="text-3xl md:text-[48px] font-extrabold text-[#0F172A] leading-tight max-w-md">
              {t.title}
            </h2>
          </div>
          <p data-aos="fade-left" className="text-slate-500 max-w-sm leading-relaxed lg:text-right">
            {t.desc}
          </p>
        </div>

        {/* ── Slider ── */}
        <Swiper
          onSwiper={(sw) => (swiperRef.current = sw)}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {t.items.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="bg-[#EEF3FA] rounded-2xl p-7 flex flex-col justify-between min-h-[300px] h-full">
                {/* Yuxarı — ikon */}
                <Quote size={28} strokeWidth={1.5} className="text-[#2A69AC]" />

                {/* Orta — əsas mətn (skrenşotda title kimi böyük) */}
                <p className="text-[#0F172A] font-bold text-lg leading-snug mt-4 flex-1">
                  "{item.text}"
                </p>

                {/* Aşağı — pasiyent adı */}
                <div className="mt-8 pt-5 border-t border-blue-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2A69AC]/20 flex items-center justify-center">
                    <span className="text-[#2A69AC] font-bold text-sm">
                      {item.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{item.name}</p>
                    <p className="text-slate-400 text-xs">Pasiyent</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Ox naviqasiyası (skrenşotdakı kimi dairəvi) ── */}
        <div className="flex gap-3 mt-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Əvvəlki"
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
                       hover:border-[#2A69AC] hover:text-[#2A69AC] text-gray-600 transition-all duration-200"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Növbəti"
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
                       hover:border-[#2A69AC] hover:text-[#2A69AC] text-gray-600 transition-all duration-200"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}