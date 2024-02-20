const { mobileServiceController } = require("../../../../service/index");
const { successMsg, errorMsg } = require("../../../../utils/message");
const { encryptText } = require("../../../../utils/encrypt");

const activityListUsingMobile = async (req, res, next) => {
  try {
    const record = await mobileServiceController.checklist.checkListMobile(
      req.query
    );
    // record[0].data.map((el) => {
    //   el.equipment_tag_name = encryptText(el.equipment_tag_name);
    // });
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

module.exports = { activityListUsingMobile };
