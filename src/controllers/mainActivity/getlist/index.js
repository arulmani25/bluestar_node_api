const { mainActivityServiceController } = require("../../../service/index");
const { successMsg, errorMsg } = require("../../../utils/message");

const getGroupList = async (req, res, next) => {
  try {
    const record = await mainActivityServiceController.groupList(req.query);
    return res.json({
      Status: "Success",
      Message: successMsg.GROUP_LIST_VIEWED_SUCCESSFULLY,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getGroupList };
