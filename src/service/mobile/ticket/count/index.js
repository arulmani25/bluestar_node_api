const model = require('../../../../models/index');

const ticketCount = async () => {
    const record = await model.ticketModel.aggregate([
        {
            $group: {
                _id: '$ticket_no',
                status: {
                    $last: '$status'
                }
            }
        }
    ]);
    return record;
};
module.exports = { ticketCount };
