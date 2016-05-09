var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var ArticleActions = {
  receiveAll: function (jsonArticles){
    var payload = {
      actionType: ArticleConstants.ARTICLES_RECEIVED,
      articles: jsonArticles
    };

    Dispatcher.dispatch(payload);
  },

  receiveOne: function (jsonArticle){
    var payload = {
      actionType: ArticleConstants.ARTICLE_RECEIVED,
      article: jsonArticle
    };

    Dispatcher.dispatch(payload);
  },

  updateSaveStatus: function (status) {
    var payload = {
      actionType: ArticleConstants.STATUS_RECEIVED,
      status: status
    };
    Dispatcher.dispatch(payload);
  }

};

module.exports = ArticleActions;
