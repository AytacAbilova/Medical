import {
  FaShieldVirus,
  FaVirus,
  FaChild,
  FaBug,
  FaHeartPulse,
  FaLungs,
  FaStethoscope,
  FaNotesMedical,
  FaUserDoctor,
} from "react-icons/fa6";

// ─── DATA ────────────────────────────────────────────────────
const content = {
  az: {
    title: "Müalicə və diaqnostika istiqamətləri",

    desc:
      "Dr. Xatirə Aslanova infeksion xəstəliklər, parazitologiya və profilaktik tibbi nəzarət sahəsində uşaqlar və böyüklər üçün müasir diaqnostika və müalicə xidməti göstərir.",

    values: [
      {
        icon: FaBug,
        label: "Parazitar xəstəliklər",
      },
      {
        icon: FaShieldVirus,
        label: "Hepatit B və C",
      },
      {
        icon: FaVirus,
        label: "Virus infeksiyaları",
      },
      {
        icon: FaChild,
        label: "Uşaq infeksiyaları",
      },
      {
        icon: FaHeartPulse,
        label: "TORCH müayinələri",
      },
      {
        icon: FaLungs,
        label: "Tənəffüs infeksiyaları",
      },
      {
        icon: FaStethoscope,
        label: "Mədə-bağırsaq problemləri",
      },
      {
        icon: FaNotesMedical,
        label: "Profilaktik yoxlanışlar",
      },
      {
        icon: FaUserDoctor,
        label: "Fərdi müalicə planı",
      },
    ],
  },
};

export default function OurValues({
  locale = "az",
}: {
  locale?: "az";
}) {
  const t = content[locale];

  return (
    <section className="bg-white md:py-24 ">
      <div className="max-w-[950px] mx-auto px-6">

        {/* Header */}
        <h2
          data-aos="fade-up"
          className="text-[30px] md:text-[50px] font-extrabold text-[#001a56]
          leading-tight mb-3 text-left md:text-center"
        >
          {t.title}
        </h2>

        <p
          data-aos="fade-up"
          className="text-[#5B6475] text-[15px] md:text-[17px]
          leading-relaxed mb-10 text-left md:text-center
          md:max-w-2xl md:mx-auto"
        >
          {t.desc}
        </p>

        {/* Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-3  gap-x-2 mt-8"
        >
          {t.values.map((v, i) => {
            const Icon = v.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-3 py-3
                w-full md:w-[240px] md:mx-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FB]
                flex items-center justify-center shrink-0">
                  <Icon size={18} color="#2388ff" />
                </div>

                <span
                  className="text-[#001a56]
                  font-bold text-[15px] md:text-[19px]
                  leading-snug"
                >
                  {v.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}