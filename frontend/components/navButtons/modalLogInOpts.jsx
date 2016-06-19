import React, { PropTypes } from 'react';
import SessionUtil from '../../util/sessionUtil';

class LogInOptions extends React.Component {
  static propTypes = {
    createCallback: PropTypes.func.isRequired,
    loginCallback: PropTypes.func.isRequired,
  }
  guestLogin() {
    SessionUtil.loginAuthor({
      username: 'FyoDost',
      password: 'underground',
    });
  }
  render() {
    return (
      <section className="modal">
        <img className="seance-modal-logo" alt="seance-logo" />
        <h1>Seance</h1>
        <button className="modal-button facebook">
          <img className="facebook-logo" alt="facebook-logo" />
          Sign in with Facebook
        </button>
        <button
          className="modal-button guest"
          onClick={this.guestLogin}
        >
          <img className="seance-login" alt="login" />
          Guest Login
        </button>
        <button
          className="modal-button"
          onClick={this.props.createCallback}
        >
          Sign up
        </button>
        <button
          className="modal-button"
          onClick={this.props.loginCallback}
        >
          Sign in
        </button>
      </section>
    );
  }
}

export default LogInOptions;
