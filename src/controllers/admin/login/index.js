const { adminServiceController } = require("../../../service/index");
const { errorMsg, successMsg, generateToken } = require("../../../utils");

const adminLogin = async (req, res) => {
  try {
    const payload = req.body;

    //** service call */

    const adminLoggedIn = await adminServiceController.adminLogin(payload);

    const token = await generateToken({
      _id: adminLoggedIn._id,
      mobile_no: adminLoggedIn.mobile_no,
      role: adminLoggedIn.role,
    });

    if (!adminLoggedIn) throw new Error(errorMsg.USER_NOT_FOUND);

    delete adminLoggedIn["_doc"].password;
    delete adminLoggedIn["_doc"].confirm_password;
    adminLoggedIn["_doc"].token = token;

    return res.json({
      Status: "Success",
      Message: successMsg.ADMIN_LOGGEDIN_SUCCESSFULLY,
      Data: adminLoggedIn,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { adminLogin };
