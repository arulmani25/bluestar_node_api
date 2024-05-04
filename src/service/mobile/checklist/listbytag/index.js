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
    loggedUser.role === roles.site_incharge ||
    loggedUser.user_type === roles.bial1
  ) {
    key = supervisor;
  }

  const record = await model.submitchecklistModel.find(
    {
      $expr: {
        $and: [
          { $gte: [{ $strLenCP: key }, 1] },
          { $not: { $gte: [{ $strLenCP: "$bial_sign" }, 1] } },
        ],
      },
    },
    { _id: 0, equipment_tag_name: 1 },
    { sort: { createdAt: -1 } }
  );

  //! need to implement to filter list based on role

  /*
  const ids = await model.checkListConfig.findOne({ role: roles.supervisor });
  const roleIds = [];
  ids.submitted_by_role.forEach((element) => {
    roleIds.push(element);
  });

  const record = await model.submitchecklistModel.find({
    submitted_by_role: { $in: roleIds },
  });

  */

  return record;
};

module.exports = { listByTag };
