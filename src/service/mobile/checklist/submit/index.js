const model = require("../../../../models/index");

const submitList = async (payload) => {
  const record = await model.submitchecklistModel.create({ ...payload });
  for (const iterator of payload.check_list_time) {
    const updateChecklist = await model.checkListValidation.findOneAndUpdate(
      { cobie_tag: payload.equipment_tag_name },
      { [iterator]: "checked" }
    );
  }

  return record;
};

module.exports = { submitList };
