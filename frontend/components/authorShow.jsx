var React = require('react');
var PropTypes = React.PropTypes;

var AuthorShow = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="author-container">

      </div>
    );
  }

});

module.exports = AuthorShow;
