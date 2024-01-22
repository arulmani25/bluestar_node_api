const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require("../../../utils");
const moment = require("moment");
const { filterOption } = require("../filteroption");

const getCheckList = async (query) => {
  const {
    searchKey,
    skip,
    limit,
    sortkey,
    sortOrder,
    activityId,
    equipmentTagId,
  } = query;

  const sort = { [sortkey]: !sortOrder || sortOrder === "DESC" ? -1 : 1 };

  const searchRegex = new RegExp(["^.*", searchKey, ".*$"].join(""), "i");

  let filterType = [];
  const checkedOrNot = [];
  let checklistToShow = [];
  const filters = [];
  const records = [];
  const monthAndFilter = [];

  const currentDate = moment();

  const month = currentDate.format("M");

  const currentMonth = currentDate
    .month(month - 1)
    .toString()
    .split(" ")[1];

  let checkPreviousMonthChecklist = await model.checkListValidation.findOne({
    equipment_tag: equipmentTagId,
  });

  if (
    currentMonth === "Mar" ||
    currentMonth === "Jun" ||
    currentMonth === "sep" ||
    currentMonth === "Dec"
  ) {
    for (let i = Number(month); i >= Number(month) - 2; i--) {
      const getMonth = currentDate
        .month(i - 1)
        .toString()
        .split(" ")[1];
      checkedOrNot.push({
        [getMonth]: checkPreviousMonthChecklist["_doc"][getMonth],
      });
    }
  } else if (currentMonth === "Jan") {
    checkedOrNot.push({
      [currentMonth]: checkPreviousMonthChecklist["_doc"][currentMonth],
    });
  } else {
    // check previous month checklist if validated or not

    for (let i = Number(month); i >= Number(month) - 1; i--) {
      const getMonth = currentDate
        .month(i - 1)
        .toString()
        .split(" ")[1];
      checkedOrNot.push({
        [getMonth]: checkPreviousMonthChecklist["_doc"][getMonth],
      });
    }
  }
  // get the filter type based on month

  for (const element of checkedOrNot) {
    let key = Object.keys(element);
    if (element[key] === "not checked") {
      checklistToShow.push(key);
    }
  }
  const getFilterTypeBasedOnValidation = await model.equipmentsModel.findOne({
    equipment_tag: equipmentTagId,
  });

  for (const iterator of checklistToShow.flat()) {
    filters.push(getFilterTypeBasedOnValidation[iterator]);
    monthAndFilter.push({
      [iterator]: getFilterTypeBasedOnValidation[iterator],
    });
  }

  for (const filterFromDate of filters) {
    if (filterFromDate === "M") {
      filterType.push(filterByOption.monthly);
    } else if (filterFromDate === "Q") {
      filterType.push(filterByOption.quarterly);
    } else if (filterFromDate === "Y") {
      filterType.push(filterByOption.yearly);
    } else if (filterFromDate === "H") {
      filterType.push(filterByOption.halfYearly);
    }
  }

  for (const el of [...new Set(filterType)]) {
    let recordList = await model.checkListModel.aggregate([
      {
        $match: {
          equipment_tag_name: equipmentTagId,
          check_list_type: el,
        },
      },
      {
        $match: searchKey
          ? {
              $or: [{ field_name: searchRegex }],
            }
          : {},
      },
      {
        $sort: sort,
      },
      {
        $facet: {
          pagination: [{ $count: "totalCount" }],
          data: [{ $skip: Number(skip) || 0 }, { $limit: Number(limit) || 10 }],
        },
      },
    ]);
    records.push(recordList);
  }

  return [records.flat(), monthAndFilter];
};

module.exports = { getCheckList };
