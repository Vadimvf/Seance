var Dispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/searchConstants');

var SearchActions = {
  receiveReults: function (jsonSearchResults){
    var payload = {
      actionType: SearchConstants.SEARCH_RECEIVED,
      results: jsonSearchResults
    };

    Dispatcher.dispatch(payload);
  }
};


module.exports = SearchActions;
