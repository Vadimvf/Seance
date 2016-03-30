var React = require('react');
var Profile = require("./profile");

var NavTools = React.createClass({

  render: function() {
    return (
      <ul className="nav-tools">
        <li className="nav-tools-search">
          <img></img>
          <input type="text" placeholder="Search Seance"></ input>
        </li>
        <li>
          <button className="nav-tools--write">Write a Story</button>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    );
  }

});

module.exports = NavTools;
