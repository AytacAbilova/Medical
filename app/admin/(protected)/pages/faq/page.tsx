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
import { createId, useCMSState, type FaqItem } from "@/lib/mock-data";

const schema = z.object({
  question: z.string().min(1, "Sual tələb olunur"),
  answer: z.string().min(1, "Cavab tələb olunur"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminFaqPage() {
  const { state, updateState } = useCMSState();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editing = useMemo(() => state.faqs.find((f) => f.id === editingId) ?? null, [state.faqs, editingId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { question: "", answer: "" },
  });

  useEffect(() => {
    if (!open) return;
    reset(editing ? { question: editing.question, answer: editing.answer } : { question: "", answer: "" });
  }, [open, editing, reset]);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[#001a56] font-extrabold text-[26px]">FAQ</div>
          <div className="text-[#465271] text-sm mt-1">Editable array</div>
        </div>
        <Button
          onClick={() => {
            setEditingId(null);
            setOpen(true);
          }}
        >
          Yeni sual
        </Button>
      </div>

      <Table<FaqItem>
        rows={state.faqs}
        rowKey={(r) => r.id}
        columns={[
          { key: "q", header: "Question", cell: (r) => <div className="font-extrabold text-[#001a56]">{r.question}</div> },
          { key: "a", header: "Answer", cell: (r) => <div className="text-[#465271] line-clamp-2">{r.answer}</div> },
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
                  onClick={() => updateState((prev) => ({ ...prev, faqs: prev.faqs.filter((x) => x.id !== r.id) }))}
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
        title={editing ? "FAQ edit" : "Yeni sual"}
        onClose={() => setOpen(false)}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Ləğv et
            </Button>
            <Button form="faq-form" type="submit" disabled={isSubmitting}>
              Yadda saxla
            </Button>
          </div>
        }
      >
        <form
          id="faq-form"
          className="space-y-4"
          onSubmit={handleSubmit(async (values) => {
            updateState((prev) => {
              if (editing) {
                return { ...prev, faqs: prev.faqs.map((f) => (f.id === editing.id ? { ...f, ...values } : f)) };
              }
              const next: FaqItem = { id: createId("faq"), ...values };
              return { ...prev, faqs: [next, ...prev.faqs] };
            });
            setOpen(false);
          })}
        >
          <Input label="Question" {...register("question")} error={errors.question?.message} />
          <Textarea label="Answer" rows={6} {...register("answer")} error={errors.answer?.message} />
        </form>
      </Modal>
    </div>
  );
}

