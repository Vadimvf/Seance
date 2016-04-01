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
        isLoginAttempt: false
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
      isLoginAttempt: false
     });
  },

  loginAttempt: function () {
    this.setState({
      isLoginAttempt: true
    });
  },

  render: function () {

    var isLoginAttempt = this.state.isLoginAttempt;
    var content;
    
    if (isLoginAttempt) {
      content = <LoginForm/>;
    } else {
      content = <LogInOptions callback={this.loginAttempt}/>;
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

          {content}

        </Modal>

      </button>
    );
  },


});

module.exports = Login;
