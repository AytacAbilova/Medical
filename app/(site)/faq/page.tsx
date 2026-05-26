"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Bug, Pill, Beef, FlaskConical, Syringe,
  AlertCircle, Eye, Microscope,
  Phone, MessageCircle, ArrowRight, ChevronRight,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────
const faqs = [
  {
    icon: Bug,
    question: "Övladımda iştahsızlıq, qarın ağrıları, gecələr diş qıcama var. Bu qurd xəstəliyidirmi?",
    answer: `Sadalanan əlamətlər həqiqətən də uşaqlarda parazitar infeksiyaların ən çox rast gəlinən təzahürləridir. Lakin bu simptomlar başqa mədə-bağırsaq xəstəliklərinin də əlamətləri ola bilər.\n\nİlk addım kimi heç bir özbaşına dərman qəbul etməyin — mütləq həkim infeksionist-parazitoloqa müraciət edin. Klinikada düzgün anamnez, ümumi qan analizi, nəcis analizi, perianal yapışqan lent metodu, USM müayinəsi və qanda İgE təyini ilə dəqiq diaqnoz qoyulur.\n\nMüalicə zamanı ailənin bütün üzvlərinin də müayinədən keçməsi vacibdir.`,
  },
  {
    icon: Pill,
    question: "Qurd müalicəsi zamanı vitamin preparatları qəbul etmək lazımdırmı?",
    answer: `Xeyr. Xəstəliyin səbəbi tapılmadan vitamin preparatlarının əhəmiyyətli effekti yoxdur. Düzgün diaqnoz və müalicə nəticəsində orqanizm parazitdən təmizləndikdə həzm prosesləri normallaşır, pozulmuş maddələr mübadiləsi öz-özünə bərpa olunur.\n\nVitamin əlavələri yalnız spesifik göstəriş əsasında və həkim nəzarəti altında verilməlidir.`,
  },
  {
    icon: Beef,
    question: "Çiy süd, az bişmiş ət və balıq yemək hansı xəstəliklərə yoluxma riski yaradır?",
    answer: `Çiy süddən bruselyoz, qarayara, botulizm, kampilobakterioz, listerioz yoluxa bilər. Az bişmiş ətdən Taenia saginata, Taenia solium, Echinococcus, Trichinella spiralis kimi parazitlər orqanizmə daxil olur. Çiy balıq opistorxoz və digər parazitar xəstəliklərə səbəb olur.\n\nTövsiyəm: yalnız qaynadılmış süd istifadə edin, əti yüksək temperaturda bişirin. Çiy balıq yeyirsinizsə, mütəmadi parazitoloji müayinələrdən keçin.`,
  },
  {
    icon: FlaskConical,
    question: "Hepatit C tam sağalır, yoxsa ömürlük xəstəlikdir?",
    answer: `Hepatit C üçün hələlik peyvənd olmasa da, müasir antiviral preparatların kombinasiyası ilə tam sağalma mümkündür. 3 aylıq müalicə kursundan sonra viral RNT-nin təyin olunmadığı çoxsaylı uğurlu nəticələr var.\n\nMüalicə olunmadığı halda hepatit C qaraciyər sirrozuna və ya xərçənginə səbəb ola bilər. Anti-HCV testi pozitiv olduqda təxirə salmadan həkim infeksionistə müraciət edin.`,
  },
  {
    icon: Syringe,
    question: "Hepatit B peyvəndini kim mütləq vurdurmalıdır?",
    answer: `Hepatit B peyvəndi 90-95% qoruyuculuq təmin edir. Aşağıdakı qruplara mütləq tövsiyə olunur: yeni doğulmuş körpələr, dializ xəstələri, səhiyyə işçiləri, hepatit B daşıyıcısı olan xəstənin ailə üzvləri, mütəmadi qan köçürülməsi olunan şəxslər.\n\nPeyvənd 3 dozadan ibarət sxem üzrə vurulur.`,
  },
  {
    icon: AlertCircle,
    question: "Antibiotiki özümü yaxşı hiss etdikdə erkən kəsmək təhlükəlidirmi?",
    answer: `Bəli, bu ciddi səhvdir. Antibiotiklərin yarıda kəsilməsi bakteriyaların tam məhv olmamasına, mutasiyaya uğramasına və rezistentlik formalaşmasına gətirib çıxarır.\n\nAntibiotiki təyin olunmuş tam dozada və tam müddətdə qəbul edin. Hər hansı yan təsir hiss etdikdə müalicəni dayandırmaq əvəzinə dərhal həkiminizlə əlaqə saxlayın.`,
  },
  {
    icon: Eye,
    question: "Linza istifadə edirəm, gözümdə qızarıqlıq, ağrı və bulanıq görmə var. Nə ola bilər?",
    answer: `Linza istifadəçiləri üçün ciddi xəbərdarlıq: Acanthamoeba keratiti adlanan parazitar göz infeksiyası bu xəstəliyə yoluxanların 85%-i linza istifadəçisidir. Vaxtında müalicə olunmasa korluğa səbəb ola bilir.\n\nLinzanı dərhal istifadə etməyi dayandırın və təxirə salmadan həkim infeksionistə və oftalmoloqa müraciət edin.`,
  },
  {
    icon: Microscope,
    question: "Bədənimdə parazit olduğunu necə müəyyən edə bilərəm? Hansı analizlər lazımdır?",
    answer: `Diaqnoz çoxşaxəli yanaşma tələb edir: ətraflı anamnez, ümumi qan analizi (eozinofiliya), nəcisin 3 dəfəlik mikroskopik müayinəsi, perianal yapışqan lent testi, İgE səviyyəsi, spesifik anticisim testləri, USM müayinəsi.\n\nKlinikamızda mövcud Parazitoloji Check-up paketi bu müayinələrin əksəriyyətini əhatə edir.`,
  },
];

