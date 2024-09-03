const { mobileServiceController } = require('../../../../service/index');
const { successMsg } = require('../../../../utils/index');

const ticketStatusUpdate = async (req, res, next) => {
    try {
        //** service call */

        const payload = req.body;
        const { id } = req.params;

        const data = await mobileServiceController.ticket.updateTicketStatusRecord(id, payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { ticketStatusUpdate };
