"use client";
import { useState } from "react";
import { Phone, CalendarDays, MessageCircle, X } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    href: "https://wa.me/994508846614",
    external: true,
  },
  {
    icon: <CalendarDays size={22} />,
    label: "Randevu al",
    href: "/contact",
    external: false,
  },
  {
    icon: <Phone size={22} />,
    label: "24/7 Zəng",
    href: "tel:+994508846614",
    external: true,
  },
];

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-8 z-50 flex flex-col items-center gap-3">

      {/* Action düymələri */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {actions.map((action, i) => (
          <div key={i} className="relative group flex items-center justify-end gap-3">

            {/* Tooltip label */}
            <span
              className="absolute right-14 bg-[#0F172A] text-white text-xs font-semibold
                         px-3 py-1.5 rounded-lg whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         pointer-events-none"
            >
              {action.label}
            </span>

            {/* Düymə */}
            {action.external ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2A69AC] hover:bg-[#1e5490]
                           text-white flex items-center justify-center
                           shadow-lg hover:shadow-[#2A69AC]/40 hover:scale-110
                           transition-all duration-200"
              >
                {action.icon}
              </a>
            ) : (
              <Link
                href={action.href}
                className="w-12 h-12 rounded-full bg-[#2A69AC] hover:bg-[#1e5490]
                           text-white flex items-center justify-center
                           shadow-lg hover:shadow-[#2A69AC]/40 hover:scale-110
                           transition-all duration-200"
              >
                {action.icon}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Əsas toggle düymə */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Sürətli əlaqə"
        className={`w-14 h-14 rounded-full text-white flex items-center justify-center
                   shadow-xl transition-all duration-300
                   ${open
                     ? "bg-[#0F172A] rotate-0"
                     : "bg-[#2A69AC] hover:bg-[#1e5490] hover:scale-110"
                   }`}
      >
        {open
          ? <X size={22} />
          : <MessageCircle size={24} />
        }
      </button>

      {/* Pulse animasiyası (bağlı vəziyyətdə) */}
      {!open && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#2A69AC]/40 animate-ping pointer-events-none" />
      )}
    </div>
  );
}