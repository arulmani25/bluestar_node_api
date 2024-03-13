const model = require("../../../models/index");
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const listTemeperaturelogsField = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, titleId } = payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  //   const recordList = await model.temperaturelogForms.aggregate([
  //     {
  //       $match: { titleId: new ObjectId(titleId) },
  //     },
  //     {
  //       $match: searchKey
  //         ? {
  //             $or: [],
  //           }
  //         : {},
  //     },

  //     {
  //       $sort: sort,
  //     },
  //     {
  //       $facet: {
  //         pagination: [{ $count: "totalCount" }],
  //         data: [{ $skip: Number(skip) || 0 }, { $limit: Number(limit) || 10 }],
  //       },
  //     },
  //   ]);

  const list = await model.temperaturelogForms.findOne({ titleId: titleId });
  return list;
};

module.exports = { listTemeperaturelogsField };
