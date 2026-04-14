"use client";

import Link from "next/link";
export interface Service {
  icon: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  highlight?: string;
}

export const services: Service[] = [
  {
    icon: "heart",
    title: "Açıq Ürək Əməliyyatı",
    slug: "/ureyin-qapaq-emeliyyati",
    shortDesc: "Qapaq təmiri, ASD/VSD korreksiyası, ciddi ürək qüsurlarının cərrahi həlli.",
    fullDesc:
      "Aorta və mitral qapaqların təmiri və dəyişdirilməsi, qulaqcıqlararası/mədəciklərarası çəpər defektlərinin korreksiyası. Kardiopulmoner bypass aparatı altında icra edilir.",
    highlight: "Kardiopulmoner bypass",
  },
  {
    icon: "microscope",
    title: "Koronar Bypass (CABG)",
    slug: "/koronar-bypass-emeliyyati",
    shortDesc: "2–4 damar şuntlaması. EF 30%-ə qədər ağır ürək çatışmazlığında da tətbiq edilir.",
    fullDesc:
      "Tam arterial revaskulyarizasiya. LMCA 80–85% stenozunda cərrahi üstünlük verilir. LIMA, radial arteriya, safen vena istifadə olunur.",
    highlight: "Tam arterial revaskulyarizasiya",
  },
  {
    icon: "zap",
    title: "Minimal İnvaziv Cərrahiyyə",
    slug: "/minimal-invaziv-urek-cerrahiyyesi",
    shortDesc: "Kiçik kəsiklərlə bypass, endoskopik qapaq təmiri. Döş sümüyü kəsilmir.",
    fullDesc:
      "Az qan itkisi, sürətli sağalma, estetik üstünlük. ASD qapaması, endoskopik qapaq təmiri və minimal kəsikli bypass daxildir.",
    highlight: "Döş sümüyü kəsilmir",
  },
  {
    icon: "dna",
    title: "Anadangəlmə Ürək Qüsurları",
    slug: "/anadangelme-urek-qusurlari-asd-vsd",
    shortDesc: "Uşaq və böyüklərdə ASD, VSD, parsial pulmonar venoz anomaliyasının cərrahi korreksiyası.",
    fullDesc:
      "Perikard yamağı ilə qulaqcıqlararası çəpər defektinin ləğvi. Sinus venosus tipi ASD, VSD və parsial pulmonar venoz dönüş anomaliyaları daxildir.",
    highlight: "Perikard yamağı texnikası",
  },
  {
    icon: "activity",
    title: "Aorta Cərrahiyyəsi",
    slug: "/aorta-anevrizmasinin-cerrahi-mualicesi",
    shortDesc: "Anevrizmaların rezeksiyası, aorta diseksiyası, EVAR/TEVAR endovasküler stent.",
    fullDesc:
      "Abdominal/torasik anevrizmaların açıq rezeksiyası, kompleks arkus replasmanı, aorta-bifemoral bypass, EVAR/TEVAR endovasküler müdaxilə.",
    highlight: "EVAR / TEVAR daxildir",
  },
  {
    icon: "waves",
    title: "Periferik Damar Cərrahiyyəsi",
    slug: "/periferik-damar-cerrahiyyesi",
    shortDesc: "Aorta-bifemoral bypass, karotid endarterektomiya, alt əzaların qan dövranının bərpası.",
    fullDesc:
      "Periferik oklüziv xəstəliklərin cərrahi həlli. Karotid endarterektomiya ilə inme riskinin azaldılması. Alt əzamlarda işemiya müalicəsi.",
    highlight: "İnme profilaktikası",
  },
  {
    icon: "droplets",
    title: "Varikoz Vena Müalicəsi",
    slug: "/varikoz-vena-mualicesi",
    shortDesc: "Lazer ablasiyası (EVLA), skleroterapiya, fleboektomiya — minimal izlə.",
    fullDesc:
      "Endovenoz lazer ablasiyası (EVLA) ağrısız və cərrahiyyətsiz müalicə imkanı təqdim edir. Skleroterapiya ilə kiçik damarlar, fleboektomiya ilə böyük varikozlar müalicə olunur.",
    highlight: "EVLA – ağrısız müalicə",
  },
  {
    icon: "link",
    title: "Birləşdirilmiş Əməliyyatlar",
    slug: "/birlesdirilmis-emeliyyatlar",
    shortDesc: "Eyni seansda multispecialty müdaxilə — mürəkkəb multisistemli xəstələr üçün.",
    fullDesc:
      "CABG x4 + nefrektomiya + trombektomiya kimi ağır kombine xəstəliklərə eyni anesteziya altında xüsusi cərrahi yanaşma. Hospitalizasiya müddəti azalır.",
    highlight: "Tək seansda multispecialty",
  },
];
// ─── Inline SVG icons (lucide-style, stroke-only) ────────────────────────────
const icons: Record<string, React.FC<{ className?: string }>> = {
  heart: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  microscope: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" /><path d="M3 21h18" /><path d="M14 21v-4a2 2 0 0 0-2-2H8" /><path d="M14 7V3H9v4" /><path d="m14 3-5 4" /><circle cx="14" cy="11" r="4" />
    </svg>
  ),
  zap: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  dna: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M13 2a19.82 19.82 0 0 1-2.8 5.99" /><path d="m2 9 4.5 1 1-4.5" /><path d="m16.5 18.5 1-4.5 4.5 1" /><path d="M2 15 9 22" /><path d="M15 2l7 7" />
    </svg>
  ),
  activity: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  waves: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  droplets: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  ),
  link: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

