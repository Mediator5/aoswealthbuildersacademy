import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const ebookId = session.metadata?.ebookId;

    if (ebookId) {
      // In production, save this to a database:
      // e.g., await db.purchases.create({ email: session.customer_email, ebookId })
      console.log(
        `Payment successful for ebook: ${ebookId}, email: ${session.customer_details?.email}`
      );
    }
  }

  return NextResponse.json({ received: true });
}
