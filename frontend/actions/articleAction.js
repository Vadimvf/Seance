var Dispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/articleConstants');

var ArticleActions = {
  receiveAll: function (jsonArticles){
    payload = {
      actionType: ArticleConstants.ARTICLES_RECEIVED,
      articles: jsonArticles
    };

    Dispatcher.dispatch(payload);
  },

  receiveOne: function (jsonArticle){
    payload = {
      actionType: ArticleConstants.ARTICLE_RECEIVED,
      article: jsonArticle
    };

    Dispatcher.dispatch(payload);
  }

};

module.exports = ArticleActions;
