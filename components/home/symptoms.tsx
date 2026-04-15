"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  "/assets/images/contactus.png",
  "/assets/images/image2.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/image1.png"
];

export default function ImageStrip() {
  const ref = useRef<HTMLDivElement>(null);

  const loopImages = [...images, ...images];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationFrame: number;

    const scroll = () => {
      if (!el) return;

      el.scrollLeft += 0.5; 

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-5 overflow-hidden">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pl-4 pr-0 no-scrollbar"
      >
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="relative min-w-[260px] h-[300px] rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={src}
              alt={`image-${index}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}