var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var ArticleIndex = require('./components/articleIndex');
var Nav = require('./components/nav');

var App = React.createClass({
  render: function() {
    return (
      <div className="seance-container">
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

$(function(){
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArticleIndex}>
        </IndexRoute>
      </Route>
    </Router>
    ), document.getElementById("seance")
  );
});
