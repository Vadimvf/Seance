var SessionActions = require('../actions/sessionAction');

var sessionUtil = {
  createAuthor: function (authorParams, redirect) {
    $.ajax({
      type: "POST",
      url:"/api/authors",
      dataType: "json",
      data: authorParams,
      success: function (currentAuthor) {
        debugger
        SessionActions.currentAuthorReceived(currentAuthor);
        redirect && redirect();
      },
      error: function () {
        console.log("createAuthor Ajax error!");
      }

    });
  }

};

module.exports = sessionUtil;
