var React = require('react');
var Link = require("react-router").Link;

var Logo = React.createClass({

  render: function() {
    return (
      <b className="nav-logo">
        <Link to="" className="nav-logo-text">
          <strong>Seance</strong>
        </Link>

        <Link to="" >
          <img alt="" className="nav-logo-icon" />
        </Link>
      </b>
    );
  }

});

module.exports = Logo;
