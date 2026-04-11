import { FaLightbulb, FaUserTie, FaBuilding } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Müasir Həllər",
      desc: "Hovuz və SPA layihələrində ən son texnologiyalardan istifadə edirik.",
    },
    {
      icon: <FaUserTie />,
      title: "Peşəkar Komanda",
      desc: "Təcrübəli mütəxəssislərlə keyfiyyətli və etibarlı icra.",
    },
    {
      icon: <FaBuilding />,
      title: "Fərdi Layihə",
      desc: "Hər müştəri üçün xüsusi dizayn və planlama təqdim edirik.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-sm font-semibold text-[#C49B63] md:text-[16px] uppercase tracking-widest">
            Niyə bizi seçməlisiniz?
          </h3>

          <h2 className="mt-4 text-3xl md:text-[56px] font-extrabold text-gray-900">
            Keyfiyyət və Peşəkarlıq
          </h2>

          <p className="mt-4 text-gray-600">
            Hovuz, sauna və SPA layihələrində müasir yanaşma və uzunmüddətli keyfiyyət təqdim edirik.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F7FA] text-[#C49B63] text-xl">
                {f.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mini stat */}
        <div className="mt-16 text-center">
          <div className="text-4xl font-extrabold text-[#C49B63]">120+</div>
          <p className="text-gray-500 text-sm mt-2">
            Uğurla tamamlanmış layihə
          </p>
        </div>

      </div>
    </section>
  );
}