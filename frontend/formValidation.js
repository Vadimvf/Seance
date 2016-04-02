var validate = require('validate.js');

var validateForm = function (formObject, formType) {
  var isCreate = (formType === "Create") ? true : false;

  var constraints = {

    username: {
      presence: true,
      length: {
        minimum: 3,
        tooShort: "must be at least 3 characters",
        maximum: 20,
        tooLong: "must be less than 20 characters"
      },
      format: {
        pattern: "[a-zA-Z0-9]+",
        flags: "i",
        message: "can only have letters or numbers"
      }
    },

    fullname: {
      presence: isCreate,
      format: {
        pattern: "[a-zA-Z0-9]+",
        flags: "i",
        message: "can only have letters or numbers"
      },
      length: {
        minimum: 3,
        message: "must be at least 3 characters"
      }
    },

    email: {
      presence: isCreate,
      email: true
    },

    password: {
      presence: true,
      length: {
        minimum: 6,
        tooShort: "must be at least 6 characters",
        maximum: 20,
        tooLong: "must be less than 20 characters"
      }
    }

  };

  return validate(formObject, constraints, {format: "flat"});

};


module.exports = validateForm;
