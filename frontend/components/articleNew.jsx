var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var Editor = require('react-medium-editor');

var SessionStore = require('../stores/session');

var ArticleNew = React.createClass({
  getInitialState: function () {
    return {
      author: SessionStore.currentAuthor(),
      title: "",
      body: ""
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

  handleSubmit: function (e) {
    e.preventDefault();
  },

  handleChange: function(text, medium) {
   this.setState({body: text});
 },

  render: function() {
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
