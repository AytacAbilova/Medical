import Image from "next/image";
import Link from "next/link";
import clinicImg from "@/public/assets/images/visit.png";

const content = {
    az: {
        title: "Visit our main office downtown",
        desc: "Lorem ipsum dolor sit amet consectetur porttitor maecenas in elementum nulla mi ipsum natoque .",
        btn: "Join our team",
        btnHref: "/contact",
        locName: "Bakı, Azərbaycan",
        locDesc: "Lux International Hospital — Faiq Yusifov küç. 146A, Bakı AZ1052. Həftənin 5 günü qəbul aparılır.",
        mapLabel: "Google Maps-də aç",
        mapHref: "https://maps.google.com",
    },
};

export default function VisitUs({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-8 lg:gap-12">

          {/* SOL — Başlıq + düymə */}
          <div data-aos="fade-right" className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
            <h2 className="text-[25px] lg:text-[44px] font-extrabold text-[#001a56] leading-tight">
              {t.title}
            </h2>
            <p className="text-[#465271] text-[15px] leading-relaxed">
              {t.desc}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href={t.btnHref}
                className="inline-flex items-center justify-center bg-[#001a56] hover:bg-[#2A69AC]
                           text-white font-semibold text-sm px-7 py-3.5 rounded-full
                           transition-colors duration-300"
              >
                {t.btn}
              </Link>
            </div>
          </div>

          {/* SAĞ — Kart */}
          <div
            data-aos="fade-left"
            className="flex flex-col rounded-3xl overflow-hidden border border-gray-200 p-3 sm:flex-row"
          >
            {/* Şəkil — mobil tam en, desktop 58% */}
            <div className="relative w-full sm:w-[58%] rounded-3xl overflow-hidden shrink-0
                            h-[260px] sm:h-auto sm:min-h-[420px]">
              <Image
                src={clinicImg}
                alt="Klinika"
                fill
                quality={95}
                className="object-cover"
              />
            </div>

            {/* Mətn — mobil aşağıda, desktop sağda */}
            <div className="flex flex-col justify-end gap-3 p-5 sm:p-8 lg:p-10 bg-white">
              <h3 className="text-[#001a56] font-extrabold text-[22px] sm:text-[26px] leading-snug">
                {t.locName}
              </h3>
              <p className="text-[#465271] text-[14px] sm:text-[15px] leading-relaxed">
                {t.locDesc}
              </p>
              <Link
                href={t.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2388ff] font-semibold text-[15px]
                           hover:gap-3 transition-all duration-200"
              >
                {t.mapLabel}
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}