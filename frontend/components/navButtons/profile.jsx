var React = require('react');
var PropTypes = React.PropTypes;

var Profile = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  fetchProfile: function () {
    this.context.router.push("/authors/:id");
  },

  render: function() {
    return (
      <button
        className="nav-tools--profile"
        onClick={this.fetchProfile}>
        <img className="avatar"></img>
      </button>
    );
  }

});

module.exports = Profile;
