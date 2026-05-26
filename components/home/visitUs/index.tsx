import Image from "next/image";
import Link from "next/link";
import clinicImg from "@/public/assets/images/visit.png";

const content = {
  az: {
    title: "Peşəkar tibbi konsultasiya üçün müraciət edin",

    desc:
      "İnfeksion xəstəliklər, parazitoloji problemlər, hepatitlər və profilaktik müayinələr üzrə müasir diaqnostika və fərdi müalicə yanaşması ilə xidmət göstərilir.",

    btn: "Qəbula yazıl",
    btnHref: "/contact",

    locName: "Lux International Hospital",

    locDesc:
      "Dr. Xatirə Aslanova tərəfindən uşaqlar və böyüklər üçün infeksion xəstəliklər, parazitologiya və hepatoloji konsultasiyalar həyata keçirilir.",

    extra:
      "Ünvan: Faiq Yusifov küç. 146A, Bakı AZ1052 • Həftə içi qəbul saatları mövcuddur.",

    mapLabel: "Xəritədə bax",
    mapHref: "https://maps.google.com",
  },
};

export default function VisitUs({
  locale = "az",
}: {
  locale?: "az";
}) {
  const t = content[locale];

  return (
    <section className="bg-white py-[60px] ">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.2fr] items-center gap-10 lg:gap-16">

          {/* LEFT */}
          <div
            data-aos="fade-right"
            className="flex flex-col gap-5 text-center lg:text-left"
          >
            <span
              className="inline-flex self-center lg:self-start
              bg-[#EEF4FB] text-[#2A69AC]
              text-sm font-semibold px-4 py-2 rounded-full"
            >
              Əlaqə və qəbul
            </span>

            <h2
              className="text-[30px] md:text-[52px]
              font-extrabold text-[#001a56]
              leading-[1.1]"
            >
              {t.title}
            </h2>

            <p
              className="text-[#5B6475]
              text-[15px] md:text-[17px]
              leading-relaxed"
            >
              {t.desc}
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <Link
                href={t.btnHref}
                className="inline-flex items-center justify-center
                bg-[#001a56] hover:bg-[#2A69AC]
                text-white font-semibold text-sm
                px-7 py-3.5 rounded-full
                transition-colors duration-300"
              >
                {t.btn}
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            data-aos="fade-left"
            className="flex flex-col rounded-[32px]
            overflow-hidden border border-[#E6ECF5]
            p-3 sm:flex-row bg-white"
          >
            {/* IMAGE */}
            <div
              className="relative w-full sm:w-[58%]
              rounded-[28px] overflow-hidden shrink-0
              h-[260px] sm:h-auto sm:min-h-[460px]"
            >
              <Image
                src={clinicImg}
                alt="Lux International Hospital"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div
              className="flex flex-col justify-end
              gap-4 p-6 sm:p-8 lg:p-10"
            >
              <div>
                <p className="text-[#2388ff] font-semibold text-sm mb-2">
                  Klinika
                </p>

                <h3
                  className="text-[#001a56]
                  font-extrabold text-[24px]
                  sm:text-[30px] leading-snug"
                >
                  {t.locName}
                </h3>
              </div>

              <p
                className="text-[#465271]
                text-[15px] leading-relaxed"
              >
                {t.locDesc}
              </p>

              <p
                className="text-[#7A8599]
                text-[14px] leading-relaxed"
              >
                {t.extra}
              </p>

              <Link
                href={t.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                text-[#2388ff] font-semibold text-[15px]
                hover:gap-3 transition-all duration-200"
              >
                {t.mapLabel}

                <svg
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
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