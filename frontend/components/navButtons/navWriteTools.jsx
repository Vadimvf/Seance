var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('./profile');

var navWriteTools = React.createClass({

  publish: function (){
    //articleUtil -> publishArticle -> articleAction, etc.
    //push to articleShow for new Article (on callback from articleAction)
  },

  delete: function (){
    //articleUtil -> deleteArticle -> articleAction, etc.
    //push to articleShow for new Article (on callback from articleAction)
  },

  render: function () {
    return (
      <ul className="nav-tools">
        <li className="nav-write--publish">
          <button onClick={this.publish}>
            Publish
          </button>
        </li>
        <li className="nav-write--delete">
          <button onClick={this.deleteDraft}>
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
