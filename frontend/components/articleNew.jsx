import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';

import Editor from 'react-medium-editor';

import SessionStore from '../stores/session';
import ArticleStore from '../stores/article';

import NavToolMessagesStore from '../stores/navToolMessages';

import NavAction from '../actions/navAction';
import ArticleAction from '../actions/articleAction';
import ArticleUtil from '../util/articleUtil';
import NavConstants from '../constants/navConstants';
import SaveArticle from './navButtons/saveArticle';

class ArticleNew extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      author: SessionStore.currentAuthor(),
      title: '',
      body: '',
      published: false,
    };
  }
  componentDidMount() {
    this.authListener = SessionStore.addListener(this.onChange);
    this.artListener = ArticleStore.addListener(this.onInitialFetch);
    this.navListener = NavToolMessagesStore.addListener(this.onToolUse);
    NavAction.renderWriteTools();
    // Make sure the article fetched belongs to the user
    const ensureAuthor = (article) => {
      if (this.state.author.id !== article.author.id) {
        hashHistory.push('');
      }
    };
    // Check to see if we're editing v. new article
    if (this.props.params.id) {
      this.placeholder = '';
      ArticleUtil.fetchArticle(this.props.params.id, article => {
        ensureAuthor(article);
        this.setState({
          title: article.title,
          body: article.body,
        });
      });
    }
  }
  componentWillUnmount = () => {
    this.authListener.remove();
    this.artListener.remove();
    this.navListener.remove();
    if (this.autoSaveInterval) clearInterval(this.autoSaveInterval);
  }
  onChange = () => {
    this.setState({
      author: SessionStore.currentAuthor(),
    });
  }
  onInitialFetch = () => {
    this.articleId = ArticleStore.one().id;
  }
  onToolUse = () => {
    const message = NavToolMessagesStore.message();
    switch (message) {
      case NavConstants.DELETE_ARTICLE:
        if (!this.articleId) return;
        ArticleUtil.deleteArticle(this.articleId, () => {
          hashHistory.push('/authors/profile');
        });
        break;
      case NavConstants.PUBLISH_ARTICLE:
        this.state.published = true;
        ArticleUtil.editArticle(this.state, this.articleId, () => {
          hashHistory.push(`/articles/${this.articleId}`);
        });
        break;
      case NavConstants.SAVE_ARTICLE:
        ArticleUtil.editArticle(this.state, this.articleId);
        break;
        // no default
    }
  }
  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }
  handleChange = (text) => {
    this.setState({
      body: text,
    });
    if (!this.autoSaveInterval) this.autoSave();
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  autoSave = () => {
    let prevSaveLength = 0;
    let articleSaving = false;
    function _saveOnlyOnce(articleProps) {
      articleSaving = true;
      ArticleAction.updateSaveStatus('Saving...');
      ArticleUtil.saveArticle(articleProps, () => {
        articleSaving = false;
      });
    }
    function _checkLengthSave() {
      const currentBodyLength = this.state.body.length;
      if (articleSaving) return;
      if (Math.abs(currentBodyLength - prevSaveLength) > 10) {
        prevSaveLength = currentBodyLength;
        ArticleAction.updateSaveStatus('Saving...');
        if (this.articleId) {
          ArticleUtil.editArticle(this.state, this.articleId);
        } else {
          _saveOnlyOnce(this.state);
        }
      }
    }
    this.autoSaveInterval = setInterval(
      _checkLengthSave.bind(this), 2000
    );
  }
  render() {
    const author = this.state.author;
    if (this.placeholder) this.placeholder = 'Tell your story...';
    return (
      <div className="article-create-container">
        <div className="article-create-content">
          <div className="article-header group">
            <SaveArticle />
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
}


export default ArticleNew;
