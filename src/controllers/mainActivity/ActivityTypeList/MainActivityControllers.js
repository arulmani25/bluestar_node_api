const { mainactivityModel } = require('../../../models/index');
const MainactivityModel = mainactivityModel;
// const CheckListModel = checkListModel;
// const EquipmentsModel = equipmentsModel;

const { isEmpty } = require('../../../helpers/Utils');

const getActivityTypes = async () => {
    /**
     * get activity name list
     */
    let projection = {
        activity_name: -1,
        _id: 0
    };
    let islean = true;
    let getActivityType = await MainactivityModel.find({}, projection).lean(islean);
    // Extract unique activity_name values
    const uniqueActivityNames = [...new Set(getActivityType.map((item) => item.activity_name))];

    if (isEmpty(uniqueActivityNames)) {
        return {
            error: true,
            message: 'list of activity_name is empty',
            data: undefined
        };
    }
    return {
        error: false,
        message: 'list of activity_name',
        data: uniqueActivityNames
    };
};

module.exports = { getActivityTypes };
