import { cookies } from "next/headers";
import EbookContent from "@/components/EbookContent";
import EbookLocked from "@/components/EbookLocked";
import { ebookData } from "@/data/ebooks";
import { hasEbookAccess } from "@/lib/purchases";

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
    title: ebook.title,
    description: ebook.subtitle,
  };
}

export default async function EbookPage({ params }) {
  const { slug } = await params;
  const ebook = ebookData.find((e) => e.id === slug);

  if (!ebook) {
    return <EbookContent slug={slug} />;
  }

  const cookieStore = await cookies();
  const hasAccess = hasEbookAccess(cookieStore, slug);

  if (!hasAccess) {
    return <EbookLocked slug={slug} />;
  }

  return <EbookContent slug={slug} />;
}
