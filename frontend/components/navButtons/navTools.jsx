var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Profile = require("./profile");
var Login = require("./login");
var SearchBar = require("./search");
var SessionStore = require('../../stores/session');
var SessionUtil = require('../../util/sessionUtil');

var NavTools = React.createClass({
  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor()
     };
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
    var write = <Login isWrite={true}/>;

    if (!$.isEmptyObject(this.state.author)){
      userButton = <Profile />;
      write = <Link to="articles/new" >Write a story</ Link>
    } else {
      userButton = <Login />;
    }


    return (
      <ul className="nav-tools">
        <li className="nav-tools-search">
          <SearchBar />
        </li>
        <li className="nav-tools--write">
          {write}
        </li>
        <li>
          {userButton}
        </li>
      </ul>
    );
  }

});

module.exports = NavTools;
