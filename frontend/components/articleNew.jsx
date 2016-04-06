var React = require('react');
var ReactRouter = require("react-router");
var Editor = require('react-medium-editor');

var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

var SessionStore = require('../stores/session');
var NavAction = require('../actions/navAction');

var ArticleNew = React.createClass({
  getInitialState: function () {
    return {
      author: SessionStore.currentAuthor(),
      title: "",
      body: "",
      isSaving: false
    };
  },

  componentDidMount: function () {
    this.authorListener = SessionStore.addListener(this._onChange);
    NavAction.renderWriteTools();
  },

  componentWillUnmount: function () {
    this.authorListener.remove();
    this.autoSaveInterval && this.autoSaveInterval.clearInterval();
  },

  _onChange: function () {
    if (this.state.isSaving){
      this.setState({
        author: SessionStore.currentAuthor()
      });
    } else{
      this.setState({
        author: SessionStore.currentAuthor(),
        isSaving: true
      });
      this.autoSave();
    }
  },

  autoSave: function () {
    this.autoSaveInterval = setTimeOut(function (){
      this.setState({isSaving: false});
      //ajax save request
    }, 3000);
  },

  handleSubmit: function (e) {
    e.preventDefault();
  },


  handleChange: function (text, medium) {
   this.setState({body: text});
 },

  render: function () {
    var author = this.state.author;

    return (
      <div className="article-create-container">
        <div className="article-create-content">

          <div className="article-header group">
            <ul className="article--info">
              <li className="article--info-author">
                <Link to={"/authors/profile"} >
                  {author.fullname}
                </Link>
              </li>
              <li className="article--info-content">
                Draft
              </li>
            </ul>
          </div>

          <form className="article-create-form"
                onSubmit={this.handleSubmit}>
            <input className="title" type="text" placeholder="Title" />
              <Editor
                className="body"
                text={this.state.body}
                data-placeholder="Tell your story..."
                onChange={this.handleChange}
              />
          </form>

        </div>
      </div>
    );
  }

});

module.exports = ArticleNew;
