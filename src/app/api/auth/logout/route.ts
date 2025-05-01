import { clearAuthCookies } from "@/app/actions";
import { NextResponse } from "next/server";

export async function POST() {
  await clearAuthCookies();
  return NextResponse.json({ message: "Logout successful" }, { status: 200 });
}
