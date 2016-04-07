var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../stores/session');
var SessionUtil = require('../util/sessionUtil');
var QueryArticles = require('./profileComponents/queryArticles');
var NavAction = require('../actions/navAction');

var AuthorProfile = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor()
    };
  },

  componentDidMount: function() {
    NavAction.renderArticleShow();
  },

  _logout: function () {
    router = this.context.router;
    SessionUtil.logout(function () {
      router.push("");
    });
  },

  render: function() {
    return (
      <div className="author-container">
        <section className="author-content" >
          <h2>{this.state.author.fullname}</h2>
          <h3>{this.state.author.username}</h3>
          <h4>{this.state.author.email}</h4>
          <p>{this.state.author.bio}</p>
          <button onClick={this._logout}>Log out</button>
        </section>
        <QueryArticles />
      </div>
    );
  }

});

module.exports = AuthorProfile;
