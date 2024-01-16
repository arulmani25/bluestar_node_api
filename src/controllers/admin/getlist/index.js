const { adminServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getAdminList = async (req, res, next) => {
  try {
    //** service call */

    const adminList = await adminServiceController.adminList(req.query);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: adminList,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAdminList };
