import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

import validateForm from '../../formValidation';
import sessionUtil from '../../util/sessionUtil';
import ErrorStore from '../../stores/error';
import NewUserFormOpts from './newUserFormOpts';

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
    this.errorListener = ErrorStore.addListener(this.onError);
  }
  componentWillUnmount = () => {
    this.errorListener.remove();
  }
  onError = () => {
    this.setState({
      errors: ErrorStore.all(),
    });
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
  returnErrors = () => {
    const allMessages = validateForm(this.state, this.props.formType);
    this.setState({
      errors: allMessages,
    });
    return (allMessages.length !== 0) ? allMessages : null;
  }
  updateField = (type, e) => {
    this.setState({
      [type]: e.currentTarget.value,
    });
  }
  errorMessages = () => {
    const errorElements = (
      this.state.errors.map((error, idx) => <li key={idx}>{error}</li>)
    );
    return (<ul className="form-errors">{errorElements}</ul>);
  }
  render() {
    let submitVal = 'Sign in';
    if (this.props.formType === 'Create') submitVal = 'Sign up';
    const errorMessages = this.errorMessages();
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        {errorMessages}
        <NewUserFormOpts
          isVisible={!!(this.props.formType === 'Create')}
          updateField={this.updateField}
        />
        <input
          onChange={e => this.updateField('username', e)}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={e => this.updateField('password', e)}
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

export default LoginForm;
