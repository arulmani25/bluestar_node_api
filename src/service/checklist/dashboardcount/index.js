const model = require("../../../models");
const moment = require("moment");

const dashboardcount = async () => {
  const momentDate = moment();
  const currentDate = new Date().getDate();
  const cobieTagsTopreviousDate = [];
  const cobieTagsForCurrentDate = [];
  const previousSubmittedCobieTags = [];
  const todaySubmittedCobieTags = [];
  const previousVerifiedCobieTags = [];

  //** Count based on Today Date */

  const todayEquipemtTags = await model.checklistTracker.find({
    day_of_month: { $eq: currentDate }, // get equipment tag by today date
  });

  // match the equipment tag and get cobie tag from another table

  for (const iterator of todayEquipemtTags) {
    const data = await model.equipmentsModel.findOne({
      equipment_tag: iterator.equipment_tag,
    });
    cobieTagsForCurrentDate.push(data ? data["_doc"].cobie_tag : "");
  }

  const getTodaySubmittedTagList = await model.submitchecklistModel.find(
    {
      createdAt: {
        $gte: new Date(momentDate.startOf("day")),
        $lte: new Date(momentDate.endOf("day")),
      },
    },
    { equipment_tag_name: 1 }
  );

  //push the cobie tag of submitted checklist
  if (getTodaySubmittedTagList.length > 0) {
    for (const iterator of getTodaySubmittedTagList) {
      todaySubmittedCobieTags.push(iterator["_doc"].equipment_tag_name);
    }
  }

  const filteredTodayPendingTags = cobieTagsForCurrentDate.filter(
    (item) => !todaySubmittedCobieTags.includes(item)
  );

  // remove empty string

  const pendingTodayData = filteredTodayPendingTags.filter((e) => {
    return String(e).trim();
  });
  const submittedTodayData = todaySubmittedCobieTags.filter((e) => {
    return String(e).trim();
  });

  const pendingTodayCount = Number(pendingTodayData.length);
  const todaySubmittedCount = Number(submittedTodayData.length);

  //>>>>>>>>>>>>>>>>>>>>> previous day record count

  const pendingRecordsEquipemtTags = await model.checklistTracker.find({
    day_of_month: { $lte: currentDate - 1 },
  });

  // get cobie tag until previous date

  for (const iterator of pendingRecordsEquipemtTags) {
    const data = await model.equipmentsModel.findOne({
      equipment_tag: iterator.equipment_tag,
    });
    cobieTagsTopreviousDate.push(data?data["_doc"].cobie_tag:"");
  }

  // get submitted tags until previous day signed by supervisor

  const getPreviousSubmittedTagList = await model.submitchecklistModel.find(
    {
      createdAt: {
        $lte: new Date(momentDate.subtract(1, "day").endOf("day")),
      },
      $expr: {
        $gte: [{ $strLenCP: "$supervisor_sign" }, 1],
      },
    },
    { equipment_tag_name: 1 }
  );
  for (const iterator of getPreviousSubmittedTagList) {
    previousSubmittedCobieTags.push(iterator["_doc"].equipment_tag_name);
  }
  const filteredPendingTags = cobieTagsTopreviousDate.filter(
    (item) => !previousSubmittedCobieTags.includes(item)
  );

  // get verified tags until previous day signed by bial

  const getPreviousVerifiedTagList = await model.submitchecklistModel.find(
    {
      createdAt: {
        $lte: new Date(momentDate.subtract(1, "day").endOf("day")),
      },
      $expr: {
        $gte: [{ $strLenCP: "$bial_sign" }, 1],
      },
    },
    { equipment_tag_name: 1 }
  );
  for (const iterator of getPreviousVerifiedTagList) {
    previousVerifiedCobieTags.push(iterator["_doc"].equipment_tag_name);
  }

  const previousPendingFinalData = filteredPendingTags.filter((e) => {
    return String(e).trim();
  });
  const previousSubmittedFinalData = previousSubmittedCobieTags.filter((e) => {
    return String(e).trim();
  });
  const previousVerifiedFinalData = previousVerifiedCobieTags.filter((e) => {
    return String(e).trim();
  });
  const previousPendingCount = Number(previousPendingFinalData.length);
  const previousSubmittedCount = Number(previousSubmittedFinalData.length);
  const previousVerifiedCount = Number(previousVerifiedFinalData.length);

  return {
    previousPendingCount: previousPendingCount,
    previousPendingRecord: previousPendingFinalData,
    previousCompletedCount: previousSubmittedCount,
    previousCompletedRecord: previousSubmittedFinalData,
    previousVerifiedCount: previousVerifiedCount,
    previousVerifiedFinalData: previousVerifiedFinalData,
    toDoCount: pendingTodayCount,
    todoRecord: pendingTodayData,
    todayCompletedCount: todaySubmittedCount,
    todayCompletedRecord: submittedTodayData,
  };
};

module.exports = { dashboardcount };
