
var SessionConstants = require('../constants/sessionConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var SessionStore = new Store(Dispatcher);

var _currentAuthor = {};
var _currentAuthorHasBeenFetched = false;

SessionStore.currentAuthor = function () {
  return _currentAuthor;
};

SessionStore.isLoggedIn = function () {
  return !!_currentAuthor;
};

SessionStore.currentAuthorHasBeenFetched = function () {
  return _currentAuthorHasBeenFetched;
};

SessionStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case SessionConstants.CURRENT_AUTHOR_RECEIVED:
      _currentAuthor = payload.currentAuthor;
      _currentAuthorHasBeenFetched = true;
      SessionStore.__emitChange();
      break;

    case SessionConstants.LOGOUT:
      _currentAuthor = null;
      _currentAuthorHasBeenFetched = false;
      SessionStore.__emitChange();
      break;
  }
};


module.exports = SessionStore;
