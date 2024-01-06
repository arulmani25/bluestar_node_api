const { createLocation } = require("./create");
const { mainLocationList } = require("./list");
const { getMainLocationById } = require("./getbyid");
const { deleteLocation } = require("./delete");
const { updateLocation } = require("./update");

module.exports = {
  createLocation,
  mainLocationList,
  getMainLocationById,
  deleteLocation,
  updateLocation,
};
