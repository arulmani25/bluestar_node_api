const { mobileServiceController } = require("../../../../service/index");

const { successMsg } = require("../../../../utils/message");

const path = require("path");

const viewFile = async (req, res, next) => {
  try {
    const payload = req.params.id;
    // const splitPath = payload.split("-")
    const dir = path.join(__dirname, `../../../../upload/${payload}`);

    return res.sendFile(`${dir}/${req.query.fileName}`);
  } catch (error) {
    next(error);
  }
};

module.exports = { viewFile };
