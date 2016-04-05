var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../stores/session');
var SessionUtil = require('../util/sessionUtil');

var AuthorProfile = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor()
    };
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
      </div>
    );
  }

});

module.exports = AuthorProfile;
