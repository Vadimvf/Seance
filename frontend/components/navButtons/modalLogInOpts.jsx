var React = require('react');
var PropTypes = React.PropTypes;
var SessionUtil = require('../../util/sessionUtil');

var LogInOptions = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  guestLogin: function () {
    router = this.context.router;

    SessionUtil.loginAuthor({
      username: "FyoDost",
      password: "underground"
    }, function() { router.push("");
    });
  },

  render: function() {
    return (
        <section className="modal">

          <img className="seance-modal-logo" />
          <h1>Seance</h1>

          <button className="modal-button facebook">
            <img className="facebook-logo" />
            Sign in with Facebook
          </button>

          <button
            className="modal-button guest"
            onClick={this.guestLogin}>
            <img className="seance-login" />
            Guest Login
          </button>

          <button
            className="modal-button"
            onClick={this.props.createCallback}>
            Sign up
          </button>

          <button
            className="modal-button"
            onClick={this.props.loginCallback}>
            Sign in
          </button>


        </section>
      );
  }

});

module.exports = LogInOptions;
