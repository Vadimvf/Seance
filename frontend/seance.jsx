var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Modal = require('react-modal');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var Nav = require('./components/nav');
var ArticleIndex = require('./components/articleIndex');
var ArticleShow = require('./components/articleShow');
var AuthorProfile = require('./components/authorShow');
var SessionStore = require('./stores/session');
var SessionUtil = require('./util/sessionUtil');

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
  Modal.setAppElement(document.body);
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArticleIndex} />
        <Route path="articles/:id" component={ArticleShow} />
        <Route path="authors/:id"
               component={AuthorProfile}
               onEnter={_requireLogIn}/>
      </Route>
    </Router>
    ), document.getElementById("seance")
  );
});

function _requireLogIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentAuthorHasBeenFetched()) {
    SessionUtil.fetchCurrentAuthor(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }
  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("");
    }
    asyncCompletionCallback();
  }
}
