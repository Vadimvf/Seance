var AuthorActions = require('../actions/authorAction');

var AuthorUtil = {
  fetchAuthor: function (authorId, callback){
    $.ajax({
      type: "GET",
      url: "api/authors/" + authorId,
      dataType: "json",
      data: authorId,
      success: function (jsonAuthor){
        AuthorActions.receiveAuthor(jsonAuthor);
        callback && callback();
      }
    });
  }

};




module.exports = AuthorUtil;
