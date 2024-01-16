const { equipmentServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const equipmentList = async (req, res, next) => {
  try {
    //** service call */

    const equipments = await equipmentServiceController.equipmentList(
      req.query
    );

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: equipments,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { equipmentList };
