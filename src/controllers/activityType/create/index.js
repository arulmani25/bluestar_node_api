const { activityTypeController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/index");

const createActivityType = async (req, res, next) => {
  try {
    const payload = req.body;

    //** service call */

    const user = await activityTypeController.createActivityType(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.ACTIVITY_TYPE_CREATED_SUCCESSFULLY,
      Data: user,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { createActivityType };
