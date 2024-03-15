const { equipmentServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const { encryptText } = require("../../../utils/encrypt");

const cobieList = async (req, res, next) => {
  try {
    //** service call */

    const data = await equipmentServiceController.cobieList(req.query);

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

module.exports = { cobieList };
