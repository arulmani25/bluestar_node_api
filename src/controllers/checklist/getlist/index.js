const { checkListServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getCheckList = async (req, res, next) => {
  try {
    const rec = [];
    const record = await checkListServiceController.getCheckList(req.query);

    if (record === "checklist already checked") {
      return res.json({
        Status: "Success",
        Message: "checklist Already submitted",
        Data: [],
        Code: 200,
      });
    } else {
      return res.json({
        Status: "Success",
        Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
        Data: record,
        Code: 200,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getCheckList };
