var React = require('react');
var PropTypes = React.PropTypes;

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
          <button className="nav-tools--profile">
            <img className="avatar"></img>
          </button>
        </li>
      </ul>
    );
  }

});

module.exports = NavTools;
