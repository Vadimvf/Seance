import React from 'react';
import { Link } from 'react-router';

import ArticleStore from '../../stores/article';
import SessionStore from '../../stores/session';
import ArticleUtil from '../../util/articleUtil';

class QueryArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      published: false,
    };
  }
  componentDidMount() {
    this.articleListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticles({
      query: {
        published: false,
        authorId: SessionStore.currentAuthor().id,
      },
    });
  }
  componentWillUnmount = () => {
    this.articleListener.remove();
  }
  _onChange = () => {
    this.setState({
      articles: ArticleStore.all(),
    });
  }
  toggleQuery = () => {
    ArticleUtil.fetchArticles({
      query: {
        published: !this.state.published,
        authorId: SessionStore.currentAuthor().id,
      },
    }, this.setState({ published: !this.state.published }));
  }
  deleteArticle = (articleId) => {
    const fetchNewArticles = () => {
      ArticleUtil.fetchArticles({
        query: {
          published: this.state.published,
          authorId: SessionStore.currentAuthor().id,
        },
      });
    };
    ArticleUtil.deleteArticle(articleId, fetchNewArticles);
  }
  render() {
    const draftKlass = !this.state.published ? 'active' : '';
    const publicKlass = this.state.published ? 'active' : '';

    return (
      <div className="author-articles-container">
        <h1>Your stories</h1>
        <section className="articles-info">
          <ul className="articles--type-selector group">
            <li onClick={this.toggleQuery} className={draftKlass}>
              Drafts
            </li>
            <li onClick={this.toggleQuery} className={publicKlass}>
              Published
            </li>
            <li >
              <Link to="articles/new" >
                New Story
              </Link>
            </li>
          </ul>
        </section>

        <section className="articles-list">
          {this._renderArticles()}
        </section>
      </div>
    );
  }
  _renderArticles() {
    var articles;
    var self = this;
    function _createHTML(content){
      return {__html: content};
    }
    if (this.state.articles.length > 0){
      articles = this.state.articles.map(function (article, idx){
        return (
          <article key={idx} className="author-show-article">
            <h3>{article.title}</h3>
            <div className="author-show-article--content"
              dangerouslySetInnerHTML={_createHTML(article.body_short)}>
            </div>
            <ul className="article-options group">
              <li className="article--info-content">
                {article.created_ago + " ⋅ " + article.read_time}
              </li>
              <li className="article--edit">
                <Link to={"/articles/edit/" + article.id}>Edit</Link>
              </li>
              <li className="article--delete">
                <button onClick={self.deleteArticle.bind(null, article.id)}>
                  Delete
                </button>
              </li>
            </ul>
          </article>
        );
      });
    } else {
      articles = (
        <Link to="articles/new" >
          Write a new story?
        </Link>
      );
    }

    return articles;
  }
}

module.exports = QueryArticles;
