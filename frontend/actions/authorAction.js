var Dispatcher = require('../dispatcher/dispatcher');
var AuthorConstants = require('../constants/authorConstants');

var AuthorActions = {
  receiveAuthor: function (jsonAuthor){
    var payload = {
        actionType: AuthorConstants.AUTHOR_RECEIVED,
        author: jsonAuthor
      };

      Dispatcher.dispatch(payload);
  }


};


module.exports = AuthorActions;
