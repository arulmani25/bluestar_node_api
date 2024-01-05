const { errorMsg } = require("./message");

const errorResponse = (msg) => {
  let response = {
    statusCode: 500,
    errorMessage: "Internal Server Error",
    errors: [],
  };

  switch (msg) {
    case errorMsg.USER_NOT_FOUND:
      response = {
        errorMessage: errorMsg.USER_NOT_FOUND,
        statusCode: 404,
      };
      break;
    case errorMsg.USER_ALREADY_EXIST:
      response = {
        errorMessage: errorMsg.USER_ALREADY_EXIST,
        statusCode: 400,
      };
      break;
    case errorMsg.RECORD_NOT_FOUND_TO_DELETE:
      response = {
        errorMessage: errorMsg.RECORD_NOT_FOUND_TO_DELETE,
        statusCode: 404,
      };
      break;
    case errorMsg.RECORD_NOT_FOUND_TO_UPDATE:
      response = {
        errorMessage: errorMsg.RECORD_NOT_FOUND_TO_UPDATE,
        statusCode: 404,
      };
      break;
    case errorMsg.LOGIN_FAILED:
      response = {
        errorMessage: errorMsg.LOGIN_FAILED,
        statusCode: 404,
      };
    case errorMsg.GROUP_ALREADY_EXIST:
      response = {
        errorMessage: errorMsg.GROUP_ALREADY_EXIST,
        statusCode: 400,
      };
    case errorMsg.GROUP_NOT_FOUND:
      response = {
        errorMessage: errorMsg.GROUP_NOT_FOUND,
        statusCode: 404,
      };
    case errorMsg.FAILED_TO_CREATE_SUB_ACTIVITY:
      response = {
        errorMessage: errorMsg.FAILED_TO_CREATE_SUB_ACTIVITY,
        statusCode: 400,
      };
    case errorMsg.SUB_ACTIVITY_ALREADY_EXIST:
      response = {
        errorMessage: errorMsg.SUB_ACTIVITY_ALREADY_EXIST,
        statusCode: 400,
      };
    case errorMsg.PLEASE_CHECKIN_BEFORE_UPDATING_LOGOUT_TIME:
      response = {
        errorMessage: errorMsg.PLEASE_CHECKIN_BEFORE_UPDATING_LOGOUT_TIME,
        statusCode: 400,
      };
    case errorMsg.CHECK_USER_MOBILE_NUMBER_AND_ATT_DATE:
      response = {
        errorMessage: errorMsg.CHECK_USER_MOBILE_NUMBER_AND_ATT_DATE,
        statusCode: 400,
      };
  }
  return response;
};

module.exports = { errorResponse };
