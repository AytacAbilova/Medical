"use client";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/logo.png";

export default function Contact() {
  return (
    <main className="bg-white min-h-screen text-gray-800 relative overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-16">

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <a href="tel:+994503127657" className="flex items-center gap-4 bg-[#102948]/10 p-6 rounded-3xl shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2A69AC] rounded-full">
                <FaPhoneAlt size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-extrabold text-[#2A69AC]">24/7 Dəstək Mərkəzi</h3>
                <span className="text-gray-700">+994 50 312 76 57</span>
              </div>
            </a>

            <a href="mailto:turaninshaat21@mail.ru" className="flex items-center gap-4 bg-[#102948]/10 p-6 rounded-3xl shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2A69AC] rounded-full">
                <FaEnvelope size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-extrabold text-[#2A69AC]">Bizə Yazın</h3>
                <span className="text-gray-700">turaninshaat21@mail.ru</span>
              </div>
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src={contactIllustration}
              alt="Turan İnşaat"
              width={320}
              height={360}
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col gap-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#102948]/5 p-8 md:p-10 rounded-3xl shadow-lg">
            <input
              type="text"
              placeholder="Adınız"
              className="border border-[#2A69AC] p-4 rounded-xl w-full h-14 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2A69AC] focus:outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#2A69AC] p-4 rounded-xl w-full h-14 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2A69AC] focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Telefon Nömrəniz"
              className="border border-[#2A69AC] p-4 rounded-xl w-full h-14 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2A69AC] focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Mövzu"
              className="border border-[#2A69AC] p-4 rounded-xl w-full h-14 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2A69AC] focus:outline-none text-sm sm:text-base"
            />
            <textarea
              placeholder="Mesajınız"
              rows={6}
              className="border border-[#2A69AC] p-4 rounded-xl w-full md:col-span-2 h-36 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2A69AC] focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-[#2A69AC] text-white font-bold px-6 py-4 md:col-span-2 rounded-xl hover:bg-[#1F558A] transition-all duration-300 text-base sm:text-lg"
            >
              Göndər
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}