var React = require('react');
var PropTypes = React.PropTypes;
var Modal = require('react-modal');
var ModalStyle = require('./modalStyle');
var LoginForm = require('./loginForm');
var LogInOptions = require('./modalLogInOpts');

var Login = React.createClass({
  getInitialState: function () {
      return({
        modalOpen: false,
        isLoginAttempt: false,
        isCreateAttempt: false
      });
    },

  closeModal: function () {
    this.setState({
      modalOpen: false
    });
  },

  openModal: function () {
    this.setState({
      modalOpen: true,
      isLoginAttempt: false,
      isCreateAttempt: false,
     });
  },

  loginAttempt: function () {
    this.setState({
      isLoginAttempt: true
    });
  },

  createAttempt: function () {
    this.setState({
      isCreateAttempt: true
    });
  },

  render: function () {

    var isLoginAttempt = this.state.isLoginAttempt;
    var isCreateAttempt = this.state.isCreateAttempt;
    var content;

    if (isLoginAttempt) {
      content = <LoginForm formType="Session" />;
    } else if (isCreateAttempt) {
      content = <LoginForm formType="Create" />;
    } else {
      content = <LogInOptions
        createCallback={this.createAttempt}
        loginCallback={this.loginAttempt}/>;
    }

    return (
      <button
        className="nav-tools--login"
        onClick={this.openModal}> Sign in / Sign up

        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>

        <button
          className="modal--exit"
          onClick={this.closeModal}>✖</button>
          {content}

        </Modal>

      </button>
    );
  },


});

module.exports = Login;
