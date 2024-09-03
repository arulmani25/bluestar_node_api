const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');
const { roles } = require('../../../utils/enum');
const currentDate = new Date().toLocaleDateString();

const updateCheckListRecord = async (id, payload, loggedUser) => {
    console.log('currentDate', typeof currentDate);
    console.log('currentDate', currentDate);
    console.log('loggedUser.role === roles.technician ', loggedUser.role === roles.technician);
    const isExist = await model.submitchecklistModel.findOne({
        _id: id,
        delete_status: false
    });

    if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);
    let filter;
    console.log('isExist', isExist);

    if (loggedUser.role === roles.supervisor) {
        filter = {
            $set: {
                supervisor_sign: payload.supervisor_sign,
                supervisor_name: payload.supervisor_name
            }
        };
    } else if (loggedUser.role === roles.technician || loggedUser.role === roles.ac_technician) {
        filter = {
            $set: {
                technician_sign: payload.technician_sign,
                technicians_name: payload.technicians_name
            }
        };
    } else if (
        loggedUser.role === roles.bial ||
        loggedUser.role === roles.manager ||
        loggedUser.user_type === roles.bial1
    ) {
        filter = {
            $set: {
                bial_sign: payload.bial_sign,
                bial_user_name: payload.bial_user_name
            }
        };
    }

    console.log('filter', filter);
    const record = await model.submitchecklistModel.updateOne({ _id: isExist._id }, filter);
    console.log(1, record);
    return record;
};

module.exports = { updateCheckListRecord };
