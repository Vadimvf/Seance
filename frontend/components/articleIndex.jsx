var React = require('react');
var articleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var ArticleListItem = require('./articleListItem');

var ArticleIndex = React.createClass({

  getInitialState: function() {
    return {
      articles: ArticleStore.all()
    };
  },

  _onChange: function() {
    this.setState({
      articles: ArticleStore.all()
    });
  },

  componentDidMount: function() {
    this.indexListener = ArticleStore.addListener(this._onChange);
    articleUtil.fetchArticles();
  },

  componentWillUnmount: function() {
    this.indexListener.remove();
  },

  render: function() {
    articles = this.state.articles.map(function (article, idx){
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
