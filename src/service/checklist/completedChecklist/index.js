const model = require("../../../models");
const moment = require("moment");

const completedChecklist = async () => {
  const momentDate = moment();
  const currentDate = new Date().getDate();
  const currentFullDate = new Date();
  const cobieTags = [];
  const submittedCobieTags = [];

  const getSubmittedTagList = await model.submitchecklistModel.find(
    {
      createdAt: { $lte: new Date(momentDate.endOf("d")) },
    },
    { equipment_tag_name: 1 }
  );
  for (const iterator of getSubmittedTagList) {
    submittedCobieTags.push(iterator["_doc"].equipment_tag_name);
  }

  return { submittedCount: submittedCobieTags.count() };
};

module.exports = { completedChecklist };
