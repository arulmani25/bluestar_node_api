const express = require("express");
const router = express.Router();

const { ticketRaiseUsingMobile } = require("./create");
const { ticketDropDown } = require("./dropdown");
const { getTicketList } = require("./getlist");
const { ticketStatusUpdate } = require("./updatestatus");
const { ticketRaiseCount } = require("./count");
const { ticketView } = require("./getbyid");

router.post("/create", ticketRaiseUsingMobile);
router.get("/dropdown", ticketDropDown);
router.get("/list", getTicketList);
router.put("/update/:id", ticketStatusUpdate);
router.get("/view/:id", ticketView);
router.get("/count", ticketRaiseCount);

module.exports = router;
