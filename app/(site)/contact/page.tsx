"use client";
import { useState } from "react";
import contactData from "@/data/contact.json";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function ContactPage() {
  const d = contactData;
  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    email: "", phone: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // sonra API əlavə et
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ── Section 1: Form ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* SOL — başlıq + info kartı */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#2388ff] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Əlaqə
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#001a56] mb-4">
                {d.form.title}
              </h1>
              <p className="text-[#465271] text-base leading-relaxed max-w-sm">
                {d.form.desc}
              </p>
            </div>

            {/* Info kartı */}
            <div
              className="rounded-3xl p-8 md:p-10 flex flex-col gap-5 max-w-[450px]"
              style={{
                background: "linear-gradient(180deg, #ebf4ff 0%, #d7e7fb 72%, #a8c6f5 100%)",
              }}
            >
              {/* Həkim telefonu */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">👩‍⚕️</span>
                <div>
                  <p className="text-[#001a56] font-bold text-sm mb-0.5">{d.doctor.name}</p>
                  <p className="text-[#465271] text-xs mb-2">{d.doctor.title}</p>
                  <a href={d.doctor.phoneRaw}
                    className="text-[#2388ff] font-semibold text-sm hover:underline">
                    {d.doctor.phone}
                  </a>
                </div>
              </div>

              <div className="h-px bg-blue-200" />

              {/* Klinika */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏥</span>
                <div className="flex flex-col gap-1">
                  <p className="text-[#001a56] font-bold text-sm">{d.clinic.name}</p>
                  <a href={d.clinic.phone1Raw} className="text-[#465271] text-sm hover:text-[#2388ff]">
                    {d.clinic.phone1}
                  </a>
                  <a href={d.clinic.phone2Raw} className="text-[#465271] text-sm hover:text-[#2388ff]">
                    {d.clinic.phone2}
                  </a>
                  <a href={`mailto:${d.clinic.email}`} className="text-[#2388ff] text-sm hover:underline">
                    {d.clinic.email}
                  </a>
                </div>
              </div>

              <div className="h-px bg-blue-200" />

              {/* Ünvan */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-[#001a56] font-semibold text-sm">{d.clinic.address}</p>
                  <p className="text-[#465271] text-xs mt-0.5">{d.clinic.addressNote}</p>
                </div>
              </div>

              <div className="h-px bg-blue-200" />

              {/* Lab saatları */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">🔬</span>
                <div>
                  <p className="text-[#465271] text-xs">Laboratoriya iş saatları</p>
                  <p className="text-[#001a56] font-bold text-sm">{d.clinic.labHours}</p>
                </div>
              </div>

              {/* Qeyd */}
              <p className="text-[#465271] text-xs leading-relaxed bg-white/50 rounded-xl px-4 py-3">
                💡 {d.clinic.appointmentNote}
              </p>
            </div>
          </div>

          {/* SAĞ — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#001a56] font-semibold text-sm">{d.form.firstNameLabel}</label>
                <input type="text" name="firstName"
                  placeholder={d.form.firstNamePlaceholder}
                  value={formData.firstName} onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#001a56] font-semibold text-sm">{d.form.lastNameLabel}</label>
                <input type="text" name="lastName"
                  placeholder={d.form.lastNamePlaceholder}
                  value={formData.lastName} onChange={handleChange}
                  className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700
                             placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#001a56] font-semibold text-sm">{d.form.emailLabel}</label>
              <input type="email" name="email"
                placeholder={d.form.emailPlaceholder}
                value={formData.email} onChange={handleChange}
                className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#001a56] font-semibold text-sm">{d.form.phoneLabel}</label>
              <input type="tel" name="phone"
                placeholder={d.form.phonePlaceholder}
                value={formData.phone} onChange={handleChange}
                className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#001a56] font-semibold text-sm">{d.form.messageLabel}</label>
              <textarea name="message" rows={5}
                placeholder={d.form.messagePlaceholder}
                value={formData.message} onChange={handleChange}
                className="border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
              />
            </div>

            <button type="submit"
              className="w-fit bg-[#001a56] hover:bg-[#2388ff] text-white px-8 py-3.5
                         rounded-full text-sm font-semibold transition-colors duration-200"
            >
              {d.form.submitBtn}
            </button>
          </form>
        </div>
      </section>

      {/* ── Section 2: Info kartları ── */}
      <section className="px-6 pb-20">
        <div className="max-w-[1380px] mx-auto bg-[#ebf4ff] rounded-3xl px-6 py-16 md:p-[100px]">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[48px] font-extrabold text-[#001a56] mb-3">
              {d.infoSection.title}
            </h2>
            <p className="text-[#465271] text-[15px] max-w-xl mx-auto">
              {d.infoSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* E-poçt — böyük kart */}
            <div className="bg-white rounded-3xl p-8 flex flex-col gap-4 md:row-span-2">
              <span className="text-4xl">📧</span>
              <div>
                <h3 className="text-[#001a56] font-bold text-base mb-2">Bizə e-poçt göndərin</h3>
                <p className="text-[#465271] text-sm leading-relaxed mb-5">
                  Suallarınız üçün e-poçt vasitəsilə əlaqə saxlaya bilərsiniz. Ən qısa müddətdə cavab veririk.
                </p>
                <a href={`mailto:${d.clinic.email}`}
                  className="text-[#2388ff] text-sm border border-blue-100 bg-blue-50
                             rounded-full px-4 py-2 hover:bg-blue-100 transition-colors inline-block"
                >
                  {d.clinic.email}
                </a>
              </div>
            </div>

            {/* Həkim telefonu */}
            <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-[#465271] text-sm mb-1">Dr. Xatirə Aslanova</p>
                <a href={d.doctor.phoneRaw}
                  className="text-[#001a56] font-bold text-base hover:text-[#2388ff] transition-colors">
                  {d.doctor.phone}
                </a>
              </div>
            </div>

            {/* Klinika telefonu */}
            <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
              <span className="text-3xl">🏥</span>
              <div>
                <p className="text-[#465271] text-sm mb-1">Klinika</p>
                <a href={d.clinic.phone1Raw}
                  className="text-[#001a56] font-bold text-base hover:text-[#2388ff] transition-colors block">
                  {d.clinic.phone1}
                </a>
                <a href={d.clinic.phone2Raw}
                  className="text-[#001a56] font-bold text-base hover:text-[#2388ff] transition-colors block mt-1">
                  {d.clinic.phone2}
                </a>
              </div>
            </div>

            {/* Sosial media */}
            <div className="bg-white rounded-3xl p-5 flex items-center justify-between md:col-start-2 md:col-span-2">
              <p className="text-[#001a56] font-semibold text-sm">Bizi sosial mediada izləyin</p>
              <div className="flex items-center gap-3">
                <a href={d.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
                             hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href={d.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href={d.social.instagramClinic} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
                             hover:opacity-80 transition-opacity">
                  <span className="text-white text-xs font-bold">P</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}