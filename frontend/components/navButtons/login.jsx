import React, { PropTypes } from 'react';

import Modal from 'react-modal';
import ModalStyle from './modalStyle';

import LoginForm from './loginForm';
import LogInOptions from './modalLogInOpts';

class Login extends React.Component {
  static propTypes = {
    isWrite: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      isLoginAttempt: false,
      isCreateAttempt: false,
      isWrite: false,
    };
  }
  componentWillMount() {
    if (this.props.isWrite) {
      this.setState({
        isWrite: this.props.isWrite,
      });
    }
  }
  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  }
  openModal = () => {
    this.setState({
      modalOpen: true,
      isLoginAttempt: false,
      isCreateAttempt: false,
    });
  }
  loginAttempt = () => {
    this.setState({
      isLoginAttempt: true,
    });
  }
  createAttempt = () => {
    this.setState({
      isCreateAttempt: true,
    });
  }
  render() {
    const isLoginAttempt = this.state.isLoginAttempt;
    const isCreateAttempt = this.state.isCreateAttempt;
    let content;

    if (isLoginAttempt) {
      content = <LoginForm formType="Session" />;
    } else if (isCreateAttempt) {
      content = <LoginForm formType="Create" />;
    } else {
      content = (
        <LogInOptions
          createCallback={this.createAttempt}
          loginCallback={this.loginAttempt}
        />
      );
    }
    let buttonText;
    let className;
    if (this.state.isWrite) {
      className = 'nav-tools--write';
      buttonText = 'Write A Story';
    } else {
      className = 'nav-tools--login';
      buttonText = 'Sign in / Sign up';
    }
    return (
      <button className={className} onClick={this.openModal}>
        {buttonText}
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
        >
          <button
            className="modal--exit"
            onClick={this.closeModal}
          >✖</button>
          {content}
        </Modal>
      </button>
    );
  }
}

module.exports = Login;
