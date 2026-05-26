'use client';
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesContent, type Locale, type ServiceItem, type ServiceSection } from "@/utils";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const locale: Locale = "az";

  const service = servicesContent[locale].find(
    (s: ServiceItem) =>
      s.slug === slug ||
      s.slug === `/${slug}` ||
      s.slug.replace("/", "") === slug
  );

  const others = servicesContent[locale]
    .filter((s: ServiceItem) => s.slug.replace("/", "") !== slug)
    .slice(0, 3);

  if (!service) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#001a56]">Xidmət tapılmadı</h1>
        <Link href="/services" className="text-[#2388ff] underline">
          Bütün xidmətlərə qayıt
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-[#F8F9FB] pt-16 pb-12">
        <div className="max-w-[900px] mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#465271] text-sm
                       hover:text-[#2388ff] transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={15} /> Bütün xidmətlər
          </Link>

          <p className="text-[#2388ff] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Xidmət
          </p>
          <h1 className="text-2xl md:text-[42px] font-extrabold text-[#001a56] leading-tight">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Məzmun — sections */}
      <section className="py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-6">
          {service.sections.map((section: ServiceSection, i: number) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
            >
              <h2 className="text-[#001a56] font-extrabold text-[18px] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#2388ff] rounded-full inline-block" />
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {section.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#2388ff] shrink-0 mt-0.5" />
                    <span className="text-[#465271] text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Niyə bizə? */}
          <div className="bg-[#EEF3FA] rounded-2xl p-7 border border-[#2388ff]/10">
            <h3 className="text-[#001a56] font-extrabold text-[18px] mb-4">
              Niyə bizə müraciət etməlisiniz?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Dəqiq laborator diaqnostika",
                "Yaşa uyğun fərdi müalicə",
                "Ailə üzvlərinin kompleks müayinəsi",
                "Uzunmüddətli xəstə izlənməsi",
                "Öz laboratoriyası — sürətli nəticə",
                "Beynəlxalq protokollara uyğun yanaşma",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#2388ff] shrink-0" />
                  <span className="text-[#465271] text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#001a56]
                         hover:bg-[#2388ff] text-white font-bold text-sm px-8 py-4
                         rounded-full transition-colors duration-200"
            >
              Randevu al <ArrowRight size={15} />
            </Link>
            <Link
              href="tel:+994XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 border border-gray-200
                         text-[#001a56] font-semibold text-sm px-8 py-4 rounded-full
                         hover:border-[#2388ff] hover:text-[#2388ff] transition-colors duration-200"
            >
              Zəng et
            </Link>
          </div>
        </div>
      </section>

      {/* Digər xidmətlər */}
      <section className="bg-[#F8F9FB] py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[#001a56] font-extrabold text-[22px] mb-6">
            Digər xidmətlər
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((s: ServiceItem) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug.replace("/", "")}`}
                className="group bg-white rounded-2xl p-5 border border-gray-100
                           hover:border-[#2388ff]/20 hover:shadow-sm
                           transition-all duration-200 flex flex-col gap-3"
              >
                <p className="text-[#001a56] font-bold text-[14px]">{s.title}</p>
                <p className="text-[#465271] text-[13px] leading-relaxed line-clamp-2">
                  {s.desc}
                </p>
                <span className="text-[#2388ff] text-[13px] font-semibold">
                  Daha çox →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}