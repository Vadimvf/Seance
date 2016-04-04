var React = require('react');
var Profile = require("./profile");
var Login = require("./login");
var SessionStore = require('../../stores/session');
var SessionUtil = require('../../util/sessionUtil');

var NavTools = React.createClass({

  getInitialState: function() {
    if (!(SessionStore.currentAuthorHasBeenFetched())){
      return {
        author: SessionUtil.fetchCurrentAuthor()
      };
    } else {
      return {
        author: null
      };
    }
  },

  componentDidMount: function() {
    this.authorListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.authorListener.remove();
  },

  _onChange: function () {
    this.setState({
      author: SessionStore.currentAuthor()
    });
  },

  render: function() {
    var userButton;
    if (SessionStore.currentAuthorHasBeenFetched()){
      userButton = <Profile />;
    } else {
      userButton = <Login className="nav-tools--login"/>;
    }
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
          {userButton}
        </li>
      </ul>
    );
  }

});

module.exports = NavTools;
