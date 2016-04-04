var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var SessionActions = {
  currentAuthorReceived: function (currentAuthor) {
    debugger
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_AUTHOR_RECEIVED,
      currentAuthor: currentAuthor
    });
  },

  logout: function () {
    Dispatcher.dispatch ({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
