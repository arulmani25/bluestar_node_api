const { jobServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/index");

const jobStatusUpdate = async (req, res, next) => {
  try {
    //** service call */

    const payload = req.body;

    const data = await jobServiceController.updateJobStatusRecord(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { jobStatusUpdate };