export default function OurServices() {
  return (
    <section className="py-28 bg-[#F8F6F2] text-gray-900 relative overflow-hidden">

      {/* Subtle background grid ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C49B63 0,#C49B63 1px,transparent 1px,transparent 72px), repeating-linear-gradient(90deg,#C49B63 0,#C49B63 1px,transparent 1px,transparent 72px)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">

        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 uppercase tracking-[0.18em] text-sm font-extrabold text-[#C49B63]"
          >
            {/* tiny decorative line */}
            <span className="block h-px w-8 bg-[#C49B63]" />
            Xidmətlər
            <span className="block h-px w-8 bg-[#C49B63]" />
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="mt-5 text-3xl md:text-[52px] font-extrabold leading-tight tracking-tight"
          >
            Ürək-damar cərrahiyyəsinin{" "}
            <span className="text-[#C49B63]">tam spektri</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed"
          >
            Dr. Beyrək Abbaszadə tərəfindən icra edilən müasir cərrahi müdaxilələr —
            ən sadədən ən mürəkkəbinə qədər.
          </p>
        </div>

        {/* ── Service Cards Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = icons[service.icon];
            return (
              <Link
                key={service.slug}
                href={service.slug}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className="group relative flex flex-col bg-white rounded-[20px] p-7 border border-transparent hover:border-[#C49B63]/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(196,155,99,0.18)] cursor-pointer overflow-hidden"
              >
                {/* Gold corner accent – appears on hover */}
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] bg-[#C49B63]/0 group-hover:bg-[#C49B63]/8 transition-all duration-500"
                />

                {/* Icon container */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBF5EC] text-[#C49B63] group-hover:bg-[#C49B63] group-hover:text-white transition-all duration-400">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold leading-snug text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Short description (always visible) */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {service.shortDesc}
                </p>

                {/* Highlight badge */}
                {service.highlight && (
                  <span className="mt-5 inline-block self-start text-[11px] font-semibold uppercase tracking-wider text-[#C49B63] bg-[#FBF5EC] px-3 py-1 rounded-full group-hover:bg-[#C49B63] group-hover:text-white transition-colors duration-300">
                    {service.highlight}
                  </span>
                )}

                {/* "Ətraflı" link */}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C49B63] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Ətraflı oxu
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ────────────────────────────────────── */}
        <div
          data-aos="fade-up"
          className="mt-20 rounded-[24px] bg-gray-900 px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#C49B63] text-sm font-semibold uppercase tracking-widest mb-2">
              Konsultasiya
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-snug">
              Hansı xidmət sizə lazımdır?
            </h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Vəziyyətinizi izah edin — uyğun müdaxilə barədə məsləhət alın.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49B63] hover:bg-[#b38a52] text-white font-semibold text-sm px-7 py-3.5 transition-colors duration-300 whitespace-nowrap"
            >
              Müraciət et
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 hover:border-white/50 text-white font-semibold text-sm px-7 py-3.5 transition-colors duration-300 whitespace-nowrap"
            >
              Bütün xidmətlər
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}