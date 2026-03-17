import Button from "@/components/common/Button";

const servicesDetailed = [
  {
    title: "Hovuz Tikintisi",
    img: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
    desc: "Villa və obyektlər üçün fərdi hovuz dizaynı və peşəkar tikinti xidmətləri.",
    features: [
      "Fərdi dizayn və layihələndirmə",
      "Su filtrasiyası və texniki sistemlər",
      "Tam tikinti və quraşdırma xidməti",
    ],
  },
  {
    title: "Türk Hamamı",
    img: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
    desc: "Mərmər dekorasiya və müasir buxar sistemləri ilə türk hamamı layihələri.",
    features: [
      "Klassik və müasir dizayn variantları",
      "Buxar sistemlərinin inteqrasiyası",
      "Mərmər və daş dekorasiyalar",
    ],
  },
  {
    title: "Sauna",
    img: "https://i.pinimg.com/736x/4b/34/8d/4b348d91042e2b81263361b19668b69b.jpg",
    desc: "Fin və infraqırmızı sauna sistemlərinin layihələndirilməsi və quraşdırılması.",
    features: [
      "Fin və infraqırmızı sauna variantları",
      "Tam quraşdırma və texniki xidmət",
      "Müasir dizayn və komfortlu istifadə",
    ],
  },
  {
    title: "Buxar Otağı",
    img: "https://i.pinimg.com/736x/20/4e/76/204e76a6df728598e6544bb43e4dc61c.jpg",
    desc: "Spa və evlər üçün müasir buxar otaqları və texniki sistemlər.",
    features: [
      "Müasir buxar sistemlərinin quraşdırılması",
      "Estetik və funksional dizayn",
      "Texniki sistemlərin tam inteqrasiyası",
    ],
  },
  {
    title: "Rus Hamamı (Banya)",
    img: "https://i.pinimg.com/1200x/3d/d3/99/3dd3996ef102678e11bcdd2abdd908f1.jpg",
    desc: "Təbii ağac materiallarla klassik rus hamamı tikintisi.",
    features: [
      "Klassik rus hamamı dizaynı",
      "Təbii ağac və yüksək keyfiyyətli materiallar",
      "Peşəkar quraşdırma xidməti",
    ],
  },
  {
    title: "Spa və Relax Zonaları",
    img: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
    desc: "Spa mərkəzləri və villalar üçün tam istirahət zonalarının qurulması.",
    features: [
      "Komfortlu və estetik dizayn",
      "İstirahət və wellness sahələri",
      "Tam layihələndirmə və quraşdırma xidməti",
    ],
  },
  {
    title: "Masaj Otaqları",
    img: "https://i.pinimg.com/736x/f2/2b/5a/f22b5ad40f4a4196fd7a1d989846d5e3.jpg",
    desc: "Spa və hotel layihələri üçün komfortlu masaj otaqları.",
    features: [
      "Fərdi masaj otağı dizaynı",
      "Erqonomik və komfortlu avadanlıq",
      "İnteqrasiya olunmuş spa sistemləri",
    ],
  },
  {
    title: "Duz Otaqları",
    img: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
    desc: "Haloterapiya üçün xüsusi duz otaqlarının layihələndirilməsi.",
    features: [
      "Haloterapiya üçün dizayn edilmiş otaqlar",
      "Təbii duz materialları və estetik dekor",
      "Tam quraşdırma və texniki dəstək",
    ],
  },
];

export default function Services() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 space-y-24">
        {servicesDetailed.map((s, i) => (
         <div
  key={i}
  className={`flex flex-col lg:flex-row items-center gap-12 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
    i % 2 === 0 ? "bg-gradient-to-r from-white to-gray-100" : "bg-gradient-to-l from-white to-gray-100"
  }`}
>
  <div className="lg:w-1/2 overflow-hidden rounded-2xl relative group">
    <img
      src={s.img}
      alt={s.title}
      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 rounded-2xl"></div>
    <h3 className="absolute bottom-4 left-4 text-2xl text-white font-extrabold z-20">{s.title}</h3>
  </div>

  <div className="lg:w-1/2 space-y-4">
    <p className="text-gray-700 text-lg leading-relaxed">{s.desc}</p>
    <ul className="list-none space-y-2">
      {s.features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-2 text-gray-600">
          <span className="inline-block w-3 h-3 bg-[#2A69AC] rounded-full"></span> {f}
        </li>
      ))}
    </ul>
    <Button text="Ətraflı →" link="/services" type={2} />
  </div>
</div>
        ))}
      </section>
    </main>
  );
}