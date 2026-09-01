import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "../data";
import ArticleClient from "./article-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `https://fundleaf.co.uk/resources/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      siteName: "FundLeaf",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `https://fundleaf.co.uk/resources/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: article.author },
    datePublished: article.date,
    url,
    publisher: {
      "@type": "Organization",
      name: "FundLeaf",
      url: "https://fundleaf.co.uk",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleClient article={article} />
    </>
  );
}
