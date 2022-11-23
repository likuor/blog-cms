import Link from 'next/link';
import Image from 'next/image';
const ArticleCard = ({ article, slug }) => {
  const myLoader = ({ src, width, quality }) => {
    return `https:${src}?w=${width}&q=${quality || 100}`;
  };

  return (
    <div className='container mx-auto px-4 py-4'>
      <div>
        <Image
          loader={myLoader}
          alt={article.heroImage.fields.description}
          src={article.heroImage.fields.file.url}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className='container mx-auto py-4'>
        <h4 className='text-1xl font-bold'>{article.title}</h4>
        <p className='text-gray-400'>{article.publishDate}</p>
        <Link href={'/article/' + article.slug} className='text-sky-400'>
          Detail
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
