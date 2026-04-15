"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import certImg from "@/public/assets/images/aboutImg.png";

interface Props {
  locale?: "az" | "en";
}

const content = {
  az: {
    about: {
      badge: "HAQQIMIZDA",
      title: "Ürək-damar cərrahı Dr. Beyrək Abbaszadə haqqında",
      desc: `Dr. Beyrək Abbaszadə Azərbaycanın aparıcı ürək-damar cərrahlarından biridir. Müasir cərrahi texnologiyaların tətbiqi, mürəkkəb klinik halların uğurla həlli və pasiyent məmnuniyyətini ən yüksək səviyyədə saxlamaqla tanınır.`,
      specializations: [
        { title: "Açıq ürək əməliyyatları", desc: "Koronar bypass, qapaq təmiri/dəyişdirilməsi" },
        { title: "Minimal invaziv cərrahiyyə", desc: "Kiçik kəsiklərlə müasir əməliyyat üsulları" },
        { title: "Aorta cərrahiyyəsi", desc: "Anevrizma, diseksiya, arkus rekonstruksiyası" },
        { title: "Anadangəlmə qüsurlar", desc: "Uşaq və böyüklərdə ürək qüsurlarının müalicəsi" },
        { title: "Periferik damar xəstəlikləri", desc: "Karotid endarterektomiya, aorta-bifemoral bypass, varikoz venalar" },
        { title: "Kompleks birləşdirilmiş əməliyyatlar", desc: "Çoxsahəli nadir müdaxilələr" },
      ],
      cta: "Konsultasiya üçün müraciət et",
      contact: "24/7 Əlaqə Mərkəzi",
      licenseBadge: "Rəsmi tibb fəaliyyəti",
      hospitals: "Lux International Hospital · Mərkəzi Klinika · Şirvan Diaqnostik Mərkəz",
    },

    education: {
      title: "Təhsil, Mentorluq & Beynəlxalq Fəaliyyət",
      mentor: {
        icon: "👨‍🏫",
        title: "Mentor",
        desc: "Prof. Kamran Kazımoğlu Musayev – Azərbaycanda ürək-damar cərrahiyyəsinin ən böyük nüfuzlarından biri",
      },
      society: {
        icon: "🏛️",
        title: "Elmi Cəmiyyət",
        desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyəti (AÜDCC) – tam üzv",
      },
      international: {
        icon: "🌍",
        title: "Beynəlxalq Fəaliyyət",
        desc: "Azərbaycan-Özbəkistan tibbi əməkdaşlığı çərçivəsində Shox Med Hospital (Daşkənd) qonaq cərrahı",
      },
    },

    achievements: {
      title: "Əsas Nailiyyətlər",
      items: [
        {
          icon: "🥇",
          title: "Tarixi Əməliyyat",
          desc: "21 fevral 2024-cü ildə TƏBİB nəzarəti altında Şirvan Diaqnostik Mərkəzdə bölgənin ilk açıq ürək əməliyyatı icra edildi. 55 yaşlı xəstə 3 saatlıq müdaxilədən sonra uğurla sağaldı.",
        },
        {
          icon: "🏛️",
          title: "AÜDCC 20-illik Yubileyi",
          desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyətinin 20-illik yubileyi tədbirinin iştirakçısı.",
        },
        {
          icon: "🎓",
          title: "Bakı Ürək Günləri VIII",
          desc: "VIII Beynəlxalq Konqresin iştirakçısı – Prof. Kamran Kazımoğlu Musayevlə birlikdə.",
        },
        {
          icon: "🎓",
          title: "Bakı Ürək Günləri IX",
          desc: "BÜG2025 – IX Beynəlxalq Konqresin iştirakçısı.",
        },
        {
          icon: "📊",
          title: "AÜDCC Seminari",
          desc: "17 may 2024 – \"Aorta patologiyalarının müalicəsində multidissiplinar müasir yanaşma\" çərçivəsində mürəkkəb aorta qövsünün əvəzlənməsi mövzusunda mühazirə.",
        },
        {
          icon: "🌍",
          title: "Beynəlxalq Dəvət",
          desc: "5-6 sentyabr – Daşkənd Shox Med Hospital-da qonaq cərrah kimi fəaliyyət və pulsuz konsultasiyalar.",
        },
        {
          icon: "❤️",
          title: "Nadir Birləşdirilmiş Əməliyyat",
          desc: "63 yaşlı xəstədə eyni seansta CABG x4 + sağ böyrəyin nefrektomiyası + aşağı boş venanın trombektomiyası – üç fərqli sahəni əhatə edən nadir müdaxilə.",
        },
      ],
    },

    story: {
      title: "Peşəkar Fəaliyyət",
      desc: `Dr. Abbaszadə fəaliyyətində yüksək riskli və mürəkkəb ürək əməliyyatlarını uğurla icra etməsi ilə tanınır. Onun rəhbərliyi ilə icra edilən əməliyyatlar beynəlxalq standartlara uyğun şəkildə həyata keçirilir.

O, həmçinin beynəlxalq tibbi əməkdaşlıqlarda iştirak etmiş, qonaq cərrah kimi xarici klinikalarda təcrübə mübadiləsi aparmışdır.`,
    },

    philosophy: {
      title: "Klinik Fəlsəfə",
      quotes: [
        {
          text: "Əsərinin üzərində imzası olmayan yeganə sənətkar müəllimdir.",
          author: "M.K. Atatürk",
        },
        {
          text: "Hər bir həyat bizim üçün dəyərlidir. Pasiyentin üzündəki gülüş – bizim ən böyük mükafatımızdır.",
          author: "Dr. Beyrək Abbaszadə",
        },
      ],
      desc: "Dr. Abbaszadənin yanaşması təkcə texniki cərrahiyyə deyil, insana dəyər verən tibbi fəlsəfəyə əsaslanır. Hər uğurun arxasında güclü mentorluq, komanda işi və məsuliyyət dayanır.",
    },

    testimonials: {
      title: "Pasiyent Rəyləri",
      items: [
        {
          name: "Pasiyent ailəsi",
          text: "Xaricdə əməliyyatdan imtina etdilər, amma Dr. Beyrək bizi xilas etdi. Qısa zamanda normal həyata qayıtdıq.",
        },
        {
          name: "Hüseynqulu baba",
          text: "82 yaşımda bypass əməliyyatı oldum. 6 gün sonra evə çıxdım. Sonsuz təşəkkür edirəm.",
        },
        {
          name: "Pasiyent",
          text: "Çox riskli əməliyyatı uğurla keçirdim. Özümü yenidən doğulmuş kimi hiss edirəm.",
        },
      ],
    },
  },

  en: {
    about: {
      badge: "ABOUT",
      title: "About Cardiovascular Surgeon Dr. Beyrək Abbaszadə",
      desc: `Dr. Beyrək Abbaszadə is one of Azerbaijan's leading cardiovascular surgeons, recognized for applying modern surgical technologies and successfully managing complex clinical cases.`,
      specializations: [
        { title: "Open-heart surgery", desc: "Coronary bypass, valve repair and replacement" },
        { title: "Minimally invasive surgery", desc: "Advanced small-incision cardiac procedures" },
        { title: "Aortic surgery", desc: "Aneurysm, dissection, arch reconstruction" },
        { title: "Congenital heart defects", desc: "Surgical correction for children and adults" },
        { title: "Peripheral vascular diseases", desc: "Carotid endarterectomy, aorto-bifemoral bypass, varicose veins" },
        { title: "Complex combined procedures", desc: "Rare multi-domain surgical interventions" },
      ],
      cta: "Request consultation",
      contact: "24/7 Contact Center",
      licenseBadge: "Licensed medical practice",
      hospitals: "Lux International Hospital · Mərkəzi Klinika · Shirvan Diagnostic Center",
    },

    education: {
      title: "Education, Mentorship & International Work",
      mentor: {
        icon: "👨‍🏫",
        title: "Mentor",
        desc: "Prof. Kamran Kazımoğlu Musayev – one of the most distinguished cardiovascular surgeons in Azerbaijan",
      },
      society: {
        icon: "🏛️",
        title: "Scientific Society",
        desc: "Azerbaijan Cardiovascular Surgery Society (ACSS) – full member",
      },
      international: {
        icon: "🌍",
        title: "International Activity",
        desc: "Visiting surgeon at Shox Med Hospital (Tashkent) within the framework of Azerbaijan-Uzbekistan medical cooperation",
      },
    },

    achievements: {
      title: "Key Achievements",
      items: [
        {
          icon: "🥇",
          title: "Historic Surgery",
          desc: "On February 21, 2024, the first open-heart surgery under TABIB supervision was performed at Shirvan Diagnostic Center. A 55-year-old patient recovered successfully after a 3-hour procedure.",
        },
        {
          icon: "🏛️",
          title: "ACSS 20th Anniversary",
          desc: "Participant in the 20th anniversary event of the Azerbaijan Cardiovascular Surgery Society.",
        },
        {
          icon: "🎓",
          title: "Baku Heart Days VIII",
          desc: "Participant in the 8th International Congress alongside Prof. Kamran Kazımoğlu Musayev.",
        },
        {
          icon: "🎓",
          title: "Baku Heart Days IX",
          desc: "BHD2025 – Participant in the 9th International Congress.",
        },
        {
          icon: "📊",
          title: "ACSS Seminar",
          desc: "May 17, 2024 – Delivered a lecture on complex aortic arch replacement under the theme of multidisciplinary modern approaches in aortic pathology treatment.",
        },
        {
          icon: "🌍",
          title: "International Invitation",
          desc: "Sept 5-6 – Activity as a visiting surgeon at Shox Med Hospital in Tashkent, providing free consultations.",
        },
        {
          icon: "❤️",
          title: "Rare Combined Procedure",
          desc: "In a 63-year-old patient: CABG x4 + right nephrectomy + inferior vena cava thrombectomy performed in a single session – a rare intervention spanning three distinct surgical domains.",
        },
      ],
    },

    story: {
      title: "Professional Practice",
      desc: `Dr. Abbaszadə is recognized for successfully performing high-risk and complex cardiac surgeries aligned with international standards.

He has participated in international medical collaborations and shared expertise as a visiting surgeon at foreign clinics.`,
    },

    philosophy: {
      title: "Clinical Philosophy",
      quotes: [
        {
          text: "The only artist who does not sign his work is a teacher.",
          author: "M.K. Atatürk",
        },
        {
          text: "Every life is precious to us. The smile on a patient's face is our greatest reward.",
          author: "Dr. Beyrək Abbaszadə",
        },
      ],
      desc: "Dr. Abbaszadə's approach is not merely technical surgery – it is grounded in a medical philosophy that values every human life. Behind every success stands strong mentorship, teamwork, and responsibility.",
    },

    testimonials: {
      title: "Patient Reviews",
      items: [
        {
          name: "Patient family",
          text: "They refused surgery abroad, but Dr. Beyrək saved us. We returned to normal life quickly.",
        },
        {
          name: "Huseynqulu",
          text: "I had bypass surgery at 82 and was discharged in 6 days. Deep gratitude.",
        },
        {
          name: "Patient",
          text: "A very high-risk surgery was performed successfully. I feel like I was reborn.",
        },
      ],
    },
  },
};

