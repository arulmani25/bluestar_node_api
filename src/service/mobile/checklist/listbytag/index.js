const model = require("../../../../models/index");
const { roles } = require("../../../../utils/enum");

const listByTag = async (query, loggedUser) => {
  const endOfDay = new Date(query.date);
  endOfDay.setHours(23, 59, 59, 999);

  const technician = "$technician_sign";
  const supervisor = "$supervisor_sign";
  let key;
  if (loggedUser.role === roles.supervisor) {
    key = technician;
  } else if (
    loggedUser.role === roles.manager ||
    loggedUser.role === roles.bial ||
    loggedUser.role === roles.site_incharge
  ) {
    key = supervisor;
  }

  const record = await model.submitchecklistModel.find(
    { $expr: { $gte: [{ $strLenCP: key }, 1] } },
    { _id: 0, equipment_tag_name: 1 },
    { sort: { createdAt: -1 } }
  );
  return record;
};

module.exports = { listByTag };