// ─── FAQ ITEM ────────────────────────────────────────────────
function FaqItem({
  item, isOpen, onToggle,
}: {
  item: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 cursor-pointer
        ${isOpen
          ? "border-[#2388ff]/30 shadow-[0_4px_24px_rgba(35,136,255,0.08)] bg-white"
          : "border-gray-100 bg-white hover:border-[#2388ff]/20 hover:shadow-sm"
        }`}
      onClick={onToggle}
    >
      {/* Sual sırası */}
      <div className="flex items-center gap-4 px-6 py-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200
          ${isOpen ? "bg-[#2388ff]" : "bg-[#EEF3FA]"}`}>
          <Icon size={17} className={isOpen ? "text-white" : "text-[#2388ff]"} />
        </div>
        <p className={`flex-1 font-bold text-[15px] leading-snug transition-colors duration-200
          ${isOpen ? "text-[#2388ff]" : "text-[#001a56]"}`}>
          {item.question}
        </p>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300
          ${isOpen ? "bg-[#2388ff] border-[#2388ff]" : "border-gray-200"}`}>
          <ChevronRight size={14}
            className={`transition-all duration-300
              ${isOpen ? "rotate-90 text-white" : "text-gray-400"}`}
          />
        </div>
      </div>

      {/* Cavab */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-0">
          <div className="ml-14 border-l-2 border-[#EEF3FA] pl-4">
            {item.answer.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#465271] text-[14px] leading-[1.85] mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ƏSAS KOMPONENT ──────────────────────────────────────────
export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-white">

      {/* ══ 1. HERO ══ */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[#2388ff] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Sual-Cavab
          </p>
          <h1 className="text-3xl md:text-[52px] font-extrabold text-[#001a56] leading-tight mb-5">
            Suallarınız, cavablarımız
          </h1>
          <p className="text-[#465271] text-[16px] leading-relaxed max-w-lg mx-auto">
            Pasiyentlərimizin ən çox verdiyi sualları burada cavablandırdıq. Sualınız burada yoxdursa, bizimlə əlaqə saxlayın.
          </p>
        </div>
      </section>

      {/* ══ 2. 2 SÜTUN FAQ GRİD ══ */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. ÖNƏMLİ XƏBƏRDARLIQ BÖLÜMÜ ══ */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-[36px] font-extrabold text-[#001a56] mb-3">
              Bunları mütləq bilin
            </h2>
            <p className="text-[#465271] text-[15px] max-w-lg mx-auto">
              Dr. Aslanova tərəfindən xəstələrinə ən çox xatırlatdığı vacib məqamlar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "⚠️",
                title: "Özbaşına dərman qəbul etməyin",
                desc: "Diaqnoz qoyulmadan antihelmintik və ya antibiotik qəbulu həm effektsiz, həm də təhlükəli ola bilər.",
              },
              {
                icon: "🔬",
                title: "Dəqiq diaqnoz — düzgün müalicə",
                desc: "Eyni simptomlar fərqli xəstəliklərə işarə edə bilər. Yalnız laborator müayinə ilə dəqiq nəticə əldə olunur.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Ailə üzvlərini müayinə etdirin",
                desc: "Parazitar xəstəliklər ailə daxilində yayılır. Bir nəfərdə aşkarlanarsa, bütün ailə müayinəyə gəlməlidir.",
              },
              {
                icon: "💊",
                title: "Antibiotik kursunu tam bitirin",
                desc: "Özünüzü yaxşı hiss etsəniz belə, müalicəni yarıda kəsməyin — rezistentliyə yol açır.",
              },
              {
                icon: "🧪",
                title: "Nəcis analizi 3 dəfə verilməlidir",
                answer: "Bir dəfəlik nəcis analizi bəzən mənfi nəticə verə bilər. Düzgün diaqnoz üçün 3 dəfəlik müayinə tövsiyə olunur.",
                desc: "Bir dəfəlik nəcis analizi mənfi nəticə verə bilər. Dəqiq diaqnoz üçün 3 dəfəlik müayinə tövsiyə olunur.",
              },
              {
                icon: "🥩",
                title: "Qidanı yaxşı bişirin",
                desc: "Çiy süd, az bişmiş ət və balıq ciddi parazitar xəstəliklərə yoluxma mənbəyidir. Əti yüksək temperaturda bişirin.",
              },
            ].map((item, i) => (
              <div key={i}
                className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100 hover:border-[#2388ff]/20
                           hover:shadow-sm transition-all duration-200"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-[#001a56] font-extrabold text-[15px] mb-2">{item.title}</h3>
                <p className="text-[#465271] text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. CTA ══ */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl px-8 md:px-14 py-12 flex flex-col md:flex-row
                        items-center justify-between gap-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #001a56 0%, #0a2d7a 60%, #1a4a9a 100%)" }}
          >
            <div className="absolute right-0 top-0 w-72 h-72 rounded-full
                            bg-[#2388ff]/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="relative">
              <p className="text-[#2388ff] text-xs font-bold uppercase tracking-widest mb-2">
                Hələ sualınız var?
              </p>
              <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-snug">
                Birbaşa həkimlə əlaqə saxlayın
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-sm">
                Sualınız burada cavablanmayıbsa, zəng edin və ya randevu götürün.
              </p>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#2388ff] hover:bg-[#1a6fd4]
                           text-white font-bold text-sm px-7 py-3.5 rounded-full
                           transition-colors duration-200 whitespace-nowrap"
              >
                Randevu al <ArrowRight size={15} />
              </Link>
              <Link href="tel:+994XXXXXXXXX"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40
                           text-white font-semibold text-sm px-7 py-3.5 rounded-full
                           transition-colors duration-200 whitespace-nowrap"
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