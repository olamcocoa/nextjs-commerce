import { getAllArticles } from "lib/api";

export async function Articles() {
const articles = await getAllArticles();
      
return (
    <>
    {/* {articles?.map((article) => (
        <article key={article.sys.id} className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-6">
          <Link href={`/articles/${article.slug}`}>
            <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
              {article.title}
            </h3>
          </Link>
          <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
            {article.categoryName} 
          </div>
          <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
            {article.summary}
          </p>
          <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
            Written by: {article.authorName}
          </p>
          <div className="flex justify-end">
            <Link
              className="inline-flex h-10 items-center justify-center text-sm font-medium"
              href={`/articles/${article.slug}`}
            >
              Read More →
            </Link>
          </div>
        </div>
      </article>
     ))} */}
     </>   
  );
}    