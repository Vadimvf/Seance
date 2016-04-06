var React = require('react');
var ReactRouter = require("react-router");
var Logo = require('./navButtons/logo');
var NavLinks = require('./navButtons/navLinks');
var NavTools = require('./navButtons/navTools');

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      navWrite: false
    };
  },

  viewNavWrite: function () {
    this.setState({
      navWrite: true
    });
  },

  render: function() {
    console.log(this.state.navWrite);
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
