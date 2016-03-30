var React = require('react');

var Logo = React.createClass({

  render: function() {
    return (
      <b className="nav-logo">
        <img alt="" className="nav-logo-icon"></img>
        <img alt="Seance" className="nav-logo-text"></img>
      </b>
    );
  }

});

module.exports = Logo;
