var React = require('react');
var PropTypes = React.PropTypes;

var Login = React.createClass({

  render: function() {
    return (
      <button
        className="nav-tools--login"
        onClick={this.login}> Sign in / Sign up
      </button>
    );
  }

});

module.exports = Login;
