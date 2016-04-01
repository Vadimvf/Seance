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

        <label htmlFor="username">Username</label>
        <input onChange={this.updateUsername} type="text" />

        <label htmlFor="fullname">Full Name</label>
        <input onChange={this.updateFullname} type="text" />

        <label htmlFor="password">Password</label>
        <input onChange={this.updatePassword} type="password" />

        <input type="submit"></input>

      </form>
    );
  }

});

module.exports = LoginForm;
