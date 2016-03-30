var React = require('react');
var PropTypes = React.PropTypes;

var NavLinks = React.createClass({

  render: function() {
    return (
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Top Stories</a>
        </li>
        <li>
          <a href="#">Bookmarks</a>
        </li>
      </ul>
    );
  }

});

module.exports = NavLinks;
