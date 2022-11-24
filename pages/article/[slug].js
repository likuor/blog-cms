import { client } from '../../libs/client';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { myLoader } from '../../helper/Helper';

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'blogPost' });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  return {
    props: {
      article: items[0],
    },
  };
};

const ArticleSlug = ({ article }) => {
  return (
    <div>
      <div>
        <Image
          loader={myLoader}
          alt={article.fields.heroImage.fields.description}
          src={article.fields.heroImage.fields.file.url}
          width={500}
          height={300}
          // width={article.heroImage.fields.file.details.image.width}
          // height={article.heroImage.fields.file.details.image.height}
          priority
        />
        <h1>{article.fields.title}</h1>
      </div>
      <div>
        <p>{article.fields.description}</p>
      </div>
      <div>{documentToReactComponents(article.fields.content)}</div>
    </div>
  );
};

export default ArticleSlug;
