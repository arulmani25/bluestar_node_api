const { subActivityServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getSubactivityById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await subActivityServiceController.getRecordById(id);

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

module.exports = { getSubactivityById };
