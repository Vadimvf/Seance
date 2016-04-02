var React = require('react');
var PropTypes = React.PropTypes;

var LoginForm = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: "",
      fullname: "",
      password: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    debugger
  },

  updateUsername: function (e) {
    this.setState({
      username: e.currentTarget.value
    });
  },

  updateFullname: function (e) {
    this.setState({
      fullname: e.currentTarget.value
    });
  },

  updatePassword: function (e) {
    this.setState({
      password: e.currentTarget.value
    });
  },

  render: function() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>

        <label htmlFor="fullname"></label>
        <input onChange={this.updateFullname}
               type="text"
               placeholder="Full name (new account)"/>

        <label htmlFor="username"></label>
        <input onChange={this.updateUsername}
               type="text"
               placeholder="Username"/>

        <label htmlFor="Password"></label>
        <input onChange={this.updatePassword}
               type="password"
               placeholder="Password"/>

       <input type="submit"
              className="submit"
              value="Sign in / Sign up" />

      </form>
    );
  }

});

module.exports = LoginForm;
