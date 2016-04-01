var React = require('react');
var PropTypes = React.PropTypes;

var LogInOptions = React.createClass({

  render: function() {
    return (
        <section className="modal">

          <img className="seance-modal-logo" />
          <h1>Seance</h1>

          <button className="modal-button-facebook">
            <img className="facebook-logo" />
            Sign in with Facebook
          </button>

          <button
            className="modal-button"
            onClick={this.props.callback}>
            Sign up / Log in
          </button>

        </section>
      );
  }

});

module.exports = LogInOptions;