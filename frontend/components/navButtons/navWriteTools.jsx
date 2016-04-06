var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('./profile');

var navWriteTools = React.createClass({

  render: function() {
    return (
      <ul className="nav-tools">
        <li className="nav-write--publish">
          <button>
            Publish Draft
          </ button>
        </li>
        <li className="nav-write--delete">
          <button >
            Delete Draft
          </ button>
        </li>
        <li>
          <Profile/>
        </li>
      </ul>
    );
  }

});

module.exports = navWriteTools;
