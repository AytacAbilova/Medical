'use client'

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "@/public/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#12223B] pt-25 pb-20 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div data-aos="fade-up" data-aos-delay="0">
            <Image src={logo} alt="Dr. Beyrək" width={140} height={40} />

            <p className="text-gray-500 mt-4 text-md leading-relaxed">
              Ürək-damar cərrahı. Açıq və minimal invaziv ürək əməliyyatları,
              koronar bypass, aorta və anadangəlmə ürək qüsurlarının müalicəsində ixtisaslaşmışdır.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold mb-5">Keçidlər</h4>
            <ul className="space-y-3 text-md text-gray-600">
              <li><Link href="/" className="hover:text-[#2A69AC]">Ana səhifə</Link></li>
              <li><Link href="/about" className="hover:text-[#2A69AC]">Haqqımızda</Link></li>
              <li><Link href="/tibbi-yazilar" className="hover:text-[#2A69AC]">Tibbi Yazılar</Link></li>
              <li><Link href="/sual-cavab" className="hover:text-[#2A69AC]">Sual-Cavab</Link></li>
              <li><Link href="/qalereya" className="hover:text-[#2A69AC]">Qalereya</Link></li>
              <li><Link href="/contact" className="hover:text-[#2A69AC]">Əlaqə</Link></li>
            </ul>
          </div>

          {/* Clinics / Addresses */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold mb-5">Ünvanlar</h4>
            <ul className="space-y-3 text-md text-gray-600">
              <li>Lux International Hospital - 146A Faiq Yusifov küç., Bakı, AZ1052</li>
              <li>Mərkəzi Klinika - Parlament pr. 76, AZ1006, Bakı</li>
              <li>Unikal Klinika - Kazım Kazımzadə küçəsi, 95-99, Bakı</li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-bold mb-5">Əlaqə</h4>

            <div className="flex flex-col gap-4">

              <a href="tel:+994508846614" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-[#2A69AC] group-hover:text-white transition">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-600 text-md">+994 50 884 66 14</span>
              </a>

              <a href="mailto:info@drbeyrek.az" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-[#2A69AC] group-hover:text-white transition">
                  <FaEnvelope />
                </div>
                <span className="text-gray-600 text-md">info@drbeyrek.az</span>
              </a>

              <div className="text-gray-600 text-md mt-2">
                <p className="font-semibold text-[#12223B]">Qəbul saatları:</p>
                <p>B.e – Cümə</p>
                <p>09:00 – 18:00</p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div data-aos="fade-up" className="h-[1px] w-full bg-gray-200 mb-6" />

        {/* Bottom */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dr. Beyrək</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#2A69AC]">Privacy</Link>
            <Link href="#" className="hover:text-[#2A69AC]">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);