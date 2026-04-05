import EbookContent from "@/components/EbookContent";
import { ebookData } from "@/data/ebooks";

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
  return <EbookContent slug={slug} />;
}
