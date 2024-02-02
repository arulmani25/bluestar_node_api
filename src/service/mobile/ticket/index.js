const { requestTicketMobile } = require("./create");
const { ticketDropdown } = require("./dropdown");
const { ticketList } = require("./list");
const { updateTicketStatusRecord } = require("./updatestatus");
const { ticketCount } = require("./count");
const { viewTicket } = require("./getbyid");
const { fileUpload } = require("./fileupload");

module.exports = {
  requestTicketMobile,
  ticketDropdown,
  ticketList,
  updateTicketStatusRecord,
  ticketCount,
  viewTicket,
  fileUpload,
};
