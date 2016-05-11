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
  },

  update: function (author, callback){
    $.ajax({
      type: "PUT",
      url: "api/authors/" + author.id,
      dataType: "json",
      data: author,
      success: function (jsonAuthor){
        AuthorActions.receiveAuthor(jsonAuthor);
        callback && callback();
      },
      error: function (errorJSON) {
        errors = errorJSON.responseJSON.errors;
        AuthorActions.errorsReceived(errors);
        callback && callback();
      }
    });
  }

};




module.exports = AuthorUtil;
