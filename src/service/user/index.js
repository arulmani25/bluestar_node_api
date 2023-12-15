const { createUser } = require("./create");
const { listUser } = require("./list");
const { getById } = require("./getbyid");
const { updateUserRecord } = require("./update");
const { deleteUserRecord } = require("./delete");

module.exports = {
  createUser,
  listUser,
  getById,
  updateUserRecord,
  deleteUserRecord,
};
