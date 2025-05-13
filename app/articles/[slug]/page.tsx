import { getArticle } from "lib/api";

export default async function KnowledgeArticle({
  params,
}) {
  const article = await getArticle(params.slug);
  return (
    <main>
      <h1>{article.title}</h1>
    </main>
  );
}