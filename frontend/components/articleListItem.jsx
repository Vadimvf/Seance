var React = require('react');
var PropTypes = React.PropTypes;

var ReactListItem = React.createClass({

  render: function() {
    article = this.props.article;

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
        <div className="article-content">
          <h2>{article.title}</h2>
          <p>{article.body_short + "..."}</p>
        </div>
      </article>
    );
  }

});

module.exports = ReactListItem;
