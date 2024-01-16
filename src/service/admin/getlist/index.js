const adminModel = require("../../../models/admin.Model");

const adminList = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, role } = payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await adminModel.aggregate([
    {
      $match: role
        ? {
            role,
          }
        : {},
    },
    {
      $match: searchKey
        ? {
            $or: [
              { user_name: searchRegex },
              { email_id: searchRegex },
              { role: searchRegex },
            ],
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

module.exports = { adminList };
