const { mobileServiceController } = require("../../../../service/index");

const { errorMsg, successMsg } = require("../../../../utils");

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.user_mobile_no;

    //** service call */

    const data = await mobileServiceController.user.getById(id);

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

module.exports = { getUserById };
