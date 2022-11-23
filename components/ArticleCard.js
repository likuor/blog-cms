import Link from 'next/link';
import Image from "next/image";
const ArticleCard = ({ article, slug }) => {

  const myLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 100}`
}

  return (
    <div>
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
      <div>
        <div>
          <h4>{article.title}</h4>
          <p>{article.publishDate}</p>
        </div>
        <div>
          <Link href={'/article/' + article.slug}>Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
