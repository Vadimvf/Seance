var SessionActions = require('../actions/sessionAction');

var sessionUtil = {
  createAuthor: function (authorParams, redirect) {
    $.ajax({
      type: "POST",
      url:"/api/authors",
      dataType: "json",
      data: authorParams,
      success: function (currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
        redirect && redirect();
      },
      error: function (errorJSON) {
        errors = errorJSON.responseJSON.errors;
        SessionActions.errorsReceived(errors);
      }
    });
  },

  loginAuthor: function (authorParams, redirect) {
    $.ajax({
      type: "POST",
      url:"/api/session",
      dataType: "json",
      data: authorParams,
      success: function (currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
        redirect && redirect();
      },
      error: function (errorJSON) {
        errors = errorJSON.responseJSON.errors;
        SessionActions.errorsReceived(errors);
      }
    });
  },

  fetchCurrentAuthor: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
      },
      complete: function() {
        completion && completion();
      }
    });
  },

  logout: function (redirect) {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      dataType: "json",
      success: function () {
        SessionActions.logout();
        redirect && redirect();
      }
    });
  }

};

module.exports = sessionUtil;
