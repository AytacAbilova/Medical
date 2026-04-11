'use client'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/contactus.jpg";

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

    <div className="flex flex-col lg:flex-row gap-16">

      {/* SOL tərəf */}
      <div className="flex-1 flex flex-col justify-center">

        {/* Heading */}
        <div className="mb-10 text-left">
          <span className="text-yellow-500 font-semibold md:text-[16px] uppercase tracking-widest text-sm">
            Bizimlə Əlaqə
          </span>
          <h2 className="text-4xl md:text-[56px] font-extrabold mt-3 leading-tight">
            Suallarınız və sorğularınız üçün buradayıq
          </h2>
          <p className="text-slate-300 mt-4 max-w-md">
            Suallarınız, qiymət sorğularınız və əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın.
          </p>
        </div>

        {/* Image */}
        <div className="mt-6">
          <Image
            src={contactIllustration}
            alt="Turan İnşaat"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl object-cover"
            quality={100}
          />
        </div>
      </div>

      {/* SAĞ tərəf */}
      <div className="flex-1 flex flex-col gap-8">

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              className="flex items-center gap-4 bg-[#102948]/80 hover:bg-[#1B3450]/90 transition-all duration-300 rounded-2xl p-5 shadow-lg group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#0F172A] rounded-full">
                {info.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-yellow-500">
                  {info.title}
                </h3>
                <span className="text-slate-200 text-sm">
                  {info.display}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#102948]/80 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
          <input
            type="text"
            placeholder="Adınız"
            className="border border-gray-700 p-4 rounded-xl h-14 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-700 p-4 rounded-xl h-14 bg-transparent"
          />
          <input
            type="text"
            placeholder="Telefon Nömrəniz"
            className="border border-gray-700 p-4 rounded-xl h-14 bg-transparent"
          />
          <input
            type="text"
            placeholder="Mövzu"
            className="border border-gray-700 p-4 rounded-xl h-14 bg-transparent"
          />
          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="border border-gray-700 p-4 rounded-xl md:col-span-2 bg-transparent"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black font-bold py-4 md:col-span-2 rounded-xl hover:bg-yellow-600 transition"
          >
            Göndər
          </button>
        </form>

      </div>
    </div>
  </div>
</section>
  )
}