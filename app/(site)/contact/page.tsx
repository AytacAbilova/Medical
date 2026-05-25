"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Section 1: Contact Form */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8 ">
            <div>
              <h1 className="text-5xl font-bold text-[#0d1b4b]  mb-4 font-semibold">
                Contact us
              </h1>
              <p className="text-[#465271] text-base leading-relaxed max-w-sm ">
                Lorem ipsum dolor sit amet consectetur s uspendisse vel eu
                volutpat et dictumst quis enim in ut at aenean luctus. Id.
              </p>
            </div>

            {/* Ambassador card */}
            <div className=" rounded-4xl md:p-[40px] p-8 flex flex-col gap-4 max-w-[450px] order-2 lg:order-1 "
              style={{
                background: `
      linear-gradient(
        180deg,
        #ffffff 0%,
        #d7e7fb 0%,
        #ebf4ff 10%,
        #d7e7fb 72%,
        #a8c6f5 100%
      )
    `,
              }}>
              <div className="flex items-center justify-center w-16 h-16">
                <img
                  src="https://cdn.prod.website-files.com/691ddfba0be4f2d23747c147/698a00c37558cca8fd4005d8_contact-cta-icon-smartassistant-webflow-template.png"
                  alt="Ambassador"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d1b4b] mb-2">
                  Become an ambassador
                </h3>
                <p className="text-[#465271] text-sm leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur lacus sed nam varius
                  quis pharetra arcu id amet et.
                </p>
                <button className="bg-[#0d1b4b] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#162460] transition-colors duration-200">
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1b4b] font-semibold text-sm">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1b4b] font-semibold text-sm">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Carter"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b4b] font-semibold text-sm">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="example@youremail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition pr-12"
                />
              
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1b4b] font-semibold text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(123) 456 - 7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1b4b] font-semibold text-sm">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="ex. Google"
                  value={formData.company}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b4b] font-semibold text-sm">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#0d1b4b] text-white  px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#162460] transition-colors duration-200 flex items-center gap-2"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 2: Contact Info Cards */}
      <section className="px-6  pb-20">
        <div className="max-w-[1380px] mx-auto bg-[#ebf4ff] rounded-3xl px-[16px] py-[60px] md:p-[120px]">
          <div className="text-center mb-10">
            <h2 className="md:text-[48px] text-[24px] font-bold text-[#0d1b4b] mb-3">
              We’re just a hello away            </h2>
            <p className="text-gray-500 text-[14px] md:text-[16px] max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur s uspendisse ve eu volutpat et.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email card - tall */}
            <div className="bg-white md:rounded-4xl rounded-2xl p-[16px] md:p-[32px] flex flex-col gap-4 row-span-2 md:row-span-2">
              <div className="text-4xl">📧</div>
              <div>
                <h3 className="text-[#0d1b4b] font-bold text-base mb-2 ">
                  Bizə e-poçt göndərin
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-5 md:pb-[40px] gap-3">
                  Lorem ipsum dolor sit amet consectetur suspendisse ya da eu
                  volutpat and dictumst.
                </p>
                <a
                  href="mailto:contact@smartassistant.com"
                  className="text-blue-600 text-[16px] border border-blue-100 bg-blue-50 rounded-full px-3 py-1.5 hover:bg-blue-100 transition-colors"
                >
                  contact@smartassistant.com
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-white md:rounded-4xl rounded-2xl p-6 flex flex-col md:gap-[40px] gap-3">
              <div className="text-3xl">📞</div>
              <div>
                <p className="text-gray-500 text-[16px] mb-0.5">Bizə zəng edin</p>
                <p className="text-[#0d1b4b] font-bold text-[16px]">
                  (414) 695 - 70234
                </p>
              </div>
            </div>

            {/* Chat card */}
            <div className="bg-white md:rounded-4xl rounded-2xl p-6 flex flex-col md:gap-[40px] gap-3">
              <div className="text-3xl">💬</div>
              <div>
                <p className="text-gray-500 text-[16px] mb-0.5 ">Canlı söhbət</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-[16px] hover:underline"
                >
                  Bizimlə canlı söhbət
                </a>
              </div>
            </div>

            {/* Social media card */}
            <div className="bg-white md:rounded-4xl rounded-2xl md:p-5 p-[16px] flex items-center justify-between md:col-start-2 md:col-span-2">
              <p className="text-[#0d1b4b] font-medium text-[16px]">
                Bizi sosial mediada izləyin
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
