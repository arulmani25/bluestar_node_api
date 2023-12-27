const { mainActivityServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const deleteGroup = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await mainActivityServiceController.deleteGroup(id);

    if (!record) throw new Error(errorMsg.FAILED_TO_DELETE_MAIN_GROUP);

    return res.json({
      Status: "Success",
      Message: successMsg.GROUP_DELETED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteGroup };
