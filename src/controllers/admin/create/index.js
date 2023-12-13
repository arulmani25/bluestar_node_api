const adminServiceController = require("../../../service/index");

const createAdmin = async (req, res) => {
  try {
    const payload = req.body;

    const user = await adminServiceController.createAdmin(payload);

    res.json({
      Status: "Success",
      Message: "Added successfully",
      Data: user,
      Code: 200,
    });
  } catch (e) {
    res.json({
      Status: "Failed",
      Message: "Internal Server Error",
      Data: {},
      Code: 500,
    });
  }
  // } else {
  //   res.json({
  //     Status: "Alread this username used",
  //     Message: "Alread this username used",
  //     Data: {},
  //     Code: 500,
  //   });
  // }
};
module.exports = { createAdmin };
