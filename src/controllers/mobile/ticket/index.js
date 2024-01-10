const express = require("express");
const router = express.Router();

const { ticketRaiseUsingMobile } = require("./create");
const { ticketDropDown } = require("./dropdown");
const { getTicketList } = require("./getlist");
const { ticketStatusUpdate } = require("./updatestatus");
const { ticketRaiseCount } = require("./count");

router.post("/create", ticketRaiseUsingMobile);
router.get("/dropdown", ticketDropDown);
router.get("/list", getTicketList);
router.put("/update/:id", ticketStatusUpdate);
router.get("/count", ticketRaiseCount);

module.exports = router;
