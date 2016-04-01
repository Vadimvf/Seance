var ArticleActions = require('../actions/articleAction');

var ArticleUtil = {
  fetchArticles: function () {
    $.ajax({
      type: "GET",
      url: "api/articles",
      dataType: "json",
      success: function (jsonArticles){
        ArticleActions.receiveAll(jsonArticles);
      }
    });
  },
  fetchArticle: function (articleId) {
    $.ajax({
      type: "GET",
      url: "api/articles/" + articleId,
      dataType: "json",
      success: function (jsonArticle){
        ArticleActions.receiveOne(jsonArticle);
      }
    });
  }
};

module.exports = ArticleUtil;
