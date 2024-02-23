const { mobileServiceController } = require("../../../../service/index");
const { successMsg, errorMsg } = require("../../../../utils/message");
const { encryptText } = require("../../../../utils/encrypt");

const checklistListUsingTag = async (req, res, next) => {
  try {
    const record = await mobileServiceController.checklist.listByTag(req.query);

    let uniqueArr = record.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.cobie_tag === item.cobie_tag &&
            t.check_list_type === item.check_list_type
        )
    );

    return res.json({
      Status: "Success",
      Message: successMsg.GROUP_LIST_VIEWED_SUCCESSFULLY,
      Data: uniqueArr,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { checklistListUsingTag };
