const stats = [
  {
    icon: "💡",
    value: "300+",
    label: "Uğurlu Əməliyyat",
    highlight: true,
  },
  {
    icon: "🔷",
    value: "40+",
    label: "Tibb Müəssisəsi",
  },
  {
    icon: "🌍",
    value: "99%",
    label: "Şirvanda Açıq Ürək",
  },
  {
    icon: "🕐",
    value: "24/7",
    label: "Peşəkar Komanda",
  },
];

export default function WhyChooseUs() {
  return (
   <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-[44px] font-extrabold text-[#001a56] leading-tight"
          >
            Our journey, by the stats
          </h2>
          <p data-aos="fade-down" className="mt-4 text-[#465271] text-[15px] leading-relaxed font-semibold">
            Lorem ipsum dolor sit amet consectetu vel cursus et at aliquam commodo
            purus adipiscing massa amet vitae velit eget diam ut facilisis dictumst id.
          </p>
        </div>

        {/* Stat Cards — mobil 2 sütun, desktop 4 sütun */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between rounded-3xl p-6 md:p-8
                min-h-[260px] md:min-h-[380px] ${
                s.highlight
                  ? "bg-[#EEF3FA] border border-[#d0e2f5]"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* Yuxarı emoji icon */}
              <span className="text-[36px] md:text-[44px] leading-none">
                {s.icon}
              </span>

              {/* Aşağı rəqəm + label */}
              <div>
                <p className={`text-[42px] md:text-[64px] font-extrabold leading-none mb-2 ${
                  s.highlight ? "text-[#0C447C]" : "text-[#001a56]"
                }`}>
                  {s.value}
                </p>
                <p className={`text-sm font-bold leading-snug ${
                  s.highlight ? "text-[#2A69AC]" : "text-gray-500"
                }`}>
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