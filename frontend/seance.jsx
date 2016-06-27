import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Nav from './components/nav';
import ArticleIndex from './components/articleIndex';
import ArticleShow from './components/articleShow';
import ArticleNew from './components/articleNew';
import AuthorProfile from './components/authorProfile';
import AuthorShow from './components/authorShow';
import SessionStore from './stores/session';
import SessionUtil from './util/sessionUtil';

function App(props) {
  return (
    <div className="seance-container">
      <Nav />
      {props.children}
    </div>
  );
}
App.propTypes = {
  children: PropTypes.object,
};

function _checkLogin() {
  if (!SessionStore.currentAuthorHasBeenFetched()) {
    SessionUtil.fetchCurrentAuthor();
  }
}

function _requireLogIn(nextState, replace, asyncCompletionCallback) {
  function _redirectIfNotLoggedIn() {
    if (!SessionStore.currentAuthor().hasOwnProperty('id')) {
      replace({ pathname: '/' });
    }
    asyncCompletionCallback();
  }
  SessionUtil.fetchCurrentAuthor(_redirectIfNotLoggedIn);
  // if (!SessionStore.currentAuthorHasBeenFetched()) {
  //   SessionUtil.fetchCurrentAuthor(_redirectIfNotLoggedIn);
  // } else {
  //   _redirectIfNotLoggedIn();
  // }
}

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route
        path="/"
        component={App}
        onEnter={_checkLogin}
      >
        <IndexRoute component={ArticleIndex} />
        <Route path="articles/top" component={ArticleIndex} />
        <Route
          path="articles/new"
          component={ArticleNew}
          onEnter={_requireLogIn}
        />
        <Route
          path="articles/edit/:id"
          component={ArticleNew}
          onEnter={_requireLogIn}
        />
        <Route path="articles/:id" component={ArticleShow} />
        <Route
          path="authors/profile"
          component={AuthorProfile}
          onEnter={_requireLogIn}
        />
        <Route
          path="authors/:id"
          component={AuthorShow}
        />
      </Route>
    </Router>
    ), document.getElementById('seance')
  );
});
