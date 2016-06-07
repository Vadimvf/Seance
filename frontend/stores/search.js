const SearchConstants = require('../constants/searchConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SearchStore = new Store(Dispatcher);

let _results = [];

const _resetResults = newResults => {
  _results = newResults;
};

SearchStore.all = () => _results;


SearchStore.__onDispatch = payload => {
  if (payload.actionType === SearchConstants.SEARCH_RECEIVED) {
    _resetResults(payload.results);
    SearchStore.__emitChange();
  }
};

module.exports = SearchStore;
