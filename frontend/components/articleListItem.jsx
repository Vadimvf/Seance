var React = require('react');
var PropTypes = React.PropTypes;

var ReactListItem = React.createClass({

  render: function() {
    article = this.props.article;

    return (
      <article>
        <div className="article-header">
          <ul className="article--info">
            <li className="article--info-author">
              {article.author.username}
            </li>
            <li className="article--info-content">
              {article.created_ago + "•" + article.read_time}
            </li>
          </ul>
        </div>
        <div className="article-content">
          <h2>{article.title}</h2>
        </div>
      </article>
    );
  }

});

module.exports = ReactListItem;
