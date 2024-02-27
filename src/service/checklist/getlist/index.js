const mongoose = require("mongoose");
const model = require("../../../models/index");
const objectId = mongoose.Types.ObjectId;
const { filterByOption } = require("../../../utils");
const moment = require("moment");
const { filterOption } = require("../filteroption");

const getCheckList = async (query) => {
  const { searchKey, skip, limit, sortkey, sortOrder, activityId, cobie_tag } =
    query;

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
    cobie_tag: cobie_tag,
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
    cobie_tag: cobie_tag,
  });
  if (checklistToShow.length === 0) {
    return "checklist already checked";
  }
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
          cobie_tag: cobie_tag,
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
  const sepDatafromArray = records.flat(1);
  const checklist = [];
  for (const rec of sepDatafromArray) {
    if (rec.data.length > 0) {
      for (const iterator of rec.data) {
        checklist.push(iterator);
      }
    }
  }

  return { checklist, monthAndFilter };
};

module.exports = { getCheckList };
