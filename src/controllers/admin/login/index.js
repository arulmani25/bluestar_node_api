const { adminServiceController } = require("../../../service/index");

const adminLogin = async (req, res) => {
  try {
    const payload = req.body;

    const adminLoggedIn = await adminServiceController.adminLogin(payload);

    if (adminLoggedIn) {
      return res.json({
        Status: "Success",
        Message: "Admin login Success",
        Code: 200,
      });
    } else {
      return res.json({
        Status: "Failed",
        Message: "Account Not Found",
        Data: {},
        Code: 404,
      });
    }
  } catch (error) {
    return res.json({
      Status: "Failed",
      Message: "Internal Server Error",
      Data: {},
      Code: 500,
    });
  }
};

module.exports = { adminLogin };
