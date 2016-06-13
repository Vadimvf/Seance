import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

import validateForm from '../../formValidation';
import sessionUtil from '../../util/sessionUtil';
import ErrorStore from '../../stores/error';

class LoginForm extends React.Component {
  static propTypes = {
    formType: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      password: '',
      email: '',
      errors: [],
    };
  }
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._onError);
  }
  componentWillUnmount = () => {
    this.errorListener.remove();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!!this.returnErrors()) {
      return;
    } else if (this.props.formType === 'Create') {
      sessionUtil.createAuthor(this.state, () => hashHistory.push(''));
    } else {
      sessionUtil.loginAuthor(this.state, () => hashHistory.push(''));
    }
  }
  _onError = () => {
    this.setState({
      errors: ErrorStore.all(),
    });
  }
  returnErrors = () => {
    const allMessages = validateForm(this.state, this.props.formType);
    this.setState({
      errors: allMessages,
    });
    return (allMessages.length !== 0) ? allMessages : null;
  }
  updateUsername = (e) => {
    this.setState({
      username: e.currentTarget.value,
    });
  }
  updateFullname = (e) => {
    this.setState({
      fullname: e.currentTarget.value,
    });
  }
  updatePassword = (e) => {
    this.setState({
      password: e.currentTarget.value,
    });
  }
  updateEmail = (e) => {
    this.setState({
      email: e.currentTarget.value,
    });
  }
  errorMessages = () => {
    const errorElements = (
      this.state.errors.map((error, idx) => <li key={idx}>{error}</li>)
    );
    return (<ul className="form-errors">{errorElements}</ul>);
  }
  render() {
    let newUserFormOpts = null;
    let submitVal = 'Sign in';
    if (this.props.formType === 'Create') {
      submitVal = 'Sign up';
      newUserFormOpts = (
        <div>
          <label htmlFor="fullname"></label>
          <input
            onChange={this.updateFullname}
            type="text"
            placeholder="Full name"
          />
          <label htmlFor="email" />
          <input
            onChange={this.updateEmail}
            type="email"
            placeholder="Email"
          />
        </div>
     );
    }
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        {this.errorMessages()}
        {newUserFormOpts}
        <label htmlFor="username" />
        <input
          onChange={this.updateUsername}
          type="text"
          placeholder="Username"
        />
        <label htmlFor="password" />
        <input
          onChange={this.updatePassword}
          type="password"
          placeholder="Password"
        />
        <input
          type="submit"
          className="submit"
          value={submitVal}
        />
      </form>
    );
  }
}

module.exports = LoginForm;
