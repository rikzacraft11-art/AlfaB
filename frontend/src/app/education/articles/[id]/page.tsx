import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleDetailContent } from "@/components/education/article-detail-content";
import {
    getAllArticleIds,
    getArticleById,
} from "@/components/education/education-data";

/* Static generation for all article pages */
export function generateStaticParams(): { id: string }[] {
    return getAllArticleIds().map((id) => ({ id }));
}

/* Dynamic metadata */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const article = getArticleById(id);
    if (!article) return { title: "Article Not Found" };

    return {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/education/articles/${id}` },
    };
}

export default async function ArticleDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<React.JSX.Element> {
    const { id } = await params;
    const article = getArticleById(id);

    if (!article) notFound();

    return (
        <>
            <ArticleDetailContent article={article} />
        </>
    );
}
