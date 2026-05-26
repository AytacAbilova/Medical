"use client";

import { useEffect, type ReactNode } from "react";
import Button from "./Button";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
};

export default function Modal({ open, title, children, onClose, footer }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-100">
            <div className="text-[#001a56] font-extrabold text-[15px]">{title}</div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Bağla
            </Button>
          </div>
          <div className="p-5">{children}</div>
          {footer && <div className="px-5 py-4 border-t border-gray-100 bg-[#F8F9FB]">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

