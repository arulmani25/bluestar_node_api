const { mobileServiceController } = require("../../../../service/index");
const { successMsg, errorMsg } = require("../../../../utils/message");
const { encryptText } = require("../../../../utils/encrypt");

const checklistListUsingTag = async (req, res, next) => {
  try {
    const record = await mobileServiceController.checklist.listByTag(req.query);

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

module.exports = { checklistListUsingTag };
