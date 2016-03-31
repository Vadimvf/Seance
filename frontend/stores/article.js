var ArticleStore = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articlesConstants');

_articles = [];

var resetArticles = function (benches) {
  _articles = benches;
};

ArticleStore.all = function (){
  _articles.slice(0);
};

ArticleStore.__onDispatch = function (payload) {

  switch (actionType) {
    case ArticlesConstants.ARTICLES_RECEIVED:
      resetArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
  case ArticlesConstants.ARTICLE_RECEIVED:
    resetArticles(payload.articles);
    ArticleStore.__emitChange();
    break;
  }

};
