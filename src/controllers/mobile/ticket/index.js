const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../../utils/jwt");

const { ticketRaiseUsingMobile } = require("./create");
const { ticketDropDown } = require("./dropdown");
const { getTicketList } = require("./getlist");
const { ticketStatusUpdate } = require("./updatestatus");
const { ticketRaiseCount } = require("./count");
const { ticketView } = require("./getbyid");

router.post("/create", verifyToken, ticketRaiseUsingMobile);
router.get("/dropdown", verifyToken, ticketDropDown);
router.get("/list", verifyToken, getTicketList);
router.put("/update/:id", verifyToken, ticketStatusUpdate);
router.get("/view", verifyToken, ticketView);
router.get("/count", verifyToken, ticketRaiseCount);

module.exports = router;
