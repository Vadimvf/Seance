import React, { PropTypes } from 'react';

import AuthorUtil from '../util/authorUtil';
import AuthorStore from '../stores/author';
import NavAction from '../actions/navAction';
import ArticleListItem from './articleListItem';

class AuthorShow extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      author: null,
    };
  }
  componentDidMount() {
    NavAction.renderArticleShow();
    this.authorListener = AuthorStore.addListener(this.onChange);
    AuthorUtil.fetchAuthor(this.props.params.id);
  }
  componentWillUnmount = () => {
    this.authorListener.remove();
  }
  onChange = () => {
    this.setState({
      author: AuthorStore.author(),
    });
  }
  createArticles = () => {
    const authorArticles = this.state.author.articles || [];
    const articles = authorArticles.map((article, idx) => {
      const articleCopy = article;
      articleCopy.author = this.state.author;
      return (
        <ArticleListItem article={articleCopy} key={idx} />
      );
    });
    return articles;
  }
  render() {
    if (!this.state.author) return <div />;
    const { fullname, username, email, bio } = this.state.author;
    const articles = this.createArticles();
    return (
      <div className="author-container">
        <div className="author-content-background" >
          <section className="author-content">
            <h2>{fullname}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>
            <p>{bio}</p>
          </section>
        </div>
        <section className="articles">
          <h3 className="latest-articles--header">Recent Stories</h3>
          {articles}
        </section>
      </div>
    );
  }
}

export default AuthorShow;
