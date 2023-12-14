const { userServiceController } = require("../../../service/index");

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await userServiceController.getById(id);

    return res.json({
      Status: "Success",
      Message: "Data Retrived Successfully",
      Data: data,
      Code: 200,
    });
  } catch (error) {
    return res.json({
      Status: "Failure",
      Message: "Internal Server Error",
      Data: adminList,
      Code: 500,
    });
  }
};

module.exports = { getUserById };
