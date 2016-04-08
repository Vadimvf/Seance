var React = require('react');
var ArticleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var ArticleListItem = require('./articleListItem');
var NavAction = require('../actions/navAction');
var SessionStore = require('../stores/session');

var ArticleIndex = React.createClass({

  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor(),
      articles: []
    };
  },

  _onChange: function() {
    this.setState({
      articles: ArticleStore.all()
    });
  },

  _onAuthor: function() {
    this.setState({
      author: SessionStore.currentAuthor()
    });
  },

  componentDidMount: function() {
    this.indexListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticles({query: {published: true}});
    this.authorListener =
    SessionStore.addListener(this._onAuthor);

    NavAction.renderDefaultNav();
  },

  componentWillUnmount: function() {
    this.indexListener.remove();
    this.authorListener.remove();
  },

  render: function() {
    var articles = this.state.articles.map(function (article, idx){
      return (
        <ArticleListItem article={article} key={idx} />
        );
    });

    return (
        <section className="articles">
          {articles}
        </section>
    );
  }

});

module.exports = ArticleIndex;
