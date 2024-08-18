const model = require('../../../models/index');

const getActivityTypes = async () => {
    console.log(1234)
    const getActivityType = await model.mainactivityModel.aggregate([
        {
            $project: {
                activity_name: 1,
                _id: 0 // Exclude _id if not needed
            }
        },
        {
            $group: {
                _id: "$activity_name" // Group by activity_name to get unique values
            }
        },
        {
            $project: {
                _id: 0,
                activity_name: "$_id" // Rename _id to activity_name
            }
        }
    ]);

    return getActivityType;
}

module.exports = { getActivityTypes }
