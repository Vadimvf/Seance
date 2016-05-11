var React = require('react');
var PropTypes = React.PropTypes;

var ArticleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var ArticleListItem = require('./articleListItem');
var NavAction = require('../actions/navAction');
var SessionStore = require('../stores/session');

var ArticleIndex = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

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
    var impressionable = !!this.props.location.query.impressionable;
    ArticleUtil.fetchArticles({query: {
      published: true,
      impressionable: impressionable
    }});

    this.authorListener =
    SessionStore.addListener(this._onAuthor);

    NavAction.renderDefaultNav();
  },

  componentWillReceiveProps: function(nextProps) {
    var impressionable = !!nextProps.location.query.impressionable;
    ArticleUtil.fetchArticles({query: {
      published: true,
      impressionable: impressionable
    }});
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
