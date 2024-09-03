const { mobileServiceController } = require('../../../../service/index');
const { successMsg, attd_status } = require('../../../../utils/index');

const userLoginStatusMobile = async (req, res, next) => {
    try {
        const payload = req.body;

        const record = [];

        const data = await mobileServiceController.user.userMobileLoginStatus(payload);

        if (data[0]?.att_status === 'checkIn' || data[0]?.att_status === 'checkOut') {
            record.push({
                att_status: attd_status.Present,
                checkIn_status: data[0].att_status
            });
        } else if (!data.length) {
            record.push({
                att_status: attd_status.Absent,
                checkIn_status: 'Not Cheked In'
            });
        }

        return res.json({
            Status: 'Success',
            Message: successMsg.LOGIN_STATUS_RETRIVED,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { userLoginStatusMobile };
