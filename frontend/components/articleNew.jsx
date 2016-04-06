var React = require('react');
var ReactRouter = require("react-router");
var Editor = require('react-medium-editor');

var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

var SessionStore = require('../stores/session');
var ArticleStore = require('../stores/article');
var NavAction = require('../actions/navAction');
var ArticleUtil = require('../util/articleUtil');

var ArticleNew = React.createClass({
  getInitialState: function () {
    return {
      author: SessionStore.currentAuthor(),
      articleId: null,
      title: "",
      body: "",
    };
  },

  getDefaultProps: function() {
    return {
      articleId: null
    };
  },

  componentDidMount: function () {
    this.authorListener = SessionStore.addListener(this._onChange);
    this.articleListener = ArticleStore.addListener(this._onInitialSave);
    NavAction.renderWriteTools();
  },

  componentWillUnmount: function () {
    this.authorListener.remove();
    this.articleListener.remove();
    this.autoSaveInterval && this.autoSaveInterval.clearInterval();
  },

  _onChange: function () {
    this.setState({
      author: SessionStore.currentAuthor()
    });
  },

  _onInitialSave: function () {
    this.setState({
      articleId: ArticleStore.one().id
    });
  },

  autoSave: function () {
    var prevSaveLength = 0;
    var articleSaved = false;
    var articleSaving = false;
    var saveError;

    function _saveOnlyOnce(articleParams){
      console.log("first save!");
      // articleSaving = true;
      ArticleUtil.saveArticle(articleParams, function (){
        articleSaved = true;
        articleSaving = false;
      });
      //check if the article saved otherwise reset and show errors
    }

    function _checkLengthSave(){
      var currentBodyLength = this.state.body.length;
      if (articleSaving) {return ;}

      if (Math.abs(currentBodyLength - prevSaveLength) > 20){
        prevSaveLength = currentBodyLength;
        if (articleSaved){
          console.log("saving!");
          ArticleUtil.editArticle(this.state);
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
            <SaveState articleId={this.props.articleId}/>
          </div>

          <form className="article-create-form" >
            <input
              className="title"
              type="text"
              placeholder="Title"
              onChange={this.handleTitle}
            />
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
