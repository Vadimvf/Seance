var ArticleConstants = require('../constants/articleConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ArticleStore = new Store(Dispatcher);

var _articles = [];
var _article = {};

var resetArticles = function (articles) {
  _articles = articles;
};
var resetArticle = function (article) {
  _article = article;
};

ArticleStore.all = function (){
  return _articles;
};
ArticleStore.one = function (){
  return _article;
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticleConstants.ARTICLES_RECEIVED:
      resetArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.ARTICLE_RECEIVED:
      resetArticle(payload.article);
      ArticleStore.__emitChange();
      break;
  }
};

module.exports = ArticleStore;
