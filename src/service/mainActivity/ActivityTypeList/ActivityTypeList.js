const model = require('../../../models/index');

const getActivityTypes = async () => {
    const getActivityType = await model.mainactivityModel.aggregate([
        {
            $project: {
                activity_name: 1,
                _id: 0 // Exclude _id if not needed
            }
        },
        {
            $group: {
                _id: '$activity_name'
            }
        },
        {
            $project: {
                _id: 0,
                activity_name: '$_id'
            }
        }
    ]);

    return getActivityType;
};

module.exports = { getActivityTypes };
