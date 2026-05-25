"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── DATA (sonra dəyiş) ──────────────────────────────────────────────
const content = {
  az: {
    badge: "Xidmətlər",
    title: "Ürək-damar cərrahiyyəsinin tam spektri",
    desc: "Dr. [Ad Soyad] tərəfindən icra edilən müasir cərrahi müdaxilələr — ən sadədən ən mürəkkəbinə qədər.",
    ctaTitle: "Hansı xidmət sizə lazımdır?",
    ctaDesc: "Vəziyyətinizi izah edin — uyğun müdaxilə barədə məsləhət alın.",
    ctaBtn: "Müraciət et",
    ctaBtnSecondary: "Bütün xidmətlər",
    services: [
      {
        num: "01",
        title: "Açıq Ürək Əməliyyatı",
        slug: "/services/aciq-urek",
        desc: "Qapaq təmiri, ASD/VSD korreksiyası, ciddi ürək qüsurlarının cərrahi həlli.",
        tag: "Kardiopulmoner bypass",
      },
      {
        num: "02",
        title: "Koronar Bypass (CABG)",
        slug: "/services/koronar-bypass",
        desc: "2–4 damar şuntlaması. EF 30%-ə qədər ağır ürək çatışmazlığında da tətbiq edilir.",
        tag: "Tam arterial revaskulyarizasiya",
      },
      {
        num: "03",
        title: "Minimal İnvaziv Cərrahiyyə",
        slug: "/services/minimal-invaziv",
        desc: "Kiçik kəsiklərlə bypass, endoskopik qapaq təmiri. Döş sümüyü kəsilmir.",
        tag: "Sürətli sağalma",
      },
      {
        num: "04",
        title: "Anadangəlmə Ürək Qüsurları",
        slug: "/services/asd-vsd",
        desc: "Uşaq və böyüklərdə ASD, VSD korreksiyası — perikard yamağı texnikası.",
        tag: "ASD · VSD · PPVDA",
      },
      {
        num: "05",
        title: "Aorta Cərrahiyyəsi",
        slug: "/services/aorta",
        desc: "Anevrizmaların rezeksiyası, aorta diseksiyası, EVAR/TEVAR endovasküler stent.",
        tag: "EVAR / TEVAR daxildir",
      },
      {
        num: "06",
        title: "Periferik Damar",
        slug: "/services/periferik",
        desc: "Karotid endarterektomiya, aorta-bifemoral bypass, alt əzaların qan dövranının bərpası.",
        tag: "İnme profilaktikası",
      },
    ],
  },
};

export default function OurServices({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];

  return (
    <section className="bg-[#F8F9FB] py-28 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div data-aos="fade-right">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49B63] mb-3">
              {t.badge}
            </p>
            <h2 className="text-3xl md:text-[48px] font-extrabold text-[#0F172A] leading-tight max-w-lg">
              {t.title}
            </h2>
          </div>
          <p data-aos="fade-left" className="text-slate-500 max-w-sm leading-relaxed lg:text-right text-[15px]">
            {t.desc}
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.map((s, i) => (
            <Link
              key={s.slug}
              href={s.slug}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100
                         hover:border-[#2A69AC]/30 hover:shadow-[0_20px_60px_-15px_rgba(42,105,172,0.15)]
                         transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Arxa fon dekor */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full
                              bg-[#EEF3FA] opacity-0 group-hover:opacity-100
                              transition-all duration-500 pointer-events-none" />

              {/* Nömrə */}
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C49B63] mb-6 block">
                {s.num}
              </span>

              {/* Başlıq */}
              <h3 className="text-[20px] font-extrabold text-[#0F172A] leading-snug mb-3
                             group-hover:text-[#2A69AC] transition-colors duration-300">
                {s.title}
              </h3>

              {/* Xətt */}
              <div className="w-10 h-[2px] bg-[#C49B63] mb-4
                              group-hover:w-full transition-all duration-500 ease-out" />

              {/* Təsvir */}
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {s.desc}
              </p>

              {/* Alt hissə */}
              <div className="mt-7 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider
                                 text-[#2A69AC] bg-[#EEF3FA] px-3 py-1 rounded-full">
                  {s.tag}
                </span>
                <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center
                                 group-hover:bg-[#2A69AC] group-hover:border-[#2A69AC]
                                 transition-all duration-300">
                  <ArrowRight
                    size={14}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div
          data-aos="fade-up"
          className="mt-16 rounded-2xl bg-[#0F172A] px-8 py-10 md:py-12
                     flex flex-col md:flex-row items-center justify-between gap-6
                     relative overflow-hidden"
        >
          {/* Arxa dekor */}
          <div className="absolute right-0 top-0 w-72 h-72 rounded-full
                          bg-[#2A69AC]/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-48 h-48 rounded-full
                          bg-[#C49B63]/5 translate-y-1/2 pointer-events-none" />

          <div className="relative">
            <p className="text-[#C49B63] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Konsultasiya
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-snug">
              {t.ctaTitle}
            </h3>
            <p className="mt-2 text-slate-400 text-sm md:text-base">
              {t.ctaDesc}
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full
                         bg-[#2A69AC] hover:bg-[#1e5490] text-white font-semibold
                         text-sm px-7 py-3.5 transition-colors duration-300 whitespace-nowrap"
            >
              {t.ctaBtn}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full
                         border border-white/20 hover:border-white/50 text-white
                         font-semibold text-sm px-7 py-3.5 transition-colors duration-300 whitespace-nowrap"
            >
              {t.ctaBtnSecondary}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}