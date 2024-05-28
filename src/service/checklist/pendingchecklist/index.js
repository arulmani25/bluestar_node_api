const model = require("../../../models");
const moment = require("moment");

const pendingChecklists = async () => {
  const momentDate = moment();
  const currentDate = new Date().getDate();
  const currentFullDate = new Date();
  const pendingRecordsEquipemtTags = await model.checklistTracker.find({
    day_of_month: { $lte: currentDate - 1 },
  });
  const cobieTags = [];
  const submittedCobieTags = [];

  for (const iterator of pendingRecordsEquipemtTags) {
    const data = await model.equipmentsModel.findOne({
      equipment_tag: iterator.equipment_tag,
    });
    cobieTags.push({
      cobie_tag: data ? data["_doc"].cobie_tag : "",
      date: `${
        iterator.day_of_month
      }-${new Date().getMonth()}-${new Date().getFullYear()}`,
    });
  }
  const getSubmittedTagList = await model.submitchecklistModel.find(
    {
      createdAt: { $lte: new Date(momentDate.endOf("d")) },
    },
    { equipment_tag_name: 1 }
  );
  for (const iterator of getSubmittedTagList) {
    submittedCobieTags.push(iterator["_doc"].equipment_tag_name);
  }
  const filteredPendingTags = cobieTags.filter(
    (item) => !submittedCobieTags.includes(item.cobie_tag)
  );
  function groupByDate(array) {
    return array.reduce((result, obj) => {
      const date = obj.date;
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(obj.cobie_tag);
      return result;
    }, {});
  }

  // Assuming 'data' is your array of objects
  const groupedByDate = groupByDate(filteredPendingTags);
  const returnResponse = [];
  for (const key in groupedByDate) {
    const element = groupedByDate[key];
    returnResponse.push({ date: key, taglist: element });
  }

  return returnResponse;
};

module.exports = { pendingChecklists };
