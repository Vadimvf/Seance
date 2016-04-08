var React = require('react');
var ArticleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var PropTypes = React.PropTypes;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var NavAction = require('../actions/navAction');

var ArticleShow = React.createClass({

  getInitialState: function() {
    return {
      article: {}
    };
  },

  componentDidMount: function() {
    this.showListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticle(this.props.params.id);
    NavAction.renderArticleShow();
  },

  componentWillUnmount: function() {
    this.showListener.remove();
  },

  _onChange: function (){
    this.setState({
      article: ArticleStore.one()
    });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      article: ArticleStore.one()
    });
  },

  render: function() {
    var article  = this.state.article;

    if ($.isEmptyObject(article)) {
      return <p/>;
    }

    function _createHTML(content){
      return {__html: content};
    }

    return (
      <article className="article-show-container">

        <div className="article-header group">
          <ul className="article--info">
            <li className="article--info-author">
              <Link to={"/authors/" + article.author.id} >
                {article.author.username}
              </Link>
            </li>
            <li className="article--info-content">
              {article.created_ago + " ⋅ " + article.read_time}
            </li>
          </ul>
        </div>

        <div className="content" >
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={_createHTML(article.body)}>
          </div>
        </div>

      </article>
    );
  }

});

module.exports = ArticleShow;
