const model = require("../../../models/index");
const { qrcodeGenerator } = require("../../../utils");

const generateCode = async () => {
  const equipmentTags = await model.newEquipmentTags.find({});
  for (const record of equipmentTags) {
    const qrcode = await qrcodeGenerator(record.cobie_tag);
    await model.newEquipmentTags.findOneAndUpdate(
      { cobie_tag: record.cobie_tag },
      { qrcode: qrcode }
    );
  }
};

module.exports = { generateCode };
