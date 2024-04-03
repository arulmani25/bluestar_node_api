const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const temp = async (inVoiceData) => {
  console.log(inVoiceData);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Your HTML content here

  const table = `<!DOCTYPE html>
  <html>
  <head>
      <style>
          table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
          }
          th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
          }
          th {
              background-color: #f2f2f2;
          }
          .invoice-table th {
              width: 40%;
          }
      </style>
  </head>
  <body>
  <title>Boom</title>
      <table class="invoice-table">
          <caption>Guest Details</caption>
          <tr>
              <th>Guest Name</th>
              <td> ${""}</td>
          </tr>
          <tr>
              <th>Guest email</th>
              <td> ${""}</td>
          </tr>
      </table>
  </body>
  </html>
  `;

  await page.setContent(table);
  const pdf = await page.pdf();
  const filePath = path.join(__dirname, "../../upload");
  fs.writeFile(`${filePath}/temp1.pdf`, pdf, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("upload success");
    }
  });
};

module.exports = { temp };
