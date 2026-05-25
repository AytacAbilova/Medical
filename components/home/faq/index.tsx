"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaLightbulb, FaLock, FaWrench, FaCode, FaUserShield, FaClock } from "react-icons/fa6";
import "swiper/css";

// ─── DATA ────────────────────────────────────────────────────
const content = {
    az: {
        title: "Suallarınız var?",
        desc: "Pasiyentlərimizin ən çox verdiyi suallara burada cavab veririk. Əlavə sualınız varsa bizimlə əlaqə saxlayın.",
        faqs: [
            {
                icon: FaLightbulb,
                question: "Dr. [Ad Soyad] hansı xəstəliklərə baxır?",
                answer: "Koronar bypass, qapaq əməliyyatları, aorta cərrahiyyəsi, minimal invaziv müdaxilələr və anadangəlmə ürək qüsurlarının korreksiyası.",
            },
            {
                icon: FaLock,
                question: "Məlumatlarım təhlükəsizdirmi?",
                answer: "Bütün pasiyent məlumatları beynəlxalq standartlara uyğun olaraq qorunur. Şəxsi məlumatlarınız heç bir üçüncü tərəflə paylaşılmır.",
            },
            {
                icon: FaWrench,
                question: "Əməliyyatdan sonra nə qədər sağalma müddəti lazımdır?",
                answer: "Minimal invaziv əməliyyatlarda sağalma müddəti 5–7 gündür. Açıq ürək əməliyyatlarında isə ortalama 2–4 həftə tələb olunur.",
            },
            {
                icon: FaCode,
                question: "Onlayn konsultasiya mümkündürmü?",
                answer: "Bəli, video zəng vasitəsilə ilkin konsultasiya almaq mümkündür. Əlaqə bölməsindən randevu təyin edə bilərsiniz.",
            },
            {
                icon: FaUserShield,
                question: "Sığorta ilə müalicə mümkündürmü?",
                answer: "Əsas sığorta şirkətləri ilə işləyirik. Daha ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
            },
            {
                icon: FaClock,
                question: "Randevu almaq nə qədər çəkir?",
                answer: "Saytdan və ya telefon vasitəsilə 2 dəqiqə ərzində randevu ala bilərsiniz. Təcili hallarda eyni gün qəbul mümkündür.",
            },
        ],
    },
};

export default function FAQ({ locale = "az" }: { locale?: "az" }) {
    const t = content[locale];
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-white md:py-24 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

                {/* Header: sol böyük başlıq / sağ mətn */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between md:gap-6 md:mb-14 mb-8">
                    <h2
                        data-aos="fade-right"
                        className="text-3xl md:text-[48px] font-extrabold text-[#001a56] leading-tight max-w-xs"
                    >
                        {t.title}
                    </h2>
                    <p
                        data-aos="fade-left"
                        className="text-[#465271] text-[15px] leading-relaxed max-w-md lg:text-right mt-2"
                    >
                        {t.desc}
                    </p>
                </div>

                {/* Slider */}
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
                    {t.faqs.map((faq, i) => {
                        const Icon = faq.icon;
                        return (
                            <SwiperSlide key={i} className="!h-auto">
                                <div className="bg-[#EEF3FA] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[240px] md:min-h-[380px] h-full">
                                    {/* Yuxarı: icon + sual */}
                                    <div>
                                        <Icon size={22} color="#2388ff" className="mb-6" />
                                        <h3 className="text-[#001a56] font-extrabold text-[22px] leading-snug">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    {/* Aşağı: cavab */}
                                    <p className="text-[#465271] text-[14px] leading-relaxed mt-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Ox naviqasiyası */}
                <div className="flex justify-center gap-3 mt-10">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Əvvəlki"
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
                       text-gray-500 hover:border-[#2388ff] hover:text-[#2388ff] transition-all duration-200"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Növbəti"
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center
                       text-gray-500 hover:border-[#2388ff] hover:text-[#2388ff] transition-all duration-200"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
}