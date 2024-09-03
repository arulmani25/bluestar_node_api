const model = require('../../../../models/index');
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

const submitList = async (payload) => {
    const checkIfSubmitted = await model.submitchecklistModel.findOne({
        equipment_tag_name: payload.equipment_tag_name
    });
    let record;
    if (!checkIfSubmitted) {
        payload.technician_submitted_date = formattedDate;
        record = await model.submitchecklistModel.create({ ...payload });
        for (const iterator of payload.check_list_time) {
            const updateChecklist = await model.checkListValidation.findOneAndUpdate(
                { cobie_tag: payload.equipment_tag_name },
                { [iterator]: 'checked' }
            );
        }
    } else {
        record = await model.submitchecklistModel.findOneAndUpdate(
            { equipment_tag_name: payload.equipment_tag_name },
            { ...payload }
        );
    }
    return record;
};

module.exports = { submitList };
