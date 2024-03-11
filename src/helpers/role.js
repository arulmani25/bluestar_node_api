const model = require("../models/index");
const { bialRoleSeed, blueStarRoleSeed } = require("../seed/index");

const roleSeedFunction = async () => {
  for (const iterator of blueStarRoleSeed) {
    const data = await model.userType.findOne({
      user_type: "Blue Star",
    });
    const insertRecord = await model.role.create({
      role_type: iterator.role_type,
      user_type: data._id,
    });
  }
  for (const iterator of bialRoleSeed) {
    const data = await model.userType.findOne({
      user_type: "BIAL",
    });
    const insertRecord = await model.role.create({
      role_type: iterator.role_type,
      user_type: data._id,
    });
  }
};
module.exports = { roleSeedFunction };
