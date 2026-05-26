import Image from "next/image";
import Link from "next/link";
import doctorData from "@/data/about.json";
import {
  Phone, ShieldCheck, Stethoscope,
  GraduationCap, Briefcase, BookOpen,
  Award, Users, CheckCircle2,
  HeartPulse, Microscope, Zap,
  Dna, Activity, Waves,
} from "lucide-react";
import { Metadata } from "next";

const specializationIcons = [
  HeartPulse, Activity, Zap, Dna, Microscope, Waves,
];

// ─── KİÇİK KOMPONENTLƏR ──────────────────────────────────────
function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-[#EEF3FA] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[#2388ff]" />
      </div>
      <h3 className="text-[#001a56] font-extrabold text-[20px]">{title}</h3>
    </div>
  );
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[11px] font-bold text-[#2388ff] bg-[#EEF3FA]
                       px-3 py-1 rounded-full whitespace-nowrap shrink-0 mt-0.5">
        {year}
      </span>
      <p className="text-[#465271] text-[15px] leading-relaxed">{text}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 size={16} className="text-[#2388ff] shrink-0 mt-0.5" />
      <p className="text-[#465271] text-[15px] leading-relaxed">{text}</p>
    </div>
  );
}

function SpecCard({ f, i }: { f: { title: string; desc: string }; i: number }) {
  const Icon = specializationIcons[i];
  return (
    <div
      className="group flex items-start gap-4 bg-white border border-gray-100
                 hover:border-[#2388ff]/30 p-5 rounded-2xl transition-all duration-300 hover:shadow-sm"
    >
      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#EEF3FA] flex items-center justify-center
                      group-hover:bg-[#2388ff] transition-colors duration-300">
        <Icon size={16} className="text-[#2388ff] group-hover:text-white transition-colors duration-300" />
      </div>
      <div>
        <h3 className="text-[#001a56] font-bold text-sm mb-1">{f.title}</h3>
        <p className="text-[#465271] text-xs leading-relaxed">{f.desc}</p>
      </div>
    </div>
  );
}

// ─── ƏSAS KOMPONENT ──────────────────────────────────────────
export const metadata: Metadata = {
  title: doctorData.seo.metaTitle,
  description: doctorData.seo.metaDesc,
  keywords: doctorData.seo.keywords,
  openGraph: {
    title: doctorData.seo.metaTitle,
    description: doctorData.seo.metaDesc,
    type: "profile",
    locale: "az_AZ",
    siteName: doctorData.clinic,
  },
  alternates: {
    canonical: "https://yourdomain.az/about",
  },
};

export default function AboutPage() {
  const t = doctorData;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

          {/*
            LAYOUT STRATEGİYASI:
            • Mobil  → flex-col: [Şəkil] → [Metin bloku] → [Bütün 6 kart]
            • Desktop → flex-row: [Sol: Metin + ilk 3 kart] | [Sağ: Şəkil + son 3 kart]
          */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── SAĞ KOLON (ŞƏKIL) — mobilda YUXARI gəlir (order-first) ── */}
            <div className="w-full lg:w-auto lg:flex-shrink-0
                            order-first lg:order-last
                            flex flex-col gap-6">

              {/* Şəkil kartı */}
              <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
                <div className="relative rounded-3xl overflow-hidden border border-[#2388ff]/20">
                  <Image
                    src=""
                    alt={`${t.name} — ${t.titleShort}`}
                    width={420}
                    height={470}
                    quality={95}
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32
                                  bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
                </div>

                {/* Lisenziya badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2
                                bg-[#001a56] text-white px-3.5 py-2 rounded-xl shadow-lg">
                  <ShieldCheck size={13} />
                  <span className="font-semibold text-xs tracking-wide">{t.licenseBadge}</span>
                </div>

                {/* Üzv badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-white/90 backdrop-blur border border-[#2388ff]/25
                                   text-[#001a56] text-xs px-5 py-2 rounded-full font-semibold shadow-sm">
                    {t.memberBadge}
                  </span>
                </div>
              </div>

              {/*
                Son 3 kart:
                • Mobil  → GİZLİ (hidden) — aşağıda bütün 6 kart birlikdə göstərilir
                • Desktop → görünür (lg:flex)
              */}
              <div className="hidden lg:flex flex-col gap-3 max-w-[420px] mx-auto lg:mx-0 w-full">
                {t.specializations.slice(3, 6).map((f, i) => (
                  <SpecCard key={i + 3} f={f} i={i + 3} />
                ))}
              </div>
            </div>

            {/* ── SOL KOLON (MƏTİN + İLK 3 KART) ── */}
            <div className="flex-1 flex flex-col gap-7 z-10 max-w-2xl
                            order-last lg:order-first">

              {/* Badge xətti */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#2388ff]" />
                <span className="text-[#2388ff] uppercase tracking-[0.25em] font-bold text-xs">
                  {t.badge}
                </span>
              </div>

              {/* Başlıq */}
              <h1 className="font-extrabold text-3xl md:text-[48px] leading-[1.1] text-[#001a56]">
                {t.title_hero}
              </h1>

              {/* Açıqlama */}
              <p className="text-[#465271] text-[15px] md:text-[16px] leading-[1.8]">
                {t.desc}
              </p>

              {/* Xəstəxana sətri */}
              <div className="flex items-start gap-3 bg-[#EEF3FA] border border-[#2388ff]/20 rounded-xl px-5 py-3">
                <Stethoscope size={15} className="text-[#2388ff] mt-0.5 shrink-0" />
                <p className="text-[#465271] text-sm leading-relaxed">{t.hospitals}</p>
              </div>

              {/* CTA + Telefon */}
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#001a56] hover:bg-[#2388ff]
                             text-white font-semibold text-sm px-7 py-3.5 rounded-full
                             transition-colors duration-200"
                >
                  {t.cta}
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EEF3FA] flex items-center justify-center">
                    <Phone size={14} className="text-[#2388ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#465271] uppercase tracking-wider">{t.contact}</p>
                    <p className="font-bold text-[#001a56] text-base mt-0.5">{t.phone}</p>
                  </div>
                </div>
              </div>

              {/*
                İlk 3 kart:
                • Mobil  → GİZLİ (hidden) — aşağıda bütün 6 kart birlikdə göstərilir
                • Desktop → görünür (lg:flex)
              */}
              <div className="hidden lg:flex flex-col gap-3">
                {t.specializations.slice(0, 3).map((f, i) => (
                  <SpecCard key={i} f={f} i={i} />
                ))}
              </div>
            </div>
          </div>

          {/*
            MOBİL ÜÇÜN BÜTÜN 6 KART — yalnız mobil/tablet görünür (lg:hidden)
            Şəkil + metin blokdan SONRA gəlir
          */}
          <div className="mt-8 flex flex-col gap-3 lg:hidden">
            {t.specializations.map((f, i) => (
              <SpecCard key={i} f={f} i={i} />
            ))}
          </div>

        </div>
      </section>

      {/* Bioqrafiya + Təhsil + Təcrübə */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-8 border border-gray-100 lg:col-span-2">
              <SectionTitle icon={BookOpen} title="Bioqrafiya" />
              {t.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#465271] text-[15px] leading-[1.85] mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <SectionTitle icon={GraduationCap} title="Təhsil" />
              <div className="flex flex-col gap-4">
                {t.education.map((item, i) => (
                  <TimelineItem key={i} year={item.year} text={item.text} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <SectionTitle icon={Briefcase} title="İş Təcrübəsi" />
              <div className="flex flex-col gap-4">
                {t.workExperience.map((item, i) => (
                  <TimelineItem key={i} year={item.year} text={item.text} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <SectionTitle icon={BookOpen} title="Seminarlar" />
              <div className="flex flex-col gap-3">
                {t.seminars.map((item, i) => (
                  <ListItem key={i} text={item} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <SectionTitle icon={Award} title="Sertifikatlar" />
              <div className="flex flex-col gap-3">
                {t.certificates.map((item, i) => (
                  <ListItem key={i} text={item} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 lg:col-span-2">
              <SectionTitle icon={Users} title="Üzv olduğu birliklər" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.memberships.map((item, i) => (
                  <ListItem key={i} text={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": t.name,
            "jobTitle": t.title,
            "worksFor": {
              "@type": "MedicalOrganization",
              "name": t.clinic,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": t.address,
                "addressLocality": "Bakı",
                "addressCountry": "AZ",
              },
            },
            "telephone": t.phone,
            "email": t.email,
            "sameAs": [t.instagram, t.facebook],
            "medicalSpecialty": "Infectious Disease",
            "description": t.seo.metaDesc,
          }),
        }}
      />
    </main>
  );
}