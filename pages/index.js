import { client } from '../libs/client';
import ArticleCard from '../components/ArticleCard';

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'blogPost' });
  return {
    props: {
      articles: res.items,
    },
  };
};

export default function Home({ articles }) {
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold px-2 py-2'>Blog</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
          {articles.map((article) => {
            return (
              <ArticleCard key={article.sys.id} article={article.fields} />
            );
          })}
        </div>
      </div>
    </>
  );
}
