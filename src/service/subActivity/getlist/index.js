const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;

const subActivityList = async (query) => {
  const { searchKey, skip, limit, sortkey, sortOrder, activityId } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.subactivityModel.aggregate([
    {
      $match: activityId
        ? {
            main_activity: new objectId(activityId),
            delete_status: false,
          }
        : { delete_status: false },
    },
    {
      $lookup: {
        from: "mainactivities",
        localField: "main_activity",
        foreignField: "_id",
        as: "activity",
      },
    },
    {
      $unwind: {
        path: "$activity",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        main_activity_name: "$activity.activity_name",
      },
    },
    {
      $match: searchKey
        ? {
            $or: [{ activity_name: searchRegex }],
          }
        : {},
    },
    {
      $project: {
        activity: 0,
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

module.exports = { subActivityList };
