//styles
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="Blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Profundizar en el artículo</p>
      </div>
    </div>
  );
};

export default Article;
