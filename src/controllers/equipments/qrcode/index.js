const { equipmentServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const generateQrCode = async (req, res, next) => {
  try {
    const code = await equipmentServiceController.generateCode();

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { generateQrCode };
