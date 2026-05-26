"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const AUTH_TOKEN_KEY = "medical_admin_token";
const AUTH_USER_KEY = "medical_admin_user";

type AdminUser = {
  name: string;
  email: string;
};

function readLocalStorage(key: string) {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocalStorage(key: string, value: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    return;
  }
}

export function getAuthToken() {
  return readLocalStorage(AUTH_TOKEN_KEY);
}

export function useAuth() {
  const [hydrated, setHydrated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    setToken(readLocalStorage(AUTH_TOKEN_KEY));
    const userRaw = readLocalStorage(AUTH_USER_KEY);
    setUser(userRaw ? (JSON.parse(userRaw) as AdminUser) : null);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === AUTH_TOKEN_KEY) setToken(e.newValue);
      if (e.key === AUTH_USER_KEY) setUser(e.newValue ? (JSON.parse(e.newValue) as AdminUser) : null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isLoggedIn = useMemo(() => Boolean(token), [token]);

  const login = useCallback((payload: { email: string; password: string }) => {
    const fakeToken = `mock.${btoa(payload.email)}.${Date.now()}`;
    writeLocalStorage(AUTH_TOKEN_KEY, fakeToken);
    writeLocalStorage(
      AUTH_USER_KEY,
      JSON.stringify({
        name: payload.email.split("@")[0] || "Admin",
        email: payload.email,
      } satisfies AdminUser)
    );
    setToken(fakeToken);
    setUser({ name: payload.email.split("@")[0] || "Admin", email: payload.email });
  }, []);

  const logout = useCallback(() => {
    writeLocalStorage(AUTH_TOKEN_KEY, null);
    writeLocalStorage(AUTH_USER_KEY, null);
    setToken(null);
    setUser(null);
  }, []);

  return { hydrated, token, user, isLoggedIn, login, logout };
}

