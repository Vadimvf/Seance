var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var NavConstants = require('../constants/navConstants');

var NavToolMessagesStore = new Store(Dispatcher);

var _message;

var resetMessage = function (message){
    _message = message;
};

NavToolMessagesStore.message = function (){
  return _message;
};

NavToolMessagesStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case NavConstants.DELETE_REQUESTED:
      resetMessage(payload.message);
      NavToolMessagesStore.__emitChange();
      break;
    case NavConstants.PUBLISH_REQUESTED:
      resetMessage(payload.message);
      NavToolMessagesStore.__emitChange();
      break;
    case NavConstants.SAVE_REQUESTED:
      resetMessage(payload.message);
      NavToolMessagesStore.__emitChange();
      break;
  }
};



module.exports = NavToolMessagesStore;
