const model = require("../../../models");
const moment = require("moment");

const pendingChecklists = async () => {
  const currentDate = new Date().getDate();
  const pendingRecordsEquipemtTags = await model.checklistTracker.find({
    day_of_month: { $lte: currentDate },
  });
  const cobieTags = [];
  const submittedCobieTags = [];

  for (const iterator of pendingRecordsEquipemtTags) {
    const data = await model.equipmentsModel.findOne({
      equipment_tag: iterator.equipment_tag,
    });
    cobieTags.push(data["_doc"].cobie_tag);
  }
  const getSubmittedTagList = await model.submitchecklistModel.find(
    {},
    { equipment_tag_name: 1 }
  );
  for (const iterator of getSubmittedTagList) {
    submittedCobieTags.push(iterator["_doc"].equipment_tag_name);
  }
  const filteredPendingTags = cobieTags.filter(
    (item) => !submittedCobieTags.includes(item)
  );
  return filteredPendingTags;
};

module.exports = { pendingChecklists };
