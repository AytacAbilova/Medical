"use client";
import { useState } from "react";

const categories = [
  { id: "all", label: "Hamısı", color: "#1A3A5C" },
  { id: "surgery", label: "Əməliyyat növləri", color: "#1565C0" },
  { id: "recovery", label: "Sağalma & Hazırlıq", color: "#00796B" },
  { id: "access", label: "Sığorta & İmkanlar", color: "#1A3A5C" },
  { id: "risk", label: "Risk & Simptomlar", color: "#C62828" },
];

const faqs = [
  {
    id: 1,
    category: "surgery",
    tag: "Əməliyyat",
    tagColor: "#1565C0",
    q: "Açıq ürək əməliyyatı nədir və nə vaxt lazımdır?",
    a: "Açıq ürək əməliyyatı, cərrahın kardiopulmoner bypass (ürək-ağciyər maşını) istifadə edərək döş sümüyünü açmaqla ürəyə birbaşa müdaxilə etdiyi cərrahi prosedurdur. Koronar bypass (çox damar xəstəliyi), qapaq xəstəliyi, aorta anevrizması, anadangəlmə qüsurlar – əsas göstərişlərdir.",
  },
  {
    id: 2,
    category: "surgery",
    tag: "Əməliyyat",
    tagColor: "#1565C0",
    q: "Açıq və qapalı (minimal invaziv) əməliyyatlar arasındakı fərq nədir?",
    a: "Klassik açıq cərrahiyyədə döş sümüyü tam kəsilərək ayrılır – bu, cərraha ürəyin bütün boşluqlarına birbaşa giriş imkanı yaradır. Minimal invaziv yanaşmada döş sümüyü kəsilmir; kiçik qabırğalararası kəsiklər və endoskopik kameralar vasitəsilə əməliyyat icra olunur. Qapalı metod daha az ağrı, qısa xəstəxana qalma müddəti və sürətli sağalma təmin edir.",
  },
  {
    id: 3,
    category: "surgery",
    tag: "Bypass",
    tagColor: "#1565C0",
    q: "Koronar bypass əməliyyatında damar haradan alınır?",
    a: "Adətən döşün daxili (internal mammary artery / İMA), qol (radial artery) və ya baldır (safena vena) damarları istifadə edilir. Tam arterial revaskulyarizasiya – yalnız arterial damarların istifadəsi – uzunmüddətli nəticə baxımından üstündür, xüsusilə gənc xəstələrdə. Dr. Abbaszadə EF-30% kimi ağır hallarda belə tam arterial revaskulyarizasiya tətbiq edir.",
  },
  {
    id: 4,
    category: "surgery",
    tag: "Bypass",
    tagColor: "#1565C0",
    q: "Bypass əməliyyatı nə vaxt tələb olunur?",
    a: "Koronar arterlərdə ciddi tıxanıqlıq olduqda (məsələn, əsas koronar arteriyada – LMCA 80-85% stenoz), çox damar xəstəliyində və dərman müalicəsi kifayət etmədikdə bypass əməliyyatı tövsiyə edilir.",
  },
  {
    id: 5,
    category: "risk",
    tag: "Təcili",
    tagColor: "#C62828",
    q: "Aorta anevrizması nə vaxt təhlükəlidir?",
    a: "Abdominal aortanın diametri 55 mm-i keçdikdə cərrahiyyə tövsiyə edilir. 65 mm-dən böyük anevrizmalarda yırtılma riski kritik hala gəlir. Dr. Abbaszadə 65 mm-lik tromblu anevrizmanı uğurla cərrahi yolla müalicə etmişdir.",
  },
  {
    id: 6,
    category: "risk",
    tag: "Risk",
    tagColor: "#C62828",
    q: "ASD (qulaqcıqlar arası çəpər defekti) müalicə edilməsə nə olar?",
    a: "ASD müalicə edilməzsə sağ ürək boşluqları böyüyür, ağciyər arteriyası təzyiqi artar (pulmoner hipertenziya), ürək çatışmazlığı inkişaf edər. Erkən cərrahi müdaxilə bu fəsadların qarşısını alır.",
  },
  {
    id: 7,
    category: "surgery",
    tag: "Anadangəlmə",
    tagColor: "#1565C0",
    q: "Anadangəlmə ürək qüsurları hansı yaşda müalicə edilə bilər?",
    a: "Hər yaşda. Bəzi qüsurlar uşaq yaşda, bəziləri isə (məsələn, ASD) 30-40 yaşlarında aşkar edilə bilər. Dr. Abbaszadə həm uşaqlar, həm də böyüklər üçün cərrahi müdaxilələr həyata keçirir.",
  },
  {
    id: 8,
    category: "risk",
    tag: "Yüksək Risk",
    tagColor: "#C62828",
    q: "EF (ürəyin atım fraksiyası) 30% isə əməliyyat mümkündürmü?",
    a: "Bəli, mümkündür – lakin bu yüksək risk qrupu sayılır. Dr. Abbaszadə EF-30%, miokard infarktı keçirmiş, diabetik xəstəni uğurla tam arterial revaskulyarizasiya ilə müalicə etmişdir. Bu cür ağır hallarda əməliyyat riski daha yüksəkdir, lakin müdaxilə edilməzsə uzunmüddətli proqnoz daha pis olur.",
  },
  {
    id: 9,
    category: "surgery",
    tag: "Damar",
    tagColor: "#00796B",
    q: "Varikoz venalar üçün hansı müalicə üsulları var?",
    a: "Lazer ablasiyası (EVLA) – minimal invaziv, ambulatuar. Skleroterapiya – kiçik damarlara iynə ilə kimyəvi maddə vurulması. Cərrahi çıxarılma (fleboektomiya) – iri varikoz venalarda. Ən uyğun üsul ultrasəs müayinəsi nəticəsindən sonra seçilir.",
  },
  {
    id: 10,
    category: "surgery",
    tag: "Damar",
    tagColor: "#00796B",
    q: "Karotid endarterektomiya nədir?",
    a: "Boyun şah damarında (karotid arteriya) yağ plakının əməliyyatla çıxarılmasıdır. İnsult riskini kəskin azaldır. Karotid arteriyada 70%+ daralma olduqda tövsiyə edilir.",
  },
  {
    id: 11,
    category: "recovery",
    tag: "Sağalma",
    tagColor: "#00796B",
    q: "Ürək əməliyyatından sonra sağalma müddəti nə qədərdir?",
    a: "Standart açıq ürək bypass əməliyyatından sonra xəstəxanada qalma müddəti 5-10 gündür (reanimasiyada 1-2 gün). Tam sağalma 6-12 həftə çəkir. Minimal invaziv prosedurlardan sonra bu müddət daha qısa olur. Sağalma müddəti əməliyyatın növünə, pasiyentin yaşına və ümumi sağlamlıq vəziyyətinə görə dəyişir.",
  },
  {
    id: 12,
    category: "access",
    tag: "Sığorta",
    tagColor: "#1A3A5C",
    q: "Əməliyyatı icbari tibbi sığorta ilə etdirmək olurmu?",
    a: "Bəli. Dr. Abbaszadə icbari tibbi sığorta ilə əməliyyat icra edir. Şirvan Diaqnostik Mərkəzdəki tarixi ilk açıq ürək əməliyyatı da TƏBİB nəzarəti altında, icbari sığorta çərçivəsində həyata keçirilmişdir.",
  },
  {
    id: 13,
    category: "access",
    tag: "İmkan",
    tagColor: "#1A3A5C",
    q: "Xaricə getmək lazımdırmı? Azərbaycanda bu cür mürəkkəb əməliyyatlar mümkündürmü?",
    a: "Dr. Abbaszadə dəfələrlə xaricdən imtina edilən pasiyentləri uğurla müalicə etmişdir. Birləşdirilmiş CABG x4 + nefrektomiya + trombektomiya kimi çox mürəkkəb əməliyyatlar Azərbaycanda icra olunur. Regionlarda da (Şirvan) açıq ürək cərrahiyyəsi artıq mümkündür.",
  },
  {
    id: 14,
    category: "recovery",
    tag: "Hazırlıq",
    tagColor: "#00796B",
    q: "Ürək əməliyyatına hazırlaşarkən nə etməliyəm?",
    a: "Əməliyyatdan əvvəl: qan analizi, EKQ, ExoKQ (exokardioqrafiya), KAQ (koronar angioqrafiya), KT (kompüter tomoqrafiyası). Bütün daimi istifadə olunan dərmanların siyahısı (xüsusilə qan durulaşdırıcılar). Siqareti dayandırmaq, diabeti nəzarətə almaq. Cərrahın əməliyyatöncəsi konsultasiyası zamanı bütün suallarınızı soruşun.",
  },
  {
    id: 15,
    category: "risk",
    tag: "Təhlükəsizlik",
    tagColor: "#C62828",
    q: "Açıq ürək əməliyyatları nə qədər təhlükəlidir?",
    a: "Müasir texnologiyalar (süni qan dövranı aparatı, kardioplegiya, təkmilləşmiş anesteziya) sayəsində risk minimuma endirilir. Dr. Beyrək Abbaszadənin yüzlərlə uğurlu əməliyyatı və yüksək pasiyent məmnuniyyəti bunu təsdiqləyir.",
  },
  {
    id: 16,
    category: "risk",
    tag: "Sağlamlıq",
    tagColor: "#00796B",
    q: "Qan təzyiqim normaldır? Nəyə diqqət etməliyəm?",
    a: "Normal qan təzyiqi 120/80 mmHg səviyyəsindədir. Yüksək təzyiq (hipertoniya) çox vaxt əlamətsiz gedir, ona görə müntəzəm ölçüm vacibdir. Duzu azaltmaq, idman etmək, stressdən uzaq durmaq və siqareti tərgitmək qan təzyiqini idarə etməyə kömək edir.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<number | null>(1);

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="bg-[#F0F4F8] min-h-screen">
      {/* <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A3A5C 0%, #1565C0 60%, #1A3A5C 100%)" }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }} />

        <div className="relative max-w-[1300px] mx-auto px-6 md:px-12 py-20 md:py-28 text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/50" />
            <span className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold">
              Dr. Beyrək Abbaszadə
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-3xl mb-6">
            Tez-tez sorulan
            <span
              className="block"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)", color: "transparent" }}
            >
              suallar
            </span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            Ürək əməliyyatları haqqında ən çox sorulan suallar – bypass, qapaq əməliyyatı, sağalma müddəti, sığorta və hazırlıq.
          </p>

          <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
            {[
              { n: "16", label: "Sual & Cavab" },
              { n: "4", label: "Mövzu kateqoriyası" },
              { n: "24/7", label: "Konsultasiya" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold text-white">{s.n}</div>
                <div className="text-white/50 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16">

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border"
                style={{
                  background: active ? cat.color : "#fff",
                  color: active ? "#fff" : cat.color,
                  borderColor: active ? cat.color : "#e2e8f0",
                  boxShadow: active ? `0 4px 20px ${cat.color}30` : "none",
                }}
              >
                {cat.label}
                <span
                  className="text-xs rounded-full px-2 py-0.5 font-bold"
                  style={{
                    background: active ? "rgba(255,255,255,0.2)" : `${cat.color}15`,
                    color: active ? "#fff" : cat.color,
                  }}
                >
                  {cat.id === "all"
                    ? faqs.length
                    : faqs.filter((f) => f.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

          <div className="space-y-3">
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: isOpen
                      ? `0 0 0 2px ${faq.tagColor}30, 0 8px 32px rgba(0,0,0,0.08)`
                      : "0 1px 4px rgba(0,0,0,0.06)",
                    borderLeft: `4px solid ${isOpen ? faq.tagColor : "transparent"}`,
                  }}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-start gap-4 px-6 py-5 text-left group"
                  >
                    {/* Tag */}
                    <span
                      className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full mt-0.5"
                      style={{
                        background: `${faq.tagColor}12`,
                        color: faq.tagColor,
                      }}
                    >
                      {faq.tag}
                    </span>

                    <span
                      className="flex-1 font-semibold text-[#1A3A5C] text-base leading-snug"
                      style={{ color: isOpen ? faq.tagColor : "#1A3A5C" }}
                    >
                      {faq.q}
                    </span>

                    <span style={{ color: faq.tagColor }}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "400px" : "0" }}
                  >
                    <div className="px-6 pb-6 pl-[calc(1.5rem+4rem)]">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="space-y-6 sticky top-8">

            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A3A5C, #1565C0)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #fff, transparent)", transform: "translate(30%, -30%)" }} />
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-extrabold text-xl mb-3 leading-tight">
                Sualınız cavablanmadı?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Dr. Abbaszadə ilə birbaşa əlaqə saxlayın. Konsultasiya üçün zəng edin.
              </p>
              <a
                href="/contact"
                className="block text-center bg-white text-[#1565C0] font-bold py-3 rounded-xl text-sm hover:bg-blue-50 transition"
              >
                Konsultasiya üçün müraciət et
              </a>
              <a
                href="tel:+994503127657"
                className="block text-center mt-3 text-white/80 font-semibold py-3 rounded-xl text-sm border border-white/20 hover:bg-white/10 transition"
              >
                +994 50 312 76 57
              </a>
            </div>

            {/* Info cards */}
            {[
              {
                color: "#00796B",
                bg: "#E0F2F1",
                icon: "✅",
                title: "İcbari sığorta",
                desc: "Əməliyyatlar icbari tibbi sığorta ilə aparılır",
              },
              {
                color: "#C62828",
                bg: "#FFEBEE",
                icon: "🚨",
                title: "Təcili hal?",
                desc: "24/7 əlaqə mərkəzi — gecikmə olmadan zəng edin",
              },
              {
                color: "#1565C0",
                bg: "#E3F2FD",
                icon: "🌍",
                title: "Beynəlxalq standart",
                desc: "Xaricdən imtina edilən xəstələr uğurla müalicə olunur",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex gap-4 items-start"
                style={{ background: card.bg }}
              >
                <span className="text-2xl flex-shrink-0">{card.icon}</span>
                <div>
                  <div className="font-bold text-sm mb-1" style={{ color: card.color }}>
                    {card.title}
                  </div>
                  <div className="text-slate-600 text-xs leading-relaxed">{card.desc}</div>
                </div>
              </div>
            ))}

            {/* Category legend */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Kateqoriyalar
              </div>
              <div className="space-y-3">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center gap-3 w-full text-left hover:opacity-80 transition"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: cat.color }}
                    />
                    <span className="text-sm text-slate-700 font-medium">{cat.label}</span>
                    <span className="ml-auto text-xs font-bold" style={{ color: cat.color }}>
                      {faqs.filter((f) => f.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}