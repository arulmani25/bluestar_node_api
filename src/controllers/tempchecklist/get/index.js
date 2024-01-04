const { tempCheckListController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getTempCheckLIst = async (req, res) => {
  try {
    const id = req.params.id;

    //** service call */

    const data = await tempCheckListController.getTempCheckListById(id);

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

module.exports = { getTempCheckLIst };
