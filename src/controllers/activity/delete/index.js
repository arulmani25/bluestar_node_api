const { activitiesServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const deleteActivity = async (req, res, next) => {
  try {
    const { id } = req.params;

    //** service call */

    const data = await activitiesServiceController.deleteActivity(id);

    if (!data) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_DELETED_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteActivity };
