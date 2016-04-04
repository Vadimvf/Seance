var React = require('react');
var Link = require("react-router").Link;

var Logo = React.createClass({
  //REPLACE WITH A REAL LOGO
  // <img alt="Seance" className="nav-logo-text"></img>
  render: function() {
    return (
      <b className="nav-logo">
        <Link to="" >
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
