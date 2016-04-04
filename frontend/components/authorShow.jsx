var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../stores/session');

var AuthorProfile = React.createClass({

  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor()
    };
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.author.fullname}</h2>
        <h3>{this.state.author.username}</h3>
        <h4>{this.state.author.email}</h4>
        <p>{this.state.author.bio}</p>
      </div>
    );
  }

});

module.exports = AuthorProfile;
