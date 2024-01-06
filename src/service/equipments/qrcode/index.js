const model = require("../../../models/index");
const { qrcodeGenerator } = require("../../../utils");

const generateCode = async () => {
  const equipmentTags = await model.equipmentsModel.find({});
  for (const record of equipmentTags) {
    const qrcode = await qrcodeGenerator(record.equipment_tag);
    await model.equipmentsModel.findOneAndUpdate(
      { equipment_tag: record.equipment_tag },
      { qrcode: qrcode }
    );
  }
};

module.exports = { generateCode };
