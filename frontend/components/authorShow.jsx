var React = require('react');
var PropTypes = React.PropTypes;

var ArticleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var NavAction = require('../actions/navAction');
var ArticleListItem = require('./articleListItem');

var AuthorShow = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      authorId: null,
      published: true,
      articles: []
    };
  },

  componentDidMount: function() {
    var self = this;
    NavAction.renderArticleShow();
    this.indexListener = ArticleStore.addListener(this._onChange);

    if (!this.props.params.id) {return;}

    this.setState({
      authorId: this.props.params.id
    }, function () {ArticleUtil.fetchArticles(
      {query: {
        authorId: self.props.params.id,
        published: true
      }}
    );});

  },

  _onChange: function () {
    this.setState({
      articles: ArticleStore.all()
    });
  },

  componentWillUnmount: function() {
    this.indexListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    var self = this;
    if (!nextProps.params.id) {return;}

    this.setState({
      authorId: this.props.params.id
    }, function () {ArticleUtil.fetchArticles(
      {query: {
        authorId: self.props.params.id,
        published: true
      }}
    );});
  },

  render: function() {

    if (!this.state.authorId) {return <div/>;}
    if (this.state.articles.length < 1) {return <div/>;}
    author = this.state.articles[0].author;


    var articles = this.state.articles.map(function (article, idx){
      return (
        <ArticleListItem article={article} key={idx} />
        );
    });

    return (
      <div className="author-container">
        <section className="author-content" >
          <h2>{author.fullname}</h2>
          <h3>{author.username}</h3>
          <h4>{author.email}</h4>
          <p>{author.bio}</p>
        </section>
        <section className="articles">
          {articles}
        </section >
      </div>
    );
  }

});

module.exports = AuthorShow;
