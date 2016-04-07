var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var ArticleStore = require('../../stores/article');
var SessionStore = require('../../stores/session');
var ArticleUtil = require('../../util/articleUtil');

var QueryArticles = React.createClass({

  getInitialState: function() {
    return {
      articles: [],
      published: false,
    };
  },

  _onChange: function() {
    this.setState({
      articles: ArticleStore.all()
    });
  },

  componentDidMount: function() {
    this.articleListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticles({
      query: {
        published: false,
        authorId: SessionStore.currentAuthor().id
      }
    });
  },

  componentWillUnmount: function() {
    this.articleListener.remove();
  },

  toggleQuery: function() {

    ArticleUtil.fetchArticles({
      query: {
        published: !this.state.published,
        authorId: SessionStore.currentAuthor().id
      }
    }, this.setState({ published: !this.state.published }));
  },

  deleteArticle: function (articleId){
    function _fetchNewArticles () {
      ArticleUtil.fetchArticles({
        query: {
          published: this.state.published,
          authorId: SessionStore.currentAuthor().id
        }
      });
    }

    ArticleUtil.deleteArticle(articleId, _fetchNewArticles.bind(this));
  },

  render: function() {
    var draftKlass = !this.state.published ? "active" : "";
    var publicKlass = this.state.published ? "active" : "";

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
  },

  _renderArticles: function (){
    var articles;
    var self = this;
    function _createHTML(content){
      return {__html: content};
    }

    if (this.state.articles.length > 0){
      articles = this.state.articles.map(function (article, idx){
        return (
          <article key={idx}>
            <h3>{article.title}</h3>
            <div
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
    }else {
      articles = (
        <Link to="articles/new" >
          Write a new story?
        </Link>
      );
    }

    return articles;
  }

});

module.exports = QueryArticles;
