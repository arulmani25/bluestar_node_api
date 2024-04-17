const { requestTicketMobile } = require("./create");
const { ticketDropdown } = require("./dropdown");
const { ticketList } = require("./list");
const { updateTicketStatusRecord } = require("./updatestatus");
const { ticketCount } = require("./count");
const { viewTicket } = require("./getbyid");
const { fileUpload } = require("./fileupload");
const { getUsedSpare } = require("./usedspare");
const { ticketPdf } = require("./pdfgenerate");

module.exports = {
  requestTicketMobile,
  ticketDropdown,
  ticketList,
  updateTicketStatusRecord,
  ticketCount,
  viewTicket,
  fileUpload,
  getUsedSpare,
  ticketPdf,
};
