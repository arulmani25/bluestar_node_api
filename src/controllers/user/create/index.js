const userServiceController = require("../../../service/user");

const createUser = async (req, res) => {
  try {
    const payload = req.body;
    (payload.last_login_time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Calcutta",
    })),
      (payload.last_logout_time = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Calcutta",
      }));

    const record = await userServiceController.createUser(payload);
    if (record) {
      return res.json({
        Status: "Success",
        Message: "User Added successfully",
        Data: record,
        Code: 200,
      });
    } else {
      return res.json({
        Status: "Failure",
        Message: "User Already Exist",
        Data: [],
        Code: 400,
      });
    }
  } catch (error) {
    return res.json({
      Status: "Failure",
      Message: "Internal Server Error",
      Data: [],
      Code: 500,
    });
  }
};

module.exports = { createUser };
