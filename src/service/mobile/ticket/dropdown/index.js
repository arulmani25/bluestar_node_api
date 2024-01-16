const mongoose = require("mongoose");
const model = require("../../../../models/index");
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require("../../../../utils/enum");
const moment = require("moment");

const ticketDropdown = async (query) => {
  const {
    searchKey,
    skip,
    limit,
    sortkey,
    sortOrder,
    equipment,
    equipmentNo,
    location,
  } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  let filter;
  let project;

  if (equipment && !equipmentNo && !location) {
    filter = {
      $match: {
        type: equipment,
      },
    };
    project = {
      $project: {
        equipment_tag: 1,
      },
    };
  } else if (equipment && equipmentNo && !location) {
    filter = {
      $match: {
        type: equipment,
        equipment_tag: equipmentNo,
      },
    };
    project = {
      $project: {
        location: 1,
      },
    };
  } else if (equipment && equipmentNo && location) {
    filter = {
      $match: {
        type: equipment,
        equipment_tag: equipmentNo,
        location: location,
      },
    };
    project = {
      $project: {
        sub_location: 1,
      },
    };
  }

  const recordList = await model.equipmentsModel.aggregate([
    { ...filter },
    {
      ...project,
    },
    {
      $sort: sort,
    },
    {
      $facet: {
        pagination: [{ $count: "totalCount" }],
        data: [{ $skip: Number(skip) || 0 }, { $limit: Number(limit) || 10 }],
      },
    },
  ]);
  return recordList;
};

module.exports = { ticketDropdown };
