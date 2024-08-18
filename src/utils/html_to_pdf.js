const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const temp = async (checklist, title) => {
    console.log(checklist);
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    const page = await browser.newPage();
    let additionalRowHTML = '';
    if (Array.isArray(checklist.description)) {
        checklist.description.forEach((record, index) => {
            additionalRowHTML += `
                  <tr>
                      <td>${index + 1}.</td>
                      <td >${record.activites_to_check}</td>
                      <td style="text-align:center">${record.status}</td>
                  </tr>
            `;
        });
    } else {
        console.error('Data is not an array');
        return;
    }

    // Your HTML content here
    console.log('========innnnnnnnnnnnnnnnnnnn28============');

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
             <h6 style="font-size:18px;text-align:center;margin-top:14px;background-color:#ffff1f">${title}</h6> 
        </div>
        <br>
        <br>
        <br>
        </div>
      <div class="row mt-4">
           <div class="col-4 ">
             <div class="d-flex ">
             <p style="margin-right:12px" class='text-heading'>DATE:</p>
             <p class='text'>${checklist.createdAt.toISOString().split('T')[0]}</p>
                  </div>
           </div>
           </div>
             <div class="row mt-0">
         <div class="col-12">
          <span class='text-heading'>EQUIPMENT TAG NO: </span> <span class='text' style="margin-left:6px"> ${
              checklist.equipment_tag_name
          }  </span>
           </div>
                 <div class="col-7">
           </div>
         </div>
      <div class="row mt-3">
           <div class="col-4 ">
             <div class="d-flex ">
             <p class='text-heading' style=""> TYPE OF MAINTENANCE:</p>
                  </div>
           </div>
           <div class="col-8 m-0 p-0">
            <div style="display: flex; justify-content: space-between; margin:0px padding:0px">
    <div class='text'>${checklist.check_list_time[0] || ''}</div>
<div class='text'>${checklist.check_list_time[1] || ''}</div>
<div class='text'>${checklist.check_list_time[2] || ''}</div>
</div>
           </div>
           </div>
      <div>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th >S.No</th>
      <th>ACTIVITIES TO BE CARRIED OUT</th>
      <th >STATUS</th>
    </tr>
  </thead>
  <tbody>
   ${additionalRowHTML}
  </tbody>
</table>
      </div>
        <div class="row mt-4">
           <div class="col-4 ">
             <div class="d-flex ">
             <p style="margin-right:12px" class='text-heading'>Technician's Name:</p>
                  </div>
           </div>
           <div class="col-4 ">
             <div class="d-flex ">
             <p style="margin-right:12px" class='text-heading'> Shift Supervisor Name:</p>
                  </div>
           </div>
           <div class="col-4 ">
             <div class="d-flex ">
             <p style="margin-right:12px" class='text-heading'>Shift Incharge Name:</p>
                  </div>
           </div>
           </div>
        <div class="row mt-1">
           <div class="col-4 ">
             <div class=" ">
<!--              <p style="margin-right:12px" class='text-heading'>:</p> -->
                 <br>
                 <div class="text ">
                 <ul style="list-style-type:number">
  <li>${checklist.technicians_name[0] || ''}</li>
  <li>${checklist.technicians_name[1] || ''}</li>
  <li>${checklist.technicians_name[2] || ''}</li>
  <li>${checklist.technicians_name[3] || ''}</li>
</ul>
             </div>
                  </div>
           </div>
            <div class="col-4 ">  </div>
            <div class="col-4 ">  </div>
          <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
    <img class='img-fluid' width='100px'src=${checklist.technician_sign.replace(
        '18.237.108.95',
        '34.212.35.112'
    )} alt="BlueStar Logo">
         </div>
  </div>
  <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
    <img class='img-fluid'  width="200px" src='${checklist.supervisor_sign.replace('18.237.108.95', '34.212.35.112')}'>
         </div>
  </div>
  <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
    <img class='img-fluid' width='100px'src="${checklist.bial_sign.replace(
        '18.237.108.95',
        '34.212.35.112'
    )}" alt="supervisor sign">
         </div>
  </div>
   <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
        <p style="margin-right:12px" class='text-heading'>Technician's Sign</p>
         </div>
  </div>
  <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
    <p style="margin-right:12px" class='text-heading'>Shift Supervisor's Sign</p>
         </div>
  </div>
  <div class="col-4 ">
    <div class="d-flex align-items-center justify-content-center" style='min-height:100px'>
    <p style="margin-right:12px" class='text-heading'>Shift Incharge Sign</p>
         </div>
  </div>
           </div>
      </div>
    </div>
  </body>
  </html>`;

    console.log('========table============', table, '===========');

    await page.setContent(table);
    console.log('========page============', page, '======pageee  =====');
    const pdf = await page.pdf();
    const filePath = path.join(__dirname, '../../upload');
    // if(!fs.existsSync(`${filePath}/${checklist.equipment_tag_name}.pdf`))
    fs.writeFile(`${filePath}/${checklist.equipment_tag_name}.pdf`, pdf, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('upload success');
        }
    });
    return `http://13.126.65.131:3000/api/upload/${checklist.equipment_tag_name}.pdf`;
};

module.exports = { temp };
