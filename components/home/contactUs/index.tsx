'use client'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/logo.png";

const contactInfo = [
  {
    title: "24/7 Dəstək Mərkəzi",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={28} className="text-yellow-500" />,
  },
  {
    title: "Bizə Yazın",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={28} className="text-yellow-500" />,
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-[#0F172A] to-[#071421] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest text-sm sm:text-base">
            Bizimlə Əlaqə
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3">
            Suallarınız və sorğularınız üçün buradayıq
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Suallarınız, qiymət sorğularınız və əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column: Info + Illustration */}
          <div className="flex-1 flex flex-col gap-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="flex items-center gap-4 bg-[#102948]/80 hover:bg-[#1B3450]/90 transition-all duration-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#0F172A] rounded-full group-hover:scale-110 transition-transform duration-500">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-extrabold text-yellow-500">{info.title}</h3>
                  <span className="text-slate-200 font-medium group-hover:underline">{info.display}</span>
                </div>
              </a>
            ))}

            {/* Illustration */}
            <div className="mt-8 flex justify-center">
              <Image
                src={contactIllustration}
                alt="Turan İnşaat"
                width={320}
                height={360}
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                quality={100}
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 flex flex-col gap-8">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#102948]/80 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
              <input
                type="text"
                name="your-name"
                placeholder="Adınız"
                className="border border-gray-700 p-4 rounded-xl w-full h-14 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-700 p-4 rounded-xl w-full h-14 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon Nömrəniz"
                className="border border-gray-700 p-4 rounded-xl w-full h-14 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                name="subject"
                placeholder="Mövzu"
                className="border border-gray-700 p-4 rounded-xl w-full h-14 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows={6}
                className="border border-gray-700 p-4 rounded-xl w-full md:col-span-2 h-36 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-bold px-6 py-4 md:col-span-2 rounded-xl hover:bg-yellow-600 transition-all duration-300 text-base sm:text-lg"
              >
                Göndər
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-blob1"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-blob2"></div>
    </section>
  )
}