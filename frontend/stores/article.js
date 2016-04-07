var ArticleConstants = require('../constants/articleConstants');
var Dispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ArticleStore = new Store(Dispatcher);

var _articles = [];
var _article = {};
var _status = "";

var resetArticles = function (articles) {
  _articles = articles;
};

var resetArticle = function (article) {
  _article = article;
};

var resetStatus = function (status) {
  _status = status;
};

ArticleStore.all = function (){
  return _articles;
};
ArticleStore.one = function (){
  return _article;
};

ArticleStore.status = function (){
  return _status;
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
    case ArticleConstants.STATUS_RECEIVED:
      resetStatus(payload.status);
      ArticleStore.__emitChange();
      break;
  }
};

module.exports = ArticleStore;
