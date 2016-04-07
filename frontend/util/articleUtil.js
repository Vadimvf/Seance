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
        console.log("saved!");
        callback && callback
      }
    });
  },

};

var _getTime = function () {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var amPm = "AM";

  if (hours > 12){ hours = hours - 12; amPM = "PM"; }
  return hours + ":" + minutes + " " + amPM;
};

module.exports = ArticleUtil;
