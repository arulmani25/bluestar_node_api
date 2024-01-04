const { jobServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/index");

const jobstart = async (req, res, next) => {
  try {
    //** service call */
    const equipment_tag = req.params.id;

    const payload = req.body;

    const data = await jobServiceController.jobStart(equipment_tag, payload);

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { jobstart };
