"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Modal from "@/components/ui/Modal";
import Table from "@/components/ui/Table";
import { createId, useCMSState, type ServiceItem } from "@/lib/mock-data";

const schema = z.object({
  title: z.string().min(1, "Title tələb olunur"),
  description: z.string().min(1, "Description tələb olunur"),
  icon: z.string().min(1, "Icon tələb olunur"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminServicesPage() {
  const { state, updateState } = useCMSState();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editing = useMemo(
    () => state.services.find((s) => s.id === editingId) ?? null,
    [state.services, editingId]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", description: "", icon: "" },
  });

  useEffect(() => {
    if (!open) return;
    reset(
      editing
        ? { title: editing.title, description: editing.description, icon: editing.icon }
        : { title: "", description: "", icon: "" }
    );
  }, [open, editing, reset]);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[#001a56] font-extrabold text-[26px]">Services</div>
          <div className="text-[#465271] text-sm mt-1">CRUD siyahı (mock data)</div>
        </div>
        <Button
          onClick={() => {
            setEditingId(null);
            setOpen(true);
          }}
        >
          Yeni service
        </Button>
      </div>

      <Table<ServiceItem>
        rows={state.services}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "title",
            header: "Title",
            cell: (r) => <div className="font-extrabold text-[#001a56]">{r.title}</div>,
          },
          { key: "icon", header: "Icon", cell: (r) => <div className="font-semibold">{r.icon}</div> },
          { key: "desc", header: "Description", cell: (r) => <div className="text-[#465271] line-clamp-2">{r.description}</div> },
          {
            key: "actions",
            header: "",
            className: "w-[210px]",
            cell: (r) => (
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setEditingId(r.id);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    updateState((prev) => ({
                      ...prev,
                      services: prev.services.filter((x) => x.id !== r.id),
                    }));
                  }}
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />

      <Modal
        open={open}
        title={editing ? "Service edit" : "Yeni service"}
        onClose={() => setOpen(false)}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Ləğv et
            </Button>
            <Button form="service-form" type="submit" disabled={isSubmitting}>
              Yadda saxla
            </Button>
          </div>
        }
      >
        <form
          id="service-form"
          className="space-y-4"
          onSubmit={handleSubmit(async (values) => {
            updateState((prev) => {
              if (editing) {
                return {
                  ...prev,
                  services: prev.services.map((s) => (s.id === editing.id ? { ...s, ...values } : s)),
                };
              }
              const nextItem: ServiceItem = { id: createId("svc"), ...values };
              return { ...prev, services: [nextItem, ...prev.services] };
            });
            setOpen(false);
          })}
        >
          <Input label="Title" {...register("title")} error={errors.title?.message} />
          <Textarea label="Description" rows={4} {...register("description")} error={errors.description?.message} />
          <Input label="Icon" placeholder="stethoscope / flask / heart ..." {...register("icon")} error={errors.icon?.message} />
        </form>
      </Modal>
    </div>
  );
}

