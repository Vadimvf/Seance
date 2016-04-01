var SessionStore = require('../stores/session');

var sessionUtil = {
  createAuthor: function (authorParams) {
    $.ajax({
      type: "POST",
      dataType: "json",
      data: authorParams,
      success: function () {
        debugger
      }

    });
  }

};

module.exports = sessionUtil;
