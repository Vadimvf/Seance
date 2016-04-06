var Dispatcher = require('../dispatcher.dispatcher');
var Store = require('flux/utils').Store;
var NavStore = new Store(Dispatcher);
var NavConstants = require('../constants/navConstants');

var _navType;

NavStore.currentNavType = function () {
  return _navType;
};

NavStore.resetCurrentNavType = function (navType) {
  _navType = navType;
};

NavStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case expression:

      break;
    default:

  }
};


module.exports = NavStore;
