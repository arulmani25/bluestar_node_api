const model = require("../models/index");

const collectChecklists = async (month) => {
  const checklistByMonth = await model.submitchecklistModel.find({
    check_list_type: { $in: month },
  });
  return checklistByMonth;
};

module.exports = { collectChecklists };
