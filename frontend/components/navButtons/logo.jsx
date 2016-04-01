var React = require('react');

var Logo = React.createClass({
  //REPLACE WITH A REAL LOGO
  // <img alt="Seance" className="nav-logo-text"></img>
  render: function() {
    return (
      <b className="nav-logo">
        <strong>Seance</strong>
        <img alt="" className="nav-logo-icon"></img>
      </b>
    );
  }

});

module.exports = Logo;
