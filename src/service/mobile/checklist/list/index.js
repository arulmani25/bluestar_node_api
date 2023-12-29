const mongoose = require("mongoose");
const model = require("../../../../models/index");
const objectId = mongoose.Types.ObjectId;

const checkListMobile = async (query) => {
  const {
    searchKey,
    skip,
    limit,
    sortkey,
    sortOrder,
    activityId,
    subActivityId,
    activityType,
  } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  let filter;

  if (activityId && !subActivityId && !activityType) {
    filter = {
      $match: { activity_id: new objectId(activityId), delete_status: false },
    };
  } else if (!activityId && subActivityId && !activityType) {
    filter = {
      $match: {
        sub_activity_id: new objectId(subActivityId),
        delete_status: false,
      },
    };
  } else if (!activityId && !subActivityId && activityType) {
    filter = {
      $match: {
        activity_type: new objectId(activityType),
        delete_status: false,
      },
    };
  } else if (activityId && subActivityId && !activityType) {
    filter = {
      $match: {
        activity_id: new objectId(activityId),
        sub_activity_id: new objectId(subActivityId),
        delete_status: false,
      },
    };
  } else if (!activityId && subActivityId && activityType) {
    filter = {
      $match: {
        sub_activity_id: new objectId(subActivityId),
        activity_type: new objectId(activityType),
        delete_status: false,
      },
    };
  } else if (activityId && !subActivityId && activityType) {
    filter = {
      $match: {
        activity_id: new objectId(activityId),
        activity_type: new objectId(activityType),
        delete_status: false,
      },
    };
  } else if (activityId && subActivityId && activityType) {
    filter = {
      $match: {
        activity_id: new objectId(activityId),
        sub_activity_id: new objectId(subActivityId),
        activity_type: new objectId(activityType),
        delete_status: false,
      },
    };
  } else {
    filter = { $match: { delete_status: false } };
  }
  console.log(filter);
  const recordList = await model.checkListModel.aggregate([
    { ...filter },
    {
      $match: searchKey
        ? {
            $or: [{ activity_name: searchRegex }],
          }
        : {},
    },
    {
      $project: {
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

module.exports = { checkListMobile };
