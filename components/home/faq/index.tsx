"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  FaLightbulb,
  FaLock,
  FaWrench,
  FaCode,
  FaUserShield,
  FaClock,
} from "react-icons/fa6";

import faqData from "@/data/question.json";

import "swiper/css";

// ─── ICON MAP ───────────────────────────────
const iconMap: Record<string, any> = {
  FaLightbulb,
  FaLock,
  FaWrench,
  FaCode,
  FaUserShield,
  FaClock,
};

// ─── COMPONENT ───────────────────────────────
export default function HomeFAQ({ locale = "az" }: { locale?: "az" }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white md:py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between md:gap-6 md:mb-14 mb-8">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-[48px] font-extrabold text-[#001a56] leading-tight max-w-xs"
          >
            {faqData.badge}
          </h2>

          <p
            data-aos="fade-left"
            className="text-[#465271] text-[15px] leading-relaxed max-w-md lg:text-right mt-2"
          >
            {faqData.desc}
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          onSwiper={(sw) => (swiperRef.current = sw)}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {faqData.questions.map((faq, i) => {
            const Icon = iconMap[faq.icon];

            return (
              <SwiperSlide key={i} className="!h-auto">
                <div className="bg-[#EEF3FA] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[260px] h-full">

                  {/* ICON + QUESTION */}
                  <div>
                    {Icon && (
                      <Icon size={22} color="#2388ff" className="mb-5" />
                    )}

                    <h3 className="text-[#001a56] font-extrabold text-[18px] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* SHORT ANSWER */}
                  <p className="text-[#465271] text-[14px] leading-relaxed mt-6 line-clamp-3">
                    {faq.answer}
                  </p>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:border-[#2388ff] hover:text-[#2388ff] transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
            text-gray-500 hover:border-[#2388ff] hover:text-[#2388ff] transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="text-[#2388ff] font-semibold hover:underline"
          >
            Bütün suallara bax →
          </Link>
        </div>

      </div>
    </section>
  );
}