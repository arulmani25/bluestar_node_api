const { mobileServiceController } = require('../../../../service/index');

const { successMsg } = require('../../../../utils/message');

const uploadFile = async (req, res, next) => {
    try {
        const { files } = req;
        const record = await mobileServiceController.ticket.fileUpload(files);

        return res.json({
            Status: 'Success',
            Message: successMsg.FILE_UPLOAD_SUCCESS,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { uploadFile };
