var React = require('react');
var PropTypes = React.PropTypes;
var ErrorStore = require('../../stores/error');

var SaveArticle = React.createClass({

  getInitialState: function () {
    return {
      status: "",
    };
  },

  componentDidMount: function () {
    this.statusListener = ErrorStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      status: ErrorStore.currentStatus()
    });
  },

  render: function () {
    return (
      <li className="article--info-save-status" >
        {this.state.status}
      </li>
    );
  },

});

module.exports = SaveArticle;
