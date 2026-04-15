"use client";
import { useState } from "react";

type FaqItem = {
  tag: string;
  question: string;
  answer: string;
  bullets?: string[];
};

const faqs: FaqItem[] = [
  {
    tag: "Cərrahi üsullar",
    question: "Açıq və qapalı (minimal invaziv) əməliyyatlar arasındakı fərq nədir?",
    answer:
      "Klassik açıq cərrahiyyədə döş sümüyü tam kəsilərək ayrılır — bu, cərraha ürəyin bütün boşluqlarına birbaşa giriş imkanı yaradır. Minimal invaziv yanaşmada isə döş sümüyü kəsilmir; qabırğalararası kiçik kəsiklər və endoskopik kameralar vasitəsilə əməliyyat icra olunur.",
    bullets: [
      "Qapalı metod: daha az ağrı, qısa xəstəxana qalma müddəti",
      "Açıq metod: mürəkkəb vəziyyətlər üçün daha geniş giriş imkanı",
      "Hansı metodun tətbiq ediləcəyinə xəstənin anatomiyası əsasında cərrah qərar verir",
    ],
  },
  {
    tag: "Yüksək risk",
    question: "EF (ürəyin atım fraksiyası) 30% isə əməliyyat mümkündürmü?",
    answer:
      "Bəli, mümkündür — lakin bu yüksək risk qrupu sayılır. Dr. Abbaszadə EF-30%, miokard infarktı keçirmiş, diabetik xəstəni uğurla tam arterial revaskulyarizasiya ilə müalicə etmişdir. Bu cür ağır hallarda əməliyyat riski daha yüksəkdir, lakin müdaxilə edilməzsə uzunmüddətli proqnoz daha pis olur.",
  },
  {
    tag: "Sağalma",
    question: "Ürək əməliyyatından sonra sağalma müddəti nə qədərdir?",
    answer:
      "Standart açıq ürək bypass əməliyyatından sonra xəstəxanada qalma müddəti 5–10 gündür, o cümlədən reanimasiyada 1–2 gün. Tam sağalma isə 6–12 həftə çəkir.",
    bullets: [
      "Minimal invaziv prosedurlardan sonra bu müddət əhəmiyyətli dərəcədə qısalır",
      "Sağalma müddəti əməliyyatın növünə, yaşa və ümumi sağlamlıq vəziyyətinə görə fərqlənir",
    ],
  },
  {
    tag: "Azərbaycan imkanları",
    question:
      "Xaricə getmək lazımdırmı? Bu cür mürəkkəb əməliyyatlar Azərbaycanda mümkündürmü?",
    answer:
      "Dr. Abbaszadə dəfələrlə xaricdən imtina edilən xəstələri uğurla müalicə etmişdir. CABG x4 + nefrektomiya + trombektomiya kimi çox mürəkkəb birləşdirilmiş əməliyyatlar Azərbaycanda icra olunur. Şirvan kimi regionlarda da açıq ürək cərrahiyyəsi artıq mümkündür.",
  },
];

export const Products = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#0E172A] text-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#C49B63] font-semibold text-sm uppercase tracking-widest">
            Tez-tez sorulan suallar
          </span>
          <h2 className="text-3xl md:text-[48px] font-extrabold mt-3 leading-tight">
            Dr. Beyrək Abbaszadə <br />
            <span className="text-[#C49B63]">cavab verir</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl">
            Ürək cərrahiyyəsi, sağalma müddəti və müalicə üsulları haqqında ən
            çox sorulan suallar.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#C49B63]/60 bg-white/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  {/* Number */}
                  <span className="text-[#C49B63] text-xs font-semibold min-w-[24px]">
                    0{index + 1}
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-sm md:text-base font-medium text-white leading-snug">
                    {item.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#C49B63] border-[#C49B63]"
                        : "border-white/20"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <line
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="0"
                        y1="6"
                        x2="12"
                        y2="6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Body */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-14">
                      {/* Tag */}
                      <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-[#C49B63]/10 text-[#C49B63] border border-[#C49B63]/20 mb-4">
                        {item.tag}
                      </span>

                      {/* Answer */}
                      <p className="text-sm text-gray-300 leading-relaxed mb-3">
                        {item.answer}
                      </p>

                      {/* Bullets */}
                      {item.bullets && (
                        <ul className="flex flex-col gap-2 mt-3">
                          {item.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C49B63] flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};