import {
  GraduationCap,
  Building2,
  Globe,
  Trophy,
  BookOpen,
  Presentation,
  Heart,
  Activity,
  Scissors,
  Baby,
  GitBranch,
  Layers,
  Quote,
  Star,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Stethoscope,
} from "lucide-react"

interface Props {
  locale?: "az" | "en";
}

const content = {
  az: {
    about: {
      badge: "HAQQIMIZDA",
      title: "Ürək-damar cərrahı Dr. Beyrək Abbaszadə",
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
        title: "Mentor",
        desc: "Prof. Kamran Kazımoğlu Musayev – Azərbaycanda ürək-damar cərrahiyyəsinin ən böyük nüfuzlarından biri",
      },
      society: {
        title: "Elmi Cəmiyyət",
        desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyəti (AÜDCC) – tam üzv",
      },
      international: {
        title: "Beynəlxalq Fəaliyyət",
        desc: "Azərbaycan-Özbəkistan tibbi əməkdaşlığı çərçivəsində Shox Med Hospital (Daşkənd) qonaq cərrahı",
      },
    },
    achievements: {
      title: "Əsas Nailiyyətlər",
      items: [
        {
          title: "Tarixi Əməliyyat",
          desc: "21 fevral 2024-cü ildə TƏBİB nəzarəti altında Şirvan Diaqnostik Mərkəzdə bölgənin ilk açıq ürək əməliyyatı icra edildi. 55 yaşlı xəstə 3 saatlıq müdaxilədən sonra uğurla sağaldı.",
          date: "21 Fevral 2024",
        },
        {
          title: "AÜDCC 20-illik Yubileyi",
          desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyətinin 20-illik yubileyi tədbirinin iştirakçısı.",
          date: "2024",
        },
        {
          title: "Bakı Ürək Günləri VIII",
          desc: "VIII Beynəlxalq Konqresin iştirakçısı – Prof. Kamran Kazımoğlu Musayevlə birlikdə.",
          date: "BÜG VIII",
        },
        {
          title: "Bakı Ürək Günləri IX",
          desc: "BÜG2025 – IX Beynəlxalq Konqresin iştirakçısı.",
          date: "BÜG IX",
        },
        {
          title: "AÜDCC Seminari",
          desc: "\"Aorta patologiyalarının müalicəsində multidissiplinar müasir yanaşma\" çərçivəsində mürəkkəb aorta qövsünün əvəzlənməsi mövzusunda mühazirə.",
          date: "17 May 2024",
        },
        {
          title: "Beynəlxalq Dəvət",
          desc: "Daşkənd Shox Med Hospital-da qonaq cərrah kimi fəaliyyət və pulsuz konsultasiyalar.",
          date: "5–6 Sentyabr",
        },
        {
          title: "Nadir Birləşdirilmiş Əməliyyat",
          desc: "63 yaşlı xəstədə eyni seansta CABG x4 + sağ böyrəyin nefrektomiyası + aşağı boş venanın trombektomiyası – üç fərqli sahəni əhatə edən nadir müdaxilə.",
          date: "Rekord",
        },
      ],
    },
    story: {
      title: "Peşəkar Fəaliyyət",
      desc: `Dr. Abbaszadə fəaliyyətində yüksək riskli və mürəkkəb ürək əməliyyatlarını uğurla icra etməsi ilə tanınır. Onun rəhbərliyi ilə icra edilən əməliyyatlar beynəlxalq standartlara uyğun şəkildə həyata keçirilir.\n\nO, həmçinin beynəlxalq tibbi əməkdaşlıqlarda iştirak etmiş, qonaq cərrah kimi xarici klinikalarda təcrübə mübadiləsi aparmışdır.`,
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
      title: "Cardiovascular Surgeon Dr. Beyrək Abbaszadə",
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
        title: "Mentor",
        desc: "Prof. Kamran Kazımoğlu Musayev – one of the most distinguished cardiovascular surgeons in Azerbaijan",
      },
      society: {
        title: "Scientific Society",
        desc: "Azerbaijan Cardiovascular Surgery Society (ACSS) – full member",
      },
      international: {
        title: "International Activity",
        desc: "Visiting surgeon at Shox Med Hospital (Tashkent) within the framework of Azerbaijan-Uzbekistan medical cooperation",
      },
    },
    achievements: {
      title: "Key Achievements",
      items: [
        {
          title: "Historic Surgery",
          desc: "On February 21, 2024, the first open-heart surgery under TABIB supervision was performed at Shirvan Diagnostic Center. A 55-year-old patient recovered successfully after a 3-hour procedure.",
          date: "Feb 21, 2024",
        },
        {
          title: "ACSS 20th Anniversary",
          desc: "Participant in the 20th anniversary event of the Azerbaijan Cardiovascular Surgery Society.",
          date: "2024",
        },
        {
          title: "Baku Heart Days VIII",
          desc: "Participant in the 8th International Congress alongside Prof. Kamran Kazımoğlu Musayev.",
          date: "BHD VIII",
        },
        {
          title: "Baku Heart Days IX",
          desc: "BHD2025 – Participant in the 9th International Congress.",
          date: "BHD IX",
        },
        {
          title: "ACSS Seminar",
          desc: "Delivered a lecture on complex aortic arch replacement under the theme of multidisciplinary modern approaches in aortic pathology treatment.",
          date: "May 17, 2024",
        },
        {
          title: "International Invitation",
          desc: "Activity as a visiting surgeon at Shox Med Hospital in Tashkent, providing free consultations.",
          date: "Sept 5–6",
        },
        {
          title: "Rare Combined Procedure",
          desc: "In a 63-year-old patient: CABG x4 + right nephrectomy + inferior vena cava thrombectomy performed in a single session – a rare intervention spanning three distinct surgical domains.",
          date: "Record",
        },
      ],
    },
    story: {
      title: "Professional Practice",
      desc: `Dr. Abbaszadə is recognized for successfully performing high-risk and complex cardiac surgeries aligned with international standards.\n\nHe has participated in international medical collaborations and shared expertise as a visiting surgeon at foreign clinics.`,
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

const specializationIcons = [Heart, Scissors, Activity, Baby, GitBranch, Layers];

const educationIcons = [GraduationCap, Building2, Globe];

const achievementIcons = [Trophy, Award, BookOpen, BookOpen, Presentation, Globe, Heart];

export default function About({ locale = "az" }: Props) {
  const t = content[locale];

  return (
    <main className="bg-white text-gray-900 antialiased">

      {/* ─── HERO ─── */}
      <section className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-32 flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C49B63]/8 blur-[120px]" />

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-8 z-10 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#C49B63]" />
            <span className="text-[#C49B63] uppercase tracking-[0.28em] font-semibold text-xs">
              {t.about.badge}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.1] text-gray-900">
            {t.about.title}
          </h1>

          <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.8]">
            {t.about.desc}
          </p>

          <div className="flex items-start gap-3 bg-[#faf8f4] border border-[#C49B63]/20 rounded-xl px-5 py-3">
            <Stethoscope size={15} className="text-[#C49B63] mt-0.5 shrink-0" />
            <p className="text-[#9a7a4a] text-sm leading-relaxed">{t.about.hospitals}</p>
          </div>

          {/* Specializations */}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C49B63] hover:bg-[#b38a52] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              {t.about.cta}
            </a>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C49B63]/10 flex items-center justify-center">
                <Phone size={14} className="text-[#C49B63]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{t.about.contact}</p>
                <p className="font-bold text-gray-900 text-base mt-0.5">+994 50 312 76 57</p>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="grid gap-3">
            {t.about.specializations.slice(0, 3).map((f, i) => {
              const Icon = specializationIcons[i];
              return (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-white border border-gray-100 hover:border-[#C49B63]/40 p-5 rounded-2xl transition-all duration-300 hover:shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[#C49B63]/8 flex items-center justify-center group-hover:bg-[#C49B63]/15 transition-colors">
                    <Icon size={16} className="text-[#C49B63]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-shrink-0 flex flex-col gap-8 justify-center lg:justify-end w-full lg:w-auto z-10">
          <div className="relative w-full max-w-[440px]">
            <div className="absolute inset-0 rounded-3xl bg-[#C49B63]/15 blur-3xl scale-90" />
            <div className="relative rounded-3xl overflow-hidden border border-[#C49B63]/25 shadow-[0_20px_80px_rgba(196,155,99,0.18)]">
              <img
                src={"/assets/images/aboutUss.png"}
                alt="Dr. Beyrək Abbaszadə"
                className="object-cover w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white/90 to-transparent" />
            </div>

            <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#C49B63] text-white px-3.5 py-2 rounded-xl shadow-lg">
              <ShieldCheck size={13} />
              <span className="font-semibold text-xs tracking-wide">{t.about.licenseBadge}</span>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="bg-white/90 backdrop-blur border border-[#C49B63]/25 text-gray-700 text-xs px-5 py-2 rounded-full font-medium shadow-sm">
                AÜDCC – Tam Üzv
              </span>
            </div>
          </div>

          {/* Specializations */}
          <div className="grid gap-3">
            {t.about.specializations.slice(3, 6).map((f, i) => {
              const Icon = specializationIcons[i + 3];
              return (
                <div
                  key={i + 3}
                  className="group flex items-start gap-4 bg-white border border-gray-100 hover:border-[#C49B63]/40 p-5 rounded-2xl transition-all duration-300 hover:shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[#C49B63]/8 flex items-center justify-center group-hover:bg-[#C49B63]/15 transition-colors">
                    <Icon size={16} className="text-[#C49B63]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION & MENTORSHIP ─── */}
      <section className="bg-[#fafaf8] border-y border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#C49B63]" />
              <span className="text-[#C49B63] uppercase tracking-[0.28em] text-xs font-semibold">
                {t.education.title}
              </span>
              <span className="w-6 h-px bg-[#C49B63]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              {t.education.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[t.education.mentor, t.education.society, t.education.international].map((item, i) => {
              const Icon = educationIcons[i];
              return (
                <div
                  key={i}
                  className="relative bg-white border border-gray-100 hover:border-[#C49B63]/30 p-8 rounded-2xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C49B63]/8 flex items-center justify-center mb-6 group-hover:bg-[#C49B63]/15 transition-colors">
                    <Icon size={22} className="text-[#C49B63]" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-[#C49B63] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#C49B63]" />
            <span className="text-[#C49B63] uppercase tracking-[0.28em] text-xs font-semibold">
              {t.achievements.title}
            </span>
            <span className="w-6 h-px bg-[#C49B63]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            {t.achievements.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.achievements.items.map((item, i) => {
            const Icon = achievementIcons[i];
            const isFeatured = i === 0;
            return (
              <div
                key={i}
                className={`relative flex flex-col gap-4 p-7 rounded-2xl border transition-all duration-300 group hover:shadow-md ${isFeatured
                    ? "bg-gradient-to-br from-[#C49B63]/10 to-[#C49B63]/3 border-[#C49B63]/35 sm:col-span-2 lg:col-span-1"
                    : "bg-white border-gray-100 hover:border-[#C49B63]/25"
                  }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isFeatured ? "bg-[#C49B63] text-white" : "bg-[#C49B63]/8 group-hover:bg-[#C49B63]/15 transition-colors"
                      }`}
                  >
                    <Icon size={18} className={isFeatured ? "text-white" : "text-[#C49B63]"} />
                  </div>
                  <span className="text-xs font-semibold text-[#C49B63] bg-[#C49B63]/8 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <h3 className={`font-bold text-sm ${isFeatured ? "text-gray-900 text-base" : "text-gray-800"}`}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PROFESSIONAL STORY ─── */}
      <section className="bg-[#fafaf8] border-y border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#C49B63]" />
              <span className="text-[#C49B63] uppercase tracking-[0.28em] text-xs font-semibold">
                {t.story.title}
              </span>
              <span className="w-6 h-px bg-[#C49B63]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-8">
              {t.story.title}
            </h2>
            <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.85] whitespace-pre-line">
              {t.story.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLINICAL PHILOSOPHY ─── */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#C49B63]" />
            <span className="text-[#C49B63] uppercase tracking-[0.28em] text-xs font-semibold">
              {t.philosophy.title}
            </span>
            <span className="w-6 h-px bg-[#C49B63]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            {t.philosophy.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {t.philosophy.quotes.map((q, i) => (
            <blockquote
              key={i}
              className="relative bg-white border border-gray-100 hover:border-[#C49B63]/30 p-8 sm:p-10 rounded-2xl transition-all duration-300 group"
            >
              <Quote
                size={36}
                className="text-[#C49B63]/15 mb-4 group-hover:text-[#C49B63]/25 transition-colors"
                strokeWidth={1.5}
              />
              <p className="font-serif text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">
                {q.text}
              </p>
              <footer className="flex items-center gap-2">
                <span className="w-6 h-px bg-[#C49B63]" />
                <span className="text-[#C49B63] font-semibold text-sm">{q.author}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.85] max-w-3xl mx-auto text-center">
          {t.philosophy.desc}
        </p>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#fafaf8] border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-28">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#C49B63]" />
              <span className="text-[#C49B63] uppercase tracking-[0.28em] text-xs font-semibold">
                {t.testimonials.title}
              </span>
              <span className="w-6 h-px bg-[#C49B63]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-100 hover:border-[#C49B63]/30 p-7 rounded-2xl transition-all duration-300 group flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-[#C49B63] text-[#C49B63]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-[#C49B63]/10 flex items-center justify-center">
                    <Users size={14} className="text-[#C49B63]" />
                  </div>
                  <strong className="text-gray-800 text-sm">{item.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
