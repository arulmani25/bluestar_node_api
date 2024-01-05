const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");
const { passwordValidation } = require("../../../../utils/index");

const userMobileLogin = async (payload) => {
  const isExist = await model.userModel.findOne({
    user_mobile_no: payload.user_mobile_no,
    delete_status: false,
  });

  if (!isExist) throw new Error(errorMsg.USER_NOT_FOUND);

  const isValidPassword = await passwordValidation.checkPassword(
    payload.user_password,
    isExist.user_password
  );
  if (!isValidPassword) throw new Error(errorMsg.INCORRECT_PASSWORD);

  const data = await model.userModel.aggregate([
    { $match: { _id: isExist._id } },
    {
      $lookup: {
        from: "roles",
        localField: "emp_type",
        foreignField: "_id",
        as: "role_name",
      },
    },
    {
      $unwind: {
        path: "$role_name",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        role_type: "$role_name.role_type",
        user_mobile_no: 1,
        user_name: 1,
        user_email: 1,
        emp_type: 1,
        role_id: "$emp_type",
      },
    },
  ]);

  return data;
};

module.exports = { userMobileLogin };
