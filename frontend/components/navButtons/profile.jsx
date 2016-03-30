var React = require('react');
var PropTypes = React.PropTypes;

var Profile = React.createClass({

  render: function() {
    return (
      <button
        className="nav-tools--profile"
        onClick={this.login}>
        <img className="avatar"></img>
      </button>
    );
  }

});

module.exports = Profile;
