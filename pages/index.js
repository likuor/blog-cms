import { client } from "../libs/client";
import ArticleCard from '../components/ArticleCard';

// SSG
export const getStaticProps = async () => {
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
        return <ArticleCard key={article.sys.id} article={article.fields} />;
      })}
    </div>
  );
}
