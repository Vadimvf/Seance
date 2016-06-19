import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';

class ReactListItem extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  }
  directToArticle = () => {
    hashHistory.push(`articles/${this.props.article.id}`);
  }
  render() {
    let article = this.props.article;
    function _createHTML(content) {
      return { __html: content };
    }
    return (
      <article className="article-container">
        <div className="article-header group">
          <ul className="article--info">
            <li className="article--info-author">
              <Link to={`/authors/${article.author.id}`} >
                {article.author.username}
              </Link>
            </li>
            <li className="article--info-content">
              {`${article.created_ago} ⋅ ${article.read_time}`}
            </li>
          </ul>
        </div>
        <div className="article-content" onClick={this.directToArticle}>
          <h2>{article.title}</h2>
          <p
            dangerouslySetInnerHTML={_createHTML(article.body_short)}
          ></p>
        </div>
      </article>
    );
  }
}

export default ReactListItem;
