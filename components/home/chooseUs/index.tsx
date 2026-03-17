import { FaLightbulb, FaUserTie, FaBuilding } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function WhyChooseUs() {
  const projects = [
    {
      title: "Novxanı Villa Hovuzu",
      description:
        "Fərdi dizayn və müasir filtrasiya sistemləri ilə həyata keçirilmiş villa hovuz layihəsi.",
      image:
      "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      link: "/projects",
    },
    {
      title: "Premium Türk Hamamı",
      description:
        "Mərmər dekorasiya və peşəkar buxar sistemləri ilə qurulmuş müasir hamam layihəsi.",
      image:
        "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
      link: "/projects",
    },
    {
      title: "Spa & Sauna Zonası",
      description:
        "Villa üçün hazırlanmış sauna və relax spa zonası layihəsi.",
      image:
        "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
      link: "/projects",
    },
    {
      title: "Duz Otağı Layihəsi",
      description:
        "Haloterapiya üçün xüsusi mikroiqlim sistemi ilə hazırlanmış duz otağı.",
      image:
        "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
      link: "/projects",
    },
  ];

  return (
   <section className="relative bg-[#0B1220] py-32 text-white overflow-hidden">
  {/* Background glow */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#2A69AC]/20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FFB703]/20 blur-3xl rounded-full"></div>

  <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="uppercase tracking-[0.25em] text-sm font-extrabold text-[#FFB703]">
        Niyə bizi seçməlisiniz?
      </h3>

      <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight">
        Turan İnşaat – keyfiyyət və peşəkarlıq
      </h2>

      <p className="mt-6 text-slate-400">
        Hovuz, sauna, türk hamamı və spa layihələrində müasir texnologiya və illərin təcrübəsini birləşdiririk.
      </p>
    </div>

    {/* Content */}
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

      {/* Left */}
      <div className="space-y-10">
        <div className="flex gap-5">
          <div className="w-14 h-14 flex items-center justify-center bg-[#1E293B] rounded-2xl text-[#FFB703] text-xl shadow-lg">
            <FaLightbulb />
          </div>
          <div>
            <h3 className="text-lg font-bold">Müasir Həllər</h3>
            <p className="text-sm text-slate-400 mt-2">
              Ən son texnologiyalarla innovativ hovuz və spa sistemləri.
            </p>
          </div>
        </div>

        {/* Stat Card */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#020617] rounded-3xl p-8 shadow-xl border border-white/5">
          <p className="text-xs uppercase text-slate-400">Tamamlanmış Layihə</p>
          <div className="mt-4 text-5xl font-extrabold text-[#FFB703]">
            120+
          </div>
        </div>
      </div>

      {/* Center Image (daha premium) */}
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>

        <img
          src={projects[0].image}
          alt={projects[0].title}
          className="rounded-3xl max-h-[500px] object-cover shadow-2xl border border-white/10"
        />

        {/* floating badge */}
        <div className="absolute bottom-6 left-6 bg-[#FFB703] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Premium Project
        </div>
      </div>

      {/* Right */}
      <div className="space-y-10">
        <div className="flex gap-5">
          <div className="w-14 h-14 flex items-center justify-center bg-[#1E293B] rounded-2xl text-[#FFB703] text-xl shadow-lg">
            <FaUserTie />
          </div>
          <div>
            <h3 className="text-lg font-bold">Peşəkar Komanda</h3>
            <p className="text-sm text-slate-400 mt-2">
              Təcrübəli mütəxəssislərlə yüksək keyfiyyətli icra.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-14 h-14 flex items-center justify-center bg-[#1E293B] rounded-2xl text-[#FFB703] text-xl shadow-lg">
            <FaBuilding />
          </div>
          <div>
            <h3 className="text-lg font-bold">Fərdi Layihələr</h3>
            <p className="text-sm text-slate-400 mt-2">
              Hər müştəri üçün xüsusi dizayn və planlama.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Projects */}
    <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          className="group block bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFB703]/40 transition"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h4 className="text-lg font-semibold group-hover:text-[#FFB703] transition">
              {project.title}
            </h4>

            <p className="mt-2 text-sm text-slate-400">
              {project.description}
            </p>

            <span className="mt-3 inline-block text-[#FFB703] text-sm font-semibold">
              Ətraflı →
            </span>
          </div>
        </a>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-20 text-center">
      <Button text="Bütün layihələr" link="/projects" type={4} />
    </div>

  </div>
</section>
  );
}