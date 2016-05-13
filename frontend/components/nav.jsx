var React = require('react');
var ReactRouter = require("react-router");

var Logo = require('./navButtons/logo');
var NavLinks = require('./navButtons/navLinks');
var NavTools = require('./navButtons/navTools');
var SearchBar = require("./navButtons/search");
var NavConstants = require('../constants/navConstants');
var NavStore = require('../stores/navStore');
var NavWriteTools = require('./navButtons/navWriteTools');

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      navType: NavConstants.DEFAULT
    };
  },

  _onChange: function () {
    this.setState({
      navType: NavStore.currentNavType()
    });
  },

  componentDidMount: function () {
    this.listener = NavStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  setNavRenderOnType: function () {
    var navContent;

    switch (this.state.navType) {
      case NavConstants.DEFAULT:
        navContent = (
          <header className="nav group">
            <Logo />
            <NavLinks />
            <NavTools />
          </header>
        );
        break;
      case NavConstants.WRITE_TOOLS:
        navContent = (
          <header className="nav group">
            <Logo />
            <NavWriteTools />
          </header>
        );
        break;
      case NavConstants.ARTICLE_SHOW:
        navContent = (
          <header className="nav group">
            <Logo />
            <ul className="nav-tools">
              <li className="nav-tools-search">
                <SearchBar />
              </li>
            </ul>
          </header>
        );
      break;
    }

    return navContent;
  },

  render: function() {
    return this.setNavRenderOnType();
  }

});

module.exports = NavBar;
