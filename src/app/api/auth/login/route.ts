import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  const commonOptions = {
    domain:
      process.env.NODE_ENV === "development"
        ? "localhost"
        : "cookie-demo-07.vercel.app",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  cookieStore.set("m_uat", "tokens.accessToken", {
    ...commonOptions,
    expires: expires,
    httpOnly: process.env.NODE_ENV === "development" ? false : true,
    sameSite: "lax",
  });

  cookieStore.set("m_auth_status", "authenticated", {
    ...commonOptions,
    httpOnly: process.env.NODE_ENV === "development" ? false : true,
    expires: expires,
    sameSite: "lax",
  });
  return NextResponse.json({ message: "Logout successful" }, { status: 200 });
}
