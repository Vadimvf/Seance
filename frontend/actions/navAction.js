var Dispatcher = require('../dispatcher/dispatcher');
var NavConstants = require('../constants/navConstants');

var NavActions = {
  renderDefaultNav: function () {
    payload = {
      actionType: NavConstants.DEFAULT_NAV_RENDERED,
      navType: NavConstants.DEFAULT
    };

    Dispatcher.dispatch(payload);
  },

  renderWriteTools: function () {
    payload = {
      actionType: NavConstants.WRITE_TOOLS_RENDERED,
      navType: NavConstants.WRITE_TOOLS
    };

    Dispatcher.dispatch(payload);
  },

  renderArticleShow: function () {
    payload = {
      actionType: NavConstants.ARTICLE_SHOW_RENDERED,
      navType: NavConstants.ARTICLE_SHOW
    };

    Dispatcher.dispatch(payload);
  },

  requestDelete: function () {
    payload = {
      actionType: NavConstants.DELETE_REQUESTED,
      message: NavConstants.DELETE_ARTICLE
    };
    Dispatcher.dispatch(payload);
  },

  requestPublish: function () {
    payload = {
      actionType: NavConstants.PUBLISH_REQUESTED,
      message: NavConstants.PUBLISH_ARTICLE
    };
    Dispatcher.dispatch(payload);
  },

  requestSave: function () {
    payload = {
      actionType: NavConstants.SAVE_REQUESTED,
      message: NavConstants.SAVE_ARTICLE
    };
    Dispatcher.dispatch(payload);
  }

};


module.exports = NavActions;
