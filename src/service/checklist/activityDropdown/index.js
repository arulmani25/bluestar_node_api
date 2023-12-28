const model = require("../../../models/index");

const getActivityDropDown = async () => {
  const record = await model.mainactivityModel.find(
    { delete_status: false },
    { activity_name: 1, index: 1 }
  );
  console.log(record);
  return record;
};
module.exports = { getActivityDropDown };
