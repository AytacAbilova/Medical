"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bug,
  Pill,
  Beef,
  FlaskConical,
  Syringe,
  AlertCircle,
  Eye,
  Microscope,
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import faqData from "@/data/question.json";

// ─── ICON MAP ───────────────────────────────
const iconMap: Record<string, any> = {
  Bug,
  Pill,
  Beef,
  FlaskConical,
  Syringe,
  AlertCircle,
  Eye,
  Microscope,
};

// ─── FAQ ITEM ───────────────────────────────
function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: {
    icon: any;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 cursor-pointer
        ${
          isOpen
            ? "border-[#2388ff]/30 shadow-[0_4px_24px_rgba(35,136,255,0.08)] bg-white"
            : "border-gray-100 bg-white hover:border-[#2388ff]/20 hover:shadow-sm"
        }`}
      onClick={onToggle}
    >
      {/* Question */}
      <div className="flex items-center gap-4 px-6 py-5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200
          ${isOpen ? "bg-[#2388ff]" : "bg-[#EEF3FA]"}`}
        >
          <Icon size={17} className={isOpen ? "text-white" : "text-[#2388ff]"} />
        </div>

        <p
          className={`flex-1 font-bold text-[15px] leading-snug transition-colors duration-200
          ${isOpen ? "text-[#2388ff]" : "text-[#001a56]"}`}
        >
          {item.question}
        </p>

        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300
          ${isOpen ? "bg-[#2388ff] border-[#2388ff]" : "border-gray-200"}`}
        >
          <ChevronRight
            size={14}
            className={`transition-all duration-300 ${
              isOpen ? "rotate-90 text-white" : "text-gray-400"
            }`}
          />
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="ml-14 border-l-2 border-[#EEF3FA] pl-4">
            {item.answer.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[#465271] text-[14px] leading-[1.85] mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ───────────────────────────────
export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[#2388ff] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            {faqData.badge}
          </p>

          <h1 className="text-3xl md:text-[52px] font-extrabold text-[#001a56] leading-tight mb-5">
            {faqData.title}
          </h1>

          <p className="text-[#465271] text-[16px] leading-relaxed max-w-lg mx-auto">
            {faqData.desc}
          </p>
        </div>
      </section>

      {/* FAQ GRID */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqData.questions.map((faq, i) => (
              <FaqItem
                key={i}
                item={{
                  ...faq,
                  icon: iconMap[faq.icon],
                }}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl px-8 md:px-14 py-12 flex flex-col md:flex-row
                        items-center justify-between gap-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #001a56 0%, #0a2d7a 60%, #1a4a9a 100%)",
            }}
          >
            <div className="relative">
              <p className="text-[#2388ff] text-xs font-bold uppercase mb-2">
                Hələ sualınız var?
              </p>

              <h3 className="text-white font-extrabold text-2xl md:text-3xl">
                Birbaşa həkimlə əlaqə saxlayın
              </h3>

              <p className="text-slate-400 text-sm mt-2 max-w-sm">
                Sualınız burada cavablanmayıbsa, zəng edin və ya randevu götürün.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="bg-[#2388ff] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2"
              >
                Randevu al <ArrowRight size={15} />
              </Link>

              <Link
                href="tel:+994XXXXXXXXX"
                className="border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                <Phone size={15} /> Zəng et
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}