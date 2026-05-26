"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const CMS_KEY = "medical_cms_state_v1";
const CMS_EVENT = "medical:cms:update";

export type GlobalHero = {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonHref: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  createdAt: string;
};

export type AboutSection = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
};

export type CMSState = {
  globalHero: GlobalHero;
  services: ServiceItem[];
  faqs: FaqItem[];
  blogPosts: BlogPost[];
  aboutSections: AboutSection[];
  contact: ContactInfo;
};

const defaultState: CMSState = {
  globalHero: {
    title: "Tibbi xidmətlər üçün etibarlı seçim",
    subtitle: "Peşəkar konsultasiya, müasir yanaşma, pasiyent mərkəzli xidmət.",
    imageUrl:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f5f2?auto=format&fit=crop&w=2400&q=80",
    buttonText: "Əlaqə saxla",
    buttonHref: "/contact",
  },
  services: [
    {
      id: "svc_1",
      title: "Konsultasiya",
      description: "Şikayətlərin qiymətləndirilməsi və ilkin müayinə planı.",
      icon: "stethoscope",
    },
    {
      id: "svc_2",
      title: "Laborator analizlər",
      description: "Dəqiq diaqnoz üçün testlər və nəticələrin izahı.",
      icon: "flask",
    },
  ],
  faqs: [
    {
      id: "faq_1",
      question: "Müayinəyə necə hazırlaşım?",
      answer: "Həkimin tövsiyəsinə uyğun olaraq analizlərə acqarına gəlin.",
    },
    {
      id: "faq_2",
      question: "Randevu necə götürə bilərəm?",
      answer: "Əlaqə səhifəsindən zəng edin və ya mesaj yazın.",
    },
  ],
  blogPosts: [
    {
      id: "post_1",
      title: "Profilaktik müayinələrin əhəmiyyəti",
      slug: "profilaktik-muayineler",
      content: "Bu məqalə admin panel üçün mock nümunədir.",
      imageUrl:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=80",
      createdAt: new Date().toISOString(),
    },
  ],
  aboutSections: [
    {
      id: "about_1",
      title: "Həkim haqqında",
      description: "Qısa bio və klinik yanaşma barədə məlumat.",
      imageUrl:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2400&q=80",
    },
  ],
  contact: {
    phone: "+994 50 000 00 00",
    email: "info@example.az",
    address: "Bakı, Azərbaycan",
    mapUrl: "https://maps.google.com",
  },
};

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function safeStringify(value: unknown) {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}

function emitUpdate() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CMS_EVENT));
}

export function getCMSState(): CMSState {
  if (!canUseStorage()) return defaultState;
  const parsed = safeParse<CMSState>(window.localStorage.getItem(CMS_KEY));
  return parsed ?? defaultState;
}

export function setCMSState(next: CMSState) {
  if (!canUseStorage()) return;
  const raw = safeStringify(next);
  if (!raw) return;
  window.localStorage.setItem(CMS_KEY, raw);
  emitUpdate();
}

export function updateCMSState(updater: (prev: CMSState) => CMSState) {
  const prev = getCMSState();
  const next = updater(prev);
  setCMSState(next);
}

export function createId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
}

export function toSlug(input: string) {
  const base = input
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
  return base
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function isSlugUnique(slug: string, exceptId?: string) {
  const state = getCMSState();
  return !state.blogPosts.some((p) => p.slug === slug && p.id !== exceptId);
}

export function useCMSState() {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onUpdate = () => setVersion((v) => v + 1);
    window.addEventListener(CMS_EVENT, onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener(CMS_EVENT, onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  const state = useMemo(() => getCMSState(), [version]);

  const setState = useCallback((next: CMSState) => {
    setCMSState(next);
    setVersion((v) => v + 1);
  }, []);

  const updateState = useCallback((updater: (prev: CMSState) => CMSState) => {
    updateCMSState(updater);
    setVersion((v) => v + 1);
  }, []);

  return { state, setState, updateState };
}

