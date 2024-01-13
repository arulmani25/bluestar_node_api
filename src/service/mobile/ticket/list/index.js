const model = require("../../../../models/index");

const ticketList = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, status } = payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.ticketModel.aggregate([
    {
      $match: status ? { status: status } : {},
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

module.exports = { ticketList };
