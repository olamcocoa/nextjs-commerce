
import { getArticle } from "lib/api";

export default async function KnowledgeArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const article = await getArticle(params.slug);

  return (
    <main>
      <h1>Article Detail Page {article.title} </h1>
    </main>
  );
}