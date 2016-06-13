import SessionActions from '../actions/sessionAction';

const SessionUtil = {
  createAuthor(authorParams, redirect) {
    $.ajax({
      type: 'POST',
      url: '/api/authors',
      dataType: 'json',
      data: authorParams,
      success(currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
        if (redirect) redirect();
      },
      error(errorJSON) {
        const errors = errorJSON.responseJSON.errors;
        SessionActions.errorsReceived(errors);
      },
    });
  },

  loginAuthor(authorParams, redirect) {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: authorParams,
      success(currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
        if (redirect) redirect();
      },
      error(errorJSON) {
        const errors = errorJSON.responseJSON.errors;
        SessionActions.errorsReceived(errors);
      },
    });
  },

  fetchCurrentAuthor(completion) {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success(currentAuthor) {
        SessionActions.currentAuthorReceived(currentAuthor);
      },
      complete() {
        if (completion) completion();
      },
    });
  },

  logout(redirect) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      dataType: 'json',
      success() {
        SessionActions.logout();
        if (redirect) redirect();
      },
    });
  },

};

module.exports = SessionUtil;
