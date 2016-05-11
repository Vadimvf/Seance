var React = require('react');
var PropTypes = React.PropTypes;
var Link = require("react-router").Link;

var NavLinks = React.createClass({

  render: function() {
    return (
      <ul className="nav-links">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/articles/top", query: { impressionable: "true" } }}>Top Stories</Link>
        </li>
        <li>
          <a href="#">Bookmarks</a>
        </li>
      </ul>
    );
  }

});

module.exports = NavLinks;
