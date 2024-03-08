const { listTemeperaturelogsTitle } = require("./gettitle");
const { listForms } = require("./listForm");
const { getFormById } = require("./getForm");
const { submitTempLogForm } = require("./submitForm");
const { getSubmittedFormById } = require("./getSubmittedForm");
const { updateForm } = require("./updateForm");
const { addLogField } = require("./addLogField");

module.exports = {
  listTemeperaturelogsTitle,
  listForms,
  getFormById,
  submitTempLogForm,
  getSubmittedFormById,
  updateForm,
  addLogField,
};
