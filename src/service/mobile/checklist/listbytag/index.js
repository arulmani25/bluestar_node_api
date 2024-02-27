const model = require("../../../../models/index");

const listByTag = async (query) => {
  const endOfDay = new Date(query.date);
  endOfDay.setHours(23, 59, 59, 999);
  const record = await model.checkListModel.find(
    {},
    { cobie_tag: 1, check_list_type: 1, createdAt: 1 },
    { sort: { createdAt: -1 } }
  );
  return record;
};

module.exports = { listByTag };
