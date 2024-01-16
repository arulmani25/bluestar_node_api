const { userServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const updateUserRecord = async (req, res, next) => {
  try {
    const { id } = req.params;

    const payload = req.body;

    const data = await userServiceController.updateUserRecord(id, payload);

    if (!data) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserRecord };
