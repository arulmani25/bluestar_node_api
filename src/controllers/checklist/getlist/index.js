const { checkListServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getCheckList = async (req, res, next) => {
  try {
    const record = await checkListServiceController.getCheckList(req.query);
    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCheckList };
