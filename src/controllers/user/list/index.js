const { userServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getUserList = async (req, res, next) => {
  try {
    //** service call */

    const userList = await userServiceController.listUser(req.query);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: userList,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserList };
