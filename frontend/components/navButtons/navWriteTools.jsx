var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('./profile');
var ArticleAction = require('../../actions/articleAction');
var NavAction = require('../../actions/navAction');

var navWriteTools = React.createClass({

  render: function () {
    return (
      <ul className="nav-tools">
        <li className="nav-write--publish">
          <button onClick={NavAction.requestPublish}>
            Publish
          </button>
        </li>
        <li className="nav-write--delete">
          <button onClick={NavAction.requestSave}>
            Save Draft
          </button>
        </li>
        <li className="nav-write--delete">
          <button onClick={NavAction.requestDelete}>
            Delete Draft
          </button>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    );
  }

});

module.exports = navWriteTools;
