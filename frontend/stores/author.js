var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var AuthorConstants = require('../constants/authorConstants');

var AuthorStore = new Store(Dispatcher);

var _author = {};

var resetAuthor = function (author) {
  _author = author;
};

AuthorStore.author = function (){
  return _author;
};


AuthorStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case AuthorConstants.AUTHOR_RECEIVED:
      resetAuthor(payload.author);
      AuthorStore.__emitChange();
      break;
  }
};

module.exports = AuthorStore;
