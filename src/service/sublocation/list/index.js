const model = require("../../../models/index");

const subLocationList = async (query) => {
  const { searchKey, skip, limit, sortkey, sortOrder } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.subLocationModel.aggregate([
    { $match: { is_active: true } },
    {
      $match: searchKey
        ? {
            $or: [{ sub_location: searchRegex }],
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

module.exports = { subLocationList };
