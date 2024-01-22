const { checkListServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getCheckList = async (req, res, next) => {
  try {
    const record = await checkListServiceController.getCheckList(req.query);
    const data = [record[0][0] ? record[0][0] : {}, { month: record[1] }];
    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: data,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCheckList };
