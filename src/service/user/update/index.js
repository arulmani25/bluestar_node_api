const userModel = require('../../../models/user.Model');
const { sendFailureMessage } = require('../../../config/Responder');
const { passwordValidation } = require('../../../utils/index');
const { ObjectId } = require('mongodb');

const updateUserRecord = async (id, payload) => {
    const data = await userModel.findOneAndUpdate({ _id: id }, { ...payload });
    return data;
};

/**
 * update password
 * @param {*} requestData
 * @returns
 */
const updateUserPassword = async (requestData, response) => {
    try {
        const getUser = await userModel.findOne({ delete_status: false, _id: new ObjectId(requestData?.id) });
        if (!getUser) {
            return sendFailureMessage(response, 'user is not found ', 422);
        }
        // const isValidPassword = await passwordValidation.checkPassword(
        //     requestData?.current_password,
        //     getUser?.user_password
        // );
        let getEncryptValue = await passwordValidation.encryptPassword(requestData?.new_password);
        console.log('getEncryptValue');
        if (getEncryptValue) {
            getUser.user_password = getEncryptValue;
            getUser.markModified('getUser');
            let updateResult = await getUser.save();
            return updateResult;
        } else {
            return response.status(500).json({ message: 'Error updating password' });
        }
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
};

module.exports = { updateUserRecord, updateUserPassword };
