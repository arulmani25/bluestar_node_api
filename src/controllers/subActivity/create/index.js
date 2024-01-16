const { subActivityServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");
const shortUniqueId = require("short-unique-id");

const createSubActivity = async (req, res, next) => {
  try {
    const uuid = new shortUniqueId({ length: 5 });
    // req.body.sub_activity_code = `BTR-${uuid.randomUUID()}`;

    //! need to add created_by in payload once added jwt

    const record = await subActivityServiceController.createSubActivity(
      req.body
    );
    if (!record) throw new Error(errorMsg.FAILED_TO_CREATE_SUB_ACTIVITY);
    return res.json({
      Status: "Success",
      Message: successMsg.SUB_ACTIVITY_CREATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createSubActivity };
