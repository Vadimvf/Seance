var Dispatcher = require("../dispatcher/dispatcher");
var SessionConstants = require("../constants/sessionConstants");
var ArticleConstants = require("../constants/articleConstants");
var Store = require('flux/utils').Store;
var ErrorStore = new Store(Dispatcher);

//change to StatusStore on refactor

var _errors = [];

var _status = "";

var resetErrors = function (errors) {
  _errors = errors;
};

var resetStatus = function (status) {
  _status = status;
};

ErrorStore.all = function () {
  return _errors;
};

ErrorStore.currentStatus = function () {
  return _status;
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ArticleConstants.STATUS_RECEIVED:
      resetStatus(payload.status);
      ErrorStore.__emitChange();
      break;
  }

};

module.exports = ErrorStore;
