import React from 'react';
import { Link } from 'react-router';

import ArticleStore from '../../stores/article';
import SessionStore from '../../stores/session';
import ArticleUtil from '../../util/articleUtil';
import ProfileArticles from './profileArticles';

class QueryArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      published: false,
    };
  }
  componentDidMount() {
    this.articleListener = ArticleStore.addListener(this.onChange);
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
  onChange = () => {
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
        <ProfileArticles
          articles={this.state.articles}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default QueryArticles;
