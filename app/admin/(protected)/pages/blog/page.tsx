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
import { createId, isSlugUnique, toSlug, useCMSState, type BlogPost } from "@/lib/mock-data";

const schema = z.object({
  title: z.string().min(1, "Title tələb olunur"),
  slug: z.string().min(1, "Slug tələb olunur"),
  imageUrl: z.string().url("Düzgün URL daxil edin"),
  content: z.string().min(1, "Content tələb olunur"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminBlogPage() {
  const { state, updateState } = useCMSState();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editing = useMemo(
    () => state.blogPosts.find((p) => p.id === editingId) ?? null,
    [state.blogPosts, editingId]
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", slug: "", imageUrl: "", content: "" },
  });

  const title = watch("title");
  const slug = watch("slug");

  useEffect(() => {
    if (!open) return;
    reset(
      editing
        ? { title: editing.title, slug: editing.slug, imageUrl: editing.imageUrl, content: editing.content }
        : { title: "", slug: "", imageUrl: "", content: "" }
    );
  }, [open, editing, reset]);

  useEffect(() => {
    if (!open) return;
    if (!title) return;
    if (editing) return;
    if (slug) return;
    setValue("slug", toSlug(title));
  }, [open, title, slug, setValue, editing]);

  const slugError = useMemo(() => {
    if (!slug) return null;
    const unique = isSlugUnique(slug, editing?.id);
    return unique ? null : "Bu slug artıq mövcuddur";
  }, [slug, editing?.id]);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[#001a56] font-extrabold text-[26px]">Blog</div>
          <div className="text-[#465271] text-sm mt-1">/question üçün mock CRUD</div>
        </div>
        <Button
          onClick={() => {
            setEditingId(null);
            setOpen(true);
          }}
        >
          Yeni post
        </Button>
      </div>

      <Table<BlogPost>
        rows={state.blogPosts}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "title",
            header: "Title",
            cell: (r) => <div className="font-extrabold text-[#001a56]">{r.title}</div>,
          },
          { key: "slug", header: "Slug", cell: (r) => <div className="font-semibold">{r.slug}</div> },
          { key: "createdAt", header: "Created", cell: (r) => <div className="text-[#465271]">{new Date(r.createdAt).toLocaleDateString()}</div> },
          {
            key: "actions",
            header: "",
            className: "w-[240px]",
            cell: (r) => (
              <div className="flex items-center justify-end gap-2">
                <Button variant="secondary" size="sm" href={`/question/${r.slug}`}>
                  View
                </Button>
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
                      blogPosts: prev.blogPosts.filter((x) => x.id !== r.id),
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
        title={editing ? "Post edit" : "Yeni post"}
        onClose={() => setOpen(false)}
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Ləğv et
            </Button>
            <Button form="blog-form" type="submit" disabled={isSubmitting || Boolean(slugError)}>
              Yadda saxla
            </Button>
          </div>
        }
      >
        <form
          id="blog-form"
          className="space-y-4"
          onSubmit={handleSubmit(async (values) => {
            if (!isSlugUnique(values.slug, editing?.id)) return;
            updateState((prev) => {
              if (editing) {
                return {
                  ...prev,
                  blogPosts: prev.blogPosts.map((p) => (p.id === editing.id ? { ...p, ...values } : p)),
                };
              }
              const next: BlogPost = {
                id: createId("post"),
                ...values,
                createdAt: new Date().toISOString(),
              };
              return { ...prev, blogPosts: [next, ...prev.blogPosts] };
            });
            setOpen(false);
          })}
        >
          <Input label="Title" {...register("title")} error={errors.title?.message} />
          <Input label="Slug" {...register("slug")} error={slugError ?? errors.slug?.message} />
          <Input label="Image URL" {...register("imageUrl")} error={errors.imageUrl?.message} />
          <Textarea label="Content" rows={8} {...register("content")} error={errors.content?.message} />
        </form>
      </Modal>
    </div>
  );
}

