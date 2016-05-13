var SearchActions = require('../actions/SearchAction');

var SearchUtil = {
  search: function (query, callback){
    $.ajax({
      type: "GET",
      url: "api/searches",
      dataType: "json",
      data: query,
      success: function (jsonSearchResults){
        SearchActions.receiveReults(jsonSearchResults);
        callback && callback(jsonSearchResults);
      }
    });

  }

};

module.exports = SearchUtil;
