var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var NavStore = new Store(Dispatcher);
var NavConstants = require('../constants/navConstants');

var _navType = NavConstants.DEFAULT;

NavStore.currentNavType = function () {
  return _navType;
};

NavStore.resetCurrentNavType = function (navType) {
  _navType = navType;
};

NavStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NavConstants.WRITE_TOOLS_RENDERED:
      NavStore.resetCurrentNavType(payload.navType);
      NavStore.__emitChange();
      break;
    case NavConstants.ARTICLE_SHOW_RENDERED:
      NavStore.resetCurrentNavType(payload.navType);
      NavStore.__emitChange();
      break;
    case NavConstants.DEFAULT_NAV_RENDERED:
      NavStore.resetCurrentNavType(payload.navType);
      NavStore.__emitChange();
      break;
  }
};


module.exports = NavStore;
