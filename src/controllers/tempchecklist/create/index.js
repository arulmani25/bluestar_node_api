const { tempCheckListController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const createTempCheckList = async (req, res, next) => {
  try {
    const payload = req.body;

    const record = await tempCheckListController.createTempCheckList(payload);

    if (!record) throw new Error(errorMsg.FAILED_TO_CREATE_CHECK_LIST);

    return res.json({
      Status: "Success",
      Message: successMsg.CHECK_LIST_CREATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTempCheckList };
