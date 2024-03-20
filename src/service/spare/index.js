const { createSpare } = require("./create");
const { listSpare } = require("./list");
const { deleteSpare } = require("./delete");
const { editSpare } = require("./edit");
const { getSpare } = require("./getspare");

module.exports = {
  createSpare,
  listSpare,
  deleteSpare,
  editSpare,
  getSpare,
};
