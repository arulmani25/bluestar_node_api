const { adminServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const adminLogin = async (req, res) => {
  try {
    const payload = req.body;

    //** service call */

    const adminLoggedIn = await adminServiceController.adminLogin(payload);

    if (!adminLoggedIn) throw new Error(errorMsg.USER_NOT_FOUND);

    return res.json({
      Status: "Success",
      Message: successMsg.ADMIN_LOGGEDIN_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { adminLogin };
