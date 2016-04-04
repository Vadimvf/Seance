var React = require('react');
var ArticleUtil = require('../util/articleUtil');
var ArticleStore = require('../stores/article');
var PropTypes = React.PropTypes;

var ArticleShow = React.createClass({

  getInitialState: function() {
    return {
      article: {}
    };
  },

  componentDidMount: function() {
    this.showListener = ArticleStore.addListener(this._onChange);
    ArticleUtil.fetchArticle(this.props.params.id);
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
    
    return (
      <article className="article-container">
        <div className="article-header group">
          <ul className="article--info">
            <li className="article--info-author">
              {article.author.username}
            </li>
            <li className="article--info-content">
              {article.created_ago + " ⋅ " + article.read_time}
            </li>
          </ul>
        </div>
        <div className="content" >
          <h2>{article.title}</h2>
          <div>{article.body}</div>
        </div>
      </article>
    );
  }

});

module.exports = ArticleShow;
