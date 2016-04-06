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
var ArticleNew = require('./components/articleNew');
var AuthorProfile = require('./components/authorProfile');
var AuthorShow = require('./components/authorShow');
var SessionStore = require('./stores/session');
var SessionUtil = require('./util/sessionUtil');

var App = React.createClass({

  render: function() {
    var router = this.context.router;
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
      <Route path="/" component={App}
                      onEnter={_checkLogin}>
        <IndexRoute component={ArticleIndex} />
        <Route path="articles/new"
               component={ArticleNew} />
        <Route path="articles/:id"
               component={ArticleShow} />
        <Route path="authors/profile"
               component={AuthorProfile}
               onEnter={_requireLogIn}/>
        <Route path="authors/:id"
               component={AuthorShow}/>
      </Route>
    </Router>
    ), document.getElementById("seance")
  );
});

function _checkLogin(){
  if (!SessionStore.currentAuthorHasBeenFetched()) {
    SessionUtil.fetchCurrentAuthor();
  }
}

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
