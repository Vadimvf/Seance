var ArticleActions = require('../actions/articleAction');

var ArticleUtil = {
  fetchArticles: function (query, callback) {
    $.ajax({
      type: "GET",
      url: "api/articles",
      dataType: "json",
      data: query,
      success: function (jsonArticles){
        ArticleActions.receiveAll(jsonArticles);
      }
    });
  },

  fetchArticle: function (articleId, callback) {
    $.ajax({
      type: "GET",
      url: "api/articles/" + articleId,
      dataType: "json",
      success: function (jsonArticle){
        ArticleActions.receiveOne(jsonArticle);
        callback && callback(jsonArticle);
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
        var now = new Date();
        ArticleActions.updateSaveStatus("Last save " + _getTime());
        callback && callback();
      }
    });
  },

  editArticle: function (article, articleId, callback) {
    $.ajax({
      type: "PUT",
      url: "api/articles/" + articleId,
      dataType: "json",
      data: article,
      success: function (){
        ArticleActions.updateSaveStatus("Last save " + _getTime());
        callback && callback();
      }
    });
  },

  deleteArticle: function (articleId, callback){
    $.ajax({
      type: "DELETE",
      url: "api/articles/" + articleId,
      dataType: "json",
      data: articleId,
      success: function (){
        callback && callback();
      }
    });
  }

};

var _getTime = function () {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var amPm = "AM";

  if (hours > 12){ hours = hours - 12; amPm = "PM"; }
  if (minutes < 10) { minutes = "0" + minutes; }
  return hours + ":" + minutes + " " + amPm;
};

module.exports = ArticleUtil;
