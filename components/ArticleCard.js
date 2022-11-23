import Link from 'next/link';

const ArticleCard = ({ article, slug }) => {
  console.log(article);
  return (
    <div>
      <div>{/* image */}</div>
      <div>
        <div>
          <h4>{article.title}</h4>
          <p>{article.publishDate}</p>
        </div>
        <div>
          <Link href={'/detail/' + slug}>Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
