const { roleServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getRoleTypeList = async (req, res, next) => {
  try {
    //** service call */

    const roleTypeList = await roleServiceController.roleTypeList(req.query);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: roleTypeList,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoleTypeList };
