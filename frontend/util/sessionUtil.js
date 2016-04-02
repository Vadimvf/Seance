var SessionActions = require('../actions/sessionAction');

var sessionUtil = {
  createAuthor: function (authorParams) {
    debugger
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
