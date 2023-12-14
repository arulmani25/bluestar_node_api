const { adminServiceController } = require("../../../service/index");

const createAdmin = async (req, res) => {
  try {
    const payload = req.body;

    const user = await adminServiceController.createAdmin(payload);

    if (user) {
      return res.json({
        Status: "Success",
        Message: "Added successfully",
        Data: user,
        Code: 200,
      });
    } else {
      return res.json({
        Status: "Failure",
        Message: "User Already Exist",
        Data: user,
        Code: 400,
      });
    }
  } catch (e) {
    return res.json({
      Status: "Failed",
      Message: "Internal Server Error",
      Data: {},
      Code: 500,
    });
  }
};
module.exports = { createAdmin };
