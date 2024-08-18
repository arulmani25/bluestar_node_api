const { mobileServiceController } = require('../../../../service/index');

const { errorMsg, successMsg } = require('../../../../utils');
const { encryptText } = require('../../../../utils/encrypt');

const getTicketList = async (req, res, next) => {
    try {
        //** service call */

        const list = await mobileServiceController.ticket.ticketList(req.query);

        // list[0].data.map((el) => {
        //   el.equipment_no = encryptText(el.equipment_no);
        //   el.equipment = encryptText(el.equipment);
        // });
        const ticketData = [];
        if (list[0].data.length > 0) {
            list[0].data?.forEach((element) => {
                ticketData.push(element.record);
            });
        }
        const obj = {};

        (obj.data = ticketData), (obj.pagination = list[0].pagination);

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

module.exports = { getTicketList };
