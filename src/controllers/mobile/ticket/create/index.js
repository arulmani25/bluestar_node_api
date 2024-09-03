const { mobileServiceController } = require('../../../../service/index');
const { passwordValidation, successMsg } = require('../../../../utils/index');

const ticketRaiseUsingMobile = async (req, res, next) => {
    try {
        const payload = req.body;
        console.log(req.loggedUser);
        const { loggedUser } = req;

        const record = await mobileServiceController.ticket.requestTicketMobile(payload, loggedUser);

        return res.json({
            Status: 'Success',
            Message: successMsg.TICKET_RAISED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { ticketRaiseUsingMobile };
