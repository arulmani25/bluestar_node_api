const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');
const { passwordValidation } = require('../../../utils/index');

const userLogin = async (payload) => {
    const isExist = await model.userModel.findOne({
        user_email: payload.user_email,
        delete_status: false
    });
    if (!isExist) throw new Error(errorMsg.USER_NOT_FOUND);

    const isValidPassword = await passwordValidation.checkPassword(payload.user_password, isExist.user_password);
    if (!isValidPassword) throw new Error(errorMsg.INCORRECT_PASSWORD);
    if (isValidPassword) {
        const data = await model.userModel.aggregate([
            { $match: { _id: isExist._id } },
            {
                $lookup: {
                    from: 'usertypes',
                    localField: 'user_type',
                    foreignField: '_id',
                    as: 'usertype'
                }
            },
            {
                $unwind: {
                    path: '$usertype',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    user_mobile_no: 1,
                    user_name: 1,
                    user_email: 1,
                    emp_type: 1,
                    user_type: '$usertype.user_type'
                }
            }
        ]);
        return data;
    } else {
        throw new Error(errorMsg.INCORRECT_PASSWORD);
    }
};

module.exports = { userLogin };
