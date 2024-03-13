const model = require("../../../../models/index");

const listByTag = async (query) => {
  const endOfDay = new Date(query.date);
  endOfDay.setHours(23, 59, 59, 999);
  const record = await model.submitchecklistModel.find(
    {},
    { _id: 0, equipment_tag_name: 1 },
    { sort: { createdAt: -1 } }
  );
  return record;
};

module.exports = { listByTag };
