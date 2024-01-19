const { userServiceController } = require("../../../service/index");
const { errorMsg, successMsg, generateToken } = require("../../../utils");

const userLogin = async (req, res, next) => {
  try {
    const payload = req.body;

    //** service call */

    const userLoggedIn = await userServiceController.userLogin(payload);

    const token = await generateToken({
      _id: userLoggedIn[0]._id,
      mobile_no: userLoggedIn[0].mobile_no,
      role: userLoggedIn[0].role,
    });

    if (!userLoggedIn) throw new Error(errorMsg.USER_NOT_FOUND);

    delete userLoggedIn[0].password;
    delete userLoggedIn[0].confirm_password;
    userLoggedIn[0].token = token;

    return res.json({
      Status: "Success",
      Message: successMsg.ADMIN_LOGGEDIN_SUCCESSFULLY,
      Data: userLoggedIn,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userLogin };
