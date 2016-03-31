var ArticleConstants = require('../constants/articleConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ArticleStore = new Store(Dispatcher);

var _articles = [];

var resetArticles = function (benches) {
  _articles = benches;
};

ArticleStore.all = function (){
  return _articles.slice(0);
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticleConstants.ARTICLES_RECEIVED:
      resetArticles(payload.articles);
      console.log(_articles);
      ArticleStore.__emitChange();
      break;
  case ArticleConstants.ARTICLE_RECEIVED:
    resetArticles(payload.articles);
    ArticleStore.__emitChange();
    break;
  }

};

module.exports = ArticleStore;
