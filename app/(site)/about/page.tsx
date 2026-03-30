"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import certImg from "@/public/assets/images/certificate.png";

interface Props {
  locale?: "az" | "en";
}

const content = {
  az: {
    about: {
      badge: "HAQQIMIZDA",
      title:
        "Su ilə rahatlığı birləşdirən peşəkar hovuz və spa həlləri",
      desc: `Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq, su ilə rahatlığı birləşdirərək mükəmməl hovuz və spa həlləri təqdim edir. İllərin təcrübəsi və yenilikçi texnologiyalarla hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət göstəririk.`,
      features: [
        { title: "Fərdi dizayn", desc: "Hər layihə müştəri ehtiyacına uyğun hazırlanır" },
        { title: "Premium materiallar", desc: "Uzunömürlü və yüksək keyfiyyətli materiallar" },
        { title: "Zəmanətli icra", desc: "Peşəkar komanda və tam nəzarət" },
        { title: "Müasir texnologiya", desc: "Ən son texnologiyalar ilə effektiv nəticə" },
      ],
      cta: "Pulsuz məsləhət al",
      contact: "24/7 Əlaqə Mərkəzi",
      licenseBadge: "Rəsmi lisenziya ilə fəaliyyət göstərir",
    },
    story: {
      title: "Bizim hekayəmiz",
      desc: `Turan İnşaat komandası uzun illərdir Azərbaycanda hovuz və spa layihələrinin həyata keçirilməsində peşəkar xidmət göstərir. Hər layihədə keyfiyyət, yenilik və müştəri məmnuniyyəti əsas prioritetimizdir.`,
    },
    testimonials: {
      title: "Müştəri rəyləri",
      items: [
        { name: "Elvin Məmmədov", text: "Layihə gözlədiyimdən daha yaxşı alındı!" },
        { name: "Leyla Hüseynova", text: "Peşəkar yanaşma və yüksək keyfiyyət." },
        { name: "Rəşad Quliyev", text: "Tam ideal nəticə əldə etdik." },
      ],
    },
  },
  en: {
    about: {
      badge: "ABOUT US",
      title:
        "Professional pool and spa solutions combining comfort with water",
      desc: `Turan Construction LLC is a licensed company combining water and relaxation to deliver premium pool and spa solutions. With years of experience and innovative technologies, we provide professional design, construction, and installation services.`,
      features: [
        { title: "Custom design", desc: "Each project is tailored to client needs" },
        { title: "Premium materials", desc: "High-quality and long-lasting materials" },
        { title: "Guaranteed execution", desc: "Professional team with full control" },
        { title: "Modern technology", desc: "Latest tech for efficient results" },
      ],
      cta: "Get free consultation",
      contact: "24/7 Contact Center",
      licenseBadge: "Operating with official license",
    },
    story: {
      title: "Our story",
      desc: `Our team has been delivering premium pool and spa projects for years. Innovation, quality, and customer satisfaction are our main priorities.`,
    },
    testimonials: {
      title: "Client reviews",
      items: [
        { name: "Elvin Mammadov", text: "Better than expected!" },
        { name: "Leyla Huseynova", text: "Very professional team." },
        { name: "Rashad Guliyev", text: "Perfect result overall." },
      ],
    },
  },
};

export default function About({ locale = "az" }: Props) {
  const t = content[locale];

  return (
    <main className="bg-gray-50">
      {/* ABOUT */}
      <section className="max-w-[1300px] justify-between mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 flex flex-col lg:flex-row items-center gap-20">
        
        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-10">
          <span className="text-[#C49B63] uppercase tracking-[0.2em] font-bold text-sm">
            {t.about.badge}
          </span>

          <h1 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {t.about.title}
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {t.about.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {t.about.features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-[#C49B63] font-bold mb-3 text-lg">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-6">
            <Button text={t.about.cta} link="/contact" type={2} />
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {t.about.contact}
              </span>
              <div className="font-bold text-[#C49B63] text-lg mt-1">
                +994 50 312 76 57
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-end relative w-full h-[400px] sm:h-[500px] lg:h-[900px] rounded-3xl">
          <Image
            src={certImg}
            alt="Turan İnşaat hovuz və spa layihəsi"
            width={500}
            height={400}
            className="object-contain transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* LICENSE BADGE */}
          <div className="absolute top-4 right-4 bg-[#C49B63]/90 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
            {t.about.licenseBadge}
          </div>
        </div>
      </section>

      {/* STORY + TESTIMONIALS COMBINED */}
      <section className="bg-white">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24  ">
          
          {/* STORY */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              {t.story.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[800px] mx-auto">
              {t.story.desc}
            </p>
          </div>

          {/* TESTIMONIALS */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">
            {t.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <p className="text-slate-600 mb-4 leading-relaxed">
                  "{item.text}"
                </p>
                <strong className="text-[#C49B63]">{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}