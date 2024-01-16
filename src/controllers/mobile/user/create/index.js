const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");
const { encryptPassword } = require("../../../../utils/passwordencryption");

const createUser = async (req, res, next) => {
  try {
    const payload = req.body;

    payload.user_password = await encryptPassword(payload.user_password);

    const user = await mobileServiceController.user.createMobileUser(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.USER_CREATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
