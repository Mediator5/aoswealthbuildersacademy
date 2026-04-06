import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { stripe } from "@/lib/stripe";
import { addPurchasedEbook } from "@/lib/purchases";

export async function POST(request) {
  try {
    const { sessionId, ebookId } = await request.json();

    if (!sessionId || !ebookId) {
      return NextResponse.json(
        { error: "Missing session ID or ebook ID" },
        { status: 400 }
      );
    }

    // Verify the session with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    // Verify the ebook matches
    if (session.metadata?.ebookId !== ebookId) {
      return NextResponse.json(
        { error: "Ebook mismatch" },
        { status: 400 }
      );
    }

    // Grant access by setting cookie
    const cookieStore = await cookies();
    addPurchasedEbook(cookieStore, ebookId);

    return NextResponse.json({ success: true, ebookId });
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
