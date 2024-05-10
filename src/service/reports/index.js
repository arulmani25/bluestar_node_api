const { reportList } = require("./list");
const { getReportById } = require("./getbyid");
const { getReportCount } = require("./count");
const { checklistReportList } = require("./listpdf");

module.exports = {
  reportList,
  getReportById,
  getReportCount,
  checklistReportList,
};
