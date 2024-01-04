const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;

const getCheckList = async (query) => {
  const {
    searchKey,
    skip,
    limit,
    sortkey,
    sortOrder,
    activityId,
    equipmentTagId,
  } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  let filter;

  if (activityId && !equipmentTagId) {
    filter = {
      $match: { activity_id: new objectId(activityId), delete_status: false },
    };
  } else if (equipmentTagId && !activityId) {
    filter = {
      $match: {
        equipment_tag: new objectId(equipmentTagId),
        delete_status: false,
      },
    };
  } else {
    filter = {
      $match: { delete_status: false },
    };
  }

  const recordList = await model.checkListModel.aggregate([
    { ...filter },
    {
      $match: searchKey
        ? {
            $or: [{ field_name: searchRegex }],
          }
        : {},
    },
    {
      $project: {
        password: 0,
        confirm_password: 0,
        __v: 0,
      },
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

module.exports = { getCheckList };
