const model = require("../../../models/index");

const deleteTitle = async (id) => {
  const data = await model.temperaturelogsTitle.findOneAndUpdate(
    { _id: id },
    { $set: { isActive: false } }
  );
  return data;
};

module.exports = { deleteTitle };
