const { userServiceController } = require("../../../service/index");

const getUserList = async (req, res) => {
  try {
    const userList = await userServiceController.listUser(req.query);

    return res.json({
      Status: "Success",
      Message: "Data Retrived Successfully",
      Data: userList,
      Code: 200,
    });
  } catch (error) {
    return res.json({
      Status: "Failed",
      Message: "Internal Server Error",
      Data: {},
      Code: 500,
    });
  }
};

module.exports = { getUserList };
