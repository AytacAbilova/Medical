"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import img from "@/public/assets/images/arrow.png";
type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
};

function classes(variant: Variant, size: Size, disabled?: boolean) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes =
    size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-sm";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[#2388ff] text-white hover:bg-[#1a6fd4] focus:ring-[#2388ff]",
    secondary:
      "bg-white text-[#001a56] border border-gray-200 hover:bg-gray-50 focus:ring-gray-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost:
      "bg-transparent text-[#001a56] hover:bg-[#EEF3FA] focus:ring-[#2388ff]/30",
  };

  return [base, sizes, variants[variant], disabled ? "opacity-60 pointer-events-none" : ""].join(" ");
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", href, className, disabled, children, ...rest },
  ref
) {
  const cls = [classes(variant, size, disabled), className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button ref={ref} className={cls} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

export default Button;

