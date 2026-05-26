"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useCMSState } from "@/lib/mock-data";

const schema = z.object({
  title: z.string().min(1, "Title tələb olunur"),
  description: z.string().min(1, "Description tələb olunur"),
  imageUrl: z.string().url("Düzgün URL daxil edin"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminAboutPage() {
  const { state, updateState } = useCMSState();
  const first = state.aboutSections[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: first?.title ?? "",
      description: first?.description ?? "",
      imageUrl: first?.imageUrl ?? "",
    },
  });

  useEffect(() => {
    reset({
      title: first?.title ?? "",
      description: first?.description ?? "",
      imageUrl: first?.imageUrl ?? "",
    });
  }, [first, reset]);

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[#001a56] font-extrabold text-[26px]">About</div>
        <div className="text-[#465271] text-sm mt-1">Sadə editor (1 section)</div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <form
          className="space-y-4"
          onSubmit={handleSubmit(async (values) => {
            updateState((prev) => {
              const id = prev.aboutSections[0]?.id ?? "about_1";
              const nextSections = [{ id, ...values }, ...prev.aboutSections.slice(1)];
              return { ...prev, aboutSections: nextSections };
            });
          })}
        >
          <Input label="Title" {...register("title")} error={errors.title?.message} />
          <Textarea label="Description" rows={6} {...register("description")} error={errors.description?.message} />
          <Input label="Image URL" {...register("imageUrl")} error={errors.imageUrl?.message} />

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button variant="secondary" type="button" onClick={() => reset()} disabled={!isDirty || isSubmitting}>
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

