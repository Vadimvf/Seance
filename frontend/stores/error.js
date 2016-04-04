var Dispatcher = require("../dispatcher/dispatcher");
var SessionConstants = require("../constants/sessionConstants");
var Store = require('flux/utils').Store;
var ErrorStore = new Store(Dispatcher);

var _errors = [];

var resetErrors = function (errors) {
  _errors = errors;
};

ErrorStore.all = function () {
  return _errors;
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
  }

};

module.exports = ErrorStore;
