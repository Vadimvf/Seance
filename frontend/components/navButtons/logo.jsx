var React = require('react');

var Logo = React.createClass({

  render: function() {
    return (
      <b className="nav-logo">
        <img src="#" alt="Seance Icon" className="nav-logo-icon"></img>
        <img src="#" alt="Seance" className="nav-logo-text"></img>
      </b>
    );
  }

});

module.exports = Logo;
