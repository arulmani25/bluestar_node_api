const { activitiesServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/index");

const createActivity = async (req, res, next) => {
  try {
    const payload = req.body;

    //** service call */

    const data = await activitiesServiceController.createActivity(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.ACTIVITY_CREATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { createActivity };
