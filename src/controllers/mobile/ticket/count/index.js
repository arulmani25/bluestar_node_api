const { mobileServiceController } = require('../../../../service/index');
const { jobStatus } = require('../../../../utils/enum');
const { successMsg } = require('../../../../utils/index');

const ticketRaiseCount = async (req, res, next) => {
    try {
        const payload = req.body;

        const record = await mobileServiceController.ticket.ticketCount();

        const obj = {
            close_count: 0,
            completed_count: 0,
            inprogress_count: 0,
            open_count: 0,
            pending_count: 0
        };

        record.forEach((el) => {
            if (el.status === jobStatus.Open) {
                obj.open_count = obj.open_count + 1;
            } else if (el.status === jobStatus.closed) {
                obj.close_count = obj.close_count + 1;
            } else if (el.status === jobStatus.completed) {
                obj.completed_count = obj.completed_count + 1;
            } else if (el.status === jobStatus.inProgress) {
                obj.inprogress_count = obj.inprogress_count + 1;
            } else if (el.status === jobStatus.pending) {
                obj.pending_count = obj.pending_count + 1;
            }
        });

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: [obj],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { ticketRaiseCount };
