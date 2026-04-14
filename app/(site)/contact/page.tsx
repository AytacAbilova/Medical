'use client'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/contactus.png";

const contactInfo = [
  {
    title: "24/7 Dəstək Mərkəzi",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={24} className="text-[#2A69AC]" />,
  },
  {
    title: "Bizə Yazın",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={24} className="text-[#2A69AC]" />,
  },
];

export default function ContactPage() {
  return (
    <section className="py-28 lg:py-36 bg-white text-[#102948]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* SOL */}
          <div className="flex-1 flex flex-col justify-center">

            <div className="mb-10">
              <span className="text-[#2A69AC] font-semibold uppercase tracking-widest text-sm">
                Bizimlə Əlaqə
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
                Suallarınız və sorğularınız üçün buradayıq
              </h2>
              <p className="text-gray-500 mt-4 max-w-md">
                Suallarınız, qiymət sorğularınız və əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın.
              </p>
            </div>

            <div className="mt-6">
              <Image
                src={contactIllustration}
                alt="Turan İnşaat"
                width={600}
                height={600}
                className="rounded-3xl shadow-lg object-cover"
                quality={100}
              />
            </div>
          </div>

          {/* SAĞ */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="flex items-center gap-4 bg-[#F8FAFC] hover:bg-[#EDF2F7] transition-all duration-300 rounded-2xl p-5 border border-[#E2E8F0]"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#E2E8F0] rounded-full shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2A69AC]">
                      {info.title}
                    </h3>
                    <span className="text-gray-600 text-sm">
                      {info.display}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
              <input
                type="text"
                placeholder="Adınız"
                className="border border-[#E2E8F0] p-4 rounded-xl h-14 bg-white focus:ring-2 focus:ring-[#2A69AC] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#E2E8F0] p-4 rounded-xl h-14 bg-white focus:ring-2 focus:ring-[#2A69AC] outline-none"
              />
              <input
                type="text"
                placeholder="Telefon Nömrəniz"
                className="border border-[#E2E8F0] p-4 rounded-xl h-14 bg-white focus:ring-2 focus:ring-[#2A69AC] outline-none"
              />
              <input
                type="text"
                placeholder="Mövzu"
                className="border border-[#E2E8F0] p-4 rounded-xl h-14 bg-white focus:ring-2 focus:ring-[#2A69AC] outline-none"
              />
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="border border-[#E2E8F0] p-4 rounded-xl md:col-span-2 bg-white focus:ring-2 focus:ring-[#2A69AC] outline-none"
              />
              <button
                type="submit"
                className="bg-[#2A69AC] text-white font-bold py-4 md:col-span-2 rounded-xl hover:bg-[#1f4f80] transition"
              >
                Göndər
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}