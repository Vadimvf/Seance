var React = require('react');
var PropTypes = React.PropTypes;

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

var SearchBar = React.createClass({

    getInitialState: function() {
      return {
        searchParam: ''
      };
    },

    handleChange: function(e){
      e.preventDefault();
      this.setState({
        searchParam: e.target.value
      });
    },

    handleSubmit: function (e){
      e.preventDefault();
      debugger;
    },

    render: function() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                   placeholder="Search Seance"
                   onChange={this.handleChange}
            />
          </form>
        );
    }
});

module.exports = SearchBar;
