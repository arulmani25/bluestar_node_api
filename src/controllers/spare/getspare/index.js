const { spareServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getSpare = async (req, res, next) => {
  try {
    const { id } = req.params;

    //** service call */

    const data = await spareServiceController.getSpare(id);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: data,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSpare };
