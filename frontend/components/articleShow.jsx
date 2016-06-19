import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import ArticleUtil from '../util/articleUtil';
import ArticleStore from '../stores/article';
import NavAction from '../actions/navAction';

class ArticleShow extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  }
  constructor() {
    super();
    this.state = {
      article: {},
    };
  }
  componentDidMount() {
    this.showListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticle(this.props.params.id);
    NavAction.renderArticleShow();
  }
  componentWillReceiveProps = (nextProps) => {
    ArticleUtil.fetchArticle(nextProps.params.id);
    this.setState({
      article: ArticleStore.one(),
    });
  }
  componentWillUnmount = () => {
    this.showListener.remove();
  }
  _onChange = () => {
    this.setState({
      article: ArticleStore.one(),
    });
  }
  render() {
    const article = this.state.article;
    if (!article.hasOwnProperty('id')) return <p />;
    const _createHTML = content => ({ __html: content });
    return (
      <article className="article-show-container">
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
        <div className="content" >
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={_createHTML(article.body)}>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleShow;
