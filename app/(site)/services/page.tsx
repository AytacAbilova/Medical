import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Bug, Microscope, FlaskConical, Heart, Wind,
  Baby, ShieldAlert, Eye, TestTube, Clock,
  Pill, Syringe, Dog,
} from "lucide-react";
import servicesData from "@/data/services.json";

// ikon map — utils-dəki title-a görə icon təyin et
const iconMap: Record<string, React.ElementType> = {
  "Açıq Ürək Əməliyyatı":                Bug,
  "Koronar Bypass (CABG)":               Microscope,
  "Minimal İnvaziv Cərrahiyyə":          FlaskConical,
  "Anadangəlmə Ürək Qüsurları":          Heart,
  "Aorta Cərrahiyyəsi":                  Wind,
  "Periferik Damar Cərrahiyyəsi":        Baby,
  "Varikoz Vena Müalicəsi":              ShieldAlert,
  "Birləşdirilmiş Əməliyyatlar":         Eye,
};

const defaultIcons = [
  Bug, Microscope, FlaskConical, Heart, Wind,
  Baby, ShieldAlert, Eye, TestTube, Clock,
  Pill, Syringe, Dog,
];

export default function ServicesPage() {
  const services = servicesData;

  return (
    <main>

      {/* Header */}
      <section className="bg-[#F8F9FB] pt-20 pb-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-[#2388ff] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Xidmətlər
          </p>
          <h1 className="text-3xl md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-4">
            Tibb Xidmətlərimiz
          </h1>
          <div className="w-12 h-1 bg-[#2388ff] rounded-full mx-auto mb-5" />
          <p className="text-[#465271] text-[16px] leading-relaxed max-w-lg mx-auto">
            Dr. Xatirə Aslanova Parasitus Medical Center klinikasında
            körpələrdən yaşlılara qədər geniş spektrli infeksion xəstəliklər üzrə xidmət göstərir.
          </p>
        </div>
      </section>

      {/* Kart grid */}
      <section className="bg-[#F8F9FB] pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = iconMap[s.title] ?? defaultIcons[i % defaultIcons.length];
              const slug = s.slug.replace("/", "");

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-100
                             hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EEF3FA] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#2388ff]" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[#001a56] font-extrabold text-[18px] leading-tight mb-3">
                    {s.title}
                  </h3>

                  <p className="text-[#465271] text-[14px] leading-relaxed flex-1 mb-6">
                    {s.shortDesc}
                  </p>

                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 text-[#2388ff] font-semibold text-[14px]
                               hover:gap-3 transition-all duration-200"
                  >
                    Daha çox <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F8F9FB] pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl px-10 md:px-16 py-14 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #001a56 0%, #0a2d7a 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)",
              }}
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-white font-extrabold text-2xl md:text-[32px] leading-snug mb-3">
                  Sağlamlığınızı təxirə salmayın
                </h3>
                <p className="text-slate-400 text-[15px] max-w-md leading-relaxed">
                  Bizimlə əlaqə saxlayın və sizə uyğun vaxtda peşəkar konsultasiyadan keçin.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-[#2388ff] hover:bg-[#1a6fd4]
                           text-white font-bold text-[15px] px-8 py-4 rounded-2xl
                           transition-colors duration-200 whitespace-nowrap"
              >
                Görüş təyin et <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}