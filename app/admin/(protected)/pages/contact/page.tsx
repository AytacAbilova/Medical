"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCMSState, type ContactInfo } from "@/lib/mock-data";

const schema = z.object({
  phone: z.string().min(1, "Phone tələb olunur"),
  email: z.string().email("Düzgün email daxil edin"),
  address: z.string().min(1, "Address tələb olunur"),
  mapUrl: z.string().url("Düzgün URL daxil edin"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminContactPage() {
  const { state, updateState } = useCMSState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: state.contact,
  });

  useEffect(() => {
    reset(state.contact);
  }, [state.contact, reset]);

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[#001a56] font-extrabold text-[26px]">Contact</div>
        <div className="text-[#465271] text-sm mt-1">Telefon, email, ünvan, xəritə linki</div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          onSubmit={handleSubmit(async (values) => {
            updateState((prev) => ({ ...prev, contact: values satisfies ContactInfo }));
          })}
        >
          <Input label="Phone" {...register("phone")} error={errors.phone?.message} />
          <Input label="Email" {...register("email")} error={errors.email?.message} />
          <div className="lg:col-span-2">
            <Input label="Address" {...register("address")} error={errors.address?.message} />
          </div>
          <div className="lg:col-span-2">
            <Input label="Map URL" {...register("mapUrl")} error={errors.mapUrl?.message} />
          </div>

          <div className="lg:col-span-2 flex items-center justify-end gap-2 pt-2">
            <Button variant="secondary" type="button" onClick={() => reset(state.contact)} disabled={!isDirty || isSubmitting}>
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Yadda saxla
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

