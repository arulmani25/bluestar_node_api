const userServiceController = require("../../../service/user");

const { successMsg, errorMsg } = require("../../../utils/index");
const { encryptPassword } = require("../../../utils/passwordencryption");

const createUser = async (req, res, next) => {
  try {
    const payload = req.body;

    const password = await encryptPassword(payload.user_password);

    payload.user_password = password;

    //** service call */

    const record = await userServiceController.createUser(payload);

    if (!record) throw new Error(errorMsg.USER_ALREADY_EXIST);

    return res.json({
      Status: "Success",
      Message: successMsg.USER_CREATED_SUCCESSFULLY,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
