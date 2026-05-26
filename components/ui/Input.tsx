"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input({ label, error, className, ...rest }, ref) {
  return (
    <label className="block">
      {label && <div className="text-sm font-semibold text-[#001a56] mb-1.5">{label}</div>}
      <input
        ref={ref}
        className={[
          "w-full h-10 rounded-xl border bg-white px-3 text-sm text-[#001a56] outline-none transition-colors",
          error ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-[#2388ff]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
      {error && <div className="mt-1 text-xs font-semibold text-red-600">{error}</div>}
    </label>
  );
});

export default Input;

