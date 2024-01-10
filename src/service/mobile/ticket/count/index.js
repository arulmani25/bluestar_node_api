const model = require("../../../../models/index");

const ticketCount = async () => {
  const record = await model.ticketModel.aggregate([
    {
      $group: {
        _id: "$status",
        count: {
          $count: {},
        },
      },
    },
    {
      $set: {
        status: "$_id",
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  return record;
};
module.exports = { ticketCount };
