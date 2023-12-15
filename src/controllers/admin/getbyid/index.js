const { adminServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const getAdminById = async (req, res) => {
  try {
    const id = req.params.id;

    //** service call */

    const data = await adminServiceController.getById(id);

    if (!data) throw new Error(errorMsg.USER_NOT_FOUND);

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

module.exports = { getAdminById };
