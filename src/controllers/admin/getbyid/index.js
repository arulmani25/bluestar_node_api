const { adminServiceController } = require("../../../service/index");

const { errorMsg, successMsg } = require("../../../utils/index");

const { encryptText } = require("../../../utils/encrypt");

const getAdminById = async (req, res, next) => {
  try {
    const id = req.params.id;

    //** service call */

    const data = await adminServiceController.getById(id);

    if (!data) throw new Error(errorMsg.USER_NOT_FOUND);

    // const array = [];
    // array.push(data);
    // array.map((el) => {
    //   (el.mobile_no = encryptText(el.mobile_no)),
    //     (el.email_id = encryptText(el.email_id));
    // });

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
