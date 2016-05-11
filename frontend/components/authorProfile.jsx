var React = require('react');
var PropTypes = React.PropTypes;
var Editor = require('react-medium-editor');

var SessionStore = require('../stores/session');
var SessionUtil = require('../util/sessionUtil');
var AuthorStore = require('../stores/author');
var AuthorUtil = require('../util/authorUtil');
var ErrorStore = require('../stores/error');
var QueryArticles = require('./profileComponents/queryArticles');
var NavAction = require('../actions/navAction');
var validateForm = require('../formValidation');

var AuthorProfile = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      author: SessionStore.currentAuthor(),
      edit: false,
      save: false,
      errors: []
    };
  },

  componentDidMount: function() {
    this.setState({
      author: SessionStore.currentAuthor()
    });
    NavAction.renderArticleShow();
    this.authorListener = AuthorStore.addListener(this._onChange);
    this.errorListener = ErrorStore.addListener(this._onError);
  },

  componentWillUnmount: function() {
    this.authorListener.remove();
    this.errorListener.remove();
  },

  _onChange: function () {
    this.setState({
      author: AuthorStore.author()
    });
  },

  _onError: function () {
    this.setState({
      errors: ErrorStore.all()
    });
  },

  handleChange: function (fieldType, e){
    this.tempAuthor = this.tempAuthor || $.extend({}, this.state.author);
    this.tempAuthor[fieldType] = e.target.value
  },

  _edit: function () {
    this.setState({
      edit: true
    });
  },

  _logout: function () {
    router = this.context.router;
    SessionUtil.logout(function () {
      router.push("");
    });
  },

  _update: function(e){
    e.preventDefault();
    this.tempAuthor = this.tempAuthor || this.state.author;
    this.setState({
      edit: false,
      save: true
    });

    if (this.returnErrors()){
      this.setState({
        edit: true,
        save: false
      });
    } else {
      AuthorUtil.update(this.tempAuthor, function (){
        this.tempAuthor = null;
        this.setState({
          save: false,
        });
      }.bind(this));
    }

  },

  _editEl: function(saving){

    return(
      <form className="author-edit-form" onSubmit={this._update}>
        <h2>
          <input
          autoFocus
          type="text"
          defaultValue={this.state.author.fullname}
          placeholder="Your Full Name"
          onChange={this.handleChange.bind(this, "fullname")}
          />
        </h2>
        <h3>
          <input
          type="text"
          defaultValue={this.state.author.username}
          placeholder="Your Username"
          onChange={this.handleChange.bind(this, "username")}
          />
        </h3>
        <h4>
          <input
          type="email"
          className="title"
          placeholder="Your Email"
          defaultValue={this.state.author.email}
          onChange={this.handleChange.bind(this, "email")}
          />
        </h4>
        <p>
          <textarea
          className="title"
          placeholder="Your Bio"
          defaultValue={this.state.author.bio}
          onChange={this.handleChange.bind(this, "bio")}
          />
        </p>
      </form>
    )
  },

  _staticEl: function(){
    return(
      <div>
        <h2>{this.state.author.fullname}</h2>
        <h3>{this.state.author.username}</h3>
        <h4>{this.state.author.email}</h4>
        <p>{this.state.author.bio}</p>
      </div>
    )
  },

  returnErrors: function () {
    var allMessages = validateForm(this.tempAuthor, "Edit");

    this.setState({
      errors: allMessages
    });

    return (allMessages.length !== 0)? allMessages : null;
  },

  errorMessages: function () {
    if (this.state.errors.length < 1) return;

    var errorElements =  (
      this.state.errors.map(function (error, idx) {
        return <li key={idx}>{error}</li>;
      })
    );

    return (<ul className="form-errors">
              {errorElements}
           </ul>);
  },



  render: function() {
    var authorInfo;
    var editButton;
    if (this.state.edit){
      authorInfo = this._editEl();
      editButton = <button type="submit" onClick={this._update}>Save Changes</button>;
    } else if (this.state.save){
      authorInfo = this._editEl("saving");
      editButton = (
        <button className="save-animation" type="button">Saving...
        </button>
      )
    } else {
      authorInfo = this._staticEl();
      editButton = <button onClick={this._edit}>Edit Profile</button>
    }
    return (
      <div className="author-container">
        <section className="author-content" >
          {authorInfo}
          {editButton}
          <button onClick={this._logout}>Log out</button>
          { this.errorMessages() }
        </section>
        <QueryArticles />
      </div>
    );
  }

});

module.exports = AuthorProfile;
