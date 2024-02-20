const model = require("../../../../models/index");

const ticketList = async (payload) => {
  const { searchKey, skip, limit, sortkey, sortOrder, status } = payload;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  const recordList = await model.ticketModel.aggregate([
    {
      $group: {
        _id: "$equipment_no",
        record: {
          $last: "$$ROOT",
        },
      },
    },
    {
      $match: {
        "record.status": status,
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
      $project: {
        _id: 0,
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

module.exports = { ticketList };
