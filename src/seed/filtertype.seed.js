const { filterByOption } = require("../utils/enum");

const filterSeedData = [
  {
    filter_name: filterByOption.halfYearly,
  },
  {
    filter_name: filterByOption.monthly,
  },
  {
    filter_name: filterByOption.quarterly,
  },
  {
    filter_name: filterByOption.yearly,
  },
  {
    filter_name: filterByOption.weekly,
  },
  {
    filter_name: filterByOption.daily,
  },
];

module.exports = { filterSeedData };
