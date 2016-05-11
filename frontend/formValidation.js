var validate = require('validate.js');

var validateForm = function (formObject, formType) {
  var isCreate = (formType === "Create") ? true : false;
  var isEdit = (formType === "Edit") ? true : false;

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
      presence: isCreate || isEdit,
      format: {
        pattern: "[a-zA-Z0-9 ]+",
        flags: "i",
        message: "can only have letters or numbers"
      },
      length: {
        minimum: 3,
        message: "must be at least 3 characters"
      }
    },

    email: {
      presence: isCreate || isEdit,
      email: true
    },

    password: {
      presence: !isEdit,
      length: {
        minimum: 6,
        tooShort: "must be at least 6 characters",
        maximum: 20,
        tooLong: "must be less than 20 characters"
      }
    },

    bio: {
      presence: isEdit,
      length: {
        maximum: 150,
        tooLong: "should be less than 150 characters"
      }
    }

  };

  var errors = validate(formObject, constraints, {format: "flat"});

  return (!!errors)? errors : [];

};


module.exports = validateForm;
