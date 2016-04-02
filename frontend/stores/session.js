
var SessionConstants = require('../constants/sessionConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var SessionStore = new Store(Dispatcher);

var currentAuthor = {};

SessionStore.__onDispatch = function (){
  
};


module.exports = SessionStore;
