const model = require('../../../models/index');

const getSubActivityDropDown = async (activityId) => {
    const record = await model.subactivityModel.find(
        { main_activity: activityId, delete_status: false },
        { activity_name: 1, index: 1 }
    );
    console.log(record);
    return record;
};
module.exports = { getSubActivityDropDown };
