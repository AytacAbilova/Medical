"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { label, error, className, rows = 5, ...rest },
  ref
) {
  return (
    <label className="block">
      {label && <div className="text-sm font-semibold text-[#001a56] mb-1.5">{label}</div>}
      <textarea
        ref={ref}
        rows={rows}
        className={[
          "w-full rounded-xl border bg-white px-3 py-2 text-sm text-[#001a56] outline-none transition-colors resize-y",
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

export default Textarea;

