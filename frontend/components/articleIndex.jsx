import React, { PropTypes } from 'react';

import ArticleUtil from '../util/articleUtil';
import ArticleStore from '../stores/article';
import SessionStore from '../stores/session';
import NavAction from '../actions/navAction';
import ArticleListItem from './articleListItem';

class ArticleIndex extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      author: SessionStore.currentAuthor(),
      articles: [],
    };
  }
  componentDidMount() {
    this.indexListener = ArticleStore.addListener(this.onChange);
    this.authorListener = SessionStore.addListener(this.onAuthor);
    this.fetchIndexArticles(this.props);
    NavAction.renderDefaultNav();
  }
  componentWillReceiveProps(nextProps) {
    this.fetchIndexArticles(nextProps);
  }
  componentWillUnmount = () => {
    this.indexListener.remove();
    this.authorListener.remove();
  }
  onChange = () => {
    this.setState({
      articles: ArticleStore.all(),
    });
  }
  onAuthor = () => {
    this.setState({
      author: SessionStore.currentAuthor(),
    });
  }
  fetchIndexArticles(props) {
    const isImpressionable = !!props.location.query.impressionable;
    ArticleUtil.fetchArticles({
      query: {
        published: true,
        impressionable: isImpressionable,
      },
    });
  }
  render() {
    const articles = this.state.articles.map((article, idx) => (
      <ArticleListItem article={article} key={idx} />
    ));
    return (
      <section className="articles" >
        {articles}
      </section>
    );
  }
}

export default ArticleIndex;
