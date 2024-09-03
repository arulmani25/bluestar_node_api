const model = require('../../../models/index');
const { qrcodeGenerator } = require('../../../utils');

const generateCode = () => {
    return model.newEquipmentTags
        .find({})
        .then((equipmentTags) => {
            // Use Promise.all to handle asynchronous updates
            return Promise.all(
                equipmentTags.map((record) => {
                    return qrcodeGenerator(record.cobie_tag)
                        .then((qrcode) => {
                            return model.newEquipmentTags.findOneAndUpdate(
                                { cobie_tag: record.cobie_tag },
                                { qrcode: qrcode }
                            );
                        })
                        .catch((error) => {
                            throw error; // Re-throw the error to propagate it to the outer Promise.all
                        });
                })
            );
        })
        .catch((error) => {
            throw error; // Re-throw the error to propagate it to the caller
        });
};

module.exports = { generateCode };
