const stats = [
  {
    icon: "🩺",
    value: "25+",
    label: "İl Klinik Təcrübə",
    highlight: true,
  },
  {
    icon: "🏥",
    value: "1999",
    label: "İldən Fasiləsiz Təcrübə",
  },
  {
    icon: "🦠",
    value: "20+",
    label: "İnfeksion və Parazitar Xidmət",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    value: "1+",
    label: "Yaşdan Bütün Xəstə Qəbulu",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-[44px] font-extrabold text-[#001a56] leading-tight"
          >
            Təcrübə və peşəkarlıq rəqəmlərlə
          </h2>

          <p
            data-aos="fade-down"
            className="mt-5 text-[#465271] text-[15px] md:text-base leading-relaxed font-medium"
          >
            Dr. Xatirə Aslanova infeksion xəstəliklər və tibbi
            parazitologiya sahəsində uzun illərə dayanan klinik
            təcrübəsi ilə uşaqlardan böyüklərə qədər bütün yaş
            qruplarında peşəkar diaqnostika və müalicə xidməti göstərir.
          </p>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-[28px] p-6 md:p-8 flex flex-col justify-between
              min-h-[240px] md:min-h-[360px] transition-all duration-300 hover:-translate-y-1 ${
                s.highlight
                  ? "bg-[#EEF4FB] border border-[#d5e5f7]"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* Icon */}
              <div>
                <span className="text-[38px] md:text-[48px] leading-none">
                  {s.icon}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className={`text-[40px] md:text-[64px] font-extrabold leading-none tracking-tight mb-3 ${
                    s.highlight ? "text-[#0C447C]" : "text-[#001a56]"
                  }`}
                >
                  {s.value}
                </h3>

                <p
                  className={`text-sm md:text-[15px] leading-snug font-semibold ${
                    s.highlight ? "text-[#2A69AC]" : "text-[#5B6475]"
                  }`}
                >
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}