"use server";

import { cookies } from "next/headers";

export async function getCookie(key: string) {
  const store = await cookies();

  const cookie = store.get(key);

  return cookie?.value ?? null;
}

interface CookieOptions {
  name: string;
  value: string;
  config?: {
    path?: string;
    domain?: string;
    maxAge?: number;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: "strict" | "lax" | "none";
  };
}

export async function setCookie(options: CookieOptions) {
  const store = await cookies();

  store.set(options.name, options.value, options.config);
}

export async function clearCookie(value: string) {
  const store = await cookies();
  store.delete(value);
}

export async function clearAuthCookies() {
  const store = await cookies();
  const cookiesToClear = [
    "m_uat",
    "m_urt",
    "m_usi",
    "m_auth_status",
    "m_refresh_status",
  ];

  await Promise.all(
    cookiesToClear.map((cookieName) =>
      store.delete({
        name: cookieName,
        path: "/",
        domain:
          process.env.NODE_ENV === "development"
            ? "localhost"
            : "cookie-demo-07.vercel.app",
        secure: process.env.NODE_ENV === "production",
      })
    )
  );
}
