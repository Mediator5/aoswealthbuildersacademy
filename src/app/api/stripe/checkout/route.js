import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { ebookData } from "@/data/ebooks";

export async function POST(request) {
  try {
    const { ebookId } = await request.json();

    const ebook = ebookData.find((e) => e.id === ebookId);
    if (!ebook) {
      return NextResponse.json(
        { error: "Ebook not found" },
        { status: 404 }
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: ebook.title,
              description: ebook.subtitle,
              images: [ebook.image],
            },
            unit_amount: Math.round(ebook.price * 100), // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}&ebook=${ebookId}`,
      cancel_url: `${origin}/checkout/cancel?ebook=${ebookId}`,
      metadata: {
        ebookId: ebookId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
