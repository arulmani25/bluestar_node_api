const { listTemeperaturelogsTitle } = require("./gettitle");
const { listForms } = require("./listForm");
const { getFormById } = require("./getForm");
const { submitTempLogForm } = require("./submitForm");
const { getSubmittedFormById } = require("./getSubmittedForm");

module.exports = {
  listTemeperaturelogsTitle,
  listForms,
  getFormById,
  submitTempLogForm,
  getSubmittedFormById,
};
