var Dispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/sessionConstants');


var SessionActions = {
  currentAuthorReceived: function (currentAuthor) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_AUTHOR_RECEIVED,
      currentAuthor: currentAuthor
    });
  },

  errorsReceived: function (errors) {
    Dispatcher.dispatch({
      actionType: SessionConstants.ERRORS_RECEIVED,
      errors: errors
    });
  },

  logout: function () {
    Dispatcher.dispatch ({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
