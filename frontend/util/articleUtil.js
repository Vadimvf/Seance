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
  },

  saveArticle: function (article, callback) {
    $.ajax({
      type: "POST",
      url: "api/articles",
      dataType: "json",
      data: article,
      success: function (jsonArticle){
        ArticleActions.receiveOne(jsonArticle);
        callback && callback();
      }
    });
  },

  editArticle: function (article, callback) {
    $.ajax({
      type: "PUT",
      url: "api/articles/" + article.articleId,
      dataType: "json",
      data: article,
      success: function (){
        debugger
        console.log("saved!");
        callback && callback
      }
    });
  },

};

module.exports = ArticleUtil;
