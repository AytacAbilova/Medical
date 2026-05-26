"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";

const schema = z.object({
  email: z.string().email("Düzgün email daxil edin"),
  password: z.string().min(1, "Şifrə tələb olunur"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center">
          <div className="text-[#001a56] font-extrabold">Yüklənir...</div>
        </div>
      }
    >
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin/dashboard";

  const { isLoggedIn, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "admin@demo.az", password: "admin" },
  });

  useEffect(() => {
    if (isLoggedIn) router.replace("/admin/dashboard");
  }, [isLoggedIn, router]);

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <div className="text-[#001a56] font-extrabold text-[22px]">Admin Login</div>
          <div className="text-[#465271] text-sm mt-1">Mock auth (localStorage token)</div>

          <form
            className="mt-6 space-y-4"
            onSubmit={handleSubmit(async (values) => {
              login(values);
              router.replace(next);
            })}
          >
            <Input label="Email" placeholder="admin@demo.az" {...register("email")} error={errors.email?.message} />
            <Input label="Şifrə" type="password" placeholder="admin" {...register("password")} error={errors.password?.message} />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              Daxil ol
            </Button>
          </form>
        </div>

        <div className="text-center text-xs text-[#465271] mt-4">
          Demo: admin@demo.az / admin
        </div>
      </div>
    </div>
  );
}
