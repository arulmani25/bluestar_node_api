const model = require('../../../../models/index');
const { errorMsg } = require('../../../../utils');
const { jobStatus, roles } = require('../../../../utils/enum');
const moment = require('moment');
const mongoose = require('mongoose');

const requestTicketMobile = async (payload, loggedUser) => {
    try {
        let roletype = loggedUser.role;
        // if(roletype === roles.supervisor || roletype );
        const currentDate = moment();

        const dateTime = currentDate.startOf('D').format();

        const record = await model.ticketModel
            .find({ createdAt: { $gte: dateTime } }, {}, { sort: { createdAt: -1 } })
            .limit(1);

        let count;

        if (!payload.ticket_no) {
            if (!record.length) {
                count = '1'.padStart(3, '0');
                payload.ticket_no = `BIAL-T2-HVAC-${currentDate.format('YY-MM-DD')}-${count}`;
            } else {
                const lastRecordCount = record[0].ticket_no.split('-').at(-1);
                count = `${Number(lastRecordCount) + 1}`.padStart(3, '0');
                payload.ticket_no = `BIAL-T2-HVAC-${currentDate.format('YY-MM-DD')}-${count}`;
            }
        }
        if (!payload.assigned_to || !mongoose.Types.ObjectId.isValid(payload.assigned_to)) {
            payload.assigned_to = null;
        }
        const createRecord = await model.ticketModel.create({
            ...payload
        });
        return createRecord;
    } catch (error) {
        return error;
    }
};

module.exports = { requestTicketMobile };
