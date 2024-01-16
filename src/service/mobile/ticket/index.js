const { requestTicketMobile } = require("./create");
const { ticketDropdown } = require("./dropdown");
const { ticketList } = require("./list");
const { updateTicketStatusRecord } = require("./updatestatus");
const { ticketCount } = require("./count");

module.exports = {
  requestTicketMobile,
  ticketDropdown,
  ticketList,
  updateTicketStatusRecord,
  ticketCount,
};
