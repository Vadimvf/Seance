var React = require('react');
var Logo = require('./navButtons/logo');
var NavLinks = require('./navButtons/navLinks');
var NavTools = require('./navButtons/navTools');


var NavBar = React.createClass({

  render: function() {
    return (
      <header className="nav group">
        <Logo />
        <NavLinks />
        <NavTools />
      </header>
    );
  }

});

module.exports = NavBar;
