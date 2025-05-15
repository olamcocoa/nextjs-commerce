
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getArticle } from "lib/api";


export default async function KnowledgeArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const article = await getArticle(params.slug);

  return (
    <main>
      <h1>{article.title}</h1>
        {documentToReactComponents(article.sectionsCollection.items[1].richText.json)}
    </main>
  );
}