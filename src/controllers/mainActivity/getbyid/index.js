const { mainActivityServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const getGroupById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await mainActivityServiceController.getRecordById(id);

    if (!record) throw new Error(errorMsg.GROUP_NOT_FOUND);

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

module.exports = { getGroupById };
