"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { LayoutDashboard, LogOut, Menu, PanelLeftClose, PanelLeftOpen, FileText, Home, Phone, Info, HelpCircle, Stethoscope, Sparkles } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Global Hero", href: "/admin/global/hero", icon: Sparkles },
  { label: "Home", href: "/admin/pages/home", icon: Home },
  { label: "Services", href: "/admin/pages/services", icon: Stethoscope },
  { label: "FAQ", href: "/admin/pages/faq", icon: HelpCircle },
  { label: "About", href: "/admin/pages/about", icon: Info },
  { label: "Blog", href: "/admin/pages/blog", icon: FileText },
  { label: "Contact", href: "/admin/pages/contact", icon: Phone },
];

function isActive(pathname: string, href: string) {
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = useMemo(() => pathname ?? "/admin/dashboard", [pathname]);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="lg:hidden sticky top-0 z-40 border-b border-gray-100 bg-white">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            className="h-10 w-10 rounded-xl border border-gray-200 bg-white inline-flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} className="text-[#001a56]" />
          </button>
          <div className="font-extrabold text-[#001a56]">Admin</div>
          <div className="w-10" />
        </div>
      </div>

      <div className="flex">
        <aside
          className={[
            "fixed lg:sticky top-0 z-50 h-screen bg-white border-r border-gray-100",
            collapsed ? "w-[84px]" : "w-[280px]",
            mobileOpen ? "left-0" : "-left-[320px] lg:left-0",
            "transition-all duration-200",
          ].join(" ")}
        >
          <div className="h-14 px-4 flex items-center justify-between border-b border-gray-100">
            <Link href="/admin/dashboard" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-[#2388ff]/10 flex items-center justify-center">
                <Sparkles size={16} className="text-[#2388ff]" />
              </div>
              {!collapsed && <div className="font-extrabold text-[#001a56]">Medical CMS</div>}
            </Link>
            <button
              className="hidden lg:inline-flex h-9 w-9 rounded-xl border border-gray-200 bg-white items-center justify-center"
              onClick={() => setCollapsed((v) => !v)}
              aria-label="Toggle sidebar"
            >
              {collapsed ? <PanelLeftOpen size={16} className="text-[#001a56]" /> : <PanelLeftClose size={16} className="text-[#001a56]" />}
            </button>
            <button
              className="lg:hidden h-9 w-9 rounded-xl border border-gray-200 bg-white inline-flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <PanelLeftClose size={16} className="text-[#001a56]" />
            </button>
          </div>

          <nav className="p-3">
            {navItems.map((item) => {
              const active = isActive(current, item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "h-11 px-3 rounded-xl flex items-center gap-3 transition-colors",
                    active ? "bg-[#EEF3FA] text-[#2388ff]" : "text-[#001a56] hover:bg-gray-50",
                  ].join(" ")}
                >
                  <div className={["h-9 w-9 rounded-xl flex items-center justify-center", active ? "bg-[#2388ff]/10" : "bg-[#F8F9FB]"].join(" ")}>
                    <Icon size={18} className={active ? "text-[#2388ff]" : "text-[#001a56]"} />
                  </div>
                  {!collapsed && <div className="font-semibold">{item.label}</div>}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-100 bg-white">
            <div className={["flex items-center gap-3", collapsed ? "justify-center" : ""].join(" ")}>
              <div className="h-10 w-10 rounded-xl bg-[#001a56] text-white flex items-center justify-center font-extrabold text-sm">
                {(user?.name?.[0] ?? "A").toUpperCase()}
              </div>
              {!collapsed && (
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-[#001a56] truncate">{user?.name ?? "Admin"}</div>
                  <div className="text-xs text-[#465271] truncate">{user?.email ?? ""}</div>
                </div>
              )}
              <button
                className="ml-auto h-10 w-10 rounded-xl border border-gray-200 bg-white inline-flex items-center justify-center"
                aria-label="Logout"
                onClick={() => {
                  logout();
                  router.push("/admin/login");
                }}
              >
                <LogOut size={16} className="text-[#001a56]" />
              </button>
            </div>
          </div>
        </aside>

        {mobileOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />}

        <div className={["flex-1 min-w-0", collapsed ? "lg:pl-[84px]" : "lg:pl-[280px]"].join(" ")}>
          <div className="hidden lg:block sticky top-0 z-30 border-b border-gray-100 bg-white">
            <div className="h-14 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="font-extrabold text-[#001a56]">Admin Panel</div>
                <div className="text-xs font-semibold text-[#465271]">Mock CMS</div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" href="/">
                  Sayta bax
                </Button>
              </div>
            </div>
          </div>

          <main className="px-4 lg:px-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

