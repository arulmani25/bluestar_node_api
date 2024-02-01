const {mobileServiceController} = require("../../../../service/index");

const { successMsg} = require("../../../../utils/message")

const uploadFile = async (req, res, next) => {
  try {
    const payload = req.body;

    payload.files = req.files.files

    const record = await mobileServiceController.ticket.fileUpload(payload)

    return res.json({
      Status: "Success",
      Message: successMsg.FILE_UPLOAD_SUCCESS,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadFile };
