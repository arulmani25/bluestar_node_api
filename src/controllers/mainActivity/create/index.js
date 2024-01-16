const { mainActivityServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/message");
const shortUniqueId = require("short-unique-id");

const createMainGroup = async (req, res, next) => {
  try {
    const uuid = new shortUniqueId({ length: 5 });
    // const activity_code = `BTR-${uuid.randomUUID()}`;

    //! need to add created_by in payload once added jwt

    // req.body.activity_code = activity_code;
    const payload = req.body;
    const data = await mainActivityServiceController.createGroup(payload);
    if (!data) throw new Error(errorMsg.FAILED_TO_CREATE_MAIN_GROUP);
    return res.json({
      Status: "Success",
      Message: successMsg.GROUP_CREATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMainGroup };
