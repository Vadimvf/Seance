import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ProfileArticles(props) {
  function _createHTML(content) {
    return { __html: content };
  }
  if (props.articles.length > 0) {
    const articles = props.articles.map((article, idx) => (
      <article key={idx} className="author-show-article">
        <h3>{article.title}</h3>
        <div
          className="author-show-article--content"
          dangerouslySetInnerHTML={_createHTML(article.body_short)}
        />
        <ul className="article-options group">
          <li className="article--info-content">
            {`${article.created_ago} ⋅ ${article.read_time}`}
          </li>
          <li className="article--edit">
            <Link to={`/articles/edit/${article.id}`}>Edit</Link>
          </li>
          <li className="article--delete">
            <button onClick={() => props.deleteArticle(article.id)}>
              Delete
            </button>
          </li>
        </ul>
      </article>
      )
    );
    return <section className="articles-list">{articles}</section>;
  }
  return <Link to="articles/new" > Write a new story? </Link>;
}

ProfileArticles.propTypes = {
  articles: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

export default ProfileArticles;
