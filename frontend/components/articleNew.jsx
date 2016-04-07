var React = require('react');
var ReactRouter = require("react-router");
var Editor = require('react-medium-editor');

var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

var SessionStore = require('../stores/session');
var ArticleStore = require('../stores/article');
var ErrorStore = require('../stores/error');
var NavAction = require('../actions/navAction');
var ArticleUtil = require('../util/articleUtil');
var ArticleAction = require('../actions/articleAction');
var SaveArticle = require('./navButtons/saveArticle');

var ArticleNew = React.createClass({
  getInitialState: function () {
    return {
      author: SessionStore.currentAuthor(),
      title: "",
      body: "",
      published: false
    };
  },

  componentDidMount: function () {
    this.authorListener = SessionStore.addListener(this._onChange);
    this.articleListener = ArticleStore.addListener(this._onInitialFetch);
    NavAction.renderWriteTools();

    if (this.props.params.id){
      var self = this;
      this.placeholder = "";
      ArticleUtil.fetchArticle(this.props.params.id, function (article){
        self.setState({
          title: article.title,
          body: article.body
        });
      });
    }
  },

  componentWillUnmount: function () {
    this.authorListener.remove();
    this.articleListener.remove();
    this.autoSaveInterval && clearInterval(this.autoSaveInterval);
  },

  _onChange: function () {
    this.setState({
      author: SessionStore.currentAuthor()
    });
  },

  _onInitialFetch: function () {
    this.articleId = ArticleStore.one().id;
  },

  autoSave: function (resetMouseDown) {
    var prevSaveLength = 0;
    var articleSaved = false;
    var articleSaving = false;

    function _saveOnlyOnce(articleProps){
      articleSaving = true;
      ArticleAction.updateSaveStatus("Saving...");

      ArticleUtil.saveArticle(articleProps, function (){
        articleSaved = true;
        articleSaving = false;
      }.bind(this));
    }

    function _checkLengthSave(){
      var currentBodyLength = this.state.body.length;
      if (articleSaving) {return ;}

      if (Math.abs(currentBodyLength - prevSaveLength) > 20){
        prevSaveLength = currentBodyLength;
        ArticleAction.updateSaveStatus("Saving...");
        if (this.articleId){
          debugger
          ArticleUtil.editArticle(this.state, this.articleId);
        }else {
          _saveOnlyOnce(this.state);
        }
      }
    }

    this.autoSaveInterval = setInterval(
      _checkLengthSave.bind(this), 3000
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();
  },

  handleTitle: function (e) {
   this.setState({title: e.target.value});
 },

  handleChange: function (text, medium) {
   this.setState({body: text});
   this.autoSaveInterval || this.autoSave();
 },

  render: function () {
    var author = this.state.author;
    if (this.placeholder) { this.placeholder = "Tell your story...";}

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
              <SaveArticle />
            </ul>
          </div>

          <form className="article-create-form">
            <input
              className="title"
              type="text"
              placeholder="Title"
              onChange={this.handleTitle}
              value={this.state.title}
            />
            <Editor
              className="body"
              text={this.state.body}
              data-placeholder={this.placeholder}
              onChange={this.handleChange}
            />
          </form>

        </div>
      </div>
    );
  }

});

module.exports = ArticleNew;
