import React from 'react';
import { hashHistory } from 'react-router';

import AuthorStore from '../stores/author';
import SessionStore from '../stores/session';
import ErrorStore from '../stores/error';
import AuthorUtil from '../util/authorUtil';
import SessionUtil from '../util/sessionUtil';
import QueryArticles from './authorProfile/queryArticles';
import NavAction from '../actions/navAction';
import validateForm from '../formValidation';
import StaticInfo from './authorProfile/authorInfoStatic';
import EditInfo from './authorProfile/authorInfoEdit';

class AuthorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: SessionStore.currentAuthor(),
      edit: false,
      save: false,
      errors: [],
    };
  }
  componentDidMount() {
    NavAction.renderArticleShow();
    this.authorListener = AuthorStore.addListener(this.onChange);
    this.errorListener = ErrorStore.addListener(this.onError);
    AuthorUtil.fetchAuthor(SessionStore.currentAuthor().id);
  }
  componentWillUnmount = () => {
    this.authorListener.remove();
    this.errorListener.remove();
  }
  onChange = () => {
    this.setState({
      author: AuthorStore.author(),
    }, () => {
      this.tempAuthor = Object.assign({}, this.state.author);
    });
  }
  onError = () => {
    this.setState({
      errors: ErrorStore.all(),
    });
  }
  edit = () => {
    this.setState({
      edit: true,
    });
  }
  logout = () => {
    SessionUtil.logout(() => {
      hashHistory.push('');
    });
  }
  update = (e) => {
    e.preventDefault();
    this.setState({
      edit: false,
      save: true,
    });
    if (this.returnErrors()) {
      this.setState({
        edit: true,
        save: false,
      });
    } else {
      AuthorUtil.update(this.tempAuthor, () => {
        this.setState({
          save: false,
        });
      });
    }
  }
  returnErrors = () => {
    const allMessages = validateForm(this.tempAuthor, 'Edit');
    this.setState({
      errors: allMessages,
    });
    return (allMessages.length !== 0) ? allMessages : null;
  }
  errorMessages = () => {
    const errorElements = (
      this.state.errors.map((error, idx) => <li key={idx}>{error}</li>)
    );
    return (
      <ul className="form-errors">
        {errorElements}
      </ul>);
  }
  render() {
    this.tempAuthor = this.tempAuthor || Object.assign({}, this.state.author);
    let authorInfo = <EditInfo tempAuthor={this.tempAuthor} />;
    let editButton;
    if (this.state.edit) {
      editButton = <button type="submit" onClick={this.update}>Save Changes</button>;
    } else if (this.state.save) {
      editButton = (
        <button className="save-animation" type="button">Saving...
        </button>
      );
    } else {
      authorInfo = <StaticInfo author={this.state.author} />;
      editButton = <button onClick={this.edit}>Edit Profile</button>;
    }
    return (
      <div className="author-container">
        <section className="author-content" >
          {authorInfo}
          {editButton}
          <button onClick={this.logout}>Log out</button>
          {this.errorMessages()}
        </section>
        <QueryArticles />
      </div>
    );
  }

}

export default AuthorProfile;
