var React = require('react');
var PropTypes = React.PropTypes;
var validateForm = require('../../formValidation');
var sessionUtil = require('../../util/sessionUtil');

var LoginForm = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: "",
      fullname: "",
      password: "",
      email: "",
      errors: []
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    if (!!this.isValid()) {
      return;
    } else {
      sessionUtil.createAuthor(this.state);
    }
  },

  isValid: function () {
    var allMessages = validateForm(this.state, this.props.formType);
    if (!!allMessages){
      this.setState({
        errors: allMessages
      });
      return allMessages;
    } else {
      return null;
    }
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

  updateEmail: function (e) {
    this.setState({
      email: e.currentTarget.value
    });
  },

  errorMessages: function () {
    var errorElements =  (
      this.state.errors.map(function (error, idx) {
        return <li key={idx}>{error}</li>;
      })
    );
    return (<ul className="form-errors">
              {errorElements}
           </ul>);
  },

  render: function() {
    var newUserFormOpts = null;
    var submitVal = "Sign in";

    if (this.props.formType === "Create" ) {
      submitVal = "Sign up";
      newUserFormOpts = (
      <div>
        <label htmlFor="fullname"></label>
        <input onChange={this.updateFullname}
               type="text"
               placeholder="Full name"/>

       <label htmlFor="email"></label>
       <input onChange={this.updateEmail}
         type="email"
         placeholder="Email"/>
     </div>
     );
    }

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>

        {this.errorMessages()}
        {newUserFormOpts}

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
              value={submitVal}/>

      </form>
    );
  }

});

module.exports = LoginForm;
