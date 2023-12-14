const { adminServiceController } = require("../../../service/index");

const getAdminList = async (req, res) => {
  try {
    const adminList = await adminServiceController.adminList(req.query);

    return res.json({
      Status: "Success",
      Message: "Data Retrived Successfully",
      Data: adminList,
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

module.exports = { getAdminList };
