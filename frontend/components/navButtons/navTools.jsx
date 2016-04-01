var React = require('react');
var Profile = require("./profile");
var Login = require("./login");

var NavTools = React.createClass({

  render: function() {
    return (
      <ul className="nav-tools">
        <li className="nav-tools-search">
          <img></img>
          <input type="text" placeholder="Search Seance"></ input>
        </li>
        <li>
          <button className="nav-tools--write">Write a story</button>
        </li>
        <li>
          <Login />
        </li>
      </ul>
    );
  }

});

module.exports = NavTools;
