"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { hydrated, isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!hydrated) return;
    if (isLoggedIn) return;
    const next = pathname ? `?next=${encodeURIComponent(pathname)}` : "";
    router.replace(`/admin/login${next}`);
  }, [hydrated, isLoggedIn, router, pathname]);

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center">
        <div className="text-[#001a56] font-extrabold">Yüklənir...</div>
      </div>
    );
  }

  if (!isLoggedIn) return null;

  return <>{children}</>;
}

