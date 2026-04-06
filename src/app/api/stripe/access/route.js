import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getPurchasedEbooks } from "@/lib/purchases";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const purchased = getPurchasedEbooks(cookieStore);

    return NextResponse.json({ purchased });
  } catch (error) {
    console.error("Access check error:", error);
    return NextResponse.json({ purchased: [] });
  }
}
