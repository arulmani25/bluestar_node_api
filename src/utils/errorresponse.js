const { errorMsg } = require("./message");

const errorResponse = (msg) => {
  let response = {
    Code: 500,
    Message: "Internal Server Error",
    errors: [],
  };

  switch (msg) {
    case errorMsg.UNAUTHORIZED_USER:
      response = {
        Message: errorMsg.UNAUTHORIZED_USER,
        Code: 401,
      };
      break;

    case errorMsg.USER_NOT_FOUND:
      response = {
        Message: errorMsg.USER_NOT_FOUND,
        Code: 404,
      };
      break;
    case errorMsg.INCORRECT_PASSWORD:
      response = {
        Message: errorMsg.INCORRECT_PASSWORD,
        Code: 400,
      };
      break;
    case errorMsg.USER_ALREADY_EXIST:
      response = {
        Message: errorMsg.USER_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case errorMsg.RECORD_NOT_FOUND_TO_DELETE:
      response = {
        Message: errorMsg.RECORD_NOT_FOUND_TO_DELETE,
        Code: 404,
      };
      break;
    case errorMsg.RECORD_NOT_FOUND_TO_UPDATE:
      response = {
        Message: errorMsg.RECORD_NOT_FOUND_TO_UPDATE,
        Code: 404,
      };
      break;
    case errorMsg.LOGIN_FAILED:
      response = {
        Message: errorMsg.LOGIN_FAILED,
        Code: 404,
      };
      break;
    case errorMsg.GROUP_ALREADY_EXIST:
      response = {
        Message: errorMsg.GROUP_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case errorMsg.GROUP_NOT_FOUND:
      response = {
        Message: errorMsg.GROUP_NOT_FOUND,
        Code: 404,
      };
      break;
    case errorMsg.FAILED_TO_CREATE_SUB_ACTIVITY:
      response = {
        Message: errorMsg.FAILED_TO_CREATE_SUB_ACTIVITY,
        Code: 400,
      };
      break;
    case errorMsg.SUB_ACTIVITY_ALREADY_EXIST:
      response = {
        Message: errorMsg.SUB_ACTIVITY_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case errorMsg.PLEASE_CHECKIN_BEFORE_UPDATING_LOGOUT_TIME:
      response = {
        Message: errorMsg.PLEASE_CHECKIN_BEFORE_UPDATING_LOGOUT_TIME,
        Code: 400,
      };
      break;
    case errorMsg.CHECK_USER_MOBILE_NUMBER_AND_ATT_DATE:
      response = {
        Message: errorMsg.CHECK_USER_MOBILE_NUMBER_AND_ATT_DATE,
        Code: 400,
      };
      break;
    case errorMsg.MOBILE_NUMBER_ALREADY_EXIST:
      response = {
        Message: errorMsg.MOBILE_NUMBER_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case errorMsg.EMAIL_ALREADY_EXIST:
      response = {
        Message: errorMsg.EMAIL_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case errorMsg.USER_NAME_ALREADY_EXIST:
      response = {
        Message: errorMsg.USER_NAME_ALREADY_EXIST,
        Code: 400,
      };
      break;
    case "checklist validation failed: cobie_tag: Path `cobie_tag` is required":
      response = {
        Message: "cobie_tag is required",
        Code: 400,
      };
      break;
    case "checklist Already Submitted":
      response = {
        Message: "checklist Already Submitted",
        Code: 409,
      };
      break;
    case errorMsg.ROLE_ALREADY_EXIST:
      response = {
        Message: errorMsg.ROLE_ALREADY_EXIST,
        Code: 400,
      };
      break;
  }
  return response;
};

module.exports = { errorResponse };
