const model = require("../../../../models/index");
const moment = require("moment");
const fs = require("fs");
const path = require("path");

const fileUpload = async (payload) => {
  let count;
  let filePath;
  let isFilePathExist;
  const uploadedPath = [];
  const currentDate = moment();
  const baseUrl = `http://18.237.108.95:3000/api/mobile/ticket/viewfile/`;

  const dateTime = currentDate.startOf("D").format();

  const record = await model.ticketModel
    .find({ createdAt: { $gte: dateTime } }, {}, { sort: { createdAt: -1 } })
    .limit(1);

  if (record[0]?.status || record.length === 0) {
    count = "1".padStart(3, "0");
    payload.ticket_no = `BIAL-T2-HVAC-${currentDate.format(
      "YY-MM-DD"
    )}-${count}`;
  } else {
    const lastRecordCount = record[0].ticket_no.split("-").at(-1);
    count = `${Number(lastRecordCount) + 1}`.padStart(3, "0");
    payload.ticket_no = `BIAL-T2-HVAC-${currentDate.format(
      "YY-MM-DD"
    )}-${count}`;
  }

  const folderPath = path.join(
    path.resolve(__dirname).split("src")[0],
    `src/upload/${payload.ticket_no}`
  );

  const isFolderPathExist = fs.existsSync(folderPath);

  if (!isFolderPathExist) fs.mkdirSync(`${folderPath}`, { recursive: true });
  if (payload.files.length) {
    payload.files.forEach((element) => {
      filePath = path.join(
        path.resolve(__dirname).split("src")[0],
        `src/upload/${payload.ticket_no}/${element.name}`
      );
      isFilePathExist = fs.existsSync(filePath);
      if (!isFilePathExist) {
        fs.writeFileSync(filePath, element.data, "binary");
        // uploadedPath.push(`${baseUrl}${payload.ticket_no}/${element.name}`);
        uploadedPath.push(filePath);
      }
    });
  } else {
    filePath = path.join(
      path.resolve(__dirname).split("src")[0],
      `src/upload/${payload.ticket_no}/${payload.files.name}`
    );
    isFilePathExist = fs.existsSync(filePath);

    if (!isFilePathExist)
      fs.writeFileSync(filePath, payload.files.data, "binary");
    // uploadedPath.push(`${baseUrl}${payload.ticket_no}/${payload.files.name}`);
    uploadedPath.push(filePath);
  }

  const data = await model.ticketModel.create({
    ticket_no: payload.ticket_no,
    image: uploadedPath,
  });

  return data;
};

module.exports = { fileUpload };
