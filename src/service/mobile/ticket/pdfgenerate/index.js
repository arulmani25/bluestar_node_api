const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const model = require("../../../../models/index");

const ticketPdf = async (ticket_no) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  const ticketRecord = await model.ticketModel.find({ ticket_no: ticket_no });
  const getUserName = await model.userModel.findOne({
    _id: ticketRecord.raised_by,
  });

  let additionalSpareRowHTML = "";

  let additionalRowHTML = "";
  if (Array.isArray(ticketRecord)) {
    ticketRecord.forEach((record, index) => {
      if (record.spare.length) {
        record.spare.forEach((str, index) => {
          additionalSpareRowHTML += `<span class='text'>${str}, </span>`;
        });
      } else {
        additionalSpareRowHTML += `<span class='text'>${""}</span>`;
      }
      additionalRowHTML += `<div class="mt-3">
        <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between" style="background-color: blue;">
          <div><h3 style="font-size:18px">${record.createdAt.toLocaleString()}</h3></div>
          <div><h3 style="font-size:18px">${record.status}</h3></div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <img src="" class="img-fluid" alt="">
            </div>
            <div class="col-8 ">
              <div class="row">
                <div class="col-4 mb-2"><span class='text-heading'>Equipment</span></div>
                <div class="col-8 mb-2"><span class='text' >${
                  record.equipment
                }</span></div>
                <div class="col-4 mb-2"><span class='text-heading'>Location</span></div>
                <div class="col-8 mb-2"><span class='text'>${
                  record.location
                }</span></div>
                <div class="col-4 mb-2"><span class='text-heading'>Sub Location</span></div>
                <div class="col-8 mb-2"><span class='text'>${
                  record.sub_location
                }</span></div>
                <div class="col-4 mb-2"><span class='text-heading'>Spare</span></div>
                <div class="col-8 mb-2">${additionalSpareRowHTML}</div>
                <div class="col-4 mb-2"><span class='text-heading'>Raised By</span></div>
                <div class="col-8 mb-2"><span class='text'>${
                  getUserName?.user_name ? getUserName.user_name : ""
                }</span></div>
                <div class="col-4 mb-2"><span class='text-heading'>Updated By</span></div>
                <div class="col-8 mb-2"><span class='text'>${
                  getUserName?.user_name ? getUserName.user_name : ""
                }</span></div>
              </div>
            </div>
          </div>
        </div>
       <div class="card-footer " style="background-color: #fff;">
          <div class="row">
            <div class="col-6"></div>
            <div class="col-6">
              <div class="row">
                <div class="col-4 mb-2"><span class='text-heading' style="margin-right: 5px;">Comments</span></div>
                <div class="col-8 mb-2"><span class='text'>${
                  record.ticket_description
                }</span></div>
          </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
      </div>`;
    });
  } else {
    console.error("Data is not an array");
    return;
  }

  // Your HTML content here
  console.log("========innnnnnnnnnnnnnnnnnnn28============");

  const table = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background: #ccc;
        padding: 30px;
      }
        th {
            font-size:15px;
            text-align:center;
        }
        td {
            font-size:13px;
        }
      .container {
        width: 21cm;
        min-height: 29.7cm;
      }
      .invoice {
        background: #fff;
        width: 100%;
        padding: 50px;
      }
      .logo {
        width: 2.5cm;
      }
      .conditions {
        font-size: 0.7em;
        color: #666;
      }
      .bottom-page {
        font-size: 0.7em;
      }
      .col-5 {
        font-size: 1em;
        color: #C9CBCC;
      }
        .text {
            font-size:13px;
        }
        .text-heading {
            font-size:15px;
             font-weight:500;
        }
      #theadrow {
        background-color: #0A46A4 !important;
        color: #E3F3FF !important;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="invoice">
        <div class="row">
          <div class="col-3">
          <img class='img-fluid' width='150px'src="http://34.212.35.112:3000/api/Blue_Star.png" alt="BlueStar Logo">
          </div>
          <div class="col-6" style="text-align:center">
            <h6 style="font-size:20px">Kempegowda International Airport</h6>
            <p>Devanahalli, Bengaluru.</p>
            </div>
          <div class="col-3">
         <img class='img-fluid' width='100px'src="http://34.212.35.112:3000/api/Bengaluru_Airport_Logo_d71fb85c36.png" alt="Kepegowda Logo">
          </div>
          <div class="col-12" style="background-color:#ffff1f !important;padding:10px; border:1px solid black; ">
             <h6 style="font-size:18px;text-align:center;margin-top:14px;background-color:#ffff1f">COMPLAINT SUMMARY</h6>
        </div>
        <br>
        <br>
        <br>
        </div>
        <div class="row mt-3">
        <div class="col-12">
         <span class='text-heading'>DATE: </span> <span class='text' style="margin-left:6px"> ${
           new Date().toISOString().split("T")[0]
         }  </span>
          </div>
                <div class="col-7">
          </div>
        </div>
             <div class="row mt-0">
         <div class="col-12">
          <span class='text-heading'>TICKET NO: </span> <span class='text' style="margin-left:6px"> ${
            ticket_no
          }  </span>
           </div>
                 <div class="col-7">
           </div>
         </div>
          <div class="row mt-0">
         <div class="col-12">
          <span class='text-heading'>RAISED BY: </span> <span class='text' style="margin-left:6px"> ${""}  </span>
           </div>
                 <div class="col-7">
           </div>
         </div>
         ${additionalRowHTML}
      </div>
    </div>
  </body>
  </html>`;

  console.log("========table============", table, "===========");

  await page.setContent(table);
  console.log("========page============", page, "======pageee  =====");
  const pdf = await page.pdf();
  const filePath = path.join(__dirname, "../../../../../upload");
  fs.writeFile(`${filePath}/${ticket_no}.pdf`, pdf, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("upload success");
    }
  });
  return `http://34.212.35.112:3000/api/upload/${ticket_no}.pdf`;
};

module.exports = { ticketPdf };
