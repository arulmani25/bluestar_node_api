const { successMsg } = require("../../../../utils/index");

const adminLogOutUsingMobile = async (req, res, next) => {
  try {
    return res.json({
      Status: "Success",
      Message: successMsg.ADMIN_LOGGEDOUT_SUCCESSFULLY,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { adminLogOutUsingMobile };
