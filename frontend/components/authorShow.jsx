var React = require('react');
var PropTypes = React.PropTypes;

// var ArticleUtil = require('../util/articleUtil');
var AuthorUtil = require('../util/authorUtil');
// var ArticleStore = require('../stores/article');
var AuthorStore = require('../stores/author');
var NavAction = require('../actions/navAction');
var ArticleListItem = require('./articleListItem');

var AuthorShow = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      author: null
    };
  },

  componentDidMount: function () {
    NavAction.renderArticleShow();
    this.authorListener = AuthorStore.addListener(this._onChange);
    AuthorUtil.fetchAuthor(this.props.params.id);
  },

  _onChange: function () {
    this.setState({
      author: AuthorStore.author()
    });
  },

  componentWillUnmount: function () {
    this.authorListener.remove();
  },

  _ensureAuthorRender: function (){

  },

  render: function () {
    if (!this.state.author) {return <div/>;}
    var author = this.state.author;
    var authorArticles = this.state.author.articles || [];
    var self = this;

    var articles = authorArticles.map(function (article, idx){
      article.author = {};
      article.author.username = self.state.author.username;
      return (
        <ArticleListItem article={article} key={idx} />
        );
    });

    return (
      <div className="author-container">
        <div className="author-content-background" >
          <section className="author-content">
            <h2>{author.fullname}</h2>
            <h3>{author.username}</h3>
            <h4>{author.email}</h4>
            <p>{author.bio}</p>
          </section>
        </div>
        <section className="articles">
          <h3 className="latest-articles--header">Recent Stories</h3>
          {articles}
        </section >
      </div>
    );
  }

});

module.exports = AuthorShow;
