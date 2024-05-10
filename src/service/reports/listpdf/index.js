const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;
const moment = require("moment");

const checklistReportList = async (query, payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const startingDate = moment()
    .month(payload - 1)
    .startOf("month");
  const endingDate = moment()
    .month(payload - 1)
    .endOf("month");

  const recordList = await model.documentModel.aggregate([
    {
      $match: {
        createdAt: { $gte: new Date(startingDate), $lte: new Date(endingDate) },
      },
    },
    {
      $match: searchKey
        ? {
            $or: [{}],
          }
        : {},
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

module.exports = { checklistReportList };
