const model = require("../../../models/index");

const { errorMsg } = require("../../../utils");

const createRole = async (payload) => {
  const checkRole = await model.role.findOne({
    role_type: payload.role_type,
  });
  if (checkRole) throw new Error(errorMsg.ROLE_ALREADY_EXIST);
  const record = await model.role.create({ ...payload });
  return record;
};

module.exports = { createRole };
