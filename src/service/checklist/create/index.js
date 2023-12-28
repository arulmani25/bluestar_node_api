const model = require("../../../models/index");

const createList = async (payload) => {
  const recordList = await model.checkListModel.create({ ...payload });
  return recordList;
};

module.exports = { createList };
