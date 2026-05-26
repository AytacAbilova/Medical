"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useCMSState, type GlobalHero } from "@/lib/mock-data";

const schema = z.object({
  title: z.string().min(1, "Title tələb olunur"),
  subtitle: z.string().min(1, "Subtitle tələb olunur"),
  imageUrl: z.string().url("Düzgün URL daxil edin"),
  buttonText: z.string().min(1, "Button text tələb olunur"),
  buttonHref: z.string().min(1, "Button link tələb olunur"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminGlobalHeroPage() {
  const { state, updateState } = useCMSState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: state.globalHero,
  });

  useEffect(() => {
    reset(state.globalHero);
  }, [state.globalHero, reset]);

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[#001a56] font-extrabold text-[26px]">Global Hero</div>
        <div className="text-[#465271] text-sm mt-1">Bütün səhifələrdə görünən hero kontenti</div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          onSubmit={handleSubmit(async (values) => {
            updateState((prev) => ({
              ...prev,
              globalHero: values satisfies GlobalHero,
            }));
          })}
        >
          <div className="lg:col-span-2">
            <Input label="Title" {...register("title")} error={errors.title?.message} />
          </div>
          <div className="lg:col-span-2">
            <Textarea label="Subtitle" rows={4} {...register("subtitle")} error={errors.subtitle?.message} />
          </div>
          <Input label="Image URL" {...register("imageUrl")} error={errors.imageUrl?.message} />
          <Input label="Button Link" {...register("buttonHref")} error={errors.buttonHref?.message} />
          <Input label="Button Text" {...register("buttonText")} error={errors.buttonText?.message} />

          <div className="lg:col-span-2 flex items-center justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => reset(state.globalHero)}
              disabled={!isDirty || isSubmitting}
            >
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