export default function About({ locale = "az" }: Props) {
  const t = content[locale];

  return (
    <main className="bg-[#0A0F1E] text-white overflow-hidden">

      {/* ─────────── HERO / ABOUT ─────────── */}
      <section className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-32 flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

        {/* Decorative background glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C49B63]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#C49B63]/5 blur-[100px]" />

        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col gap-10 z-10">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#C49B63]" />
            <span className="text-[#C49B63] uppercase tracking-[0.3em] font-semibold text-xs">
              {t.about.badge}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-white">
            {t.about.title}
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            {t.about.desc}
          </p>

          {/* Hospitals strip */}
          <p className="text-[#C49B63]/80 text-sm tracking-wide font-medium border-l-2 border-[#C49B63] pl-4">
            {t.about.hospitals}
          </p>

          {/* Specializations grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {t.about.specializations.map((f, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] border border-white/10 hover:border-[#C49B63]/60 p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C49B63]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                <h3 className="text-[#C49B63] font-semibold mb-2 text-sm uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-4">
            <Button text={t.about.cta} link="/contact" type={2} />
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">
                {t.about.contact}
              </span>
              <div className="font-bold text-[#C49B63] text-xl mt-1">
                +994 50 312 76 57
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 flex justify-center lg:justify-end relative w-full z-10">
          <div className="relative w-full max-w-[520px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-[#C49B63]/20 blur-3xl scale-95" />

            {/* Frame border */}
            <div className="relative rounded-3xl overflow-hidden border border-[#C49B63]/30 shadow-[0_0_80px_rgba(196,155,99,0.15)]">
              <Image
                src={certImg}
                alt="Dr. Beyrək Abbaszadə"
                width={520}
                height={680}
                className="object-cover w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                priority
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
            </div>

            {/* License badge */}
            <div className="absolute top-5 right-5 bg-[#C49B63] text-[#0A0F1E] px-4 py-2 rounded-xl font-bold text-xs tracking-wide shadow-lg">
              {t.about.licenseBadge}
            </div>

            {/* AÜDCC badge */}
            <div className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center">
              <span className="bg-white/10 backdrop-blur border border-white/20 text-white text-xs px-5 py-2 rounded-full font-medium">
                AÜDCC – Tam Üzv
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── EDUCATION & MENTORSHIP ─────────── */}
      <section className="bg-[#06091A] border-y border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
          <div className="text-center mb-16">
            <span className="text-[#C49B63] uppercase tracking-[0.3em] text-xs font-semibold">
              ── {t.education.title} ──
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[t.education.mentor, t.education.society, t.education.international].map((item, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-10 rounded-3xl hover:border-[#C49B63]/40 transition-all duration-300 group text-center"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-[#C49B63] font-bold text-lg mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C49B63] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ACHIEVEMENTS ─────────── */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
        <div className="text-center mb-16">
          <span className="text-[#C49B63] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
            ── {t.achievements.title} ──
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t.achievements.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.achievements.items.map((item, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-[#C49B63]/50 p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,155,99,0.1)] group ${
                i === 0
                  ? "sm:col-span-2 lg:col-span-1 border-[#C49B63]/30 bg-gradient-to-br from-[#C49B63]/10 to-transparent"
                  : ""
              }`}
            >
              {i === 0 && (
                <div className="absolute inset-0 rounded-3xl bg-[#C49B63]/5 blur-xl pointer-events-none" />
              )}
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3
                className={`font-bold mb-3 text-base ${
                  i === 0 ? "text-[#C49B63] text-lg" : "text-[#C49B63]/80"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── PROFESSIONAL STORY ─────────── */}
      <section className="bg-[#06091A] border-y border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24 text-center">
          <span className="text-[#C49B63] uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
            ── {t.story.title} ──
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            {t.story.title}
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-[800px] mx-auto whitespace-pre-line">
            {t.story.desc}
          </p>
        </div>
      </section>

      {/* ─────────── CLINICAL PHILOSOPHY ─────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C49B63]/5 via-transparent to-[#C49B63]/5" />
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28 z-10 relative">
          <div className="text-center mb-14">
            <span className="text-[#C49B63] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
              ── {t.philosophy.title} ──
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {t.philosophy.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.philosophy.quotes.map((q, i) => (
              <blockquote
                key={i}
                className="relative bg-gradient-to-br from-white/[0.06] to-transparent border border-[#C49B63]/20 p-10 rounded-3xl"
              >
                <div className="absolute top-6 left-8 text-[#C49B63]/20 font-serif text-8xl leading-none select-none">
                  "
                </div>
                <p className="font-serif text-xl sm:text-2xl text-white leading-relaxed mb-6 relative z-10">
                  {q.text}
                </p>
                <footer className="text-[#C49B63] font-semibold text-sm tracking-wide">
                  — {q.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-[800px] mx-auto text-center">
            {t.philosophy.desc}
          </p>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="bg-[#06091A] border-t border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
          <div className="text-center mb-14">
            <span className="text-[#C49B63] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
              ── {t.testimonials.title} ──
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] border border-white/10 hover:border-[#C49B63]/40 p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.06]"
              >
                {/* Top gold line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C49B63]/60 to-transparent" />
                <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
                <strong className="text-[#C49B63] text-sm tracking-wide">{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}