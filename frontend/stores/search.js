var SearchConstants = require('../constants/searchConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var SearchStore = new Store(Dispatcher);

var _results = [];

var _resetResults = function (results){
  _results = results;
}

var _clearResults = function (){
  _results = [];
}

SearchStore.all = function (){
  return _results;
}

SearchStore.__onDispatch = function (payload){
  if (payload.actionType === SearchConstants.SEARCH_RECEIVED){
    _resetResults(payload.results);
    SearchStore.__emitChange();
  }
};

module.exports = SearchStore;
