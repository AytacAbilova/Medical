'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import aboutImg from '@/public/assets/images/aboutUs.jpg'
// import heroBg from '@/public/assets/images/heroAbout.jpg'

export default function About() {
  return (
    <main className="bg-gray-50 font-dm-sans">
        

      {/* About Details */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28  flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl md:text-4xlleading-tight font-manrope">
            Premium hovuz və spa layihələrini peşəkar şəkildə həyata keçiririk
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed">
            Müasir texnologiyalar və keyfiyyətli materiallardan istifadə edərək
            evlər, villalar və kommersiya obyektləri üçün estetik və uzunömürlü
            istirahət zonaları yaradırıq. Hər layihədə detallara diqqət və müştəri
            məmnuniyyəti əsas prioritetimizdir.
          </p>

          {/* Features / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Fərdi dizayn', desc: 'Hər layihə müştəri ehtiyacına uyğun hazırlanır.' },
              { title: 'Premium materiallar', desc: 'Yüksək keyfiyyətli və uzunömürlü materiallar.' },
              { title: 'Zəmanət və keyfiyyət', desc: 'Hər layihə peşəkar komanda tərəfindən icra olunur.' },
              { title: 'Müasir texnologiya', desc: 'Ən son texnologiyalar ilə effektiv və estetik nəticələr.' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFB703] to-[#2A69AC] opacity-10 blur-xl group-hover:opacity-30 transition duration-500 rounded-3xl" />
                <h3 className="text-[#FFB703] font-extrabold text-lg sm:text-xl mb-2 font-manrope relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <Button text="Pulsuz məsləhət al" link="/contact" type={2} />
            <div className="flex flex-col mt-2 sm:mt-0">
              <span className="text-slate-400 uppercase tracking-wider text-xs sm:text-sm">
                24/7 Əlaqə Mərkəzi
              </span>
              <strong className="text-[#FFB703] font-extrabold text-lg sm:text-xl mt-1">
                +994 50 312 76 57
              </strong>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src={aboutImg}
              alt="Turan İnşaat"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* History / Story Section */}
      <section className="bg-[#F9FAFB] py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl  font-manrope">
            Bizim hekayəmiz
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed">
            Turan İnşaat komandası uzun illərdir ki, Azərbaycanda premium hovuz və spa
            layihələrinin həyata keçirilməsində peşəkar xidmət göstərir. Hər layihədə
            yenilik, keyfiyyət və müştəri məmnuniyyəti bizim əsas prioritetlərimizdir.
            Komandamızın təcrübəsi və diqqəti hər detala yönəldilir.
          </p>
        </div>
      </section>

      {/* Optional: Testimonials or Clients Section */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 ">
        <h2 className="text-center text-[#0F172A] font-extrabold text-3xl sm:text-4xl  font-manrope mb-12">
          Müştəri rəyləri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Elvin Məmmədov", feedback: "Turan İnşaat ilə işləmək böyük zövq idi. Layihə tam gözlədiyim kimi oldu!" },
            { name: "Leyla Hüseynova", feedback: "Hər detal diqqətlə hazırlanmışdı. Komanda çox peşəkardır!" },
            { name: "Rəşad Quliyev", feedback: "Keyfiyyət və estetik baxımdan tam ideal bir nəticə aldıq." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <p className="text-slate-600 mb-4">"{item.feedback}"</p>
              <strong className="text-[#FFB703] font-extrabold">{item.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}