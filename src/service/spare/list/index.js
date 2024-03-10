const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;

const listSpare = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, role, equipment } =
    payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.spareModel.aggregate([
    {
      $match: equipment
        ? {
            equipment: new objectId(equipment),
          }
        : {},
    },
    {
      $match: searchKey
        ? {
            $or: [],
          }
        : {},
    },
    {
      $project: {
        _id: 0,
        createdAt: 0,
        updatedAt: 0,
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

module.exports = { listSpare };
