const model = require("../../../models");

const activityTypeList = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, role } = payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.activityType.aggregate([
    {
      $match: {},
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

module.exports = { activityTypeList };
