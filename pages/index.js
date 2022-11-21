import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blogPost' });

  return {
    props: {
      articles: res.items,
    },
  };
}

export default function Home({ articles }) {
  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article) => {
        console.log(article);
        // <ArticleCard key={article.sys.id} article={article} />;
      })}
    </div>
  );
}
