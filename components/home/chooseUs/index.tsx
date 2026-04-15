export default function WhyChooseUs() {
  const stats = [
    { value: "150+", label: "Uğurlu Əməliyyat" },
    { value: "3",    label: "Tibb Müəssisəsi" },
    { value: "İLK",  label: "Şirvanda Açıq Ürək" },
    { value: "100%", label: "Peşəkar Komanda" },
  ];

  return (
    <section className="bg-white py-25">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h3
            data-aos="fade-down"
            className="text-sm font-semibold text-[#C49B63] md:text-[16px] uppercase tracking-widest"
          >
            Niyə bizi seçməlisiniz?
          </h3>
          <h2
            data-aos="fade-down"
            className="mt-4 text-3xl md:text-[56px] font-extrabold text-gray-900"
          >
            Keyfiyyət və Peşəkarlıq
          </h2>
          <p data-aos="fade-down" className="mt-4 text-gray-600">
            Ürək cərrahiyyəsi və kardioloji sahəsində müasir yanaşma və yüksək keyfiyyətli tibbi xidmət təqdim edirik.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-down">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#F5F7FA] border border-gray-100"
            >
              <div className="text-4xl font-extrabold text-[#C49B63]">{s.value}</div>
              <p className="text-gray-500 text-sm mt-2 text-center">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
