"use client";

import { useMemo } from "react";
import { useCMSState } from "@/lib/mock-data";

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5">
      <div className="text-[#465271] text-xs font-bold uppercase tracking-[0.18em]">{title}</div>
      <div className="text-[#001a56] font-extrabold text-[28px] mt-2">{value}</div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const { state } = useCMSState();

  const stats = useMemo(
    () => ({
      services: state.services.length,
      faqs: state.faqs.length,
      blogPosts: state.blogPosts.length,
      aboutSections: state.aboutSections.length,
    }),
    [state]
  );

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[#001a56] font-extrabold text-[26px]">Dashboard</div>
        <div className="text-[#465271] text-sm mt-1">Kontent ümumi göstəriciləri</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Services" value={String(stats.services)} />
        <StatCard title="FAQ" value={String(stats.faqs)} />
        <StatCard title="Blog" value={String(stats.blogPosts)} />
        <StatCard title="About sections" value={String(stats.aboutSections)} />
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5">
        <div className="text-[#001a56] font-extrabold text-[16px]">Qeyd</div>
        <div className="text-[#465271] text-sm mt-2 leading-relaxed">
          Bu admin panel mock data + localStorage ilə işləyir. Sonradan REST API endpointləri əlavə edəndə yalnız data layer-i dəyişərək UI-ni saxlayacaqsan.
        </div>
      </div>
    </div>
  );
}

