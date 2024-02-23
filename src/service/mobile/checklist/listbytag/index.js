const model = require("../../../../models/index");

const listByTag = async (query) => {
  const endOfDay = new Date(query.date);
  endOfDay.setHours(23, 59, 59, 999);
  const record = await model.checkListModel.find(
    {
      cobie_tag: query.cobie_tag,
      check_list_type: query.type,
    },
    {},
    {
      sort: { createdAt: -1 },
      //   skip: (Number(query.page) - 1) * Number(query.limit) || 10,
      //   limit: Number(query.limit) || 10,
    }
  );
  return record;
};

module.exports = { listByTag };
