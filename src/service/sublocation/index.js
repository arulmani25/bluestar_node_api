const { createSubLocation } = require("./create");
const { subLocationList } = require("./list");
const { getSubLocationById } = require("./getbyid");
const { deleteSubLocation } = require("./delete");
const { updateSubLocation } = require("./update");

module.exports = {
  createSubLocation,
  deleteSubLocation,
  updateSubLocation,
  subLocationList,
  getSubLocationById,
};
