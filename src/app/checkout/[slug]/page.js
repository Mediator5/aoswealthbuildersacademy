import { ebookData } from "@/data/ebooks";
import CheckoutContent from "@/components/CheckoutContent";

export async function generateStaticParams() {
  return ebookData.map((ebook) => ({
    slug: ebook.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ebook = ebookData.find((e) => e.id === slug);

  if (!ebook) {
    return { title: "Blueprint Not Found" };
  }

  return {
    title: `Purchase ${ebook.title}`,
    description: `Get instant access to ${ebook.title} — ${ebook.subtitle}`,
  };
}

export default async function CheckoutPage({ params }) {
  const { slug } = await params;
  return <CheckoutContent slug={slug} />;
}
