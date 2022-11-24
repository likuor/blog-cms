import Link from 'next/link';
import Image from 'next/image';
import { formatDate, myLoader } from '../helper/Helper';

const ArticleCard = ({ article }) => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <Link href={'/article/' + article.slug}>
        <div>
          <Image
            loader={myLoader}
            width={500}
            height={300}
            alt={article.heroImage.fields.description}
            src={article.heroImage.fields.file.url}
            priority
            className='rounded-t-3xl'
          />
        </div>
        <div className='container mx-auto px-4 py-4 bg-gray-100 rounded-b-3xl'>
          <h4 className='text-1xl font-bold'>{article.title}</h4>
          <p className='text-gray-400'>{formatDate(article.publishDate)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
