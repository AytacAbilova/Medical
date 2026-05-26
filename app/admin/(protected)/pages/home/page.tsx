"use client";

import Button from "@/components/ui/Button";

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[#001a56] font-extrabold text-[26px]">Home</div>
        <div className="text-[#465271] text-sm mt-1">Bu səhifə üçün editor sonradan genişlənə bilər.</div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <div className="text-[#001a56] font-extrabold text-[16px]">Başlanğıc</div>
        <div className="text-[#465271] text-sm mt-2 leading-relaxed">
          Hazırda əsas idarə olunan hissə Global Hero-dur (bütün səhifələrə təsir edir). Home spesifik blokları üçün endpoint gələndə
          burada ayrıca blok editorları əlavə edəcəyik.
        </div>

        <div className="mt-4">
          <Button href="/admin/global/hero" variant="secondary">
            Global Hero-ya keç
          </Button>
        </div>
      </div>
    </div>
  );
}

