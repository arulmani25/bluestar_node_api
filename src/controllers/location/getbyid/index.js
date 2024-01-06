const { locationServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const getLocationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await locationServiceController.getMainLocationById(id);

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

module.exports = { getLocationById };
